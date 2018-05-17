   const payload = new Buffer(event.awslogs.data, 'base64');

    // converts the event to a valid JSON object with the sufficient infomation required
    function parseEvent(logEvent, logGroupName, logStreamName) {
        return {
            // remove '\n' character at the end of the event
            message: logEvent.message.substring(0, logEvent.message.length - 1),
            logGroupName,
            logStreamName,
            timestamp: new Date(logEvent.timestamp).toISOString(),
        };
    }

    // joins all the events to a single event
    // and sends to Loggly using bulk endpoint
    function postEventsToLoggly(parsedEvents) {
        if (!logglyConfiguration.customerToken) {
            if (logglyConfiguration.tokenInitError) {
                console.log('error in decrypt the token. Not retrying.');
                return callback(logglyConfiguration.tokenInitError);
            }
            console.log('Cannot flush logs since authentication token has not been initialized yet. Trying again in 100 ms.');
            setTimeout(() => postEventsToLoggly(parsedEvents), 100);
            return;
        }

        // get all the events, stringify them and join them
        // with the new line character which can be sent to Loggly
        // via bulk endpoint
        const finalEvent = parsedEvents.map(JSON.stringify).join('\n');

        // creating logglyURL at runtime, so that user can change the tag or customer token in the go
        // by modifying the current script
        // create request options to send logs
        try {
            const options = {
                hostname: logglyConfiguration.hostName,
                path: `/bulk/${logglyConfiguration.customerToken}/tag/${encodeURIComponent(logglyConfiguration.tags)}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': finalEvent.length,
                },
            };

            const req = http.request(options, (res) => {
                res.on('data', (data) => {
                    const result = JSON.parse(data.toString());
                    if (result.response === 'ok') {
                        callback(null, 'all events are sent to Loggly');
                    } else {
                        console.log(result.response);
                    }
                });
                res.on('end', () => {
                    console.log('No more data in response.');
                    callback();
                });
            });

            req.on('error', (err) => {
                console.log('problem with request:', err.toString());
                callback(err);
            });

            // write data to request body
            req.write(finalEvent);
            req.end();
        } catch (ex) {
            console.log(ex.message);
            callback(ex.message);
        }
    }

    zlib.gunzip(payload, (error, result) => {
        if (error) {
            callback(error);
        } else {
            const resultParsed = JSON.parse(result.toString('ascii'));
            const parsedEvents = resultParsed.logEvents.map((logEvent) =>
                    parseEvent(logEvent, resultParsed.logGroup, resultParsed.logStream));

            postEventsToLoggly(parsedEvents);
        }
    });
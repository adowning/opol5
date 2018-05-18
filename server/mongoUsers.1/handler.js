'use strict'
const MongoClient = require('mongodb').MongoClient
const bluebird = require('bluebird')
const uuid = require('uuid')
const validator = require('validator')
const dateFormat = require('dateformat')
const assert = require('assert')
const now = new Date()
const bcrypt = require('bcrypt-nodejs')
const salt = bcrypt.genSaltSync(6)
const atlas_connection_uri = require('../libs/mongodb-lib.js').url3

// GETS A SINGLE USER FROM THE DATABASE

module.exports.user = (event, context, callback) => {
  const id = event.pathParameters.id
  context.callbackWaitsForEmptyEventLoop = false
  if (id) {
    var uri = 'mongodb://ash:sugarlips42@ds143039.mlab.com:43039/employees'

    MongoClient.connect(uri, (err, db) => {
      assert.equal(null, err)
      try {
        db.collection('user_profiles').findOne({
          user_id: id
        }, (error, result) => {
          if (error) {
            callback(null, {
              statusCode: 500,
              body: JSON.stringify(error)
            })
          } else if (result !== null) {
            callback(null, {
              statusCode: 200,
              body: JSON.stringify(result)
            })
            db.close()
          } else {
            callback(null, {
              statusCode: 500,
              body: 'No user Found'
            })
            db.close()
          }
        })
      } catch (err) {
        callback(err)
      }
    })
  } else {
    callback(null, {
      statusCode: 500,
      body: 'Enter Valid UserId'
    })
    db.close()
  }
}

// CREATES A NEW USER

module.exports.createUser = (event, context, callback) => {
  const data = JSON.parse(event.body)
  console.log(data)  
  var User = {
    'user_id': uuid.v1(),
    'username': data.username,
    'humanityId': data.humanityId,
    'firstname': data.details.firstname,
    'lastname': data.details.lastname,
    'workemail': data.email,
    'phoneNumber': data.phoneNumber,
    'avatar_url': data.details.avatar_url,
    'user_creation_date': dateFormat(now, 'UTC:h:MM:ss TT Z'),
    'cognito_data': data.details.cognito_data,
    'humanity_data': data.details,
    'snipeit_data': data.snipeit_data,
    'test_flag': false,
    'pass': data.password,
    'password': bcrypt.hashSync(data.password, salt),
  }
  var uri = 'mongodb://ash:sugarlips42@ds143039.mlab.com:43039/employees'
  var uri = 'mongodb+srv://adowning:sugarlips42@development-glled.mongodb.net/test?retryWrites=true'
  console.log(data.email_id)
  context.callbackWaitsForEmptyEventLoop = false
  MongoClient.connect(uri, {
    native_parser: true
  }, (err, db) => {
    assert.equal(null, err)
    try {
      db.collection('user_profiles').findOne({
        workemail: data.workemail
      }, {
        email_id: 1,
        _id: 0
      }, (err, result) => {
        if (err) {
          callback(null, {
            statusCode: 500,
            body: JSON.stringify(err)
          })
        } else if (result === null) {
          db.collection('user_profiles').update({
            user_id: User.user_id
          }, User, {
            upsert: true
          }, (error, user) => {
            if (err) {
              callback(null, {
                statusCode: 500,
                body: JSON.stringify(error)
              })
            }
            let data = {
              'id': User.user_id,
              'User': User,
              'tokenId': ''
            }
            callback(null, {
              statusCode: 200,
              body: JSON.stringify(data)
            })
            db.close()
          })
        } else if (result !== null) {
          console.log('email id is already register please try to login')
          callback(null, {
            statusCode: 500,
            body: 'email id is already register please try to login'
          })
          db.close()
        }
      })
    } catch (err) {
      callback(err)
    }
  })
}

// checkLogin

module.exports.checkLogin = (event, context, callback) => {
  const data = JSON.parse(event.body)
  context.callbackWaitsForEmptyEventLoop = false
  MongoClient.connect(process.env.atlas_connection_uri, {
    native_parser: true
  }, (err, db) => {
    assert.equal(null, err)
    db.collection('users').findOne({
      email_id: data.email_id
    }, {
      password: 1,
      user_id: 1
    }, {
      upsert: false
    }, (err, result) => {
      if (err) {
        callback(null, {
          statusCode: 500,
          body: JSON.stringify(err)
        })
      }
      if (result !== null) {
        var results = bcrypt.compareSync(data.password, result.password)
        if (results) {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(result)
          })
          db.close()
        } else {
          callback(null, {
            statusCode: 500,
            body: 'Wrong Password'
          })
          db.close()
        }
      } else {
        callback(null, {
          statusCode: 500,
          body: 'No user Found'
        })
        db.close()
      }
    })
  })
}

// DELETES A USER FROM THE DATABASE

module.exports.deleteUser = (event, context, callback) => {
  const id = event.pathParameters.id
  context.callbackWaitsForEmptyEventLoop = false
  if (id) {
    MongoClient.connect(process.env.atlas_connection_uri, (err, db) => {
      assert.equal(null, err)
      try {
        db.collection('users').remove({
          user_id: id
        }, (error, result) => {
          if (error) {
            callback(null, {
              statusCode: 500,
              body: JSON.stringify(error)
            })
          }
          callback(null, {
            statusCode: 200,
            body: JSON.stringify('Ok')
          })
          db.close()
        })
      } catch (err) {
        callback(err)
      }
    })
  } else {
    callback(null, {
      statusCode: 500,
      body: 'Enter Valid UserId'
    })
    db.close()
  }
}

// UPDATES A SINGLE USER IN THE DATABASE
module.exports.updateUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const data = JSON.parse(event.body)
  const id = event.pathParameters.id
  if (id) {
    MongoClient.connect(process.env.atlas_connection_uri, function (err, db) {
      assert.equal(null, err)
      try {
        db.collection('users').update({
          user_id: id
        }, {
          $set: data
        }, {
          upsert: false
        }, (error, result) => {
          if (error) {
            callback(null, {
              statusCode: 500,
              body: JSON.stringify(error)
            })
          }
          let details = {
            'id': id,
            'User': data
          }
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(details)
          })
          db.close()
        })
      } catch (err) {
        callback(err)
      }
    })
  } else {
    callback(null, {
      statusCode: 500,
      body: 'Enter Valid UserId'
    })
    db.close()
  }
}

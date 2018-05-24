// import Amplify, { Auth, Logger} from 'aws-amplify'
import Amplify from "aws-amplify";
import AWSExports from "../aws-exports";
Amplify.configure(AWSExports);
Amplify.Logger.LOG_LEVEL = "WARN";
// const logger = new Logger('main')

// Auth.currentUserInfo()
//   .then(user => logger.info(user))
//   .catch(err => logger.error(err))

const setUser = (context, user) => {
  context.commit("USER_UPDATED", user);
};
const setUserId = (context, id) => {
  context.commit("USERID_UPDATED", id);
};
export default {
  setUser,
  setUserId
};

// import { fetchMessages } from '@/api'

// const getMessages = (context) => {
//   fetchMessages
//     .then((response) => {
//       context.commit('MESSAGES_UPDATED', response)
//     })
//     .catch((error) => {
//       // eslint-disable-next-line
//       console.error(error);
//     })
// }

// export default {
//   getMessages,
// }

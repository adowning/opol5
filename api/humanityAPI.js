const humanity = {
  async getDetails(offset, limit) {
    try {
        const details = await app.$axios.$get('/api/assets/hardware')
        return details
      } catch (error) {
        console.log(error);
        return (null);
    }
  },
  async createUser(offset, limit) {
    try {
        const user = await app.$axios.$get('/api/assets/createuser')
        return user
      } catch (error) {
        console.log(error);
        return (null);
    }
  }
}
export default humanity
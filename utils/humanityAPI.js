export default {
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
    //   const deployments = await HTTP.get(`deployments/find/limit/${page.limit}/offset/${page.offset}`);
    //   const enrichedDeployments = await Promise.all(_.map(deployments, async (deployment) => {

    //     const service = await services
    //       .loadService(deployment.serviceId);
    //     const environment = await environments
    //       .loadEnvironment(deployment.environmentId);
    //     const kubeCluster = await clusters
    //       .loadCluster(deployment.kubeClusterId);
    //     return { ...deployment,
    //       service: service.name,
    //       environment: environment.name,
    //       kubeCluster: kubeCluster.name,
    //     };
    //   }));
    //   return enrichedDeployments;
    // } catch (error) {
    //   console.log(error);
    //   return (null);
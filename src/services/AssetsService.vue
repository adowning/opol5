<script>
  import Vue from 'vue'
  // import { API_GATEWAY_ENDPOINT } from '../globals/resources'
  const url = 'http://localhost:1880'

  export default {       
    methods: {
      getHardwares() {
        return Vue.http.get(`${url}/assets/hardwarelist`).then((res) => {
          return res.body
        })
      },
     checkInhardware(assetId) {
        return Vue.http.post(`${url}/assets/checkinhardware`, {assetId}).then((res) => {
          return res.body
        })
      },
     checkOuthardware(assetId, userId) {
        return Vue.http.post(`${url}/assets/checkouthardware`, {"assetId": assetId, "userId": userId}).then((res) => {
          return res.body
        })
      },
      getEmployees() {
        //console.log('getting users...')
        return Vue.http.get(`${url}/employeelist/`).then((res) => {
          //console.log('response is: ', res.body)
          return res.body
        })
      },
    }
  }
</script>


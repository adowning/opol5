<template>
   <v-container fluid="fluid" style="min-height: 0;" grid-list-lg="grid-list-lg">
      <v-layout column="column" wrap="wrap">
         <v-flex sm10="sm10" offset-sm1="offset-sm1" md6="md6" offset-md3="offset-md3">
            <router-link :to="'list'">
               <v-card class="purple white--text">
                  <v-container fluid="fluid" grid-list-lg="grid-list-lg">
                     <v-layout row="row">
                        <v-flex xs7="xs7">
                           <div>
                              <div class="headline">English general list</div>
                              <div>Search your name in final list ang get your position</div>
                           </div>
                        </v-flex>
                        <v-flex xs5="xs5">
                           <v-card-media src="https://i.redd.it/yuw4cb0mfzjx.png" height="125px" contain="contain">
                           </v-card-media>
                        </v-flex>
                     </v-layout>
                  </v-container>
               </v-card>
            </router-link>
         </v-flex>
      </v-layout>
   </v-container>
</template>
<script>
export default {
  name: 'hello'
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>

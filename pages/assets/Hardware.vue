<template>
    <div>
     <hardware :articles="articles" />
    <div class="page" v-if="maxPage > 1">
      <div class="page-prev">
        <a v-if="page > 1" @click="prevPage">« Prev </a>
      </div>
      <div class="page-next">
        <a v-if="hasMore"  @click="nextPage">Next »</a>
      </div>
    </div>
    </div>
</template>

<script>
import Hardware from "../../components/assets/hardware";

export default {
	async asyncData({ store, route }) {
		let page = route.params.id || 1
		const result = await store.dispatch("getHumanityData", page)
		//  const result  = await app.$axios.$get('/api/assets/hardware')    
		console.log(result)
		return {
			articles: result.rows || [],
			total: result.total
		}
	},
	methods: {
		prevPage() {
			this.$router.push({
				name: "page-id",
				params: {
					id: this.page - 1
				}
			});
		},
		nextPage() {
			this.$router.push({
				name: "page-id",
				params: {
					id: this.page + 1
				}
			});
		}
	},
	computed: {
		maxPage() {
			return Math.ceil(Number(this.total) / 15);
		},
		page() {
			return Number(this.$route.params.id) || 1;
		},
		hasMore() {
			return this.page < this.maxPage;
		}
	},

	data: () => ({}),
	components: {
		Hardware
	}
	//   async asyncData({ app }) {
	//     const assets = await app.$axios.$get('/api/assets/hardware')
	//     console.log(assets)
	//     return { assets }
	//   }
};
</script>
  // async asyncData({app}) {
      
  //     const response = await app.$axios.$get('/api/assets/hardware')
  //     var stuff = []
  //     for (var item of response.rows) {
  //       item.model = item.model.name
  //       item.category = item.category.name
  //       if (item.location) {
  //         item.location = item.location.name
  //       } else {
  //         item.location = 'needs location'
  //       }
  //       if (item.status_label) {
  //         item.status_label = item.status_label.name
  //       }
  //       if (item.assigned_to) {
  //         item.assigned_to = item.assigned_to.name
  //       }
  //       item.checky = 'xxx'
  //       stuff.push(item)
  //   }
  //   return stuff
  //   },
<template>
	<div>
		<nuxt/>
		    <div>My footer</div>
	</div>
</template>
<script>
export default {
	  head () {
		return {
		
			noscript: [
				{ innerHTML: 'This website requires JavaScript.' }
			]
		}
		
	}
}
</script>

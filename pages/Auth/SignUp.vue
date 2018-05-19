<template>
    <div>
    <RegisterExisting></RegisterExisting>
    </div>
</template>

<script>
import RegisterExisting from '../../components/amplify/RegisterExisting.vue'
export default {
	layout: 'nouser',
	middleware: 'guest',
	components: {
		RegisterExisting
	}
}
</script>

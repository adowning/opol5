<template>

  <div :style="pickerStyle.picker">
    <img
      :src="src"
      :style="pickerStyle.img"
      v-on:error="imageError"
    />
    <input
      title="Pick"
      type="file" accept="image/*"
      :style="pickerStyle.input"
      v-on:change="pick"
    />
  </div>
</template>

<script>
import { Auth, Storage } from 'aws-amplify'
const pickerStyle = {
	picker: {
		position: 'relative'
	},
	preview: {
		maxWidth: '100%'
	},
	img: {
		width: '100px',
		height: '100px',
		// borderRadius: '50%',
		fontSize: '1.2em',
		textAlign: 'center'
	},
	input: {
		width: '100%',
		height: '100%',
		display: 'inline-block',
		position: 'absolute',
		left: 0,
		top: 0,
		opacity: 0,
		cursor: 'pointer'
	}
}
export default {
	name: 'PhotoPicker',
	data () {
		return {
			src: this.defSrc,
			style: {}
		}
	},
	props: ['defSrc', 'path'],
	computed: {
		pickerStyle() {
			return Object.assign({}, this.style.picker, pickerStyle)
		}
	},
	created: function() {
		this.getPhoto()
		this.$nuxt.$loading.start

	},
	methods: {
		getPhoto: function() {
			Storage.get(this.path)
				.then(url => this.src = url)
		},
		pick: function(e) {
			this.$nuxt.$loading.start()
			const file = e.target.files[0];
			const { name, size, type } = file;
			console.debug(file);
			console.debug('upload photo to ' + this.path)
			Storage.put(this.path, file, { contentType: type })
				.then(data => {
					console.debug(data)
					this.getPhoto()
				}).then(this.$nuxt.$loading.finish())
				.catch(err => console.error(err))
        
		},
		imageError: function(e) {
			this.src = this.defSrc
		}
	}
}
</script>
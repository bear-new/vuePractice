 <template>
	<div>
		<swipe />
	</div>
</template>

<script>

	import Swipe from '@/components/Swipe'
	// import '@/assets/js/iconfont.js'

	export default {

		data () {
			return {

			}
		},

		components: {
			'swipe': Swipe
		},

		created () {
			document.title = '健身助手';
		},
	}
</script>

<style lang="scss" scoped>
	.test {
		color: red;
	}
</style>
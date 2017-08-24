<template>
	<div class="contact-us">
		<header-title title="联系我们" />
		<ul class="contact-box">
			<li>{{ company.name }}</li>
			<li><label>地址：</label>{{ company.address }}</li>
			<li><label>电话：</label>{{ company.tel }}</li>
			<li><label>营业时间：</label>{{ company.businessTime }}</li>
		</ul>
	</div>
</template>

<script>
	
	import HeaderTitle from '@/components/Header'

	export default {

		props: ['company'],
		
		components: {
			'header-title': HeaderTitle
		}
	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.contact-box {
		text-align: left;
		color: $cc;
		padding: 0 10px 10px 10px;
		@include font (0.35rem, 0.6rem);
	}

</style>
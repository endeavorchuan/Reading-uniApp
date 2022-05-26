<template>
	<view class="home-container">
		<NavBar></NavBar>
		<view v-for="(item,index) in 100" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
.container {
	@include flex(flex-start, column);
	color: $base-color;
}
</style>
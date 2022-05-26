<template>
	<swiper class="swiper-container" :current="activeIndex" @change="changeCurrentIndex">
		<swiper-item v-for="(item, index) in labelList" :key="item._id">
			<view class="swiper-item">
				<ListItem :articleList="articleData[index]"></ListItem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"ArticleList",
		props: {
			labelList: Array,
			activeIndex: Number
		},
		created() {
			// this._getArticleList()
		},
		watch: {
			labelList(newValue, oldValue) {
				this._getArticleList(this.activeIndex)
			}
		},
		data() {
			return {
				articleData: {}
			};
		},
		methods: {
			changeCurrentIndex(e) {
				const {current} = e.detail
				this.$emit('changeCurrentIndex', current)
				if (!this.articleData[current] || !this.articleData[current].length) {
					this._getArticleList(current)
				}
			},
			/* 进行数据的请求获取 */
			async _getArticleList(currentIndex) {
				const articleList = await this.$http.get_article_list({classify: this.labelList[currentIndex].name})
				this.$set(this.articleData, currentIndex, articleList)
			}
		}
	}
</script>

<style lang="scss">
	.swiper-container {
		height: 100%;
		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>
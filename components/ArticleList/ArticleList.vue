<template>
	<swiper class="swiper-container" :current="activeIndex" @change="changeActiveIndex">
		<swiper-item v-for="(item, index) in labelList" :key="item._id">
			<view class="swiper-item">
				<ListItem :loadData="loadData[index]" :articleList="articleData[index]" @loadMore="loadMoreData"></ListItem>
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
			this.labelList.length && this._getArticleList(this.activeIndex)
		},
		watch: {
			labelList(newValue, oldValue) {		// 用户调整了自己的选项卡，触发了labelList更改，清空之前的数据，重新进行请求
			  if (JSON.stringify(oldValue) === JSON.stringify(newValue))
          return
				this.articleData = {}
				this.loadData = {}
				this._getArticleList(this.activeIndex)
			}
		},
		data() {
			return {
				articleData: {},
				loadData: {},
				page: 1,
				pageSize: 7
			};
		},
		methods: {
			changeActiveIndex(e) {
				const {current} = e.detail
				this.$emit('changeActiveIndex', current)
				if (!this.articleData[current] || this.articleData[current].length === 0) {
					this._getArticleList(current)
				}
			},
			/* 进行数据的请求获取 */
			async _getArticleList(currentIndex) {
				// 指定每一个分类里面的页数信息
				if (!this.loadData[currentIndex]) {
					this.loadData[currentIndex] = {
						page: 1,
						loading: 'loading',
						total: 0
					}
				}

				const {articleList, total} = await this.$http.get_article_list({
					classify: this.labelList[currentIndex].name,
					page: this.loadData[currentIndex].page,
					pageSize: this.pageSize
				})

				let oldList = this.articleData[currentIndex] || []	 // 追加每一次的请求数据结果
				oldList.push(...articleList)
				this.loadData[currentIndex].total = total
				this.$set(this.articleData, currentIndex, oldList)
			},
			/* 到底加载更多内容事件 */
			loadMoreData() {
				if (this.loadData[this.activeIndex].total === this.articleData[this.activeIndex].length) {
					this.loadData[this.activeIndex] = {
						...this.loadData[this.activeIndex],
						...{loading: 'noMore', page: this.loadData[this.activeIndex].page}
					}
					this.$forceUpdate()
					return
				}
				this.loadData[this.activeIndex].page += 1
				this._getArticleList(this.activeIndex)
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

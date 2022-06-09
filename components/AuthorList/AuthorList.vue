<!--
* @name: AuthorList
* @author: chuanchuan
* @date: 2022-06-09 13:54
* @description: AuthorList
* @update: 2022-06-09 13:54
-->

<template>
  <view class="list-scroll-container">
    <scroll-view scroll-y="true" class="list-scroll">
      <view class="author-card" v-for="item in authorList" :key="item._id">
        <view class="author-image-container">
          <image class="image" :src="item.avatar" mode="aspectFill"></image>
        </view>
        <view class="author-desc-container">
          <view class="author-info-title">
            {{ item.author_name }}
          </view>
          <view class="author-info-bottom">
            <view class="author-info-left">
              {{item.professional}}
            </view>
            <view class="author-info-right">
              <view class="author-card-desc">
                发帖 {{ item.article_ids.length }}
              </view>
              <view class="author-card-desc">
                粉丝 {{ item.fans_count }}
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "AuthorList",
  props: {
    authorList: Array
  }
}
</script>

<style lang="scss" scoped>
@import "./css/AuthorList.scss";
</style>

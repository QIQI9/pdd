<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#CE4030" inactive-color="#656565" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">直播</van-tabbar-item>
      <van-tabbar-item icon="bars" to="/type">分类</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/talk">聊天</van-tabbar-item>
      <van-tabbar-item icon="smile-o" to="/mine">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
};
</script>
<style scoped lang="less">
</style>
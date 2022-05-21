<template>
  <div class="type">
    <van-sticky>
      <Search :msg="msg" />
    </van-sticky>
    <!-- 分类页面 -->
    <div class="content">
      <van-tree-select
        :items="types"
        height="100vh"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
        @click-nav="leftfn"
      >
        <template #content>
          <div class="right_box" ref="right">
            <div v-for="(item, index) in contentsright" :key="index">
              <img :src="item.image" alt="" />
              <h3>{{ item.text }}</h3>
            </div>
          </div>
        </template>
      </van-tree-select>
    </div>

    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import Search from "@/components/Search.vue";
import instance from "@/api/index";

export default {
  name: "TypeView",
  data() {
    return {
      msg: "分类页搜索",
      types: [],
      activeId: 1, // 右侧高亮选项的 id
      activeIndex: 0, // 左侧高亮选项的索引
      contentsright: [], // 右侧的数据
    };
  },
  components: { Tabbar, Search },
  methods: {
    async gettypes() {
      let { data } = await instance.get("/types");
      console.log(data);
      this.types = data;
      this.contentsright = this.types[this.activeIndex].children;
    },
    leftfn(index) {
      //点击左侧导航触发的事件
      //index 点击当前元素的索引
      this.activeindex = index;
      this.contentsright = this.types[index].children;
      // 获取右侧元素
      var xx = document.getElementsByClassName("van-tree-select__content");
      xx[0].scrollTop = 0; // 点击左侧，右侧回到顶部
    },
  },
  created() {
    this.gettypes();
  },
};
</script>
<style scoped lang="less">
.type {
  padding-bottom: 50px;
  .van-sidebar::-webkit-scrollbar {
    display: none;
  }
  .van-tree-select__content::-webkit-scrollbar {
    display: none;
  }
  .right_box {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    div {
      width: 33%;
      text-align: center;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
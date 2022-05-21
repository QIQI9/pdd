<template>
  <div class="home">
    <van-sticky>
      <Search :msg="msg" />
      <van-tabs v-model="active" sticky>
        <van-tab v-for="(item, index) in data.tabs" :title="item" :key="index">
          <!-- 内容 {{ index }} -->
          <!-- <slot name="{{index}}">1111</slot> -->
        </van-tab>
      </van-tabs>
    </van-sticky>
    <!-- <HomeNav>
       <template v-slot:0></template>
    </HomeNav> -->

    <main>
      <div class="navArea-wrap">
        <div class="navArea">
          <div
            v-for="(item, index) in data.navArea"
            :key="index"
            class="nav-item"
          >
            <img :src="item.imgsrc" alt="" />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <!-- 百亿补贴 -->
      <!-- <div class="baiyi">
        <div class="left">
          <img
            src="https://funimg.pddpic.com/brand_creation/b974124a-faaa-4c95-b074-e9c4eb6c9e31.png?imageView2/2/w/78/q/80/format/webp"
            alt=""
          />
          <strong>百亿补贴</strong>
          <p>大牌正品</p>
        </div>
        <div class="right">
          <div v-for="(item, index) in data.baiyi" :key="index" class="item">
            <img :src="item.image" alt="" />
            <p>¥ {{ item.price }}</p>
          </div>
        </div>
      </div> -->
    </main>

    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import Search from "@/components/Search.vue";
import instance from "@/api/index";
export default {
  name: "HomeView",
  data() {
    return {
      msg: "首页搜索",
      active: 0,
      data: {},
    };
  },
  components: { Tabbar, Search },
  methods: {
    async getData() {
      let { data } = await instance.get("/get");
      this.data = data;
      console.log(this.data);
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped lang="less">
.home {
  background: #f4f4f4;
//   padding-bottom: 50px;
  header {
    background: #fff;
    position: fixed;
    top: 0;
    border-bottom: 1px solid #e7e6e6;
  }
  .navArea-wrap {
    background: #fff;
    width: 100vw;
    overflow-x: scroll;
    .navArea {
      width: 438px;
      height: 130px;
      display: flex;
      flex-wrap: wrap;
      .nav-item {
        width: 73px;
        height: 60px;
        text-align: center;
        img {
          width: 39px;
          height: 39px;
        }
        p {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
  /* 设置滚动条的样式 */
  .navArea-wrap::-webkit-scrollbar {
    display: none;
  }
  // 百亿补贴
  .baiyi {
    margin-top: 8px;
    padding: 0 12px;
    display: flex;
    .right {
       display: flex;
    }
  }
}
</style>
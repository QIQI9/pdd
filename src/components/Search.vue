<template>
  <div class="search">
    <van-search
      v-model="value"
      :placeholder="msg"
      class="s"
      shape="round"
      clearable
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["msg"],
  //   props:{
  //      msg:{
  //         type:String,
  //         value:""
  //      }
  //   },
  data() {
    return {
      value: "",
    };
  },
  methods: {},
};
</script>
<style scoped lang="less">
.search {
  .s {
    padding: 10px 20px;
    .van-search__content {
      padding-left: 125px;
    }
  }
}
</style>
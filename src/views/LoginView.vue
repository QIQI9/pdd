<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import instance from "@/api/index";
import debounce from "@/utils/debounce";
import { Toast } from "vant";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      debounceloginfn: null,
      nextTo: "",
    };
  },
  methods: {
    async loginfn() {
      //  登录验证业务
      let { data } = await instance.post("/login");
      console.log(data);
      let nextTo = this.nextTo;
      // console.log('nextTo',nextTo)
      let token = data.token;
      this.$store.commit("setToken", token);
      // commit 提交给 mutations,dispatch 提交给 actions
      Toast({
        type: "success",
        message: "登录成功",
        onClose: () => this.$router.push({ name: nextTo }),
      });
    },
    onSubmit(values) {
      //  登录验证 用户行为事件
      // 使用防抖封装后的业务
      this.debounceloginfn();
      console.log("submit", values); // 输入表单的值 正则验证
    },
    submitfn(values) {
      console.log("密码", values); // 输入表单的值 正则验证
    },
  },
  created() {
    console.log(this);
    //   登录成功后往哪里去
    this.nextTo = this.$router.currentRoute.params.id;
    console.log('nextTo',this.nextTo)
    this.debounceloginfn = debounce(this.loginfn, 2000);
  }
};
</script>
<style scoped>
</style>
<template>
  <div class="all">
    <div class="head" >
      <img @click="$router.go(-1)" src="../../assets/imgs/icons/return.png" alt class="return-img" />
    </div>
    <div class="login">
      <img class="log" src="../../assets/imgs/icons/login.png" alt />
      <div class="ipt">
        <div class="ipt-all">
          <img src="../../assets/imgs/icons/name.png" alt />
          <input v-model="name" class="ipts" type="text" placeholder="请输入账号" />
        </div>
        <br />
        <div class="ipt-all">
          <img src="../../assets/imgs/icons/password.png" alt />
          <input v-model="password" class="ipts" type="text" placeholder="请输入密码" />
        </div>
        <div class="btn" @click="denglu">登录</div>
        <div class="text">
          <p>注册</p>
          <p>忘记密码?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  created() {
    if (localStorage.getItem("name") !== null) {
      this.name = localStorage.getItem("name");
    }
  },
  methods: {
    denglu() {
      if (this.name == "" || this.password == "") {
        alert("请输入完整");
      } else {
        localStorage.setItem("username", this.name);
        this.name = localStorage.getItem("username", this.username);
        setTimeout(() => {
          this.$router.push({ path: "/home" });
        },500);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.all {
  width: 100%;
  height: 100%;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    img {
      margin-left: 20px;
      width: 16px;
      height: 16px;
    }
  }
  .login {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .log {
      margin-top: 80px;
    }
    .ipt {
      margin-top: 33px;
      .ipt-all {
        width: 254px;
        height: 40px;
        // border: 1px solid red;
        display: flex;
        justify-content: center;
        background: #33363d;
        border-radius: 13px;
        margin-top: 10px;
        .ipts {
          padding: 0;
          margin-left: 10px;
          width: 210px;
          height: 40px;
          border: none;
          background: #33363d;
          border-radius: 13px;
          outline: none;
        }
      }
    }
    .btn {
      margin-top: 58px;
      color: #fff;
      font-size: 20px;
      width: 254px;
      height: 40px;
      line-height: 40px;
      background: linear-gradient(90deg, #f26482, #f29b68);
      border-radius: 13px;
    }
    .text {
      color: #696b70;
      margin-top: 15px;
      width: 254px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
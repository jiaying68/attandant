<template>
  <div class="login" id="loginDiv">
    <img src="@/assets/logo.png" class="logo">
    <div id="loginContainer">
      <h1 class="title">考勤管理系统</h1>
      <el-input
        placeholder="用户名"
        v-model="username"
        clearable
        class = "loginInput" id="myname">
      </el-input>
      <el-input
        placeholder="密码"
        v-model="password"
        clearable
        class = "loginInput" id="mypwd">
      </el-input>
      <el-row class="forgetRow">
        <el-button type="primary" class="forgetPass">忘记密码</el-button>
      </el-row>

      <router-link to="/Mine">
        <el-button type="info" round id="loginBtn">登录</el-button>
      </router-link>
    </div>
    <!-- <div class="top"></div> -->
    <!-- <img :src=backgroundImg class="mypic"> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      backgroundImg: require('@/assets/background.png'),
      username: '',
      password:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.login{
  background:url('~@/assets/background.png') no-repeat;
  background-size:cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: table;
}

.logo{
  opacity:0.6;
  position: absolute;
  width: 10%;
  left: 3%;
  top: 3%;
}

#loginBtn{
  margin-top: 50px;
  width: 200px;
  opacity: 0.5;
  box-shadow: 2px 2px 10px 5px grey;
  background-color: white;
  color: #000;
}

#loginContainer{
  display: table-cell;
  vertical-align: middle;
  position:relative;
}

.title{
  color:#ccc;
}

.forgetRow{
  margin-top:30px;
}

.forgetPass{
  position:absolute;
  left:38%;
  background:none;
  border:none;
  color:#999;
}
</style>

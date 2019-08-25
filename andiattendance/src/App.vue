<template>
  <div id="app">
    <div id="topMenu">
      <el-menu
        :default-active="activeIndex"
        :router=true
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#504373"
        text-color="#fff"
        active-text-color="#ffd04b">
          <el-menu-item index="1" class="helloLyrics" >你好， {{userName}}</el-menu-item>
            <!-- <el-menu-item index="2"><router-link to="/Index">我的考勤</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/Employe">员工考勤</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/setAuth">权限设置</router-link></el-menu-item> -->
          <div class="menus">
            <div class="blockDiv" v-for="item in menus">
            <el-menu-item :index="item.val" :route="item.url">{{item.name}}</el-menu-item>
            </div>
          </div>
            <el-menu-item index="Login" route="/Login" style="float:right;">退出</el-menu-item>
        </el-menu>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        activeIndex: "2",
        userName:"管理员",
        currentMenu:'',
        menus:[
          {
            name:"我的考勤",
            val:"2",
            url:"/Mine"
          },
          {
            name:"员工考勤",
            val:"3",
            url:"/Employee",
          },
          {
            name:"权限设置",
            val:"4",
            url:"/setAuth"
          }
          // ,
          // {
          //   name:"退出",
          //   key:"5",
          //   url:"/Login"
          // }
        ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.currentMenu = key;
      return;
    }

  },
  mounted(){
    if(sessionStorage.getItem('user')){
      this.$router.push({
          path:'/Mine'
      })
    }else{
      this.$router.push({
          path:'/Login'
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html{
    position: relative;
    width: 100%;
    height: 100%;
}

body{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow:hidden;
}

#myname, #mypwd{
    border-radius: 0px!important;
    margin-top: 30px!important;
    border:none!important;
    border-bottom: 1px solid #ccc!important;
    background: transparent;
    background-color: transparent!important;
    width:400px!important;
    color:#ccc;
}

a{
  text-decoration: none;
}

.blockDiv{
  display: inline-block;
}

.menus{
  display: inline-block;
  float: left;
}

#logOut{
    position: absolute;
    right: 30px;
    top: 10px;
}

#logOut > button{
    background:none;
    border:none;
}
</style>
<style lang="scss">
// $mainColor:#504373;
// body{
//   background-color: $mainColor;
// }
</style>
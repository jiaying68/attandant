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
          <el-menu-item index="1" route="/Profile" class="helloLyrics" >你好， {{userName}}</el-menu-item>
            <!-- <el-menu-item index="2"><router-link to="/Index">我的考勤</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/Employe">员工考勤</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/setAuth">权限设置</router-link></el-menu-item> -->
          <div class="menus">
            <div class="blockDiv" v-for="item in menus">
            <el-menu-item :index="item.val" :route="item.url">{{item.name}}</el-menu-item>
            </div>
          </div>
            <!-- <router-link to="/Login" style="float:right;"> -->
              <el-button id="logout" @click="logout">退出</el-button>
            <!-- </router-link> -->
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
          // {
          //   name:"人员及权限",
          //   val:"4",
          //   url:"/employeeManage"
          // },
          {
            name:"操作日志",
            val:"5",
            url:"/Diary"
          },
          {
            name:"考勤统计",
            val:"6",
            url:"/Statistic"
          }
          // ,
          // {
          //   name:"退出",
          //   key:"5",
          //   url:"/Login"
          // }
        ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.currentMenu = key;
      return;
    },
    logout(){
      this.$router.push({
        path:'/Login'
      })
      
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
  },

  created(){

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

#logout{
    background:none;
    border:none;
    color:white;
    line-height:2;
    float:right;
    margin: 4px 30px 0px 0px;
}
#Profile{
  .centerForm {
    margin-top:6%;
    text-align:left;
  }

  .reset{
      float: right;
      width: 40%;
  }
}

.el-button--primary{
  background-color:#504373;
  border-color:#504373;
  margin-left:20px;   
}

.el-button--primary:hover{
  background-color:#8f7fb9;
  border-color:#8f7fb9;
}



#employee{
  margin-top:10px;
    .el-input{
        margin-bottom:10px;
    }
    .leftTree{
        margin-right: 10px;
    }
}

#mine{
  margin-top:10px;
}


.leftTree{
    margin-right: 10px;
}


#diary{
  #searchInput{
    display:inline-block!important;
    width:20%!important;
    width:300px;
  }

  #search{
    float:left;
    margin-left:20px;   
  }
}
.controlBar{
  background-color:lightSteelblue;
  padding:10px;
  margin-left: 0px!important;
  margin-right:0px!important;
  text-align:left;
}
#statistic{
  .el-col-20{
    width:calc(87.5% - 10px);
  }
  .leftTree{
      margin-top: 10px;
  }
}
</style>
<style lang="scss">
// $mainColor:#504373;
// body{
//   background-color: $mainColor;
// }
</style>
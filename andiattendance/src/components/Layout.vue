<template>
    <div class="login" id="indexDiv">
        <el-container>
            <!-- <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#504373"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-menu-item index="1" class="helloLyrics">你好， {{userName}}</el-menu-item>
                <el-menu-item index="2"><router-link to="/Index">我的考勤</router-link></el-menu-item>
                <el-menu-item index="3"><router-link to="/Employe">员工考勤</router-link></el-menu-item>
                <el-menu-item index="4"><router-link to="/setAuth">权限设置</router-link></el-menu-item>
                <el-menu-item index="10" style="float:right;"><router-link to="/Login">退出</router-link></el-menu-item>
            </el-menu> -->
            <el-main>
                <transition>
                    <router-view></router-view>
                </transition>

            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        activeIndex: '2',
        userName:'管理员',
        
        tableData: [{
            date:'2016-05-02',
            type:'上班',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'上班',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'上班',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'上班',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'上班',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'上班',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'上班',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'出差',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'出差',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'出差',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'出差',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            type:'出差',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }]
    }
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getRoute(){
          let myRoute = this.$route;
          console.log(myRoute);
      }
    },
    mounted(){
        this.getRoute();
        this.$router.push({
            path:'/Mine'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a{
        text-decoration: none;
    }

    .helloLyrics{
        width: 200px;
        text-align: left;
    }
</style>

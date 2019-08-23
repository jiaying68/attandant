<template>
    <div class="login" id="indexDiv">
        <!-- <el-button type="primary">查询</el-button> -->
        <div class="container">
            <template>
                <el-tree
                :data="data2"
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps"
                @node-click="showMe">
                </el-tree>

    <!--                         
                <div class="buttons">
                <el-button @click="getCheckedNodes">通过 node 获取</el-button>
                <el-button @click="getCheckedKeys">通过 key 获取</el-button>
                <el-button @click="setCheckedNodes">通过 node 设置</el-button>
                <el-button @click="setCheckedKeys">通过 key 设置</el-button>
                <el-button @click="resetChecked">清空</el-button>
                </div> -->

                <el-table
                :data="tableData"
                border
                stripe
                style="width: 90%;display:inline-block;float:right;margin-top: 100px;">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="220">
                </el-table-column>
                <el-table-column
                    prop="gotoWork"
                    label="上班时间"
                    width="260">
                </el-table-column>
                <el-table-column
                    prop="offWork"
                    label="下班时间"
                    width="260">
                </el-table-column>
                <el-table-column
                    prop="workTime"
                    label="工时"
                    width="220">
                </el-table-column>
                <el-table-column
                    prop="restTime"
                    label="调休工时（剩余/总工时）"
                    width="250">
                </el-table-column>
                <el-table-column
                    prop="bonusTime"
                    label="餐补次数"
                    width="250">
                </el-table-column>
                <el-table-column
                    prop="bonus"
                    label="餐补（剩余/总餐补）"
                    width="250">
                </el-table-column>
                </el-table>
            </template>
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
        
        tableData: [{
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }, {
            date:'2016-05-02',
            gotoWork:'09：30',
            offWork:'21：30',
            workTime:'10.5',
            restTime:'1.5/2.5',
            bonusTime:1,
            bonus:20
        }],
        data2: [{
          id: 1,
          label: '软件部',
          children: [{
            id: 4,
            label: '开发组',
            children: [{
              id: 9,
              label: 'E系列',
              children: [{
              id: 11,
              label: '李攀'
            }, {
              id: 12,
              label: '黄道坤'
            }]
            }, {
              id: 10,
              label: 'D系列',
              children: [{
              id: 13,
              label: '周鑫'
            }, {
              id: 14,
              label: '何佳颖'
            }]
            }]
          }]
        }, {
          id: 2,
          label: '硬件部',
          children: [{
            id: 5,
            label: '研发组'
          }, {
            id: 6,
            label: '逻辑组'
          }]
        }, {
          id: 3,
          label: '综合部',
          children: [{
            id: 7,
            label: '财务组'
          }, {
            id: 8,
            label: '后勤组'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      showMe(){
          console.log(this);
          
      }
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

    .container{
        position: relative;
    }

    .el-tree{
        display: inline-block;
        position: absolute;
        top:0px;
        left:0px;
        width: 10%;
    }
</style>

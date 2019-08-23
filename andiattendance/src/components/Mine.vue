<template>
    <div class="login" id="indexDiv">
        <template>
            <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="250">
            </el-table-column>
            <el-table-column
                prop="gotoWork"
                label="上班时间"
                width="280">
            </el-table-column>
            <el-table-column
                prop="offWork"
                label="下班时间"
                width="280">
            </el-table-column>
            <el-table-column
                prop="workTime"
                label="工时"
                width="250">
            </el-table-column>
            <el-table-column
                prop="restTime"
                label="调休工时（剩余/总工时）"
                width="280">
            </el-table-column>
            <el-table-column
                prop="bonusTime"
                label="餐补次数"
                width="280">
            </el-table-column>
            <el-table-column
                prop="bonus"
                label="餐补（剩余/总餐补）"
                width="280">
            </el-table-column>
            </el-table>
        </template>
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
        }]
    }
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
</style>

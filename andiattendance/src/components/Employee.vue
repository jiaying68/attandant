
<template>
    <div class="login" id="indexDiv">

        <el-tree
            :data="data2"
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps"
            @node-click="showMe">
        </el-tree>
        <full-calendar
            id="myCalendar"
            ref="calendar"
            :config = "config"
            :events = "events"
            locale="fr" 
            @event-selected = "eventClick"
            @day-click = "dayClick">
        </full-calendar>
</div>
</template>

<script>
import {FullCalendar} from 'vue-full-calendar'
export default {
    name: 'HelloWorld',
    data () 
    {
        return {      

            config:
            {
                firstDay:'1',//第一天是周几
                weekends:true,
                weekMode:'liquid',
                // weekNumbers:true,//显示是一年中的第几周
                locale:'zh-cn',
                defaultView:'month',

                selectable: true,
                // selectMirror:true,

                height:'auto',
                // contentHeight:'1000',
                fixedWeekCount:true,
                // handleWindowResize:true,//是否随浏览器窗口大小变化
                allDaySlot:false,
                header:{
                    left:'prevYear,nextYear,today',
                    center:'prev title next',
                    right:'custom'
                },
                dragOpacity:0.1
            },
            events:[{
                id:1,
                title:'出差',
                start:'2019-08-23',
                end:'2019-08-27',
                className:'aaa'
            },
            {
                id:2,
                title:'春',
                start:'2019-08-26',
                backgroundColor:'orange',
                editable:true,
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
                }, 
                {
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
        }, 
        {
          id: 2,
          label: '硬件部',
          children: 
          [{
            id: 5,
            label: '研发组'}, 
            {
                id: 6,
                label: '逻辑组'
            }]
        }, 
        {
          id: 3,
          label: '综合部',
          children: [{
            id: 7,
            label: '财务组'
        }, 
        {
            id: 8,
            label: '后勤组'
        }]
    }]
}
},
methods: {
    eventClick(event){
      console.log('点击了'+event);
  },
  dayClick(date,jsEvent,view){
      console.log(date);
  }
},
components: {
    FullCalendar,
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

#indexDiv{
    position:relative;
}
</style>

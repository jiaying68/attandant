<template>
    <div>
        <!-- <template> -->
        <full-calendar
            id="myCalendar"
            ref="calendar"
            :config = "config"
            :events = "events"
            locale="fr" 
            @event-selected = "eventClick"
            @day-click = "dayClick">
        </full-calendar>
        <!-- </template> -->
    </div>
</template>

<script>
import {FullCalendar} from 'vue-full-calendar'
export default {
    name: 'HelloWorld',
    data () 
    {
    return {      

        config:{
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
</style>
<style>
 #myCalendar{
    width:80%;
    margin:auto;
 }
</style>

<template>
    <div id="mine">
        <!-- <template> -->
        <el-row><el-button type="primary" @click="changeToMonth">主要按钮</el-button></el-row>
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
import {jquery} from 'jquery'
export default {
    name: 'HelloWorld',
    data () 
    {
    return {      

        config:{
            firstDay:'1',//第一天是周几
            weekends:true,
            // weekMode:'liquid',//unknown
            // weekNumbers:true,//显示是一年中的第几周
            fixedWeekCount:false,
            locale:'zh-cn',
            defaultView:'month',

            selectable: true,
            // selectMirror:true,

            // height:'auto',
            // contentHeight:'1000',
            // fixedWeekCount:true,
            // handleWindowResize:true,//是否随浏览器窗口大小变化
            allDaySlot:false,
            // allDay:true,
            header:{
                left:'prevYear,nextYear,today',
                center:'prev title next',
                right:'custom'
            },
            dragOpacity:0.1,
            navLinks: true,
            weekNumbers:true
            // visStart="2019-08-25"
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
            alert('Event: ' + calEvent.title);
            alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            alert('View: ' + view.name);
        },
        dayClick(date,jsEvent,view){
            alert('Clicked on: ' + date.format());
            alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            alert('Current view: ' + view.name);
        },
        changeDate(){
            this.$refs.calendar.fireMethod('gotoDate',this.selectDate)
        },
        changeToMonth(){
            fullCalendar('changeView','month')
        }
    },
    components: {
        FullCalendar,
  },
  mounted(){
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
#mine #myCalendar{
    width:90%;
    margin:auto;
 }
</style>

<template>
<div>
   <full-calendar :events="monthData" class="test-fc"
                     first-day='1' locale="fr"
                     @changeMonth="changeMonth" 
                     @eventClick="eventClick" 
                     @dayClick="dayClick" 
                     @moreClick="moreClick"
                     lang="zh"></full-calendar>
</div>
</template>
<script>
import { FullCalendar } from 'vue-fullcalendar'
export default {
  data() {
      return {
        monthData: [
          {

            title  : 'sometime',
            start  : '2019-08-24T12:30:00',
            allDay : false,
            cssClass:['test1'],
          },
          {
            title  : 'sometime',
            start  : '2019-08-24T12:30:00',
            allDay : false,
            cssClass:['test1'],
          },
          {
            title  : 'sometime',
            start  : '2019-08-24T12:30:00',
            allDay : false,
            cssClass:['test1']
          },
          {
            title  : 'sometime',
            start  : '2019-08-24T12:30:00',
            allDay : false,
            cssClass:['test1'],
          },
          {
            title  : 'notAllDay',
            start  : '2019-08-22T12:30:00',
            allDay : false,
            cssClass:['test1'],
          },
          {
            title  : 'AllDay',
            start  : '2019-08-22T12:30:00',
            allDay : true,
            cssClass:['test1'],
          },
          {
            title  : 'editable',
            start  : '2019-08-20T12:30:00',
            allDay : true,
            backgroundColor: 'white',
            cssClass:['test1'],
          },
          {

            title  : 'severalDays',
            start  : '2019-08-22',
            end : '2019-09-01',
            cssClass : ['family', 'career']
          }
        ]
      }
  },
  methods: {
     // 选择月份
      changeMonth (start, end, current) {
       console.log('changeMonth', start, end, current)
      },
      // 点击事件
      eventClick (event, jsEvent, pos) {
        console.log('eventClick', event, jsEvent, pos)
      },
      // 点击当天
      dayClick (day, jsEvent) {
         console.log('dayClick', day, jsEvent)
      },
      // 查看更多
      moreClick (day, events, jsEvent) {
        console.log('moreCLick', day, events, jsEvent)
      },
  },
  components: {
      'full-calendar': require('vue-fullcalendar')
  }
}
</script>

<style>
.career{
  background-color:orange!important;
}

.family{
  color:red!important;
}
.test1{
  background-color:navy!important;
  color:white!important;
}
</style>
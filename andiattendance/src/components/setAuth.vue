<template>
<div>
   <full-calendar :events="monthData" class="test-fc"
                     first-day='1' locale="fr"
                     @changeMonth="changeMonth" 
                     @eventClick="eventClick" 
                     @dayClick="dayClick" 
                     @moreClick="moreClick"></full-calendar>
</div>
</template>
<script>
import { FullCalendar } from 'vue-fullcalendar'
export default {
  data() {
      return {
        monthData: []
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
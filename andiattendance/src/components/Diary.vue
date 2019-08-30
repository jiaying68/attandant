<template>
	<div id="diary">
		<el-row class="controlBar">
			<div id="controlBar">
				<el-col :span="6">
					<el-input v-model="input" placeholder="请输入内容" class="myInput"></el-input>
				</el-col>
				<el-col :span="6">
					<el-button type="primary" id="search">搜索</el-button>
				</el-col>		
			</div>	
		</el-row>
		<el-table
		:data="tableData"
		stripe>
		<el-table-column
		    prop="date"
		    label="日期">
		</el-table-column>
		<el-table-column
		    prop="gotoWork"
		    label="上班时间">
		</el-table-column>
		<el-table-column
		    prop="offWork"
		    label="下班时间">
		</el-table-column>
		<el-table-column
		    prop="workTime"
		    label="工时">
		</el-table-column>
		<el-table-column
		    prop="restTime"
		    label="调休工时（剩余/总工时）">
		</el-table-column>
		<el-table-column
		    prop="bonusTime"
		    label="餐补次数">
		</el-table-column>
		<el-table-column
		    prop="bonus"
		    label="餐补（剩余/总餐补）">
		</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default{
		data(){
			return{
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
		        input:''
			}
		},
		methods:{

		}
	}
</script>

<style>
	
</style>
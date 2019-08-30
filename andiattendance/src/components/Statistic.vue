<template>
	<div id="statistic">
		<el-row>
            <el-col :span="3" class="leftTree">
            	<el-input
				  placeholder="输入关键字进行过滤"
				  v-model="filterText">
				</el-input>
                <el-tree
                class="filter-tree"
                :data="data2"
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps"
                :filter-node-method="filterNode"
                @node-click="showMe">
                </el-tree>
            </el-col>

            <el-col :span="20">
                <div class="controlBar">
					<el-date-picker
				      v-model="value2"
				      align="right"
				      type="date"
				      placeholder="筛选开始日期"
				      :picker-options="pickerOptions1">
				    </el-date-picker>
					<el-date-picker
				      v-model="value2"
				      align="right"
				      type="date"
				      placeholder="筛选结束日期"
				      :picker-options="pickerOptions1">
				    </el-date-picker>
					<el-button type="primary" id="search">搜索</el-button>
                </div>
	                <el-table
	                :data="tableData"
	                border
	                stripe
	                style="display:inline-block">
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
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
	  name: 'HelloWorld',
	  data () {
	    return {
	    	// 快捷时间选择的参数
	        pickerOptions1: {
	          disabledDate(time) {
	            return time.getTime() > Date.now();
	          },
	          shortcuts: [{
	            text: '今天',
	            onClick(picker) {
	              picker.$emit('pick', new Date());
	            }
	          }, {
	            text: '昨天',
	            onClick(picker) {
	              const date = new Date();
	              date.setTime(date.getTime() - 3600 * 1000 * 24);
	              picker.$emit('pick', date);
	            }
	          }, {
	            text: '一周前',
	            onClick(picker) {
	              const date = new Date();
	              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
	              picker.$emit('pick', date);
	            }
	          }]
	        },
	        value1: '',
	        value2: '',

	        filterText:'',
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
	        },
	        input8:''
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
			  
			},
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			}
	    },
        watch: {
	      filterText(val) {
	        this.$refs.tree.filter(val);
	      }
	    },
	}
</script>

<style>
    #statistic{
	    .container{
	        position: relative;
	    }

	    .el-tree{
	        display: inline-block;
	        position: absolute;
	        top:0px;
	        left:0px;
	        width: 300px;
	    }
    }
</style>
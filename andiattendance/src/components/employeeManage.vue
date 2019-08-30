<template>
    <div id="employeeManage">

        <el-row class="myContainer">
            <el-col :span="12" style="height:100%;">
                <div style="height: 100%;border-right: 1px solid #dbdbdb;padding:0px 20px">
                     <ul class="myUl">
                         <li class="myHead">
                             角色/人员
                         </li>
                         <li>
                            <el-input
                                placeholder="输入关键字进行过滤"
                                v-model="filterText">
                            </el-input>

                            <el-tree
                                class="filter-tree"
                                :data="data2"
                                :props="defaultProps"
                                default-expand-all
                                :filter-node-method="filterNode"
                                ref="tree2">
                            </el-tree>
                         </li>
                     </ul>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    this is the right div
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

    data() {
      return {
        filterText: '',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
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
    .myContainer{
        width:80%;
        margin:auto;
        margin-top:30px;
        height:600px;
    }
    .myUl{
        list-style: none;
    }
    .myHead{
        height: 40px;
    }
</style>
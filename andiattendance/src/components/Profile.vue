<template>
	<div id="Profile">
		<el-row :gutter="20" class="centerForm">
			<el-col :span="6" :offset="9">
				<!-- <el-form ref="form" :model="form" label-width="80px" class="centerForm" label-position="left">
				  <el-form-item label="用户名"  label-width="100px" >
				    <el-input v-model="form.name" disabled=true></el-input>
				  </el-form-item>
				  <el-form-item label="新密码" label-width="100px" >
				  	<el-input placeholder="请输入密码" v-model="user.passWord" show-password></el-input>
				  </el-form-item>
				  <el-form-item label="新密码确认" label-width="100px" >
				  	<el-input placeholder="请输入密码" v-model="user.passWord" show-password></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="onSubmit" class="reset">查询</el-button>
				  </el-form-item>
				</el-form> -->
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="用户名"  label-width="100px" >
				    <el-input v-model="user.userName" disabled></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="确认密码" prop="checkPass">
				    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
				  </el-form-item>
				 <!--  <el-form-item label="年龄" prop="age">
				    <el-input v-model.number="ruleForm2.age"></el-input>
				  </el-form-item> -->
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
				    <el-button @click="resetForm('ruleForm2')">重置</el-button>
				  </el-form-item>
				</el-form>
			</el-col>
		</el-row>

				
	</div>
</template>

<script>
	export default{

    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
		input11: '',
		user:{
			passWord:'',
			userName:'管理员'
		}
      };
    },
		methods:{

	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
		}
	}
</script>

<style>
</style>
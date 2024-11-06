<template>
    <div>
       <el-form ref="form" :model="form"  class="login-box">
        <h3 class="login-title">欢迎登录</h3>
        <el-form-item label="账号" >
            <el-input type="text" v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" >
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item >
            <el-button type="primary" @click="submitForm('form')">登录</el-button>
        </el-form-item>
       </el-form>
    </div>
    
</template>

<script>

export default {
    name:'Login',
    data(){
        return {
            form:{
                name:'',
                password:''
            },
            // rulers:{
            //     name: [{ 
            //         required: true, 
            //         message: '请输入用户名',
            //         trigger: 'blur' 
            //         }
            //     ],
            //     password: [{ 
            //         required: true, 
            //         message: '请输入密码',
            //         trigger: 'blur' 
            //         }
            //     ],
            // }
        }
    },
    methods:{
        submitForm(formName) {
            if (formName.name == 'admin') {
                this.$router.push("/main");
            } else {
                alert('错误');
                return false;
            }
      }
    }
}
</script>

<style lang="scss" scoped>
    .login-box{
        width: 350px;
        margin: 150px auto;
        border: 1px solid #DCDFE6;
        padding: 20px;
    }
    .login-title{
        text-align: center;
    }

</style>
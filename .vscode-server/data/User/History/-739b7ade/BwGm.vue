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
            <el-button type="primary" @click="submitForm(form)">登录</el-button>
        </el-form-item>
       </el-form>
    </div>
    
</template>

<script>
import Fingerprint2 from 'fingerprintjs2';

export default {
    name:'Login',
    data(){
        return {
            form:{
                name:'',
                password:''
            },
        
        }
    },
    async created() {
        if (window.requestIdleCallback) {
            // 如果浏览器支持 requestIdleCallback
            requestIdleCallback(() => {
            // 浏览器空闲时执行 createFingerprint 方法
            this.createFingerprint();
            });
        } else {
            // 如果浏览器不支持 requestIdleCallback，使用 setTimeout 作为回退机制
            setTimeout(() => {
            // 延迟 500 毫秒后执行 createFingerprint 方法
            this.createFingerprint();
            }, 500);
        }
    },
    methods:{
        submitForm(formName) {
            console.log(formName)
            if (formName.name === "admin" && formName.password ==="123") {
                this.$router.push("/main");
            } else {
                alert('错误');
                return false;
            }
        },
      	createFingerprint(){
            const fingerprint = Fingerprint2.get((components) => { // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
            const values = components.map(component => component.value); // 配置的值的数组
            const murmur = Fingerprint2.x64hash128(values.join(''), 31); // 生成浏览器指纹
            console.log(components);
            console.log(values);
            console.log(murmur);
            console.log(fingerprint);
            });
	    
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
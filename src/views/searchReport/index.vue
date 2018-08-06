<template>
  <div>
    <div></div>
    <div>
      <InputBox :title="'真实姓名'" :type="'name'"  v-on:value="getUserName" />
      <InputBox :title="'电话号码'" :type="'phone'"  v-on:value="getPhone" />
      <InputBox :title="'身份证号'" :type="'ID'"  v-on:value="getID" />
    </div>
    <button @click="Verification">ok</button><br />
    <input type="checkbox" width="20" height="20" v-model="hasRead" />
  </div>
</template>

<script>
  import InputBox from '@/components/InputBox'
  import { MessageBox } from 'mint-ui'
  export default {
    components: {
      InputBox
    },
    data() {
      return {
        userName: '',
        phone: '',
        ID: '',
        hasRead: false
      }
    },
    methods: {
      save: function() {
        console.log(this.hasRead)
        console.log(this.userName)
        console.log(this.phone)
        console.log(this.ID)
        console.log(this.hasRead)
      },
      Verification: function() {
        if (!this.hasRead) {
          MessageBox('提示', '请先阅读协议')
          return false
        }
        if (!this.userName) {
          MessageBox('提示', '请输入用户名')
          return false
        }
        if (!this.phone) {
          MessageBox('提示', '请输入手机号')
          return false
        }
        if (!this.ID) {
          MessageBox('提示', '请输入身份证号')
          return false
        }
        this.save()
      },
      getUserName: function(value) {
        this.userName = value
      },
      getPhone: function(value) {
        this.phone = value
      },
      getID: function(value) {
        this.ID = value
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.test{
  width: 100px !important;
}
</style>

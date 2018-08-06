<template>
  <div>
    <div></div>
    <div>
      <div>
        <label for="name">真实姓名</label>
        <input id="name" type="text" @focus="handleFocus" @blur="handleBlur" @input="handleInput" v-model="name" />
        <i class="field-clear" v-show="this.name&&this.focus" @click="clearValue">123</i>
      </div>
      <div>
        <label for="phone">手机号码</label>
        <input type="text" id="phone">
      </div>
      <div>
        <label for="ID">身份证号</label>
        <input type="text" id="ID">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        focus: false,
        helpIcon: true,
      }
    },
    methods: {
      // 获得焦点
      handleFocus () {
        this.focus = true
      },
      // 失去焦点
      handleBlur () {
        setTimeout(() => {
          this.focus = !this.focus
        }, 0)
      },
      // 实现组件与外部数据绑定
      handleInput (event) {
        this.focus = true
        let value = event.target.value
      },
      // 点击清除输入框内容
      clearValue () {
        this.value = ''
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

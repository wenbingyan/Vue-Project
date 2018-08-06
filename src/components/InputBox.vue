<template>
  <div>
    <div>
      <label for="name">{{this.title}}</label>
      <input id="name" type="text" @focus="handleFocus" @blur="handleBlur" @input="handleInput" v-model="value" />
      <i class="field-clear" v-show="this.value&&this.focus" @click="clearValue">{{this.type}}</i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      type: {
        type: String
      }
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      // 获得焦点
      handleFocus() {
        this.focus = true
      },
      // 失去焦点
      handleBlur() {
        setTimeout(() => {
          this.focus = !this.focus
        }, 0)
      },
      // 实现组件与外部数据绑定
      handleInput(event) {
        this.focus = true
        this.$emit('value', this.value)
      },
      // 点击清除输入框内容
      clearValue() {
        this.value = ''
        this.$emit('value', this.value)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

<template>
  <div>
    index
  </div>
</template>

<script>
import * as request from '@/utils/request'
export default {
  name: 'index',
  created() {
    request.get('/test/qwe').then((res) => {
      console.log(res)
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

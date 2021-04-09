<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="q">Hello {{ name }}</p>
    <button @click="handleClick(i)">Click!</button>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from '@nuxtjs/composition-api'

export default {
  setup() {
    const data = reactive({
      name: 'Do',
      age: 18,
      i: 0
    })
    let q = ref(null)
    const handleClick = (i) => {
      data.i++
      data.name = 'Do ' + data.i
    }
    return {...toRefs(data), handleClick, q}
  }
}
</script>

<style>

</style>

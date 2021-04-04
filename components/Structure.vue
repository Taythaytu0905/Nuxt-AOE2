<template>
  <div>
    <nuxt-link :to="'structures/'+id">
      <p>{{ name }}</p>
      <p>Cost: </p>
      <p v-if="cost.Wood">Wood: {{ cost.Wood }}</p>
      <p v-if="cost.Stone">Stone: {{ cost.Stone }}</p>
      <p v-if="cost.Gold">Gold: {{ cost.Gold }}</p>
      <p>{{ build_time }}</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'Structure',
  props: ['id', 'name', 'cost', 'build_time']
}
</script>

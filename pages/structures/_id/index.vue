<template>
  <div>
    <p>{{ structure.name }}</p>
    <p>Cost: </p>
    <p>{{ structure.cost }}</p>
    <p>{{ structure.build_time }}</p>
  </div>
</template>
<script>
import strutures from "../../../services/strutures";

export default {
  data() {
    return {
      structure: {}
    }
  },
  async created() {
    try {
      let res = await strutures.detail(this.$route.params.id)
      this.structure = res.data
    } catch (err) {
      console.log(err)
    }
  },
  head() {
    return {
      title: 'Structure in AOE 2',
      meta: [
        {
          hid: "Description",
          name: "Description",
          content: "Best place for structure in AOE 2"
        }
      ]
    }
  }
}
</script>

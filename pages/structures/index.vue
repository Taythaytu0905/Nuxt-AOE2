<template>
  <div>
    <div>Structure</div>
    <Structure v-for="structure in structures"
               :key="structure.id"
               :id=structure.id
               :build_time="structure.build_time"
               :cost="structure.cost"
               :name="structure.name"/>
  </div>
</template>

<script>
import strutures from "../../services/strutures";
import Structure from "../../components/Structure";

export default {
  components: {
    Structure,
  },
  data() {
    return {
      structures: []
    }
  },
  async created() {
    try {
      let res = await strutures.list()
      this.structures = res.data.structures
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

<style>

</style>

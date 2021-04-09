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
import Structure from "../../components/Structure";
import {ref, useContext} from '@nuxtjs/composition-api'

export default {
  components: {
    Structure,
  },
  setup() {
    const structures = ref([])
    // useFetch(async () => {
    //   try {
    //     const res = await strutures.list()
    //     structures.value = res.data.structures
    //   } catch (err) {
    //     console.log(err)
    //   }
    // })
    const {store} = useContext()
    store.dispatch('structures/getListStructures')
    structures.value = store.state.structures.list_structures
    return {structures}
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

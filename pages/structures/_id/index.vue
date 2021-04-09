<template>
  <div>
    <p>{{ structure.name }}</p>
    <p>Cost: </p>
    <p>{{ structure.cost }}</p>
    <p>{{ structure.build_time }}</p>
  </div>
</template>
<script>
import {computed, ref, useContext} from "@nuxtjs/composition-api";

export default {
  setup() {
    const {store, route} = useContext()
    const structure = ref(computed(() => store.getters['structures/getDetailStructure'](parseInt(route.value.params.id))))
    // useFetch(async () => {
    //   try {
    //     const res = await strutures.detail(parseInt(route.value.params.id))
    //     structure.value = res.data
    //   } catch (err) {
    //     console.log(err)
    //   }
    // })
    return {structure}
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

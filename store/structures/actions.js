import strutures from "../../services/strutures";


export default {
  async getListStructures({commit}) {
    try {
      const res = await strutures.list()
      commit('GET_LIST_STRUCTURES', res.data.structures)
    } catch {
    }
  }
}

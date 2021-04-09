export default {
  getDetailStructure: (state) => (id) => {
    return state.list_structures.find(a => a.id === id)
  }
}

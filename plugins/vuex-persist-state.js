export default function ({ store }) {
  store.subscribe((_mutation, state) => {
    if (process.client) {
      localStorage.setItem('voxel-state', JSON.stringify(state))
    }
  })

  if (process.client) {
    const savedState = localStorage.getItem('voxel-state')
    if (savedState) {
      store.replaceState(JSON.parse(savedState))
    }
  }
}

export default function(context) {
  if (process.browser) {
    const { store } = context

    const dataStore = JSON.parse(localStorage.getItem('store'))

    if (dataStore) {
      if (dataStore.programs) store.commit('SET_PROGRAMS', dataStore.programs)
      if (dataStore.projects) store.commit('SET_PROJECTS', dataStore.projects)
    }
    // const cart = store.$cookies.get('cart') || []
    // store.commit('cart/SET_CART', cart)

    store.subscribe(() => {
      localStorage.setItem('store', JSON.stringify(store.state))
      // const cart = store.state.cart.cart

      // store.$cookies.set('cart', JSON.parse(JSON.stringify(cart)), {
      //   path: '/',
      //   maxAge: 60 * 60 * 24 * 7
      // })
    })
  }
}

export default {
  state: () => {
    return {
      cartIsOpen: false,
      cart: []
    }
  },
  mutations: {
    setCartOpen(state, isOpen) {
      state.cartIsOpen = isOpen
    },
    addToCart(state, item) {
      state.cart.push(item)
      state.cartIsOpen = true
    },
    removeFromCart(state, itemId) {
      const itemIndex = state.cart.findIndex((res) => res.id === itemId)
      state.cart.splice(itemIndex, 1)
    }
  },
  getters: {
    cartItemsCount: (state) => state.cart.length,
    cartItemsSum: (state) => state.cart.reduce((a, b) => a + b.price, 0),
  },
}

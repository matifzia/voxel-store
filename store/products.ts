import { defineStore } from 'pinia'

export const useProductsStore = defineStore('cart', {
  state: () => ({
    cartIsOpen: false,
    cart: [] as { id: number; price: number }[],
  }),

  getters: {
    cartItemsCount: (state) => state.cart.length,
    cartItemsSum: (state) => state.cart.reduce((a, b) => a + b.price, 0),
    itemAddedInCart: (state) => {
      return (itemId: number) => state.cart.find((res) => res.id === itemId)
    },
  },

  actions: {
    setCartOpen(isOpen: boolean) {
      this.cartIsOpen = isOpen
    },
    addToCart(item: { id: number; price: number }) {
      this.cart.push(item)
      this.cartIsOpen = true
    },
    removeFromCart(itemId: number) {
      const itemIndex = this.cart.findIndex((res) => res.id === itemId)
      if (itemIndex > -1) {
        this.cart.splice(itemIndex, 1)
      }
    },
  },
})

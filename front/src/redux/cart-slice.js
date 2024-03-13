import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: []
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.cartProducts.some(product => product.id === action.payload.id)

      if (!product) {
        state.cartProducts.push(action.payload)
      } else {
        state.cartProducts = state.cartProducts.map(product => {
          if (product.id === action.payload.id) {
            product.quantity = action.payload.quantity
          }
          return product
        })
      }
    },
    removeProduct: (state, action) => {
      const removedProduct = action.payload
      state.cartProducts = state.cartProducts.filter(product => product.id !== removedProduct)
    }
  }
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer

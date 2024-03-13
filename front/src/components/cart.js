import { store } from '../redux/store.js'
import { addProduct, removeProduct } from '../redux/cart-slice.js'

class Cart extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
    this.unsubscribe = null
  }

  async connectedCallback () {
    this.unsubscribe = store.subscribe(() => {
      const currentState = store.getState()

      console.log(currentState.cart.cartProducts)

      if (currentState.cart.cartProducts.length > this.data.length) {
        currentState.cart.cartProducts.forEach(async product => {
          const cartProduct = this.data.some(cartProduct => cartProduct.id === product.id)

          if (!cartProduct) {
            await this.addProduct(product.id)
          }
        })
      }
    })

    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('/src/data/cart.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        .cart-button {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .cart-button button{
          background-color: hsla(0, 100%, 100%, 1)
        }

        .cart-button svg  {
          height: 2rem;
          width: 2rem;
          fill: hsla(0, 0%, 0%, 1);
        }

        .cart {
          position: fixed;
          height: 100vh;
          min-height: 100vh;
          width: 400px;          
          right: -400px;
          top: 0;
          background-color: hsla(0, 100%, 100%, 1);
          z-index: 5000;
          font-family: 'Poppins', sans-serif;
          transition: all .4s;
        }

        .cart.active {
          right: 0;
        }

        h2, h3, p {
          margin: 0;
          padding: 0;
        }

        h3 {
          font-size: .9rem;
        }

        .cart-header {
          display: flex;
          flex-direction: column;
          background-color: hsla(192, 71%, 34%, 1);
          color: hsla(0, 100%, 100%, 1);
          padding: 1rem 1rem;
          z-index: 2;
        }

        .cart-header-main {
          display: flex;
          justify-content: space-between;
          align-content: center;
        }

        .cart-title {
          width: 350px;
        }

        .cart-close-button {
          height: 30px;
          width: 30px;
          fill: hsla(0, 100%, 100%, 1);
          cursor: pointer;
        }

        .cart-description {
          margin: 1rem 0;
          font-size: .9rem;
        }

        .cart-products {
          display: flex;
          flex-direction: column;
          min-height: 40%;
          max-height: 40%;
          overflow-y: scroll;
          padding: 1rem;
        }

        .cart-products::-webkit-scrollbar {
          width: 10px;
        }

        .cart-products::-webkit-scrollbar-thumb {
          background-color: hsla(192, 71%, 40%, .4);
          border-radius: 5px;
        }

        .cart-product {
          display: flex;
          border-bottom: 1px solid hsla(0, 0%, 70%, 1); 
        }

        .product-picture {
          width: 25%;
          padding: 1rem 0;
        }

        .product-picture img {
          height: 70px;
          width: 70px;
          object-fit: cover;
          border-radius: 20px;
        }

        .product-content {
          position: relative;
          width: 70%;
          padding: 1rem 0;
        }

        .product-title {
          width: 80%
        }

        .plus-minus-button {
          padding: .7rem 0;
        }

        .remove-button {
          position: absolute;
          padding: .5rem;
          top: 0;
          right: 0;
        }

        .cart-product svg {
          height: 20px;
          width: 20px;
          fill: hsla(0, 0%, 70%, 1);
        }

        .cart-message {
          display: flex;
          flex-direction: column;
          padding: 2rem 0;
          font-size: 1.2rem;
          font-weight: bold;
          align-items: center;
        }

        .cart-message-image svg {
          padding: 1rem;
          height: 4rem;
          width: 4rem;

        }

        button {
          width: 100%;
          margin: 1rem 0;
          padding: .8rem;
          border: none; 
          border-radius: 10px;
          cursor: pointer;
          background-color: hsla(48, 93%, 53%, 1);
          font-size: 1rem;
          font-weight: bold;
        }

        @media (hover: hover) {
          button:hover {
            background-color: hsla(48, 93%, 53%, .8);
            color: hsla(0, 0%, 0%, 1);
          }

          .cart-button:hover button{
            background-color: hsla(48, 93%, 53%, 1);
          }
        }

      </style>
      <div class="cart-button">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-clock-outline</title><path d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z" /></svg>
        </button>
      </div>
      <section class="cart">
        <div class="cart-header">
          <div class="cart-header-main">
            <div class="cart-title">
              <h2>Tu horario para el evento</h2>
            </div>
            <div class="cart-close-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
            </div>
          </div>
          <div class="cart-description">
            <p>Dinos cuántas personas quieres apuntar a cada actividad</p>
          </div>  
        </div>
        <div class="cart-products"></div>
      </section>
      `
    const cartButton = this.shadow.querySelector('.cart-button')
    const cart = this.shadow.querySelector('.cart')

    cart.addEventListener('click', event => {
      if (event.target.closest('.remove-button')) {
        const removeButton = event.target.closest('.remove-button')
        const productId = removeButton.getAttribute('data-product-id')

        console.log(productId)

        this.removeProduct(productId)
      }

      if (event.target.closest('.cart-close-button')) {
        cart.classList.remove('active')
      }
    })

    cartButton.addEventListener('click', () => {
      cart.classList.add('active')
    })

    const cartProducts = this.shadow.querySelector('.cart-products')
    const products = this.data

    if (products.length === 0) {
      const cartProducts = this.shadow.querySelector('.cart-products')
      const cartMessage = document.createElement('div')
      cartMessage.classList.add('cart-message')
      cartProducts.appendChild(cartMessage)

      const cartMessageText = document.createElement('p')
      cartMessageText.textContent = 'No has añadido actividades al carrito'
      cartMessage.appendChild(cartMessageText)

      const cartMessageImage = document.createElement('div')
      cartMessageImage.classList.add('cart-message-image')
      cartMessageImage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg>'
      cartMessage.appendChild(cartMessageImage)
    }

    if (products.length > 0) {
      const checkoutComponent = document.createElement('checkout-form-component')
      cart.appendChild(checkoutComponent)
    }

    products.forEach(product => {
      const cartProduct = document.createElement('div')
      cartProduct.classList.add('cart-product')
      cartProducts.appendChild(cartProduct)

      const productPicture = document.createElement('div')
      productPicture.classList.add('product-picture')
      cartProduct.appendChild(productPicture)

      const pictureElement = document.createElement('picture')
      productPicture.appendChild(pictureElement)

      const sourceLg = document.createElement('source')
      sourceLg.setAttribute('src', product.images.lg.src)
      sourceLg.setAttribute('type', 'image/webp')
      sourceLg.setAttribute('media', '(min-width: 1200px)')
      pictureElement.appendChild(sourceLg)

      const sourceMd = document.createElement('source')
      sourceMd.setAttribute('src', product.images.md.src)
      sourceMd.setAttribute('type', 'image/webp')
      sourceMd.setAttribute('media', '(min-width: 992px)')
      pictureElement.appendChild(sourceMd)

      const sourceSm = document.createElement('source')
      sourceSm.setAttribute('src', product.images.sm.src)
      sourceSm.setAttribute('type', 'image/webp')
      sourceSm.setAttribute('media', '(min-width: 768px)')
      pictureElement.appendChild(sourceSm)

      const sourceXs = document.createElement('source')
      sourceXs.setAttribute('src', product.images.xs.src)
      sourceXs.setAttribute('type', 'image/webp')
      sourceXs.setAttribute('media', '(min-width: 600px)')
      pictureElement.appendChild(sourceXs)

      const image = document.createElement('img')
      image.setAttribute('src', product.images.lg.src)
      image.setAttribute('alt', product.images.lg.alt)
      image.setAttribute('title', product.images.lg.title)
      pictureElement.appendChild(image)

      const productContent = document.createElement('div')
      productContent.classList.add('product-content')
      cartProduct.appendChild(productContent)

      const productTitle = document.createElement('div')
      productTitle.classList.add('product-title')
      productContent.appendChild(productTitle)

      const titleElement = document.createElement('h3')
      titleElement.textContent = product.title
      productTitle.appendChild(titleElement)

      const plusMinusButtonContainer = document.createElement('div')
      plusMinusButtonContainer.classList.add('plus-minus-button')
      productContent.appendChild(plusMinusButtonContainer)

      const plusMinusButton = document.createElement('plus-minus-button-component')
      plusMinusButton.setAttribute('product-id', product.id)
      plusMinusButton.setAttribute('quantity', product.quantity)
      plusMinusButtonContainer.appendChild(plusMinusButton)

      const removeButton = document.createElement('div')
      removeButton.classList.add('remove-button')
      removeButton.setAttribute('data-product-id', product.id)
      removeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>'

      productContent.appendChild(removeButton)
    })
  }

  async addProduct (id) {
    const response = await fetch(`/src/data/products/${id}.json`)
    const product = await response.json()
    this.data.push(product)

    this.render()
  }

  async removeProduct (id) {
    store.dispatch(removeProduct(id))
    this.data = this.data.filter(product => product.id !== id)
    this.render()
  }
}

customElements.define('cart-component', Cart)

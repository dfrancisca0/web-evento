class Cart extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
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
        <checkout-form-component></checkout-form-component>
      </section>
      `
    const cartButton = this.shadow.querySelector('.cart-button')
    const cartOpen = this.shadow.querySelector('.cart')
    const cartCloseButton = this.shadow.querySelector('.cart-close-button')

    cartButton.addEventListener('click', () => {
      cartOpen.classList.add('active')
    })

    cartCloseButton.addEventListener('click', () => {
      cartOpen.classList.remove('active')
    })

    const cart = this.shadow.querySelector('.cart-products')
    const products = this.data

    products.forEach(product => {
      const cartProduct = document.createElement('div')
      cartProduct.classList.add('cart-product')
      cart.appendChild(cartProduct)

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
      plusMinusButtonContainer.appendChild(plusMinusButton)

      const removeButton = document.createElement('div')
      removeButton.classList.add('remove-button')
      removeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>'

      productContent.appendChild(removeButton)
    })
  }

  async addProduct (product) {
    const cart = this.shadow.querySelector('.cart-products')
    const cartProduct = document.createElement('div')
    cartProduct.classList.add('cart-product')
    cart.appendChild(cartProduct)

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
    plusMinusButtonContainer.appendChild(plusMinusButton)

    const removeButton = document.createElement('div')
    removeButton.classList.add('remove-button')
    removeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>'

    productContent.appendChild(removeButton)
  }

  async sendForm () {
    const form = this.shadow.querySelector('form')
    const formData = new FormData(form)
    const formDataJson = Object.fromEntries(formData.entries())

    const response = await fetch('http://localhost:5173/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataJson)
    })

    const message = response.json()

    document.dispatchEvent(new CustomEvent('message', {
      detail: {
        text: message
      }
    }))
  }
}

customElements.define('cart-component', Cart)

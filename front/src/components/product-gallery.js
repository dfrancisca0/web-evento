class ProductGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()

    document.addEventListener('filter-gallery', this.handleFilterProducts.bind(this))
  }

  async loadData () {
    const response = await fetch('/src/data/product-gallery.json')
    this.data = await response.json()
  }

  async handleFilterProducts (event) {
    const products = this.shadow.querySelectorAll('.product')

    if (event.detail.category === 'todos') {
      products.forEach(product => {
        product.classList.remove('hidden')
      })
    } else {
      products.forEach(product => {
        if (event.detail.category !== product.dataset.category) {
          product.classList.add('hidden')
        } else {
          product.classList.remove('hidden')
        }
      })
    }

    // handleShowNotification (event) {
    //   const products = event.detail.category === 'todos' ? this.data : this.data.filter(product => product.category === event.detail.category)
    //   this.render(products)
    // }

    // render (products = this.data) {}
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        h2, p {
          margin: 0;
          padding: 0;
        }

        .product-gallery {
          display: grid;
          gap: 3rem;
          grid-template-columns: repeat(4, 1fr);
          justify-content: center;
        } 

        .product {
          background-color: transparent;
          width: 300px;
          height: 500px;
          perspective: 1000px;
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
        }

        .product.hidden {
          display: none;
        }

        .product-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: hsla(0, 0%, 0%, .7);
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }

        .product:hover .product-inner {
          transform: rotateY(180deg);
        }

        .product-front, .product-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .product-front {
          color: hsla(0, 100%, 100%, 1);
        }

        .product-front picture{
          position: absolute;
          height: 100%;
          width: 100%;
          opacity: .5;
          z-index: -1;
        }

        .product-front img{
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .product-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 1rem;
          gap: 1rem;
          z-index: 1;
          box-sizing: border-box;
          line-height: 1.5;
        }

        .product-front .product-text {
          bottom: 0;
        }

        .product-back {
          background-color: hsla(0, 0%, 0%, .5);
          color: hsla(0, 100%, 100%, 1);
          transform: rotateY(180deg);
          text-align: center;
        }

        .product-front .product-text {
          background-color: hsla(0, 0%, 0%, .5);
        }

        .product-gallery-button {
          bottom: 1rem;
        }

        .product-gallery-button button {
          background-color: hsla(48, 93%, 53%, 1);
          color: hsla(0, 0%, 0%, 1);
          border: none;
          border-radius: 50%;
          width: 20%;
          height: 30%;
          bottom: 1rem;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-size: 3rem;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        
        @media (hover: hover) {
          .product:hover .product-inner {
            transform: rotateY(180deg);
          }

          .productt:hover img {
            opacity: 1;
          }

          .product:hover .product-content {
            background-color: hsla(0, 0%, 0%, .8);
          }

          .product-gallery-button button:hover {
            background-color: hsla(48, 93%, 53%, .7);
          }
        }


      </style>
      <section class="product-gallery"></section>
      `

    const productGallery = this.shadow.querySelector('.product-gallery')

    this.data.forEach(object => {
      const product = document.createElement('div')
      product.classList.add('product')
      product.dataset.category = object.category.toLowerCase()
      productGallery.appendChild(product)

      const productInner = document.createElement('div')
      productInner.classList.add('product-inner')
      product.appendChild(productInner)

      const productFront = document.createElement('div')
      productFront.classList.add('product-front')
      productInner.appendChild(productFront)

      const frontPicture = document.createElement('picture')
      productFront.appendChild(frontPicture)

      const sourceLg = document.createElement('source')
      sourceLg.setAttribute('src', object.images.lg.mainImage.src)
      sourceLg.setAttribute('type', 'image/webp')
      sourceLg.setAttribute('media', '(min-width: 1200px)')
      frontPicture.appendChild(sourceLg)

      const sourceMd = document.createElement('source')
      sourceMd.setAttribute('src', object.images.md.mainImage.src)
      sourceMd.setAttribute('type', 'image/webp')
      sourceMd.setAttribute('media', '(min-width: 992px)')
      frontPicture.appendChild(sourceMd)

      const sourceSm = document.createElement('source')
      sourceSm.setAttribute('src', object.images.sm.mainImage.src)
      sourceSm.setAttribute('type', 'image/webp')
      sourceSm.setAttribute('media', '(min-width: 768px)')
      frontPicture.appendChild(sourceSm)

      const sourceXs = document.createElement('source')
      sourceXs.setAttribute('src', object.images.xs.mainImage.src)
      sourceXs.setAttribute('type', 'image/webp')
      sourceXs.setAttribute('media', '(min-width: 600px)')
      frontPicture.appendChild(sourceXs)

      const mainImage = document.createElement('img')
      mainImage.setAttribute('src', object.images.lg.mainImage.src)
      mainImage.setAttribute('alt', object.images.lg.mainImage.alt)
      mainImage.setAttribute('title', object.images.lg.mainImage.title)
      frontPicture.appendChild(mainImage)

      const productTextFront = document.createElement('div')
      productTextFront.classList.add('product-text')
      productFront.appendChild(productTextFront)

      const productTitle = document.createElement('div')
      productTitle.classList.add('product-title')
      productTextFront.appendChild(productTitle)

      const titleElement = document.createElement('h2')
      titleElement.textContent = object.title
      productTitle.appendChild(titleElement)

      const productDescription = document.createElement('div')
      productDescription.classList.add('product-description')
      productTextFront.appendChild(productDescription)

      const descriptionElement = document.createElement('p')
      descriptionElement.textContent = `${object.startTime} - ${object.endTime}`
      productDescription.appendChild(descriptionElement)

      const productBack = document.createElement('div')
      productBack.classList.add('product-back')
      productInner.appendChild(productBack)

      const productTextBack = document.createElement('div')
      productTextBack.classList.add('product-text')
      productBack.appendChild(productTextBack)

      const productTitleBack = document.createElement('div')
      productTitleBack.classList.add('product-title')
      productTextBack.appendChild(productTitleBack)

      const titleElementBack = document.createElement('h2')
      titleElementBack.textContent = object.title
      productTitleBack.appendChild(titleElementBack)

      const productDescriptionBack = document.createElement('div')
      productDescriptionBack.classList.add('product-description')
      productTextBack.appendChild(productDescriptionBack)

      const descriptionElementBack = document.createElement('p')
      descriptionElementBack.textContent = `${object.description}`
      productDescriptionBack.appendChild(descriptionElementBack)

      const button = document.createElement('div')
      button.classList.add('product-gallery-button')
      productBack.appendChild(button)

      const buttonComponent = document.createElement('add-button-component')
      buttonComponent.setAttribute('product-id', object.id)
      button.appendChild(buttonComponent)
    })

    this.shadow.querySelector('.product-gallery').addEventListener('mouseover', event => {
      if (event.target.closest('.product')) {
        const product = event.target.closest('.product')

        const timer = setTimeout(() => {
          product.classList.add('active')
        }, 500)

        product.addEventListener('mouseout', () => {
          product.classList.remove('active')
          clearTimeout(timer)
        })
      }
    })
  }
}

customElements.define('product-gallery-component', ProductGallery)

class ProductGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.orientation = this.getAttribute('orientation')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        .product-gallery {
          display: grid;
          gap: 3rem;
          grid-template-columns: repeat(4, 1fr);
          justify-content: center;
        } 

        .product-gallery-element {
          position: relative;
          display: flex;
          min-height: 50vh;
          background-color: hsla(0, 0%, 0%, 1);
        }

        .product-gallery-image{
          height: 100%;
          position: absolute;
        }

        .product-gallery-image img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          opacity: 0.3
        }

        .product-gallery-content {
          position: absolute;
          color: hsl(0, 0%, 100%);
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 400;
          margin: 0;
          text-align: center;
          z-index: 1;
        }

        .product-gallery-title {
          overflow-wrap: break-word;
        }

      </style>

      <section class= "product-gallery">
        <div class="product-gallery-element">
          <a href="">
            <div class="product-gallery-image">
              <picture>
                <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
            </div>
            <div class="product-gallery-content">
              <div class="product-gallery-title">
                <h2>Acuarela</h2>
              </div>
              <div>
                <p>10h00 - 12h00</p><br/>
              </div>
            </div>
          </a>
          <div class="product-gallery-button">
            <button>+</button>
          </div>
        </div>
        <div class="product-gallery-element">
          <a href="">
            <div class="product-gallery-image">
              <picture>
                <source srcset="./public/lettering.webp" type="image/webp">
              <img src="./public/lettering.webp" alt="lettering" title="lettering workshop">
            </picture>
            </div>
            <div class="product-gallery-content">
              <div class="product-gallery-title">
                <h2>Lettering</h2>
              </div>
              <div>
                <p>12h00 - 14h00</p><br/>
              </div>
            </div>
            <div class="product-gallery-button">
              <button>+</button>
            </div>
          </a>
        </div>
        <div class="product-gallery-element">
          <a href="">
            <div class="product-gallery-image">
              <picture>
                <source srcset="./public/candle-making.webp" type="image/webp">
                <img src="./public/candle-making.webp" alt="candle making" title="candle making workshop">
              </picture>
            </div>
            <div class="product-gallery-content">
              <div class="product-gallery-title">
                <h2>Velas</h2>
              </div>
              <div>
                <p>17h00 - 19h00</p><br/>
              </div>
            </div>
            <div class="product-gallery-button">
              <button>+</button>
            </div>
          </a>
        </div>
        <div class="product-gallery-element">
          <a href="">
            <div class="product-gallery-image">
              <picture>
                <source srcset="./public/writing.webp" type="image/webp">
              <img src="./public/writing.webp" alt="writing" title="writing workshop">
            </picture>
            </div>
            <div class="product-gallery-content">
              <div class="product-gallery-title">
                <h2>Escritura</h2>
              </div>
              <div>
                <p>17h00 - 19h00</p><br/>
              </div>
            </div>
            <div class="product-gallery-button">
              <button>+</button>
            </div>
          </a>
        </div>
      </section>
      `
  }
}

customElements.define('product-gallery-component', ProductGallery)

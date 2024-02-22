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

        .product {
          background-color: transparent;
          width: 300px;
          height: 500px;
          perspective: 1000px;
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
        }

        .product-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: hsla(0, 0%, 0%, 1);
          text-align: center;
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
          position: absolute;
          display: flex;
          color: hsla(0, 100%, 100%, 1);
        }

        .product-front picture{
          background-color: hsla(0, 0%, 0%, 1);
          opacity: .5;
          z-index: -1;
        }

        .product-front-text {
          display: flex;
          flex-direction: column;
          width: 100%;
          bottom: 0;
          padding: 1rem;
        }

        .product-back {
          background-color: hsla(0, 0%, 0%, 1);;
          color: hsla(0, 100%, 100%, 1);
          transform: rotateY(180deg);
        }

        .product-front img{
          height: 100%;
          width: 100%;
          object-fit: cover;
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
          .product-gallery-element:hover .product-gallery-element-inner {
            transform: rotateY(180deg);
          }

          .product-gallery-element:hover img {
            opacity: 1;
          }

          .product-gallery-element:hover .product-gallery-content {
            background-color: hsla(0, 0%, 0%, .8);
          }

          .product-gallery-button button:hover {
            background-color: hsla(48, 93%, 53%, .7);
          }
        }


      </style>
      <section class="product-gallery">
        <div class="product">
          <div class="product-inner">
            <div class="product-front">
              <picture>
                <source srcset="./public/watercolor.webp" type="image/webp">
                <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
              </picture>
              <div class="product-front-text">
                <div class="product-title">
                  <h2>Acuarela</h2>
                </div>
                <div class="product-description">
                  <p>10h00 - 12h00</p><br/>
                </div>
              </div>
            </div>
            <div class="product-back">
              <div class="product-gallery-title">
                <h2>Acuarela</h2>
              </div>
              <div class="product-gallery-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>
              </div>
              <div class="product-gallery-button">
                <add-button-component></add-button-component>
              </div>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="product-inner">
            <div class="product-front">
              <picture>
                <source srcset="./public/lettering.webp" type="image/webp">
                <img src="./public/lettering.webp" alt="lettering" title="lettering workshop">
              </picture>
              <div class="product-front-text">
                <div class="product-title">
                  <h2>Lettering</h2>
                </div>
                <div class="product-description">
                  <p>10h00 - 12h00</p><br/>
                </div>
              </div>
            </div>
            <div class="product-back">
              <div class="product-gallery-title">
                <h2>Lettering</h2>
              </div>
              <div class="product-gallery-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>
              </div>
              <div class="product-gallery-button">
                <add-button-component></add-button-component>
              </div>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="product-inner">
            <div class="product-front">
              <picture>
                <source srcset="./public/candle-making.webp" type="image/webp">
                <img src="./public/candle-making.webp" alt="candle making" title="candle making workshop">
              </picture>
              <div class="product-title">
                <h2>Velas</h2>
              </div>
              <div class="product-description">
                <p>10h00 - 12h00</p><br/>
              </div>
            </div>
            <div class="product-back">
              <div class="product-gallery-title">
                <h2>Velas</h2>
              </div>
              <div class="product-gallery-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>
              </div>
              <div class="product-gallery-button">
                <add-button-component></add-button-component>
              </div>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="product-inner">
            <div class="product-front">
              <picture>
                <source srcset="./public/writing.webp" type="image/webp">
                <img src="./public/writing.webp" alt="writing" title="writing workshop">
              </picture>
              <div class="product-title">
                <h2>Escritura</h2>
              </div>
              <div class="product-description">
                <p>10h00 - 12h00</p><br/>
              </div>
            </div>
            <div class="product-back">
              <div class="product-gallery-title">
                <h2>Escritura</h2>
              </div>
              <div class="product-gallery-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>
              </div>
              <div class="product-gallery-button">
                <add-button-component></add-button-component>
              </div>
            </div>
          </div>
        </div>
      </section>
      `
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

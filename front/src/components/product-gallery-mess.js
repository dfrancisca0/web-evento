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
          background-color: transparent;
          width: 300px;
          height: 300px;
          perspective: 1000px;
        }

        .product-gallery-element-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: hsla(0, 0%, 0%, 1);
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }

        .product-gallery-front, .product-gallery-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .product-gallery-front {
        }

        .product-gallery-back {
          background-color: hsla(0, 0%, 0%, 0);
          color: hsla(0, 100%, 100%, 0);;
          transform: rotateY(180deg);
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
          bottom:  0;
          padding: 1rem 0;
          z-index: 1;
          width: 100%;
          opacity: 0.8;
          color: hsl(0, 0%, 100%);
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 400;
          text-align: center;
        }

        .product-gallery-title {
          overflow-wrap: break-word;
        }

        .product-gallery-description p {
          margin: 0;
          padding: 0;
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

        .flip-card {
          background-color: transparent;
          width: 300px;
          height: 300px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-front {
          background-color: #bbb;
          color: black;
        }

        .flip-card-back {
          background-color: #2980b9;
          color: white;
          transform: rotateY(180deg);
        }

      </style>
       
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <section class= "product-gallery">
        <div class="product-gallery-element">
          <div class="product-gallery-element-inner">
            <a href="">
              <div class="product-gallery-front">
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
                  <div class="product-gallery-description">
                    <p>10h00 - 12h00</p><br/>
                  </div>
                  <div class="product-gallery-button">
                    <button>+</button>
                  </div>
                </div>
              </div>
              <div class="product-gallery-back">
                <div class="product-gallery-content">
                  <div class="product-gallery-title">
                    <h2>Lettering</h2>
                  </div>
                  <div class="product-gallery-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="product-gallery-element">
          <div class="product-gallery-element-inner">
            <a href="">
              <div class="product-gallery-front">
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
                  <div class="product-gallery-description">
                    <p>12h00 - 14h00</p><br/>
                  </div>
                  <div class="product-gallery-button">
                    <button>+</button>
                  </div>
                </div>
              </div>
              <div class="product-gallery-back">
                <div class="product-gallery-content">
                  <div class="product-gallery-title">
                    <h2>Lettering</h2>
                  </div>
                  <div class="product-gallery-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br/>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="product-gallery-element">
          <div class="product-gallery-element-inner">
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
                <div class="product-gallery-description">
                  <p>17h00 - 19h00</p><br/>
                </div>
                <div class="product-gallery-button">
                  <button>+</button>
                </div>  
              </div>
            </a>
          </div>
        </div>
        <div class="product-gallery-element">
          <div class="product-gallery-element-inner">
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
                <div class="product-gallery-description">
                  <p>17h00 - 19h00</p><br/>
                </div>
                <div class="product-gallery-button">
                  <button>+</button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      `
    this.shadow.querySelector('.product-gallery').addEventListener('mouseover', event => {
      if (event.target.closest('.product')) {
        const product = event.target.closest('.product')

        const timer = setTimeout(() => {
          alert('hola')
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

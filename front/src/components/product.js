class Product extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.columns = this.getAttribute('columns') || 1
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    this.data = {
      title: 'Taller de Acuarela',
      subtitle: 'Organizador: Lorem Ipsum',
      startTime: '10h00',
      endTime: '12h00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      buttonLabel: 'Reserva tu plaza',
      images: {
        alt: 'watercolor',
        title: 'watercolor workshop',
        xs: {
          src: '/public/watercolor-mobile.webp'
        },
        sm: {
          src: '/public/watercolor-mobile.webp'
        },
        md: {
          src: '/public/watercolor.webp'
        },
        lg: {
          src: '/public/watercolor.webp'
        }
      }
    }
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
        
        <style>

          h2, h3, p {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
          }

          .product {
            display: flex;
            height: 60vh;
            width: 70%;
            margin: 2% 10%;
            padding: 5%;
            gap: 2rem;
            border-radius: 10px;
            justify-content: space-evenly;
            background-color: hsla(192, 71%, 34%, .2);
          }

          .product-picture img {
            height: 60vh;
            border-radius: 5px;
          }

          .product-content {
            display: flex;
            flex-direction: column;
            height: 60vh;
            padding: 0 2rem;
            border-radius: 5px;
            background-color: hsla(0, 100%, 100%, 1);
          }

          .product-header {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 2rem 0;
          }

          .product-header-elements {
            display: flex;
            justify-content: space-between;
          } 

          .product-element-secondary {
            display: flex;
            gap: 1rem;
            align-items: center;
          }

          .product-element-secondary svg  {
            height: 2rem;
            width: 2rem;
          }

          .product-description {
            width: 50vh;
            line-height: 1.5;
          }

          .product-add {
            display: flex;
            height: 3rem;
            width: 80%;
            margin: 2rem;
            padding: .5rem 0;
            border-radius: 5px;
            gap: 2rem;
            background-color: hsla(48, 93%, 53%, 1); 
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          @media (hover: hover) {
            .product-add:hover {
              background-color: hsla(48, 93%, 53%, .8); 
            }
          }

        </style>
        
        <section class="product">
          <div class="product-picture">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <div class="product-content">
            <div class="product-header">
              <div class="product-header-elements">
                <div class="product-element">
                  <h2>${this.data.title}</h2>
                </div>
                <div class="product-element">
                  <div class="product-element-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-clock-outline</title><path d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z" /></svg>
                    <h3>${this.data.startTime} - ${this.data.endTime}</h3>
                  </div>
                </div>
              </div>  
              <div class="product-subtitle">
                <h3>${this.data.subtitle}</h3>
              </div>
            </div>
            <div class="product-description">
              <div class="product-descripton-text">
                <p>${this.data.description}</p>
              </div>
              <div class="product-add">
                <div class="product-add-label">
                  <h2>${this.data.buttonLabel}</h2>
                </div>
                <div class="product-add-button">
                  <add-button-component text="Reserva tu plaza" color="hsla(0, 0%, 0%, 1)" disableHover></add-button-component>
                </div>
              </div>
            </div>
          </div>
        </section>
      `

    this.shadow.querySelector('.product-add').addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('add-element'))
    })
  }
}

customElements.define('product-component', Product)

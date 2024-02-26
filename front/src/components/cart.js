class Cart extends HTMLElement {
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

        .cart-elements {
          display: flex;
          flex-direction: column;
          max-height: 40%;
          overflow-y: scroll;
          padding: 1rem;
        }

        .cart-elements::-webkit-scrollbar {
          width: 10px;
        }

        .cart-elements::-webkit-scrollbar-thumb {
          background-color: hsla(192, 71%, 40%, .4);
          border-radius: 5px;
        }

        .cart-element {
          display: flex;
          border-bottom: 1px solid hsla(0, 0%, 70%, 1); 
        }

        .cart-element-picture {
          width: 25%;
          padding: 1rem 0;
        }

        .cart-element-picture img {
          height: 70px;
          width: 70px;
          object-fit: cover;
          border-radius: 20px;
        }

        .cart-element-content {
          width: 70%;
          padding: 1rem 0;
        }

        .plus-minus-button {
          padding: .7rem 0;
        }

        .cart-element .cart-close-button {
          padding: .5rem;
        }

        .cart-element svg {
          height: 20px;
          width: 20px;
          fill: hsla(0, 0%, 70%, 1);
        }

        .cart-form {
          height: 50%;
          box-sizing: border-box;
          border-top: thin dashed hsla(0, 0%, 70%, 1); 
          background-color: hsla(0, 100%, 100%, 1);
          font-size: .9rem;
          font-weight: bold;
          padding: 1rem;
        }

        .form-element{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-element-label{
          padding: 1rem 0 0 0;
        }

        .form-element-label label{
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .form-element-input input {
          height: 2rem;
          width: 95%;
          border: 1px solid hsla(0, 0%, 70%, 1); 
          border-radius: 5px;
        }

        .form-checkbox {
          width: 100%;
          padding: 1rem 0;
        }

        .form-checkbox label {
          font-weight: normal;
        }

        .form-checkbox input {
          height: 1rem;
          width:1rem;
          cursor: pointer;
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
        <div class="cart-elements">
          <div class="cart-element">
            <div class="cart-element-picture">
              <picture>
                <source srcset="./public/watercolor.webp" type="image/webp">
                <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
              </picture>
            </div>
            <div class="cart-element-content">
              <div class="cart-element-title">
                <h3>Taller de Acuarela</h3>
              </div>
              <div class="plus-minus-button">
                <plus-minus-button-component></plus-minus-button-component>
              </div>
            </div>
            <div class="cart-close-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
            </div>
          </div>
          <div class="cart-element">
            <div class="cart-element-picture">
              <picture>
                <source srcset="./public/lettering.webp" type="image/webp">
                <img src="./public/lettering.webp" alt="lettering" title="lettering workshop">
              </picture>
            </div>
            <div class="cart-element-content">
              <div class="cart-element-title">
                <h3>Taller de Lettering</h3>
              </div>
              <div class="plus-minus-button">
                <plus-minus-button-component></plus-minus-button-component>
              </div>
            </div>
            <div class="cart-close-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
            </div>
          </div>
          <div class="cart-element">
            <div class="cart-element-picture">
              <picture>
                <source srcset="./public/candle-making.webp" type="image/webp">
                <img src="./public/candle-making.webp" alt="candle making" title="candle making workshop">
              </picture>
            </div>
            <div class="cart-element-content">
              <div class="cart-element-title">
                <h3>Taller de Velas</h3>
              </div>
              <div class="plus-minus-button">
                <plus-minus-button-component></plus-minus-button-component>
              </div>
            </div>
            <div class="cart-close-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
            </div>
          </div>
          <div class="cart-element">
            <div class="cart-element-picture">
              <picture>
                <source srcset="./public/writing.webp" type="image/webp">
                <img src="./public/writing.webp" alt="writing" title="writing workshop">
              </picture>
            </div>
            <div class="cart-element-content">
              <div class="cart-element-title">
                <h3>Taller de Escritura</h3>
              </div>
              <div class="plus-minus-button">
                <plus-minus-button-component></plus-minus-button-component>
              </div>
            </div>
            <div class="cart-close-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
            </div>
          </div>
        </div>
        <div class="cart-form">
          <form>
            <div class="form-element">
              <div class="form-element-label">
                <label for="name">Nombre</label><br>  
              </div>
              <div class="form-element-input">
                <input type="text" id="name" name="name"><br>  
              </div>
            </div>
            <div class="form-element">
              <div class="form-element-label">
                <label for="name">Apellido</label><br> 
              </div> 
              <div class="form-element-input">
                <input type="text" id="name" name="name"><br> 
              </div> 
            </div>
            <div class="form-element">
              <div class="form-element-label">
                <label for="email">Correo electrónico</label><br>  
              </div>
              <div class="form-element-input">
                <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" size="30" required />
              </div>
            </div>
            <div class="form-checkbox"> 
              <input type="checkbox" id="yn" name="yn" value="">   
              <label for="yn">Quiero recibir información sobre eventos futuros<label>
            </div>
          </form>
          <button>Reserva tu plaza</button>
        </div>
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

    const minusButton = this.shadow.querySelector('.minus')
    const plusButton = this.shadow.querySelector('.plus')
    const productQuantity = this.shadow.querySelector('.plus-minus-input')

    minusButton.addEventListener('click', () => {
      if (productQuantity === 0) {

      } else {

      }
    })

    plusButton.addEventListener('click', () => {

    })
  }
}

customElements.define('cart-component', Cart)

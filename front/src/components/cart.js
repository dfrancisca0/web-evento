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

        .cart {
          position: fixed;
          height: 100vh;
          min-height: 100vh;
          width: 400px;
          right: 0;
          top: 0;
          background-color: hsla(0, 100%, 100%, 1);
          z-index: 5000;
          font-family: 'Poppins', sans-serif;
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
          height: 10%;
          background-color: hsla(192, 71%, 34%, 1);
          color: hsla(0, 100%, 100%, 1);
          padding: 0.5rem 1rem;
        }

        .cart-header-main {
          display: flex;
          justify-content: space-between;
          align-content: center;
        }

        .cart-title {
          width: 350px;
        }

        .close-button{
          height: 30px;
          width: 30px;
          fill: hsla(0, 100%, 100%, 1);
        }

        .cart-description {
          margin: 1rem 0;
          font-size: .9rem;
        }

        .cart-elements {
          display: flex;
          flex-direction: column;
          max-height: 50%;
          overflow-y: scroll;
          padding: 1rem;
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

        .counter-button {
          padding: 1rem 0;
        }

        .cart-form {
          height: 40%;
          height: 35vh;
          box-sizing: border-box;
          border-top: dashed hsla(0, 0%, 70%, 1); 
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

        .form-element-label label{
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        input {
          height: 2rem;
          width: 95%;
          border: 1px solid hsla(0, 0%, 70%, 1); 
          border-radius: 5px;
        }

        .cart-form-checkbox {
          width: 100%;
        }

        .cart-form-checkbox input {
          height: 1rem;
          width:1rem;
        }

        button {
          width: 100%;
          margin: 1rem 0;
          padding: .8rem;
          border: none; 
          border-radius: 10px;
          background-color: hsla(48, 93%, 53%, 1);
          font-size: 1rem;
          font-weight: bold;
        }

      </style>

      <section class="cart">
        <div class="cart-header">
          <div class="cart-header-main">
            <div class="cart-title">
              <h2>Tu horario para el evento</h2>
            </div>
            <div class="close-button">
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
              <div class="counter-button">- 1 +</div>
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
                <h3>Taller de Acuarela</h3>
              </div>
              <div class="counter-button">- 1 +</div>
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
                <h3>Taller de Acuarela</h3>
              </div>
              <div class="counter-button">- 1 +</div>
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
                <h3>Taller de Acuarela</h3>
              </div>
              <div class="counter-button">- 1 +</div>
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
            <div class="cart-form-name">
              <label for="fname">Apellido</label><br>  
              <input type="text" id="fname" name="fname"><br>  
            </div>
            <div class="cart-form-email">
              <label for="email">Correo electrónico</label><br>  
              <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" size="30" required />
            </div>
            <div class="cart-form-checkbox"> 
              <input type="checkbox" id="yn" name="yn" value="">   
              <label for="yn">Quiero recibir información sobre eventos futuros<label>
            </div>
          </form>
          <button>Reserva tu plaza</button>
        </div>
      </section>
      `
  }
}

customElements.define('cart-component', Cart)

class CheckoutForm extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.render()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        .checkout {
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
        }

      </style>
        <section class="checkout">
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
                <input type="text" id="name" name="last-name"><br> 
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
              <input type="checkbox" id="newsletter" name="newsletter" value="true">   
              <label for="newsletter">Quiero recibir información sobre eventos futuros<label>
            </div>
          </form>
          <div class="send-button">
            <button>Reserva tu plaza</button>
          </div>
        </section>
      `

    const sendButton = this.shadow.querySelector('.send-button')

    sendButton.addEventListener('click', () => {
      this.sendForm()
    })
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

customElements.define('checkout-form-component', CheckoutForm)

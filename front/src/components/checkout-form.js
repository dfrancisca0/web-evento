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
          display: flex;
          justify-content: space-between;
          padding: 1rem 0 0 0;
        }

        .form-element-label label{
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .form-element-input input {
          height: 2rem;
          width: 100%;
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

        button:hover {
          background-color: hsla(48, 93%, 53%, .8);
          color: hsla(0, 0%, 0%, 1);
        }

        .form-element-input input.validation-error {
          border-color: hsla(0, 100%, 50%, 1)
        }

        .validation-message {
          color: hsla(0, 100%, 50%, 1);
          font-weight: normal;
          font-size: 0.8rem
        }

      </style>
        <section class="checkout">
          <div class="validation-message">
            <ul></ul>
          </div>
          <form>
            <div class="form-element">
              <div class="form-element-label">
                <label for="name">Nombre</label>
              </div>
              <div class="form-element-input">
                <input type="text" id="name" name="name" data-validate='{
                  "required": {
                    "message": "Campo obligatorio"
                  }, 
                  "onlyLetters": {
                    "message": "Sólo se admiten letras"
                  }
                }'/> 
              </div>
            </div>
            <div class="form-element">
              <div class="form-element-label">
                <label for="name">Apellido</label> 
              </div> 
              <div class="form-element-input">
                <input type="text" id="name" name="last-name"  data-validate='{
                  "required": {
                    "message": "Campo obligatorio"
                  }, 
                  "onlyLetters": {
                    "message": "Sólo se admiten letras"
                  }
                }'/>
              </div> 
            </div>
            <div class="form-element">
              <div class="form-element-label">
                <label for="email">Correo electrónico</label> 
              </div>
              <div class="form-element-input">
                <input type="email" id="email" name="email"  data-validate='{
                  "required": {
                    "message": "Campo obligatorio"
                  }, 
                  "onlyLetters": {
                    "message": "Debes ingresar una dirección válida"
                  }
                }'/>
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
    const validateInputs = this.shadow.querySelectorAll('input[data-validate]')

    sendButton.addEventListener('click', () => {
      this.sendForm()
    })

    validateInputs.forEach(validateInput => {
      validateInput.addEventListener('input', event => {
        const elements = [event.target]
        this.validateForm(elements)
      })
    })
  }

  async sendForm () {
    const form = this.shadow.querySelector('form')

    if (!this.validateForm(form.elements)) {
      return
    }
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

  validateForm (elements) {
    let validForm = true

    const validators = {
      onlyLetters: /^[a-zA-Z\s]+$/g,
      onlyNumbers: /\d/g,
      telephone: /^\d{9}$/g,
      email: /\w+@\w+\.\w+/g,
      web: /^(http|https):\/\/\w+\.\w+/g,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
      date: /^\d{4}-\d{2}-\d{2}$/g,
      time: /^\d{2}:\d{2}$/g,
      required: /^(?!\s*$).+/g,
      minLength: (value) => new RegExp(`^.{${value},}$`),
      maxLength: (value) => new RegExp(`^.{0,${value}}$`)
    }

    for (const element of elements) {
      if (element.dataset.validate) {
        const inputValidations = JSON.parse(elements.dataset.validate)

        if (element.value === '' && inputValidations.required) {
          if (!element.closest('.form-element').querySelector('.validation-error')) {
            const messageContainer = document.createElement('span')
            messageContainer.classList.add('validation-error')
            messageContainer.textContent = inputValidations.required.message
            element.closest('.form-element').querySelector('.form-element-label').appendChild(messageContainer)
          } else {
            element.closest('.form-element').querySelector('.validation-error').textContent = inputValidations.required.message
          }

          return
        }

        for (const [validator, validation] of Object.entries(inputValidations)) {
          let regex = validators[validator]

          if (validator === 'minLength') {
            regex = validators[validator](validation.value)
          }
          if (validator === 'maxLength') {
            regex = validators[validator](validation.value)
          }

          const valid = element.value.match(regex)

          if (valid === null) {
            element.classList.add('validation-error')
            const label = element.closest('.form-element').querySelector('.form-element-label')

            if (!label.querySelector('.validation-error')) {
              const validationMessageContainer = document.createElement('span')
              validationMessageContainer.classList.add('validation-error')
              validationMessageContainer.textContent = validation.message
              label.appendChild(validationMessageContainer)
            }
            validForm = false
          } else {
            element.classList.remove('validation-error')

            const validationMessageSpan = element.closest('.form-element').querySelector('.validation-error')

            if (validationMessageSpan) {
              validationMessageSpan.remove()
            }
          }
        }
      }
    }
    return validForm
  }
}

customElements.define('checkout-form-component', CheckoutForm)

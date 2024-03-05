class PlusMinusButton extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        button {
          width: 15%;
          margin: 0;
          padding: .5rem .5rem;
          border: none; 
          border-radius: 10px;
          cursor: pointer;
          background-color: hsla(48, 93%, 53%, 1);
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
        }

        input {
          width: 5%;
          margin: 0;
          padding: .4rem .4rem;
          border: none; 
          border-radius: 5px;
          font-weight: bold;
          text-align: center; 
          outline: none;
        }

        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        @media (hover: hover) {
          button:hover {
            background-color: hsla(48, 93%, 53%, .8);
            color: hsla(0, 0%, 0%, 1);
          }
        }

      </style>

      <div class="plus-minus-button">
        <button class="minus">−</button>
        <input type="number" value="1" class="plus-minus-input"/>
        <button class="plus">+</button>
      </div>
      `
    const plusMinusButton = this.shadow.querySelector('.plus-minus-button')
    const productQuantity = this.shadow.querySelector('.plus-minus-input')

    plusMinusButton.addEventListener('click', event => {
      if (event.target.closest('.plus')) {
        productQuantity.value = (parseInt(productQuantity.value)) + 1
      }

      if (event.target.closest('.minus') && productQuantity.value > 1) {
        productQuantity.value = (parseInt(productQuantity.value)) - 1
      }
    })
  }
}

customElements.define('plus-minus-button-component', PlusMinusButton)

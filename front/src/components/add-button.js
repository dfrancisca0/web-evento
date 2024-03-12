class AddButton extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.color = this.getAttribute('color') || 'hsla(48, 93%, 53%, 1)'
    this.disableHover = this.hasAttribute('disable-hover')
  }

  connectedCallback () {
    document.addEventListener('add-element', this.handleAddElement.bind(this))

    this.render()
  }

  handleAddElement (event) {
    this.addElement()
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>

        button:focus {
          outline:0;
        }

        .add-button * {
          box-sizing: border-box;
        }

        .add-button {
          margin: auto;
          display: flex;
          background-color: transparent; 
          border-radius: 50px;
          width: 40px;
          height: 40px;
          border: 2px solid ${this.color};
          padding: 0;
          position: relative;
          cursor: pointer;
        }

        .add-button.active {
          background-color: hsla(48, 93%, 53%, 1);
          border: none;
        }

        .button-icon {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          border-radius: 100px;
          padding: 2px 6px 3px;
        }
      
        .add-button.active .loader {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          border-radius: 100px;
          border-left:3px solid hsla(23, 95%, 52%, 1);
          border-bottom:3px solid transparent;
          border-right:3px solid transparent;
          border-top:3px solid transparent;
          animation: rotation linear .5s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards; 
        }

        .line {
          display: flex;
          background: #ecf0f1;
          width: 90%;
          height: 3px;
          position: absolute;
          border-radius: 4px;
          transition: all 0.4s;
        }

        .line {
          width: 60%; 
          left:20%; 
          background-color: ${this.color};
        }

        .line:nth-child(1) {
        }

        .line:nth-child(2) {
          transform: translateX(0) rotate(90deg);
        }

        .add-button.active .line { 
          left: 5%; 
          background-color: hsla(0, 0%, 0%, 1);
        }

        .add-button.active .line:nth-child(1) {
          transform: translateX(47%) rotate(45deg);
          top: 63%;
          width: 30%;
        }

        .add-button.active .line:nth-child(2) {
          transform: translateX(50%) rotate(-55deg);
          top: 52%;
          width: 55%;
        }

        :host(:not([disable-hover])) .add-button:hover {
          background-color: transparent !important;
        }

        :host(:not([disable-hover])) .add-button.active:hover {
          background-color: hsla(48, 93%, 53%, 1) !important;
        }

        @keyframes rotation{
          0%{
            transform: rotate(0);
          }
          100%{
            display: none;
            transform: rotate(400deg);
          }
        }

        @media (hover: hover) {

          .add-button:hover {
            background-color: hsla(0, 100%, 100%, .3);
            cursor: pointer;
          }

          .add-button.active:hover {
            background-color: hsla(48, 93%, 53%, 1);
            cursor: pointer;
          }
          
        }
      </style>

      <button class="add-button">
        <div class="button-icon">
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="loader"></div>
      </button>
    `

    const button = this.shadow.querySelector('button')

    button.addEventListener('click', () => {
      this.addElement()
    })
  }

  addElement () {
    const button = this.shadow.querySelector('button')

    button.classList.toggle('active')

    if (button.classList.contains('active')) {
      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          text: 'Se ha añadido la actividad al carrito'
        }
      }))
    } else {
      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          text: 'Se ha removido la actividad al carrito'
        }
      }))
    }
  }
}

customElements.define('add-button-component', AddButton)

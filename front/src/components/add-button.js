class AddButton extends HTMLElement {
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

        button:focus {
          outline:0;
        }

        .sf-btn * {
          box-sizing: border-box;
        }

        .sf-btn {
          margin: auto;
          display: flex;
          background-color: hsla(48, 93%, 53%, 1);
          border-radius: 50px;
          width: 40px;
          height: 40px;
          border: none;
          padding: 0;
          position: relative;
        }

        .sf-btn.add {
          background-color: transparent; 
          border: 2px solid #C8C8C8; 
        }
        .sf-btn.update { 
          border-color: #EDA549;
        }

        .sf-btn.active {
          background-color: hsla(48, 93%, 53%, 1);
          border: none;
        }

        .sf-btn.loading {
          background-color: #fff;
          border: none;
        }

        .icn-sf {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          border: none;
          border-radius: 100px;
          padding: 2px 6px 3px;
        }
        
        .loading .icn-sf:not(.line) {
          background-color: #4574bc;
        }

        .active .loader {
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
          left: 5%;
          border-radius: 4px;
          transition: all 0.4s;
        }

        .add .line {
          width: 60%; 
          left:20%; 
          background-color: hsla(0, 0%, 78%, 1);
        }

        .add.update .line {
          background-color: hsla(0, 0%, 78%, 1);
        }

        .add .line-1 {
          top: 50%;
          margin-top: -2px;
        }

        .add .line-2 {
          transform:         translateX(0) rotate(90deg);
          top: 50%;
          margin-top: -2px;
        }

        .active .line { 
          left: 5%; 
          background-color:  hsla(0, 0%, 0%, 1);
        }

        .sf-btn.active .line-1 {
          transform:         translateX(47%) rotate(45deg);
          top: 63%;
          width: 30%;
        }

        .sf-btn.active .line-2 {
          transform:         translateX(50%) rotate(-55deg);
          top: 52%;
          width: 55%;
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
      </style>

      <button type="submit" class="sf-btn add">
        <div class="icn-sf">
          <span class="line line-1"></span>
          <span class="line line-2"></span>
        </div>
        <div class="loader"></div>
      </button>
    `

    const button = this.shadow.querySelector('button')

    button.addEventListener('click', function () {
      button.classList.toggle('active')
    })
  }
}

customElements.define('add-button-component', AddButton)

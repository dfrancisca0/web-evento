class Header extends HTMLElement {
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
          header {
            position: sticky;
            display: flex;
            background-color: hsla(0, 0%, 0%, 1);
            width: 90%;
            justify-content: space-between;
            align-items: center;
            padding: 1% 5%;
            top: 0;
            z-index: 5000;
          }
        </style>

        <header>
          <slot></slot>
        </header>
      `
  }
}

customElements.define('header-component', Header)

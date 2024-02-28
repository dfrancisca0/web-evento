class Description extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.color = this.getAttribute('color') || 'hsl(0,0%,0%)'
    this.fontFamily = this.getAttribute('font-family') || "'Poppins', sans-serif"
    this.lineHeight = this.getAttribute('line-height') || '1.5'
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>
        p {
          color: ${this.color};
          margin: 0;
          padding: 0;
          font-family: ${this.fontFamily};
          line-height: ${this.lineHeight};
        }

        .description{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem 5rem;
          width: 90%;
        }
      </style>

      <div class="description">
        <p>
          <slot></slot>
        </p>
      </div>
      `
  }
}

customElements.define('description-component', Description)

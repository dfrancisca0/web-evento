class Title extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.tag = this.getAttribute('tag') || 'h1'
    this.text = this.getAttribute('text')
    this.color = this.getAttribute('color') || 'hsl(0,0%,0%)'
    this.fontFamily = this.getAttribute('font-family') || "'Poppins', sans-serif"
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>
        h1, h2, h3, h4, h5, h6 {
          color: ${this.color};
          margin: 0;
          padding: 0;
          font-family: ${this.fontFamily};
        }

        .title{
          align-items: center;
          display: flex;
          justify-content: center;
          padding: 1rem 0;
          width: 100%;
        }
      </style>

      <div class="title"></div>
      `

    const titleContainer = this.shadow.querySelector('.title')
    const title = document.createElement(this.tag)

    title.textContent = this.text
    titleContainer.appendChild(title)
  }
}

customElements.define('title-component', Title)

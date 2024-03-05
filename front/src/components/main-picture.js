class MainPicture extends HTMLElement {
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

      .main-picture img {
          height: 30vh;
          width: 100%;
          object-fit: cover;
        }

      </style>

      <div class="main-picture">
        <picture>
          <source srcset="./public/son-sampol.webp" type="image/webp">
          <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
        </picture>
      </div>      
      `
  }
}

customElements.define('main-picture-component', MainPicture)

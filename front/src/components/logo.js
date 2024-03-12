class Logo extends HTMLElement {
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

        .logo {
          display: flex;
          width: 100%;
          cursor: pointer;
        }

      </style>

      <section class="logo"></section>
      `

    const logo = this.shadow.querySelector('.logo')
    const logoImage = document.createElement('div')
    logoImage.classList.add('logo-image')
    logo.appendChild(logoImage)

    const itemLink = document.createElement('a')
    itemLink.setAttribute('href', '/')
    logoImage.appendChild(itemLink)

    const itemImage = document.createElement('img')
    itemImage.setAttribute('src', '/public/logo.svg')
    itemLink.appendChild(itemImage)
  }
}

customElements.define('logo-component', Logo)

class IconsList extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('/src/data/icons-list.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        .icons-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
          height: 20vh;
          width: 100%;
          bottom: 0;
          gap: 4rem;
        }

        img {
          filter: none;
        }

        img:hover {
          filter: opacity(0.7);
        }

      </style>


      <section class="icons-list"></section>
      `
    const iconsList = this.shadow.querySelector('.icons-list')

    this.data.forEach(object => {
      const iconImage = document.createElement('div')
      iconImage.classList.add('icon-image')
      iconsList.appendChild(iconImage)

      const itemLink = document.createElement('a')
      itemLink.setAttribute('href', object.link)
      iconImage.appendChild(itemLink)

      const itemImage = document.createElement('img')
      itemImage.setAttribute('src', object.svg)
      itemImage.setAttribute('alt', object.title)
      itemLink.appendChild(itemImage)
    })
  }
}

customElements.define('icons-list-component', IconsList)

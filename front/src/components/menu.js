class Menu extends HTMLElement {
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
    const response = await fetch('/src/data/menu.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        .menu {
          display: flex;
          width: 100%;
          gap: 5rem;
          padding: 2rem 0;
        }

        .menu ul {
          display: flex;
          gap: 4rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .menu li a {
          color: hsla(0, 100%, 100%, 1);
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          text-decoration: none;
          text-transform: capitalize;
          cursor: pointer;
        }

      </style>

      <nav class="menu"></nav>
      `
    const menu = this.shadow.querySelector('.menu')
    const menuList = document.createElement('ul')
    menu.appendChild(menuList)

    this.data.forEach(element => {
      const menuItem = document.createElement('li')
      menuList.appendChild(menuItem)

      const itemLink = document.createElement('a')
      itemLink.setAttribute('href', element.link)
      itemLink.textContent = element.title
      menuItem.appendChild(itemLink)
    })
  }
}

customElements.define('menu-component', Menu)

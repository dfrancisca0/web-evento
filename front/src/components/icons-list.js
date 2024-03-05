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
    this.data = [
      {
        title: 'instagram',
        link: '',
        svg: '/public/instagram-logo.svg'
      },
      {
        title: 'whatsapp',
        link: '',
        svg: '/public/whatsapp-logo.svg'
      },
      {
        title: 'mail',
        link: '',
        svg: '/public/mail-logo.svg'
      },
      {
        title: 'phone',
        link: '',
        svg: '/public/phone-logo.svg'
      }
    ]
  }

  render () {
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

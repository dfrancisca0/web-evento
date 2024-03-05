class CategoryFilter extends HTMLElement {
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
        title: 'Todos'
      },
      {
        title: 'Familiares'
      },
      {
        title: 'Adultos'
      },
      {
        title: 'Niños'
      }
    ]
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>
        
        .filter-buttons {
          display: flex;
          gap: 1.5rem;
          margin: 3rem 0;
          justify-content: flex-end;
        }

        .filter-button button {
          background-color: hsla(0, 0%, 0%, 0.7);
          color: hsl(0, 0%, 100%);
          border: none;
          border-radius: 1rem;
          padding: .5rem 2rem;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .filter-button:hover button {
          background-color: hsla(0, 0%, 0%, 1);
        }

      </style>

      <div class="filter-buttons"></div>
      `
    const filterButtons = this.shadow.querySelector('.filter-buttons')

    this.data.forEach(category => {
      const filterButton = document.createElement('div')
      filterButton.classList.add('filter-button')
      filterButton.dataset.category = category.title.toLowerCase()
      filterButtons.appendChild(filterButton)

      const button = document.createElement('button')
      button.textContent = category.title
      filterButton.appendChild(button)
    })

    filterButtons.addEventListener('click', event => {
      if (event.target.closest('.filter-button')) {
        const filterButton = event.target.closest('.filter-button')

        document.dispatchEvent(new CustomEvent('filter-gallery', {
          detail: {
            category: filterButton.dataset.category
          }
        }))
      }
    })
  }
}

customElements.define('category-filter-component', CategoryFilter)

class CategoryFilter extends HTMLElement {
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

      <div class="filter-buttons">
        <div class="filter-button" data-category="0">
          <button>Todos</button>
        </div>
        <div class="filter-button" data-category="1">
          <button>Familiares</button>
        </div>
          <div class="filter-button" data-category="2">
          <button>Adultos</button>
        </div>
        <div class="filter-button" data-category="3">
          <button>Niños</button>
        </div>
      </div>
      `
    const filterButtons = this.shadow.querySelectorAll('.filter-button')

    filterButtons.forEach(filterButton => {
      filterButton.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('filter-gallery', {
          detail: {
            category: filterButton.dataset.category
          }
        }))
      })
    })
  }
}

customElements.define('category-filter-component', CategoryFilter)

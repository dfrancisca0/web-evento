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
        
        .category-filter-buttons {
          display: flex;
          gap: 1.5rem;
          margin: 3rem 0;
          justify-content: flex-end;
        }

        .category-filter-button button {
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

        .category-filter-button:hover button {
          background-color: hsla(0, 0%, 0%, 1);
        }

      </style>

      <div class="category-filter-buttons">
        <div class="category-filter-button">
          <button>Todas</button>
        </div>
          <div class="category-filter-button">
          <button>Adultos</button>
        </div>
        <div class="category-filter-button">
          <button>Niños</button>
        </div>
      </div>
      `
  }
}

customElements.define('category-filter-component', CategoryFilter)

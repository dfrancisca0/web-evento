class About extends HTMLElement {
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
    const response = await fetch('/src/data/about.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        h2, h3, p {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          line-height: 1.5;
        }

        .about {  
          min-height: 100vh;
          position: relative;
          width: 100%;
        }

        .about-header {
          position: sticky;
          top: -18vh;
          width: 100%;
          background-color: hsla(0, 0%, 0%, 1);
        }

        .about-header-picture {
          height: 30vh;
          overflow: hidden;
        }

        .about-header-picture img{
          opacity: .8;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .about-header-title {
          background-color: hsla(0, 0%, 0%, 1);
          color: hsla(0, 100%, 100%, 1);
          font-size: 4rem;
          text-align: center;
        }

        .about-content {
          display: flex;
          margin: 5rem;
        }

        
        .about-content-text {
          display: flex;
          flex-direction: column;
          padding: 0 2rem;
        }
        
        .about-content-title {
          padding: 0 0 2rem 0;
        }

        .about-content-description {
        }

        .about-content-picture img {
          height: 500px;
        }
        
      </style>

      <section class="about">
        <div class="about-header">
          <div class="about-header-picture">
            <picture>
              <source srcset="${this.data.images.mainImage.lg.src}" type="image/webp" media="(min-width: 1200px)">
              <source srcset="${this.data.images.mainImage.md.src}" type="image/webp" media="(min-width: 992px)">
              <source srcset="${this.data.images.mainImage.sm.src}" type="image/webp" media="(max-width: 601px)">
              <source srcset="${this.data.images.mainImage.xs.src}" type="image/webp" media="(max-width: 600px)">
              <img src="${this.data.images.mainImage.lg.src}" alt="${this.data.images.mainImage.alt}" title="${this.data.images.mainImage.title}">
            </picture>
          </div>
          <div class="about-header-title">
            <h2>${this.data.title}</h2>
          </div>
        </div> 
        <div class="about-content">
          <div class="about-content-text">
            <div class="about-content-title">
              <h3>${this.data.subtitle}</h3>
            </div>
            <div class="about-content-description">
              <p>${this.data.description}<p>
            </div>
          </div>  
          <div class="about-content-picture">
            <picture>
              <source srcset="${this.data.images.secondaryImage.lg.src}" type="image/webp" media="(min-width: 1200px)">
              <source srcset="${this.data.images.secondaryImage.md.src}" type="image/webp" media="(min-width: 992px)">
              <source srcset="${this.data.images.secondaryImage.sm.src}" type="image/webp" media="(max-width: 601px)">
              <source srcset="${this.data.images.secondaryImage.xs.src}" type="image/webp" media="(max-width: 600px)">
              <img src="${this.data.images.secondaryImage.lg.src}" alt="${this.data.images.secondaryImage.alt}" title="${this.data.images.secondaryImage.title}">
            </picture>
          </div>
        </div>    
      </section>
      `
  }
}

customElements.define('about-component', About)

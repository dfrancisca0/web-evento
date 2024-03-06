class Landing extends HTMLElement {
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

        h2, h3, p {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
        }

        .landing-main {
          text-align: center;
          margin: 2rem 8rem;

        }

        .main-title {
          padding: 2rem;
          font-size: 2em;
        }

        .main-subtitle {
          padding: 2rem;
          font-size: 1.5rem;
        }

        .main-description {
          padding: 2rem;
          font-size: 1rem;
          line-height: 1.5;
        }

      </style>

      <section class="landing">
        <div class="landing-picture">
          <picture>
            <source srcset="./public/son-sampol.webp" type="image/webp">
            <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
          </picture>
        </div>

          <div class="description">
            <p></p>
          </div>
        </div>
      </section>
      `
  }
}

customElements.define('landing-component', Landing)

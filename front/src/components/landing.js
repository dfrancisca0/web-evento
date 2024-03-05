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

          <div class="main-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
        </div>
      </section>
      `
  }
}

customElements.define('landing-component', Landing)

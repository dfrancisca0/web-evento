class About extends HTMLElement {
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

        h2, h3, p {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          font-size: 4rem;
        }

        .about {  
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .about-header {
          width: 100%;
        }

        .about-header-picture {

        }

        .about-header-picture img{

        }

        .about-header-title {

        }

        .about-content {

        }

        .about-conten-text {

        }

        .about-content-picture {

        }
        
      </style>

      <section class="about">
        <div class="about-header">
          <div class="about-header-picture">
            <picture>
              <source srcset="./public/group-people.webp" type="image/webp">
              <img src="./public/group-people.webp" alt="group of people" title="group of people">
            </picture>
          </div>
          <div class="about-header-title">
            <h2>Quienes Somos</h2>
          </div>
        </div> 
        <div class="about-content">
          <div class="about-content-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>
          </div>
          <div class="about-content-picture">
            <picture>
              <source srcset="./public/group-people.webp" type="image/webp">
              <img src="./public/group-people.webp" alt="group of people" title="group of people">
            </picture>
          </div>
        </div>  
        
        
      </section>
      `
  }
}

customElements.define('about-component', About)

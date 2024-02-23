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
            <>
            
          </div>
        </div> 
        <div class="">
        </div>  
        
        
      </section>
      `
  }
}

customElements.define('about-component', About)

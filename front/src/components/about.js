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
    this.data = {
      images: {
        mainImage: {
          title: 'about us',
          alt: 'people jumping at the beach',
          xs: {
            src: '/public/people-jumping-mobile.webp'
          },
          sm: {
            src: '/public/people-jumping-mobile.webp'
          },
          md: {
            src: '/public/people-jumping.webp'
          },
          lg: {
            src: '/public/people-jumping.webp'
          }
        },
        secondaryImage: {
          title: 'organizers',
          alt: 'group of people',
          xs: {
            src: '/public/group-people-mobile.webp'
          },
          sm: {
            src: '/public/group-people-mobile.webp'
          },
          md: {
            src: '/public/group-people.webp'
          },
          lg: {
            src: '/public/group-people.webp'
          }
        }
      },
      title: 'Quienes Somos',
      subtitle: 'Sobre la asociación',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    }
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

class IconsList extends HTMLElement {
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

        .icons-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
          width: 100%;
          gap: 10rem;
          padding: 5% 0%;
        }

        .icons-image svg{
          height: 8rem;
          width: 8rem;
          fill: hsla(20, 8.1%, 21.8%, 1);
        }


        .icons-image:hover svg {
          fill: hsla(53, 7.4%, 42.4%, 0.8);
        }

        @media (min-width: 601px) {
        
        }

        @media (min-width: 601px) and (orientation: landscape) {
        
        }

        @media (min-width: 1025px) and (max-width: 1920px) {
          
        }

        @media (min-width: 1920px) {
          .icons-image svg{
          height: 8rem;
          width: 8rem;
          fill: hsla(20, 8.1%, 21.8%, 1);
        }
        }

      </style>


      <section class="icons-list">
        <div class="icons-image">
          <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>text-box-edit-outline</title><path d="M10 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V10.33C20.7 10.21 20.37 10.14 20.04 10.14C19.67 10.14 19.32 10.22 19 10.37V5H5V19H10.11L10 19.11V21M7 9H17V7H7V9M7 17H12.11L14 15.12V15H7V17M7 13H16.12L17 12.12V11H7V13M21.7 13.58L20.42 12.3C20.21 12.09 19.86 12.09 19.65 12.3L18.65 13.3L20.7 15.35L21.7 14.35C21.91 14.14 21.91 13.79 21.7 13.58M12 22H14.06L20.11 15.93L18.06 13.88L12 19.94V22Z" /></svg>        
          </a>
        </div>
        <div class="icons-image">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>food</title><path d="M18.06 23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V23M1 22V21H16.03V22C16.03 22.54 15.58 23 15 23H2C1.45 23 1 22.54 1 22M16.03 15C16.03 7 1 7 1 15H16.03M1 17H16V19H1V17Z" /></svg>
          </a>
        </div>
        <div class="icons-image">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>human-male-female-child</title><path d="M16 4C16 2.9 16.9 2 18 2S20 2.9 20 4 19.1 6 18 6 16 5.1 16 4M20 22V16H22.5L20 8.4C19.7 7.6 19 7 18.1 7H18C17.1 7 16.4 7.6 16.1 8.4L15.2 11C16.3 11.6 17 12.7 17 14.1V22H20M12.5 11.5C13.3 11.5 14 10.8 14 10S13.3 8.5 12.5 8.5 11 9.2 11 10 11.7 11.5 12.5 11.5M5.5 6C6.6 6 7.5 5.1 7.5 4S6.6 2 5.5 2 3.5 2.9 3.5 4 4.4 6 5.5 6M7.5 22V15H9V9C9 7.9 8.1 7 7 7H4C2.9 7 2 7.9 2 9V15H3.5V22H7.5M14 22V18H15V14C15 13.2 14.3 12.5 13.5 12.5H11.5C10.7 12.5 10 13.2 10 14V18H11V22H14Z" /></svg>
          </a>
        </div>
        <div class="icons-image">
          <a href="">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>forest</title><path d="M16 12L9 2L2 12H3.86L0 18H7V22H11V18H18L14.14 12H16M20.14 12H22L15 2L12.61 5.41L17.92 13H15.97L19.19 18H24L20.14 12M13 19H17V22H13V19Z" /></svg>
          </a>
        </div>
      </section>
      `
  }
}

customElements.define('icons-list-component', IconsList)

class Schedule extends HTMLElement {
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

        h2, h3, h4 {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
        }

        .schedule {
          display: grid;
          grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;
          grid-template-rows: repeat(6, 1fr);
          grid-gap: 0.5rem;
          height: 50vh;
          padding: 0.5rem;
          justify-items: center;
          align-items: center;
        }

        .frame-row-slot {
          border-radius: 5px; 
          background-color: hsla(192, 71%, 34%, 1);
          color: hsla(0, 100%, 100%, 1);
          margin: 1rem;
          padding: 1rem;
}

        .frame-column-slot {
          border-radius: 5px; 
          background-color: hsla(192, 71%, 34%, 1);
          color: hsla(0, 100%, 100%, 1);
          padding: 1rem;
        }

        .content-slot {
          width: 80%;
          border-radius: 5px; 
          background-color: hsla(48, 93%, 53%, .8);
          color: hsla(0, 0%, 0%, 1);
          text-align: center;
        }

        .slot-image {
          border-radius: 5px;
        }

        .slot-image img{
          height: 100px;
          width: 100%;
          object-fit: cover;
          opacity: .5;
          border-radius: 5px;
        }

        .col-1 {
          grid-column-start: 2;
        }

        .col-2 {
          grid-column-start: 3;
        }

        .col-3 {
          grid-column-start: 4;
        }

        .col-4 {
          grid-column-start: 5;
        }

        .col-all {
          grid-column: span 4;
          grid-column-start: 2;
          grid-row-start: 4;
          background-color: hsla(102, 48%, 49%, 1);
          
        }

        .row-1 {
          grid-row-start: 2;
        }

        .row-2 {
          grid-row-start: 3;
        }

        .row-3 {
          grid-row-start: 4;
        }

        .row-4 {
          grid-row-start: 5;
        }

        .row-5 {
          grid-row-start: 6;
        }

        .content-slot .row-3 {
          grid-row-start: 5;
        }

        .content-slot .row-4 {
          grid-row-start: 6;
        }

      </style>

      <section class="schedule">
        <div class="frame-row-slot col-1">
          <h3>Escenario 1</h3>
        </div>
        <div class="frame-row-slot col-2">
          <h3>Escenario 2</h3>
        </div>
        <div class="frame-row-slot col-3">
          <h3>Escenario 3</h3>
        </div>
        <div class="frame-row-slot col-4">
          <h3>Escenario 4</h3>
        </div>       
        <div class="frame-column-slot">
          <h3>10h00-12h00</h3>
        </div>
        <div class="frame-column-slot">
          <h3>12h00-14h00</h3>
        </div>
        <div class="frame-column-slot">
          <h3>14h00-15h00</h3>
        </div>
        <div class="frame-column-slot">
          <h3>15h00-17h00</h3>
        </div> 
        <div class="frame-column-slot">
          <h3>17h00-19h00</h3>
        </div>
        <div class="content-slot col-1 row-1">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller A1</h3>
        </div>
        <div class="content-slot col-2 row-1">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller A2</h3>
        </div>
        <div class="content-slot col-3 row-1">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller A3</h3>
        </div>
        <div class="content-slot col-4 row-1">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller A4</h3>
        </div>
        <div class="content-slot col-1 row-2">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller B1</h3>
        </div>
        <div class="content-slot col-2 row-2">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller B2</h3>
        </div>
        <div class="content-slot col-3 row-2">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller B3</h3>
        </div>
        <div class="content-slot col-4 row-2">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller B4</h3>
        </div>
        <div class="content-slot col-all">
          <h3>Almuerzo</h3>
        </div>
        <div class="content-slot col-1 row-3">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller D1</h3>
        </div>
        <div class="content-slot col-2 row-3">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller D2</h3>
        </div>
        <div class="content-slot col-3 row-3">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller D3</h3>
        </div>
        <div class="content-slot col-4 row-3">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller D4</h3>
        </div>
        <div class="content-slot col-1 row-4">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller E1</h3>
        </div>
        <div class="content-slot col-2 row-4">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller E2</h3>
        </div>
        <div class="content-slot col-3 row-4">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller E3</h3>
        </div>
        <div class="content-slot col-4 row-4">
          <div class="slot-image">
            <picture>
              <source srcset="./public/watercolor.webp" type="image/webp">
              <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
            </picture>
          </div>
          <h3>Taller E4</h3>
        </div>  
      </section>
      `
  }
}

customElements.define('schedule-component', Schedule)

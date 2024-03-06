class Schedule extends HTMLElement {
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
      stages: [
        {
          title: 'Escenario 1',
          category: ['frame-row-slot', 'col-1', 'frame']
        },
        {
          title: 'Escenario 2',
          category: ['frame-row-slot', 'col-2', 'frame']
        },
        {
          title: 'Escenario 3',
          category: ['frame-row-slot', 'col-3', 'frame']
        },
        {
          title: 'Escenario 4',
          category: ['frame-row-slot', 'col-4', 'frame']
        }
      ],
      times: [
        {
          title: '10h00 - 12h00',
          category: ['frame-column-slot', 'frame']
        },
        {
          title: '12h00 - 14h00',
          category: ['frame-column-slot', 'frame']
        },
        {
          title: '14h00 - 15h00',
          category: ['frame-column-slot', 'frame']
        },
        {
          title: '15h00 - 17h00',
          category: ['frame-column-slot', 'frame']
        },
        {
          title: '17h00 - 19h00',
          category: ['frame-column-slot', 'frame']
        }
      ],
      activities: [
        {
          title: 'Taller A1',
          category: ['content-slot', 'col-1', 'row-1', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller A2',
          category: ['content-slot', 'col-2', 'row-1', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller A3',
          category: ['content-slot', 'col-3', 'row-1', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller A4',
          category: ['content-slot', 'col-4', 'row-1', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller B1',
          category: ['content-slot', 'col-1', 'row-2', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller B2',
          category: ['content-slot', 'col-2', 'row-2', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller B3',
          category: ['content-slot', 'col-3', 'row-2', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller B4',
          category: ['content-slot', 'col-4', 'row-2', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Almuerzo (+ 15€ adultos | + 10€ niños)',
          category: ['content-slot', 'col-all', 'content']
        },
        {
          title: 'Taller D1',
          category: ['content-slot', 'col-1', 'row-3', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller D2',
          category: ['content-slot', 'col-2', 'row-3', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller D3',
          category: ['content-slot', 'col-3', 'row-3', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller D4',
          category: ['content-slot', 'col-4', 'row-3', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller E1',
          category: ['content-slot', 'col-1', 'row-4', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller E2',
          category: ['content-slot', 'col-2', 'row-4', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller E3',
          category: ['content-slot', 'col-3', 'row-4', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        },
        {
          title: 'Taller E4',
          category: ['content-slot', 'col-4', 'row-4', 'content'],
          images: {
            xs: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            sm: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor-mobile.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            md: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            },
            lg: {
              mainImage: {
                title: 'watercolor workshop',
                src: '/public/watercolor.webp',
                type: 'image/webp',
                alt: 'watercolor'
              }
            }
          }
        }
      ]
    }
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>

        h2, h3, h4 {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          letter-spacing: .1rem;
        }

        .schedule {
          display: grid;
          grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;
          grid-template-rows: repeat(6, 1fr);
          grid-gap: 0.5rem;
          margin: 2rem 8rem;
          justify-items: center;
          align-items: center;
          text-align: center;
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
          position: relative;
          display: flex;
          height: 100%;
          width: 100%;
          border-radius: 5px;
          background-color: hsla(0, 0%, 0%, 1);
          opacity: .9;
          color: hsla(0, 100%, 100%, 1);
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .slot-image {
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: -1;
        }

        .slot-image img{
          height: 100%;
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
          height: 120px;
          grid-column-start: 2;
          grid-column-end: 6;
          grid-row-start: 4;
          background-color: hsla(48, 93%, 53%, 1);
          color: hsla(0, 0%, 0%, 1);          
        }

        .row-1 {
          grid-row-start: 2;
        }

        .row-2 {
          grid-row-start: 3;
        }

        .row-3 {
          grid-row-start: 5;
        }

        .row-4 {
          grid-row-start: 6;
        }

        .row-5 {
          grid-row-start: 7;
        }

        .content-slot .row-3 {
          grid-row-start: 5;
        }

        .content-slot .row-4 {
          grid-row-start: 6;
        }

        @media {
          .content-slot:hover {
            opacity: .5;
          }

          .content-slot:hover img {
            opacity: .9;
          }
        }

      </style>

      <section class="schedule"></section>
      `

    const schedule = this.shadow.querySelector('.schedule')

    this.data.stages.forEach(object => {
      const slot = document.createElement('div')

      if (Array.isArray(object.category)) {
        slot.classList.add(...object.category)
      } else {
        slot.classList.add(object.category)
      }

      schedule.appendChild(slot)

      const slotTitle = document.createElement('h3')
      slotTitle.textContent = object.title
      slot.appendChild(slotTitle)
    })

    this.data.times.forEach(object => {
      const slot = document.createElement('div')

      if (Array.isArray(object.category)) {
        slot.classList.add(...object.category)
      } else {
        slot.classList.add(object.category)
      }

      schedule.appendChild(slot)

      const slotTitle = document.createElement('h3')
      slotTitle.textContent = object.title
      slot.appendChild(slotTitle)
    })

    this.data.activities.forEach(object => {
      const slot = document.createElement('div')

      if (Array.isArray(object.category)) {
        slot.classList.add(...object.category)
      } else {
        slot.classList.add(object.category)
      }

      schedule.appendChild(slot)

      const slotTitle = document.createElement('h3')
      slotTitle.textContent = object.title
      slot.appendChild(slotTitle)

      const slotImage = document.createElement('div')
      slotImage.classList.add('slot-image')
      slot.appendChild(slotImage)

      const picture = document.createElement('picture')
      slotImage.appendChild(picture)

      const sourceLg = document.createElement('source')
      sourceLg.setAttribute('src', object.images.lg.mainImage.src)
      sourceLg.setAttribute('type', 'image/webp')
      sourceLg.setAttribute('media', '(min-width: 1200px)')
      picture.appendChild(sourceLg)

      const sourceMd = document.createElement('source')
      sourceMd.setAttribute('src', object.images.md.mainImage.src)
      sourceMd.setAttribute('type', 'image/webp')
      sourceMd.setAttribute('media', '(min-width: 992px)')
      picture.appendChild(sourceMd)

      const sourceSm = document.createElement('source')
      sourceSm.setAttribute('src', object.images.sm.mainImage.src)
      sourceSm.setAttribute('type', 'image/webp')
      sourceSm.setAttribute('media', '(min-width: 768px)')
      picture.appendChild(sourceSm)

      const sourceXs = document.createElement('source')
      sourceXs.setAttribute('src', object.images.xs.mainImage.src)
      sourceXs.setAttribute('type', 'image/webp')
      sourceXs.setAttribute('media', '(min-width: 600px)')
      picture.appendChild(sourceXs)

      const mainImage = document.createElement('img')
      mainImage.setAttribute('src', object.images.lg.mainImage.src)
      mainImage.setAttribute('alt', object.images.lg.mainImage.alt)
      mainImage.setAttribute('title', object.images.lg.mainImage.title)
      picture.appendChild(mainImage)
    })
  }
}

customElements.define('schedule-component', Schedule)

{ /* <section class="schedule">
<div class="frame-row-slot col-1 frame">
  <h3>Escenario 1</h3>
</div>
<div class="frame-row-slot col-2 frame">
  <h3>Escenario 2</h3>
</div>
<div class="frame-row-slot col-3 frame">
  <h3>Escenario 3</h3>
</div>
<div class="frame-row-slot col-4 frame">
  <h3>Escenario 4</h3>
</div>
<div class="frame-column-slot frame">
  <h3>10h00-12h00</h3>
</div>
<div class="frame-column-slot frame">
  <h3>12h00-14h00</h3>
</div>
<div class="frame-column-slot frame">
  <h3>14h00-15h00</h3>
</div>
<div class="frame-column-slot frame">
  <h3>15h00-17h00</h3>
</div>
<div class="frame-column-slot frame">
  <h3>17h00-19h00</h3>
</div>
<div class="content-slot col-1 row-1 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller A1</h3>
</div>
<div class="content-slot col-2 row-1 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller A2</h3>
</div>
<div class="content-slot col-3 row-1 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller A3</h3>
</div>
<div class="content-slot col-4 row-1 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller A4</h3>
</div>
<div class="content-slot col-1 row-2 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller B1</h3>
</div>
<div class="content-slot col-2 row-2 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller B2</h3>
</div>
<div class="content-slot col-3 row-2 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller B3</h3>
</div>
<div class="content-slot col-4 row-2 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller B4</h3>
</div>
<div class="content-slot col-all content">
  <h3>Almuerzo (+ 15€ adultos | + 10€ niños)</h3>
</div>
<div class="content-slot col-1 row-3 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller D1</h3>
</div>
<div class="content-slot col-2 row-3 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller D2</h3>
</div>
<div class="content-slot col-3 row-3 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller D3</h3>
</div>
<div class="content-slot col-4 row-3 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller D4</h3>
</div>
<div class="content-slot col-1 row-4 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller E1</h3>
</div>
<div class="content-slot col-2 row-4 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller E2</h3>
</div>
<div class="content-slot col-3 row-4 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller E3</h3>
</div>
<div class="content-slot col-4 row-4 content">
  <div class="slot-image">
    <picture>
      <source srcset="./public/watercolor.webp" type="image/webp">
      <img src="./public/watercolor.webp" alt="watercolor" title="watercolor workshop">
    </picture>
  </div>
  <h3>Taller E4</h3>
</div>
</section> */ }

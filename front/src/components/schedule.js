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
          stage: 1,
          time: 0,
          category: ['frame-row-slot', 'col-1']
        },
        {
          title: 'Escenario 2',
          stage: 2,
          time: 0,
          category: ['frame-row-slot', 'col-2']
        },
        {
          title: 'Escenario 3',
          stage: 3,
          time: 0,
          category: ['frame-row-slot', 'col-3']
        },
        {
          title: 'Escenario 4',
          stage: 4,
          time: 0,
          category: ['frame-row-slot', 'col-4']
        }
      ],
      times: [
        {
          title: '10h00 - 12h00',
          stage: 0,
          time: 1
        },
        {
          title: '12h00 - 14h00',
          stage: 0,
          time: 2
        },
        {
          title: '14h00 - 15h00',
          stage: 0,
          time: 3
        },
        {
          title: '15h00 - 17h00',
          stage: 0,
          time: 4
        },
        {
          title: '17h00 - 19h00',
          stage: 0,
          time: 5
        }
      ],
      activities: [
        {
          title: 'Taller A1',
          stage: 1,
          time: 1,
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
          stage: 2,
          time: 1,
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
          stage: 3,
          time: 1,
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
          stage: 4,
          time: 1,
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
          stage: 1,
          time: 2,
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
          stage: 2,
          time: 2,
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
          stage: 3,
          time: 2,
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
          stage: 4,
          time: 2,
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
          category: 'col-all',
          stage: 1,
          time: 3
        },
        {
          title: 'Taller D1',
          stage: 1,
          time: 4,
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
          stage: 2,
          time: 4,
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
          stage: 3,
          time: 4,
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
          stage: 4,
          time: 4,
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
          stage: 1,
          time: 5,
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
          stage: 2,
          time: 5,
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
          stage: 3,
          time: 5,
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
          stage: 4,
          time: 5,
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
      slot.classList.add('frame-row-slot')
      slot.style.gridRowStart = object.time + 1
      slot.style.gridColumnStart = object.stage + 1

      schedule.appendChild(slot)

      const slotTitle = document.createElement('h3')
      slotTitle.textContent = object.title
      slot.appendChild(slotTitle)
    })

    this.data.times.forEach(object => {
      const slot = document.createElement('div')
      slot.classList.add('frame-column-slot')
      slot.style.gridRowStart = object.time + 1
      slot.style.gridColumnStart = object.stage + 1

      schedule.appendChild(slot)

      const slotTitle = document.createElement('h3')
      slotTitle.textContent = object.title
      slot.appendChild(slotTitle)
    })

    this.data.activities.forEach(object => {
      const slot = document.createElement('div')
      slot.classList.add('content-slot')
      slot.style.gridRowStart = object.time + 1
      slot.style.gridColumnStart = object.stage + 1

      schedule.appendChild(slot)

      const slotTitle = document.createElement('h3')
      slotTitle.textContent = object.title
      slot.appendChild(slotTitle)

      const slotImage = document.createElement('div')
      slotImage.classList.add('slot-image')
      slot.appendChild(slotImage)

      if (object.category === 'col-all') {
        slot.classList.add(object.category)
      }

      if ('images' in object) {
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
      }
    })
  }
}

customElements.define('schedule-component', Schedule)

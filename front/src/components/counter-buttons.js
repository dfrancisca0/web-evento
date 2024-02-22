class CounterButtons extends HTMLElement {
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


      </style>

      <div class="button">

      </div>
      `
  }
}

customElements.define('counter-buttons-component', CounterButtons)

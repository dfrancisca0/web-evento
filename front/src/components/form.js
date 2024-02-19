class Form extends HTMLElement {
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

        .form {
          display: flex;
          width: 100%;
          gap: 5rem;
          padding: 2rem 0;
          color: hsla(0, 0%, 0%, 1);
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          text-decoration: none;
          text-transform: capitalize;
        }
        
        .form-groups{
          display: flex;
          gap: 2rem;
        }


        .form-text {
          display: flex;
          flex-wrap: wrap;
          gap: 5rem;
        }

      </style>

      <section class="form">
        <form>
          <div class="form-groups">
            <div class="form-group">
              <div class="form-element">
                <input type="checkbox" id="element1" name="element1" value="">  
                <label for="element1">Lorem</label><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element2" name="element2" value="">  
                <label for="element2">Lorem</label><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element3" name="element3" value="">  
                <label for="element3">Lorem</label><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element4" name="element4" value="">  
                <label for="element4">Lorem</label><br>
              </div>  
            </div>
            <div class="form-group">
              <div class="form-element">
                <input type="checkbox" id="element1" name="element1" value="">  
                <label for="element1">Lorem</label><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element2" name="element2" value="">  
                <label for="element2">Lorem</label><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element3" name="element3" value="">  
                <label for="element3">Lorem</label><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element4" name="element4" value="">  
                <label for="element4">Lorem</label><br>
            </div>
            <div class="form-group">
              <div class="form-element">
                <input type="checkbox" id="element1" name="element1" value="">  
                <label for="element1">Lorem</label><br>
              </div>
              <div class="form-element">
                 <input type="checkbox" id="element2" name="element2" value="">  
                <label for="element2">Lorem</label><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element3" name="element3" value="">  
                <label for="element3">Lorem</label><br>
                <input type="checkbox" id="element3" name="element3" value=""><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element4" name="element4" value="">  
                <label for="element4">Lorem</label><br>
                <input type="checkbox" id="element4" name="element4" value=""><br>
              </div>
            </div>
            <div class="form-group">
              <div class="form-element">
                <input type="checkbox" id="element1" name="element1" value="">  
                <label for="element1">Lorem</label><br>
                <input type="checkbox" id="element1" name="element1" value=""><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element2" name="element2" value="">  
                <label for="element2">Lorem</label><br>
                <input type="checkbox" id="element2" name="element2" value=""><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element3" name="element3" value="">  
                <label for="element3">Lorem</label><br>
                <input type="checkbox" id="element3" name="element3" value=""><br>
              </div>
              <div class="form-element">
                <input type="checkbox" id="element4" name="element4" value="">  
                <label for="element4">Lorem</label><br>
                <input type="checkbox" id="element4" name="element4" value=""><br>
              </div>  
            </div>  
          </div>     
          <div class="form-checkbox">
            <input type="checkbox" id="yn" name="yn" value="">  
            <label for="yn"></label><br>
            <input type="checkbox" id="yn" name="yn" value=""><br>  
          </div>
          <div class="form-text">
            <div class="form-name">
              <div class="form-name1">
                <label for="fname">Nombre:</label>
                <input type="text" id="fname" name="fname"><br>  
              </div>
              <div class="form-name2">
                <label for="fname">Apellido:</label>
                <input type="text" id="fname" name="fname"><br>  
              </div>
            </div>
            <div class="form-email">
              <label for="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" size="30" required />
            </div>
          </div>
        </form> 
      </section>
      `
  }
}

customElements.define('form-component', Form)

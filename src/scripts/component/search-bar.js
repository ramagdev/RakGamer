class SearchBar extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get clickEvent () {
    return this._clickEvent
  }

  set value (value) {
    this.shadowDOM.querySelector('#searchElement').value = value
  }
  get value () {
    return this.shadowDOM.querySelector('#searchElement').value
  }

  render () {
    this.shadowDOM.innerHTML = `
            <style>
                .search-container {
                    width: 80%;
                    max-width: 800px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    padding: 16px;
                    border-radius: 5px;
                    position: sticky;
                    top: 10px;
                    margin: auto;
                    
                    background-color: white;
                }
                
                .search-container > input {
                    width: 75%;
                    padding: 16px;
                    border: 0;
                    border-bottom: 1px solid darkmagenta;
                    font-weight: bold;
                }
                
                .search-container > input:focus {
                    outline: 0;
                    border-bottom: 2px solid darkmagenta;
                }
                
                .search-container > input:focus::placeholder {
                    font-weight: bold;
                }
                
                .search-container > input::placeholder {
                    color: darkmagenta;
                    font-weight: normal;
                }
                
                .search-container > button {
                    width: 23%;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 16px;
                    background-color: darkmagenta;
                    color: white;
                    border: 0;
                    text-transform: uppercase;
                    border-radius: 5px;
                }
                
                @media screen and (max-width: 550px) {
                    .search-container {
                      position: static;
                      align-self: center;
                    }
                
                    .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                    }
                
                    .search-container > button {
                    width: 100%;
                    }
                }
            </style>

            <div id="search-container" class="search-container">
                <input placeholder="Search game" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
    this.shadowDOM.querySelector('#searchElement').addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        this._clickEvent()
      }
    })
  }
}

customElements.define('search-bar', SearchBar)

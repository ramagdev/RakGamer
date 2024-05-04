import './game-item.js'
class gameList extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set games (games) {
    this._games = games
    this.render()
  }

  get games () {
    return this._games
  }

  renderError (message) {
    this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0, 0, 0, 0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
            `
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }

  render () {
    this.shadowDOM.innerHTML = ''
    this._games.forEach(game => {
      const gameItemElement = document.createElement('game-item')
      gameItemElement.game = game
      this.shadowDOM.appendChild(gameItemElement)
    })
  }
}

customElements.define('game-list', gameList)

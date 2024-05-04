class GameItem extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set game (game) {
    this._game = game
    this.render()
  }

  get game () {
    return this._game
  }

  render () {
    const miniDesc = [...this._game.genres.map((genre) => genre.name)]
    this.shadowDOM.innerHTML = `
            <style>
                * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                }
                
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    width: 30%;
                    background-color: white;
                }
                
                .fan-art-game {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .game-info {
                    padding: 0.5rem;
                }
                
                .game-info > h2 {
                    font-weight: lighter;
                    font-size: 2rem;
                }
                
                .game-info > p {
                    font-size: 1rem;
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                }

                @media screen and (max-width: 425px) {
                    .game-info > h2 {
                        font-size: 1rem;
                    }

                    .game-info > p {
                        font-size: 0.8rem;
                    }
                }
            </style>

            <img class="fan-art-game" src="${this._game.background_image}" alt="Fan Art">
            <div class="game-info">
                <h2>${this._game.name}</h2>
                <p>${miniDesc.join(', ')}</p>
            </div>
        `
  }
}

customElements.define('game-item', GameItem)

import '../component/game-list.js'
import '../component/search-bar.js'
import DataSource from '../data/data-source.js'
const main = () => {
  const searchElement = document.querySelector('search-bar')
  const gameListElement = document.querySelector('game-list')

  const onButtonSearchClicked = () => {
    DataSource.searchGame(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult)
  }

  const renderResult = results => {
    gameListElement.games = results
  }

  const fallbackResult = message => {
    gameListElement.renderError(message)
  }

  searchElement.clickEvent = onButtonSearchClicked
}

export default main

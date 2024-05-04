class DataSource {
  static async searchGame (keyword) {
    const apiKey = '8e1682bd82ac492cb999ea6e293c8820'
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${keyword}&page_size=9`)
      const responseJson = await response.json()
      console.log(responseJson)
      if (responseJson.results) {
        return Promise.resolve(responseJson.results)
      } else {
        return Promise.reject(`${keyword} is not found`)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
export default DataSource

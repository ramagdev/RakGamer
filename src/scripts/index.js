import 'regenerator-runtime'
import '../styles/style.scss'
import '../styles/dynamic.scss'
import './component/app-bar.js'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import main from './view/main.js'
import swRegister from './utils/sw-register.js'


document.addEventListener('DOMContentLoaded', main)

window.addEventListener('load', () => {
    swRegister()
    const searchElement = document.querySelector('search-bar')
    searchElement.value = 'Best Mobile Games'
    searchElement.clickEvent()
})
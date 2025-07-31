// Botão Menu

let btnMenu = document.querySelector('.btn-menu')
let menuToggle = document.querySelector('.menu-toggle')
let menuIcon = document.querySelector('.fa-solid')
let btnMenuIndex = 0

menuToggle.style.display = "none"

btnMenu.addEventListener('click', () => {

    if (btnMenuIndex === 0) {

        btnMenuIndex = 1
        menuToggle.style.display = "block"
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-xmark')

    }
    else if (btnMenuIndex === 1) {

        btnMenuIndex = 0
        menuToggle.style.display = 'none'
        menuIcon.classList.remove('fa-xmark')
        menuIcon.classList.add('fa-bars')

    }
})

// Botão Mode 1

let sunIcon = document.querySelectorAll('.fa-sun')
let moonIcon = document.querySelectorAll('.fa-moon')
let btnMode = document.querySelectorAll('.btn-mode')
let btnModeIndex = 0

let txtCateg = document.querySelector('.categ-h2')
let menuItem = document.querySelectorAll('.menu-item')
let menuIconToggle = document.querySelectorAll('.menu-item .fa-solid')

btnMode.forEach((item) => {

    item.addEventListener('click', () => {

        if (btnModeIndex === 0) {

            btnModeIndex = 1

            sunIcon.forEach((sun) => {
                sun.classList.remove('active')
            })
            moonIcon.forEach((moon) => {
                moon.classList.add('active')
            })

            document.body.style.backgroundColor = "#30353B"
            txtCateg.style.color = 'white'
            menuToggle.style.backgroundColor = '#30353B'
            menuItem.forEach((item) => {
                item.style.color = 'white'
            })
            menuIconToggle.forEach((item) => {
                item.style.color = 'white'
            })

        }
        else if (btnModeIndex === 1) {

            btnModeIndex = 0

            moonIcon.forEach((moon) => {
                moon.classList.remove('active')
            })
            sunIcon.forEach((sun) => {
                sun.classList.add('active')
            })

            document.body.style.backgroundColor = "white"
            txtCateg.style.color = '#30353B'
            menuToggle.style.backgroundColor = 'white'
            menuItem.forEach((item) => {
                item.style.color = '#30353B'
            })
            menuIconToggle.forEach((item) => {
                item.style.color = '#30353B'
            })

        }
    })

})

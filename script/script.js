const headerSticky = document.querySelector('.header-sticky')
const headerStickyLinks = document.querySelector('.sticky__links')

window.onscroll = function showHeaderSticky() {
    if(window.innerWidth > 960) {
        if (document.documentElement.scrollTop > 180) {
            headerStickyLinks.style.display = 'flex'
        } else {
            headerStickyLinks.style.display = 'none'
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {

    const allButtonFilter = document.querySelectorAll('.button-filter')
    const allButtonSelect = document.querySelectorAll('.button-select')

    allButtonFilter.forEach(button => {
        button.setAttribute('uk-toggle', 'target: #filter-menu')

        button.addEventListener('click', () => {
            button.setAttribute('uk-toggle', 'target: #filter-menu')
        })
    })

    allButtonSelect.forEach(button => {
        button.setAttribute('uk-toggle', 'target: #modal-menu')

        button.addEventListener('click', () => {
            button.setAttribute('uk-toggle', 'target: #modal-menu')
        })
    })
})


const allButtonBorder = document.querySelectorAll('.button-border')

allButtonBorder.forEach(button => {

    button.addEventListener('click', () => {
        button.classList.toggle('button-border-focus')
    })
})

const allButtonModalSelect = document.querySelectorAll('.button-modal-select')

allButtonModalSelect.forEach(button => {

    button.addEventListener('click', () => {
        button.classList.toggle('border-select')
    })
})

const contentCard = document.querySelectorAll('.content-card img')

const database = fetch ('../database.json')
    .then(res => res.json())
    .then((out) => {
        console.log(out);

        contentCard.forEach(item => {
            item.src = out.pizza[0].image
            console.log(item.src);
        })

}).catch(err => console.error(err));




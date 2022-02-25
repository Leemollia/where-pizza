

const headerSticky = document.querySelector('.header-sticky')
const headerStickyLinks = document.querySelectorAll('.sticky__links')

window.onscroll = function showHeaderSticky() {
    if (document.documentElement.scrollTop > 180) {
        headerStickyLinks[0].style.display = 'flex'
        // headerStickyLinks.style.opacity = '0'
    } else {
        headerStickyLinks[0].style.display = 'none'}
        // headerStickyLinks.style.opacity = '1'}
};

const popupOther = document.querySelector('.popup-other')
const openPopupOther = document.querySelector('.open-popupother')

openPopupOther.addEventListener('click', (e) => {
    e.preventDefault();
    popupOther.classList.toggle('open');
})

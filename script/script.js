

let headerSticky = document.querySelector('.header-sticky')

function showHeaderSticky() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerSticky.style.display = 'none'
    } else {
    headerSticky.style.display = 'flex'}
};

showHeaderSticky()

console.log(document.body)
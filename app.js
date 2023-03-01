const menubtn = document.querySelector('.menu-button')
const sideBar = document.querySelector('.side-bar')

menubtn.addEventListener('click', function () {
    if (sideBar.classList.contains('show-nav')) {
        sideBar.classList.remove('show-nav')
        let MenuIcon = document.querySelector('.menu-button')
        MenuIcon.innerHTML = `<i class="img-icon">
    <img src="./news-homepage-main/assets/images/icon-menu.svg" alt="">
</i>`
    }
    else {
        sideBar.classList.add('show-nav')
        let timeIcon = document.querySelector('.menu-button')
        timeIcon.innerHTML = `<i class="img-icon">
    <img src="./news-homepage-main/assets/images/icon-menu-close.svg" alt="">
</i>`
    }
    console.log('hell')
})
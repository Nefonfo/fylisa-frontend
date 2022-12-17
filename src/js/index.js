import {CookiesStorage, NightMode} from './utils'


document.addEventListener('DOMContentLoaded', () => {

    new NightMode('fylisa-night', [
        [document.querySelector('html'), 'data-theme', 'light', 'dark'],
    ], document.querySelectorAll('.switch-mode'))

    new CookiesStorage(
        document.querySelector('#cookies_advice'),
        document.querySelector('#cookies_advice_accept'),
        'fylisa-cookies-accept',
        'hidden',
    )

    drawerListener()
    swiperInit()


})

const swiperInit = () => {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper-container', {
            loop: false,
            freeMode: true,
            spaceBetween: 0,
            speed: 150,
            grabCursor: true,
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                1300: {
                    slidesPerView: 1.2
                },
                1536: {
                    slidesPerView: 1.5
                },
                2000: {
                    slidesPerView: 1.8
                },
                2300: {
                    slidesPerView: 2.2
                },
                2700: {
                    slidesPerView: 2.8
                }
            }
        })
    }
}

const drawerListener = () => {
    const drawerInput = document.querySelector('#navbar-menu')

    window.addEventListener('resize', () => {
        drawerInput.checked = false
    })
}
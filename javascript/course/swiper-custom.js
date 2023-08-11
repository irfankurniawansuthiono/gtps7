const swiperEl = document.querySelector('swiper-container')

const params = {
    injectStyles: [`
    .swiper-pagination-bullet-active {
        background: #E27F1E !important;
    }
    `],
}

Object.assign(swiperEl, params)

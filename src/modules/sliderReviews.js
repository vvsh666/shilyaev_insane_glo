export const sliderReviews = () => {
    const sliderBlock = document.querySelector('.reviews-slider-wrap')
    const slides = sliderBlock.querySelectorAll('.reviews-slider__slide')

    let currentSlide = 0

    const nextSlide = () => {
        slides[currentSlide].classList.remove('reviews-slider__slide-active')

        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        slides[currentSlide].classList.add('reviews-slider__slide-active')
    }

    const prevSlide = () => {
        slides[currentSlide].classList.remove('reviews-slider__slide-active')

        currentSlide--
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        slides[currentSlide].classList.add('reviews-slider__slide-active')
    }

    sliderBlock.addEventListener('click', (e) => {
        if (e.target.closest('#reviews-arrow_right')) {
            nextSlide()
        }
        if (e.target.closest('#reviews-arrow_left')) {
            prevSlide()
        }
    })
}
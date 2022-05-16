import { animate, scrollBody } from "./helpers"

export const sliderTransparency = () => {
    const popupTransparency = document.querySelector('.popup-transparency')
    const popupSliderBlock = popupTransparency.querySelector('.popup-transparency-slider-wrap')
    const popupSlides = popupSliderBlock.querySelectorAll('.popup-transparency-slider__slide')
    const popupCounter = document.getElementById('transparency-popup-counter')
    const popupCounterCurrent = popupCounter.querySelector('.slider-counter-content__current')
    const popupCounterTotal = popupCounter.querySelector('.slider-counter-content__total')

    const sliderBlock = document.querySelector('.transparency-slider-wrap')
    const slides = sliderBlock.querySelectorAll('.transparency-item')

    const imgItems = document.querySelectorAll('.transparency-item__img')

    let currentSlide = 0

    const showPopup = (popup) => {
        scrollBody(false)
        popup.style.opacity = 0
        popup.style.visibility = 'visible'

        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                popup.style.opacity = progress
            }
        })
    }

    const hidePopup = (popup) => {
        scrollBody(true)
        popup.style.opacity = ''
        popup.style.visibility = ''
    }

    const nextSlide = () => {
        popupSlides[currentSlide].classList.remove('popup-transparency-slider__slide-active')
        slides[currentSlide].classList.remove('transparency-item-active')

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        popupSlides[currentSlide].classList.add('popup-transparency-slider__slide-active')
        slides[currentSlide].classList.add('transparency-item-active')
        popupCounterCurrent.textContent = currentSlide + 1
    }

    const prevSlide = () => {
        popupSlides[currentSlide].classList.remove('popup-transparency-slider__slide-active')
        slides[currentSlide].classList.remove('transparency-item-active')

        currentSlide--

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        popupSlides[currentSlide].classList.add('popup-transparency-slider__slide-active')
        slides[currentSlide].classList.add('transparency-item-active')
        popupCounterCurrent.textContent = currentSlide + 1

    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('#transparency_left') || e.target.closest('#transparency-arrow_left')) {
            prevSlide()
        }
        if (e.target.closest('#transparency_right') || e.target.closest('#transparency-arrow_right')) {
            nextSlide()
        }
        if (e.target.closest('.popup-transparency .close')) {
            hidePopup(popupTransparency)
        }
    })

    imgItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSlide = index
            popupSlides.forEach(slide => {
                slide.classList.remove('popup-transparency-slider__slide-active')
            })
            popupSlides[index].classList.add('popup-transparency-slider__slide-active')
            popupCounterCurrent.textContent = currentSlide + 1
            popupCounterTotal.textContent = slides.length
            showPopup(popupTransparency)
        })
    })

}
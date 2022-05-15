import { animate, scrollBody } from "./helpers"

export const sliderPortfolioPopup = () => {
    const slidesDesktop = document.querySelectorAll('.portfolio-slider .portfolio-slider__slide-frame')
    const slidesMobile = document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame')

    const popupPortfolio = document.querySelector('.popup-portfolio')
    const sliderBlock = popupPortfolio.querySelector('.popup-portfolio-slider-wrap')
    const slides = sliderBlock.querySelectorAll('.popup-portfolio-slider__slide')
    const textSlides = popupPortfolio.querySelectorAll('.popup-portfolio-text')

    const popupCounter = document.getElementById('popup-portfolio-counter')
    const popupCounterCurrent = popupCounter.querySelector('.slider-counter-content__current')
    const popupCounterTotal = popupCounter.querySelector('.slider-counter-content__total')

    let currentSlide

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

        slides.forEach(slide => {
            slide.style.display = 'none'
        })
        slides[currentSlide].style.display = 'block'
        if (document.documentElement.offsetWidth > 1024 || document.documentElement.offsetWidth < 576) {
            textSlides[currentSlide].style.display = 'flex'
        } else {
            textSlides[currentSlide].style.display = 'contents'
        }

        popupCounterTotal.textContent = slides.length
        popupCounterCurrent.textContent = currentSlide + 1
    }

    const hidePopup = (popup) => {
        scrollBody(true)
        popup.style.opacity = ''
        popup.style.visibility = ''
    }

    const nextSlide = () => {
        slides[currentSlide].style.display = 'none'
        textSlides[currentSlide].style.display = 'none'

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        slides[currentSlide].style.opacity = '0'
        textSlides[currentSlide].style.opacity = '0'

        slides[currentSlide].style.display = 'block'
        if (document.documentElement.offsetWidth > 1024 || document.documentElement.offsetWidth < 576) {
            textSlides[currentSlide].style.display = 'flex'
        } else {
            textSlides[currentSlide].style.display = 'contents'
        }

        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = progress
                textSlides[currentSlide].style.opacity = progress
            }
        })

        popupCounterCurrent.textContent = currentSlide + 1
    }

    const prevSlide = () => {
        slides[currentSlide].style.display = 'none'
        textSlides[currentSlide].style.display = 'none'

        currentSlide--

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        slides[currentSlide].style.opacity = '0'
        textSlides[currentSlide].style.opacity = '0'

        slides[currentSlide].style.display = 'block'
        if (document.documentElement.offsetWidth > 1024 || document.documentElement.offsetWidth < 576) {
            textSlides[currentSlide].style.display = 'flex'
        } else {
            textSlides[currentSlide].style.display = 'contents'
        }

        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = progress
                textSlides[currentSlide].style.opacity = progress
            }
        })

        popupCounterCurrent.textContent = currentSlide + 1
    }

    slidesDesktop.forEach((slide, index) => {
        slide.addEventListener('click', (e) => {
            if (e.target.closest('.item-hover')) {
                currentSlide = index
                showPopup(popupPortfolio)
            }
        })
    })

    slidesMobile.forEach((slide, index) => {
        slide.addEventListener('click', (e) => {
            if (e.target.closest('.item-hover')) {
                currentSlide = index
                showPopup(popupPortfolio)
            }
        })
    })

    popupPortfolio.addEventListener('click', (e) => {
        if (e.target.closest('.close')) {
            hidePopup(popupPortfolio)
        }
        if (e.target.closest('#popup_portfolio_right')) {
            nextSlide()
        }
        if (e.target.closest('#popup_portfolio_left')) {
            prevSlide()
        }
    })

    window.addEventListener('resize', () => {
        if (popupPortfolio.style.visibility === 'visible') {
            if (document.documentElement.offsetWidth > 1024 || document.documentElement.offsetWidth < 576) {
                textSlides[currentSlide].style.display = 'flex'
            } else {
                textSlides[currentSlide].style.display = 'contents'
            }
        }
    })
}
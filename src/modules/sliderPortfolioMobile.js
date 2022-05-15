import { animate } from "./helpers"

export const sliderPortfolioMobile = () => {
    const sliderBlock = document.querySelector('.portfolio-slider-wrap')
    const slider = sliderBlock.querySelector('.portfolio-slider-mobile')
    const slides = slider.querySelectorAll('.portfolio-slider__slide-frame')
    const counter = document.getElementById('portfolio-counter')
    const counterCurrent = counter.querySelector('.slider-counter-content__current')
    const counterTotal = counter.querySelector('.slider-counter-content__total')

    let currentSlide = 0

    const nextSlide = () => {
        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = 1 - progress
            }
        })
        slides[currentSlide].style.display = 'none'

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        slides[currentSlide].style.opacity = '0'
        slides[currentSlide].style.display = 'block'

        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = progress
            }
        })

        counterCurrent.textContent = currentSlide + 1
    }

    const prevSlide = () => {
        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = 1 - progress
            }
        })
        slides[currentSlide].style.display = 'none'

        currentSlide--

        if (currentSlide <= 0) {
            currentSlide = slides.length - 1
        }

        slides[currentSlide].style.opacity = '0'
        slides[currentSlide].style.display = 'block'

        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = progress
            }
        })

        counterCurrent.textContent = currentSlide + 1
    }


    sliderBlock.addEventListener('click', (e) => {
        if (e.target.closest('.slider-arrow-tablet-mobile_right')) {
            nextSlide()
        }
        if (e.target.closest('.slider-arrow-tablet-mobile_left')) {
            prevSlide()
        }
    })

    counterTotal.textContent = slides.length

    slides.forEach(slide => {
        slide.style.display = 'none'
    })
    slides[currentSlide].style.display = 'block'
}
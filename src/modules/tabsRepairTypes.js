import { animate } from "./helpers"

export const tabsRepairTypes = () => {
    const btnsBlock = document.querySelector('.nav-list-repair')
    const btns = btnsBlock.querySelectorAll('.repair-types-nav__item')

    const sliderBlock = document.querySelector('.repair-types-slider-wrap')
    const sliders = sliderBlock.querySelectorAll('.repair-types-slider>div')
    
    const slideCounter = document.getElementById('repair-counter')
    const slideCounterCurrent = slideCounter.querySelector('.slider-counter-content__current')
    const slideCounterTotal = slideCounter.querySelector('.slider-counter-content__total')

    let slides = sliders[0].querySelectorAll('.repair-types-slider__slide')

        
    let currentTab = 0
    let currentSlide = 0
    
    slideCounterTotal.textContent = slides.length

    const nextSlide = () => {
        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        slides.forEach(slide => {
            slide.style.display = 'none'
        })
        slides[currentSlide].style.opacity = '0'
        slides[currentSlide].style.display = 'block'
        slideCounterCurrent.textContent = currentSlide + 1

        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = progress
            }
        })
    }

    const prevSlide = () => {
        currentSlide--
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }
        slides.forEach(slide => {
            slide.style.display = 'none'
        })
        slides[currentSlide].style.opacity = '0'
        slides[currentSlide].style.display = 'block'
        slideCounterCurrent.textContent = currentSlide + 1

        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = progress
            }
        })
    }

    btns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            slides = sliders[currentTab].querySelectorAll('.repair-types-slider__slide')
            slides.forEach(slide => {
                slide.style = ''
            })
            currentTab = index
            btns.forEach(bnt => {
                bnt.classList.remove('active')
            })
            e.target.classList.add('active')
            sliders.forEach(slider => {
                slider.style.display = 'none'
            })
            sliders[currentTab].style.display = 'block'
            
            slides = sliders[currentTab].querySelectorAll('.repair-types-slider__slide')
            currentSlide = 0
            slides[currentSlide].style.display = 'block'
            slideCounterTotal.textContent = slides.length
            slideCounterCurrent.textContent = currentSlide + 1
        })
    })

    sliderBlock.addEventListener('click', (e) => {
        if (e.target.closest('#repair-types-arrow_right')) {
            nextSlide()
        }
        if (e.target.closest('#repair-types-arrow_left')) {
            prevSlide()
        }
    })
}
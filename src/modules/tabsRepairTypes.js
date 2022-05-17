import { animate } from "./helpers"

export const tabsRepairTypes = () => {
    const btnsBlock = document.querySelector('.nav-wrap-repair')
    const btns = btnsBlock.querySelectorAll('.repair-types-nav__item')
    const btnsSlider = btnsBlock.querySelector('.nav-list-repair')

    const sliderBlock = document.querySelector('.repair-types-slider-wrap')
    const sliders = sliderBlock.querySelectorAll('.repair-types-slider>div')

    const slideCounter = document.getElementById('repair-counter')
    const slideCounterCurrent = slideCounter.querySelector('.slider-counter-content__current')
    const slideCounterTotal = slideCounter.querySelector('.slider-counter-content__total')

    let slides = sliders[0].querySelectorAll('.repair-types-slider__slide')


    let currentTab = 0
    let currentSlide = 0

    slideCounterTotal.textContent = slides.length

    const setActiveTab = () => {
        btns.forEach(bnt => {
            bnt.classList.remove('active')
        })
        btns[currentTab].classList.add('active')
        sliders.forEach(slider => {
            slider.style.display = 'none'
        })
        sliders[currentTab].style.display = 'block'

        slides = sliders[currentTab].querySelectorAll('.repair-types-slider__slide')
        currentSlide = 0
        slides[currentSlide].style.display = 'block'
        slideCounterTotal.textContent = slides.length
        slideCounterCurrent.textContent = currentSlide + 1
    }

    const transformTabs = () => {
        let leftCurrenTab = btns[currentTab].getBoundingClientRect().left
        let leftBtnsSlider = btnsSlider.getBoundingClientRect().left
        let delta = leftCurrenTab - leftBtnsSlider
        btnsSlider.style.transform = 'translateX(' + -delta + 'px)'
    }

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

    const nextTab = () => {
        currentTab++
        if (currentTab >= btns.length) {
            currentTab--
        }

        transformTabs()
        setActiveTab()
    }

    const prevTab = () => {
        currentTab--
        if (currentTab < 0) {
            currentTab++
        }

        transformTabs()
        setActiveTab()
    }

    btns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            slides = sliders[currentTab].querySelectorAll('.repair-types-slider__slide')
            slides.forEach(slide => {
                slide.style = ''
            })
            currentTab = index
            setActiveTab()
            if (document.documentElement.clientWidth < 1025) {
                transformTabs()
            }
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

    btnsBlock.addEventListener('click', (e) => {
        if (e.target.closest('#nav-arrow-repair-right_base')) {
            nextTab()
        }
        if (e.target.closest('#nav-arrow-repair-left_base')) {
            prevTab()
        }
    })

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 1025) {
            transformTabs()
        } else {
            btnsSlider.style.transform = ''
        }
    })
}
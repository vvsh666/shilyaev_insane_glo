export const formulaMobile = () => {
    const sliderBlock = document.querySelector('.formula-slider-wrap')
    const slider = sliderBlock.querySelector('.formula-slider')
    const slides = sliderBlock.querySelectorAll('.formula-slider__slide')

    let currentSlide = 0
    let deltaX = (document.documentElement.clientWidth / 2) - slider.getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2

    slider.style.transform = 'translateX(' + deltaX + 'px)'

    const showPopup = (slide) => {
        const popup = slide.querySelector('.formula-item-popup')
        const inner = slide.querySelector('.formula-item__icon-inner')
        const icon = slide.querySelector('.formula-item__icon')
        icon.style.width = '66px'
        icon.style.height = '66px'
        popup.style.visibility = 'visible'
        popup.style.opacity = '1'
        inner.style.background = 'linear-gradient(90deg, #F48922 0%, #FFB015 100%)'
        inner.style.color = '#eeeeee'

    }

    const hidePopup = (slide) => {
        const popup = slide.querySelector('.formula-item-popup')
        const inner = slide.querySelector('.formula-item__icon-inner')
        const icon = slide.querySelector('.formula-item__icon')
        popup.style = ''
        inner.style = ''
        icon.style = ''
    }

    showPopup(slides[currentSlide])

    const nextSlide = () => {
        slides[currentSlide].classList.remove('formula-slider__slide-active')

        hidePopup(slides[currentSlide])

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0

            deltaX = deltaX + (document.documentElement.clientWidth / 2) - slides[currentSlide].getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2

            slider.style.transform = 'translateX(' + deltaX + 'px)'
        }

        slides[currentSlide].classList.add('formula-slider__slide-active')

        if (slides[currentSlide].getBoundingClientRect().left + slides[currentSlide].clientWidth > document.documentElement.clientWidth / 2) {
            deltaX = deltaX + (document.documentElement.clientWidth / 2) - slides[currentSlide].getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2

            slider.style.transform = 'translateX(' + deltaX + 'px)'
        }

        showPopup(slides[currentSlide])
    }

    const prevSlide = () => {
        slides[currentSlide].classList.remove('formula-slider__slide-active')
        hidePopup(slides[currentSlide])
        currentSlide--
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
            deltaX = deltaX + (document.documentElement.clientWidth / 2) - slides[currentSlide].getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2
            slider.style.transform = 'translateX(' + deltaX + 'px)'
        }
        slides[currentSlide].classList.add('formula-slider__slide-active')
        if (slides[currentSlide].getBoundingClientRect().left < document.documentElement.clientWidth / 2) {

            deltaX = deltaX + (document.documentElement.clientWidth / 2) - slides[currentSlide].getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2
            slider.style.transform = 'translateX(' + deltaX + 'px)'
        }
        showPopup(slides[currentSlide])
    }


    sliderBlock.addEventListener('click', (e) => {
        if (e.target.closest('.slider-arrow_left-formula')) {
            prevSlide()
        }
        if (e.target.closest('.slider-arrow_right-formula')) {
            nextSlide()
        }
    })

    window.addEventListener('resize', () => {
        deltaX = (document.documentElement.clientWidth / 2) - sliderBlock.getBoundingClientRect().left - (currentSlide + 1.5) * slides[currentSlide].getBoundingClientRect().width

        slider.style.transform = 'translateX(' + deltaX + 'px)'
    })

}
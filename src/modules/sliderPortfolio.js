export const sliderPortfolio = () => {
    const sliderBlock = document.querySelector('.portfolio-slider-wrap')
    const slider = sliderBlock.querySelector('.portfolio-slider')
    const slides = slider.querySelectorAll('.portfolio-slider__slide')
    const arrowLeft = document.getElementById('portfolio-arrow_left')
    const arrowRight = document.getElementById('portfolio-arrow_right')

    let currentSlide = 0
    let deltaX = 0

    const nextSlide = () => {
        const lastSlideRight = slides[slides.length - 1].getBoundingClientRect().right
        const sliderRight = slider.getBoundingClientRect().right
        const slideWidth = slides[currentSlide].getBoundingClientRect().width
        const deltaLastSlide = lastSlideRight - sliderRight

        if (deltaLastSlide <= 0) {
            return
        } else {
            if (Math.floor(deltaLastSlide / slideWidth)) {
                deltaX += slideWidth
            } else {
                deltaX += deltaLastSlide
            }
            slides.forEach(slide => {
                slide.style.transform = 'translateX(' + -deltaX + 'px)'
            })
            currentSlide++
        }
    }

    const prevSlide = () => {
        const firstSlideLeft = slides[0].getBoundingClientRect().left
        const sliderLeft = slider.getBoundingClientRect().left
        const slideWidth = slides[currentSlide].getBoundingClientRect().width
        const deltaFirstSlide = sliderLeft - firstSlideLeft
        if (deltaFirstSlide <= 0) {
            return
        } else {
            if (Math.floor(deltaFirstSlide / slideWidth)) {
                deltaX -= slideWidth
            } else {
                deltaX -= deltaFirstSlide
            }
            slides.forEach(slide => {
                slide.style.transform = 'translateX(' + -deltaX + 'px)'
            })
            currentSlide--
        }
    }

    const showHideArrows = () => {
        const firstSlideLeft = slides[0].getBoundingClientRect().left
        const lastSlideRight = slides[slides.length - 1].getBoundingClientRect().right
        const sliderRight = slider.getBoundingClientRect().right
        const sliderLeft = slider.getBoundingClientRect().left
        const deltaLastSlide = lastSlideRight - sliderRight
        const deltaFirstSlide = sliderLeft - firstSlideLeft

        if (deltaFirstSlide > 0) {
            arrowLeft.style.display = 'flex'
        } else {
            arrowLeft.style.display = 'none'
        }
        if (deltaLastSlide > 0) {
            arrowRight.style.display = 'flex'
        } else {
            arrowRight.style.display = 'none'
        }
    }

    sliderBlock.addEventListener('click', (e) => {
        if (e.target.closest('#portfolio-arrow_right')) {
            nextSlide()
            setTimeout(showHideArrows, 250)
        }
        if (e.target.closest('#portfolio-arrow_left')) {
            prevSlide()
            setTimeout(showHideArrows, 250)
        }
    })

    window.addEventListener('resize', () => {
        currentSlide = 0
        deltaX = 0
        arrowLeft.style = ''
        slides.forEach(slide => {
            slide.style = ''
        })
    })
}
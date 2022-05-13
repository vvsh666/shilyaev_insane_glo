import { animate, scrollBody } from "./helpers"

export const showHidePopups = (popup) => {
    const popupPrivacy = document.querySelector('.popup-privacy')
    const popupConsultation = document.querySelector('.popup-consultation')
    const popupTransparency = document.querySelector('.popup-transparency')

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

    document.addEventListener('click', (e) => {
        if (e.target.closest('.link-privacy')) {
            showPopup(popupPrivacy)
        }
        if (e.target.closest('.popup-privacy>.close')) {
            hidePopup(popupPrivacy)
        }
        if (e.target.closest('.director-avatar button')) {
            showPopup(popupConsultation)
        }
        if (e.target.closest('.popup-consultation .close')) {
            hidePopup(popupConsultation)
        }
        if (e.target.closest('.transparency-item__img')) {
            showPopup(popupTransparency)
        }
        if (e.target.closest('.popup-transparency .close')) {
            hidePopup(popupTransparency)
        }
    })
}
import { animate, scrollBody } from "./helpers"

export const privacy = () => {
    const popup = document.querySelector('.popup-privacy')

    const showPrivacy = () => {
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

    const hidePrivacy = () => {
        scrollBody(true)
        popup.style.opacity = ''
        popup.style.visibility = ''
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.link-privacy')) {
            showPrivacy()
        }
        if (e.target.closest('.popup-privacy>.close')) {
            hidePrivacy()
        }
    })
}
import { animate } from "./helpers"

export const menu = () => {
    const arrow = document.querySelector('.header-contacts__arrow')
    const numberAccord = document.querySelector('.header-contacts__phone-number-accord')
    const number = numberAccord.querySelector('.header-contacts__phone-number')
    const menu = document.querySelector('.popup-dialog-menu')
    const popupRepairTypes = document.querySelector('.popup-repair-types')

    let isPhone = false

    const showPhone = () => {
        numberAccord.style.top = '25px'
        number.style.opacity = 1
        arrow.style.transform = 'rotateX(180deg)'
    }

    const hidePhone = () => {
        numberAccord.style.top = '0px'
        number.style.opacity = 0
        arrow.style.transform = 'rotateX(0)'
    }

    const showMenu = () => {
        menu.style.transform = 'translate3d(0, 0, 0)'
    }

    const hideMenu = () => {
        menu.style.transform = ''
    }

    const scrollSmoothToAnchor = (link, event) => {
        event.preventDefault()
        let element = document.getElementById(link.getAttribute('href').substring(1))
        element.scrollIntoView({ behavior: 'smooth' })
    }

    const showPopupRepairTypes = () => {
        popupRepairTypes.style.opacity = 0
        popupRepairTypes.style.visibility = 'visible'

        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                popupRepairTypes.style.opacity = progress
            }
        })
    }

    const hidePopupRepairTypes = () => {
        popupRepairTypes.style.visibility = ''
        popupRepairTypes.style.opacity = ''
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.header-contacts__arrow')) {
            isPhone = !isPhone

            if (isPhone) {
                showPhone()
            } else {
                hidePhone()
            }
        }
        if (e.target.closest('.menu__icon')) {
            showMenu()
        }
        if (e.target.closest('.close-menu')) {
            hideMenu()
        }
        if (e.target.closest('.menu-link')) {
            if (e.target.closest('.no-overflow')) {
                e.preventDefault()
                hideMenu()
                showPopupRepairTypes()
            } else {
                scrollSmoothToAnchor(e.target, e)
                hideMenu()
            }
        }
        if (e.target.closest('.button-footer')) {
            if (e.target.localName != 'a') {
                scrollSmoothToAnchor(e.target.childNodes[0], e)
            } else {
                scrollSmoothToAnchor(e.target, e)
            }
        }
        if (e.target.closest('.no-overflow')) {
            hideMenu()
        }
        if (e.target.closest('.link-list-repair>a')) {
            showPopupRepairTypes()
        }
        if (e.target.closest('.popup-repair-types>.close')) {
            hidePopupRepairTypes()
        }

    })
}
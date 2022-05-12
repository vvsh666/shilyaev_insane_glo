export const menu = () => {
    const arrow = document.querySelector('.header-contacts__arrow')
    const numberAccord = document.querySelector('.header-contacts__phone-number-accord')
    const number = numberAccord.querySelector('.header-contacts__phone-number')

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

    arrow.addEventListener('click', () => {
        isPhone = !isPhone
        if (isPhone) {
            showPhone()
        } else {
            hidePhone()
        }
    })
}
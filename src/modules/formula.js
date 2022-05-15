export const formula = () => {
    const formulaIcons = document.querySelectorAll('.mobile-hide .formula-item__icon')

    formulaIcons.forEach(icon => {
        icon.addEventListener('mouseenter', (e) => {
            const inner = e.target.querySelector('.formula-item__icon-inner')
            const text = e.target.querySelector('.formula-item__icon-inner-text')
            const popup = e.target.querySelector('.formula-item-popup')
            const popupText = e.target.querySelector('.formula-item-popup-text')

            if (popup.getBoundingClientRect().top < 0) {
                popup.style.transformOrigin = '50% 130%'
                popup.style.transform = 'rotateX(180deg)'
                popupText.style.transform = 'rotateX(180deg)'
            }

            inner.style.opacity = '1'
            text.style.color = '#eeeeee'
            popup.style.visibility = 'visible'
            popup.style.opacity = '1'
            popup.style.zIndex = '100'

        })
        icon.addEventListener('mouseleave', (e) => {
            const inner = e.target.querySelector('.formula-item__icon-inner')
            const text = e.target.querySelector('.formula-item__icon-inner-text')
            const popup = e.target.querySelector('.formula-item-popup')
            const popupText = e.target.querySelector('.formula-item-popup-text')

            inner.style = ''
            text.style = ''
            popup.style = ''
            popupText.style = ''
        })
    })


}
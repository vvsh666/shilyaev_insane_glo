export const formula = () => {
    const formulaIcons = document.querySelectorAll('.mobile-hide .formula-item__icon')

    formulaIcons.forEach(icon => {
        icon.addEventListener('mouseenter', (e) => {
            const inner = e.target.querySelector('.formula-item__icon-inner')
            const text = e.target.querySelector('.formula-item__icon-inner-text')
            const popup = e.target.querySelector('.formula-item-popup')

            if (popup.getBoundingClientRect().top < 0) {
                popup.classList.add('formula-item-popup-toggle')
                formulaIcons.forEach(item => {
                    item.style = 'z-index: auto'
                    item.parentNode.style = 'z-index: auto'
                })
                icon.style = 'z-index: 1'
                icon.parentNode.style = 'z-index: 1'
            }

            inner.style.opacity = '1'
            text.style.color = '#eeeeee'
            popup.style.visibility = 'visible'
            popup.style.opacity = '1'

        })
        icon.addEventListener('mouseleave', (e) => {
            const inner = e.target.querySelector('.formula-item__icon-inner')
            const text = e.target.querySelector('.formula-item__icon-inner-text')
            const popup = e.target.querySelector('.formula-item-popup')
            const popupText = e.target.querySelector('.formula-item-popup-text')

            popup.classList.remove('formula-item-popup-toggle')
            formulaIcons.forEach(item => {
                item.style = ''
                item.parentNode.style = ''
            })
            inner.style = ''
            text.style = ''
            popup.style = ''
            popupText.style = ''
        })
    })


}
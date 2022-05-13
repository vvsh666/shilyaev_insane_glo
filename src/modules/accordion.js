export const accordion = () => {
    const titles = document.querySelectorAll('.title_block')

    titles.forEach((title) => {
        title.addEventListener('click', (e) => {
            if (e.target.classList.contains('msg-active')) {
                e.target.classList.remove('msg-active')
            } else {
                titles.forEach(item => {
                    item.classList.remove('msg-active')
                })
                e.target.classList.add('msg-active')
            }
        })
    })
}
import { render } from "./render"

export const addRepairs = (repairService) => {
    const btnAddItem = document.querySelector('.btn-addItem')
    const modal = document.getElementById('modal')
    const form = modal.querySelector('form')
    const typeInput = form.querySelector('#type')
    const nameInput = form.querySelector('#name')
    const unitsInput = form.querySelector('#units')
    const costInput = form.querySelector('#cost')

    
    btnAddItem.addEventListener('click', () => {
        modal.style.display = 'flex'
    })

    modal.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.closest('.button__close') || e.target.closest('.cancel-button')) {
            modal.style = ''
        }
        if (e.target.closest('.button-ui_firm')) {
            e.preventDefault()
            const repair = {
                type: typeInput.value,
                name: nameInput.value,
                units: unitsInput.value,
                cost: costInput.value
            }
            repairService.addRepair(repair).then(res => {
                repairService.filterRepair(repair.type).then(repairs => {
                    render(repairs)
                    form.reset()
                })
                
            })
        }
    })


}
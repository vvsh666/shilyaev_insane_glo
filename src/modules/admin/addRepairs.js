import { render } from "./render"

export const addRepairs = (repairService) => {
    const btnAddItem = document.querySelector('.btn-addItem')
    const modal = document.getElementById('modal')
    const form = modal.querySelector('form')
    const inputs = form.querySelectorAll('input')
    const typeInput = form.querySelector('#type')
    const nameInput = form.querySelector('#name')
    const unitsInput = form.querySelector('#units')
    const costInput = form.querySelector('#cost')

    const validate = () => {

        let success = true
        inputs.forEach(input => {
            if (input.id === 'type' || input.id === 'name' || input.id === 'units') {
                if (input.value === '') {
                    success = false
                    input.style.borderBottom = '2px solid red'
                }
            }
            if (input.id === 'cost') {
                if (input.value === '' || (/\D+/g.test(input.value))) {
                    success = false
                    input.style.borderBottom = '2px solid red'
                }
            }
        })
        return success
    }


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
            if (form.dataset.method !== 'edit') {
                if (validate()) {
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
            }
        }
    })

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.style = ''
            if (e.target === costInput) {
                e.target.value = e.target.value.replace(/\D+/, '')
            }
        })
    })

    // costInput.addEventListener('input', (e) => {
    //     e.target.value = e.target.value.replace(/\D+/, '')
    // })


}
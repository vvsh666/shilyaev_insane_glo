import { render } from "./render"

export const editRepairs = (repairService) => {
    const tbody = document.getElementById('tbody')
    const select = document.getElementById('typeItem')
    const modal = document.getElementById('modal')
    const form = modal.querySelector('form')
    const typeInput = form.querySelector('#type')
    const nameInput = form.querySelector('#name')
    const unitsInput = form.querySelector('#units')
    const costInput = form.querySelector('#cost')

    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.action-change')) {
            const tr = e.target.closest('tr')
            const id = tr.querySelector('.table__id').textContent


            repairService.getRepairItem(id).then(res => {
                typeInput.value = res.type
                nameInput.value = res.name
                unitsInput.value = res.units
                costInput.value = res.cost

                form.dataset.method = 'edit'
                form.dataset.id = id

                modal.style.display = 'flex'
            })
        }
    })

    modal.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.closest('.button__close') || e.target.closest('.cancel-button')) {
            modal.style = ''
            form.removeAttribute('data-method')
            form.removeAttribute('data-id')
        }
        if (e.target.closest('.button-ui_firm')) {
            e.preventDefault()

            const id = form.dataset.id
            const type = select.value

            if (form.dataset.method === 'edit') {
                const repair = {
                    type: typeInput.value,
                    name: nameInput.value,
                    units: unitsInput.value,
                    cost: costInput.value
                }

                repairService.editRepairItem(id, repair).then(res => {
                    if (type === 'Все услуги') {
                        repairService.getRepair().then(data => {
                            render(data)
                        })
                    } else {
                        repairService.filterRepair(type).then(data => {
                            render(data)
                        })
                    }
                    form.reset()
                    modal.style = ''
                    form.removeAttribute('data-method')
                    form.removeAttribute('data-id')
                })
            }
        }
    })
}
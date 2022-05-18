import { render } from "./render"

export const removeRepair = (repairService) => {
    const tbody = document.getElementById('tbody')
    const select = document.getElementById('typeItem')

    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.action-remove')) {
            const tr = e.target.closest('tr')
            const id = tr.querySelector('.table__id').textContent
            const type = select.value

            repairService.removeRepair(id).then(res => {
                if (type === 'Все услуги') {
                    repairService.getRepair().then(data => {
                        render(data)
                    })
                } else {
                    repairService.filterRepair(type).then(data => {
                        render(data)
                    })
                }
            })
        }
    })
}
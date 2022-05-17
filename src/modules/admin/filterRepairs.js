import { render } from "./render"

export const filterRepairs = (repairService) => {
    const select = document.getElementById('typeItem')

    select.addEventListener('change', (e) => {
        if (e.target.value === 'Все услуги') {
            repairService.getRepair().then(data => {
                render(data)
            })
        } else {
            repairService.filterRepair(e.target.value).then(data => {
                render(data)
            })
        }
    })
}
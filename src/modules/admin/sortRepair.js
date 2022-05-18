import { render } from "./render"

export const sortRepair = (repairService) => {
    const select = document.getElementById('typeItem')
    const thead = document.querySelector('thead')

    let sortOptions = {}

    let isSortId = false
    let isSortType = false
    let isSortName = false
    let isSortUnits = false


    thead.addEventListener('click', (e) => {
        if (e.target.closest('.th-id')) {
            const svg = e.target.closest('.th-id').querySelector('svg')
            isSortId = !isSortId
            isSortId ? svg.style.transform = 'rotateX(180deg)' : svg.style = ''
            sortOptions = {
                name: 'id',
                value: isSortId
            }
        }
        if (e.target.closest('.th-type')) {
            const svg = e.target.closest('.th-type').querySelector('svg')
            isSortType = !isSortType
            isSortType ? svg.style.transform = 'rotateX(180deg)' : svg.style = ''
            sortOptions = {
                name: 'type',
                value: isSortType
            }
        }
        if (e.target.closest('.th-name')) {
            const svg = e.target.closest('.th-name').querySelector('svg')
            isSortName = !isSortName
            isSortName ? svg.style.transform = 'rotateX(180deg)' : svg.style = ''
            sortOptions = {
                name: 'name',
                value: isSortName
            }
        }
        if (e.target.closest('.th-units')) {
            const svg = e.target.closest('.th-units').querySelector('svg')
            isSortUnits = !isSortUnits
            isSortUnits ? svg.style.transform = 'rotateX(180deg)' : svg.style = ''
            sortOptions = {
                name: 'units',
                value: isSortUnits
            }
        }
        repairService.getSortRepair(sortOptions, select.value).then(data => {
            render(data)
        })

    })

}
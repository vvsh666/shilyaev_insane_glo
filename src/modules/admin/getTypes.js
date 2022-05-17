import { RepairService } from "./repairService"

export const getTypes = (repairService) => {
    const select = document.getElementById('typeItem')

    repairService.getRepair().then(data => {
        let types = []
        data.forEach(item => {
            if (item.type) {
                types.push(item.type)
            }
        })
        types = [...new Set(types)]

        types.forEach(type => {
            const option = document.createElement('option')
            option.value = type
            option.textContent = type
            select.append(option)
        })

    })
}
import { debounce } from "../helpers"
import { render } from "./render"

export const searchRepairs = (repairService) => {
    const input = document.getElementById('search')
    const select = document.getElementById('typeItem')

    const debounceSearch = debounce(() => {
        repairService.getSearchRepair(input.value, select.value).then(data => {
            render(data)
        })
    })

    input.addEventListener('input', debounceSearch)
}
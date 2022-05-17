export const render = (array) => {
    const tbody = document.getElementById('tbody')

    tbody.innerHTML = ''

    array.forEach(item => {
        const tr = document.createElement('tr')
        tr.className = 'table__row'
        tr.innerHTML = `
            <td class="table__id table__cell">${item.id}</td>
            <td class="table-type table__cell">${item.type}</td>
            <td class="table-name table__cell">${item.name}</td>
            <td class="table-units table__cell">${item.units}</td>
            <td class="table-cost table__cell">${item.cost}</td>
            <td>
                <div class="table__actions table__cell">
                    <button class="button action-change"><span class="svg_ui"><svg
                                class="action-icon_change">
                                <use xlink:href="./img/sprite.svg#change"></use>
                            </svg></span><span>Изменить</span>
                    </button>
                    <button class="button action-remove"><span class="svg_ui"><svg
                                class="action-icon_remove">
                                <use xlink:href="./img/sprite.svg#remove"></use>
                            </svg></span><span>Удалить</span>
                    </button>
                </div>
            </td>
        `
        tbody.append(tr)
    })
}
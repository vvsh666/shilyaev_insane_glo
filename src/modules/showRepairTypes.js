export const showRepairTypes = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types')
    const blockBtns = popupRepairTypes.querySelector('.nav-list-popup-repair')
    const title = document.getElementById('switch-inner')
    const tbody = popupRepairTypes.querySelector('tbody')

    let btns

    const getData = async () => {
        const response = await fetch('./db/db.json')
        return await response.json()

    }

    const showBtns = () => {
        let types = []

        getData().then(data => {
            data.forEach(item => {
                types.push(item.type)
            })
            types = [... new Set(types)]

            types.forEach(type => {
                const btn = document.createElement('button')

                btn.className = 'button_o popup-repair-types-nav__item'
                btn.textContent = type
                blockBtns.append(btn)
            })

            btns = popupRepairTypes.querySelectorAll('.popup-repair-types-nav__item')

            showTitle(btns[0].textContent)
            showTable(btns[0].textContent)
        })
    }

    const showTitle = (str) => {
        title.textContent = str
    }

    const showTable = (type) => {
        getData().then(data => {
            let repairs = data.filter(item => item.type === type)
            repairs.forEach(repair => {
                const tr = document.createElement('tr')

                tr.className = 'mobile-row showHide'
                tr.innerHTML = `
                    <td class="repair-types-name">${repair.name}</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                    <td class="repair-types-value">${repair.units === 'м2' ? 'м<sup>2</sup>' : repair.units}</td>
                    <td class="repair-types-value">${repair.cost}</td>
                `
                tbody.append(tr)
            })
        })
    }


    showBtns()

    blockBtns.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-repair-types-nav__item')) {
            tbody.innerHTML = ''
            showTitle(e.target.textContent)
            showTable(e.target.textContent)
        }
    })

}
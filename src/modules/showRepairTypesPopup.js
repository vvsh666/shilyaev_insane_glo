export const showRepairTypesPopup = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types')
    const blockBtns = popupRepairTypes.querySelector('.nav-list-popup-repair')
    const title = document.getElementById('switch-inner')
    const tbody = popupRepairTypes.querySelector('tbody')

    let btns
    let currentTab = 0

    const getData = async () => {
        const response = await fetch('./db/db.json')
        return await response.json()
    }

    const setActiveTab = () => {
        btns.forEach(btn => {
            btn.classList.remove('popup-repair-types-nav__item-active')
        })
        btns[currentTab].classList.add('popup-repair-types-nav__item-active')
        tbody.innerHTML = ''
        showTitle(btns[currentTab].textContent)
        showTable(btns[currentTab].textContent)
    }

    const transformTabs = () => {
        let leftCurrenTab = btns[currentTab].getBoundingClientRect().left
        let leftBtnsSlider = blockBtns.getBoundingClientRect().left
        let delta = leftCurrenTab - leftBtnsSlider
        blockBtns.style.transform = 'translateX(' + -delta + 'px)'
    }

    const nextTab = () => {
        currentTab++
        if (currentTab >= btns.length) {
            currentTab--
        }

        transformTabs()
        setActiveTab()
    }

    const prevTab = () => {
        currentTab--
        if (currentTab < 0) {
            currentTab++
        }

        transformTabs()
        setActiveTab()
    }

    const showBtns = () => {
        let types = []

        getData().then(data => {
            data['repairs'].forEach(item => {
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
            btns[0].classList.add('popup-repair-types-nav__item-active')

            btns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    currentTab = index

                    setActiveTab()
                    if (document.documentElement.clientWidth < 1025) {
                        transformTabs()
                    }
                })
            })
        })
    }

    const showTitle = (str) => {
        title.textContent = str
    }

    const showTable = (type) => {
        getData().then(data => {
            let repairs = data['repairs'].filter(item => item.type === type)
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

    popupRepairTypes.addEventListener('click', (e) => {
        if (e.target.closest('#nav-arrow-popup-repair_right')) {
            nextTab()
        }
        if (e.target.closest('#nav-arrow-popup-repair_left')) {
            prevTab()
        }
    })

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 1025) {
            transformTabs()
        } else {
            blockBtns.style.transform = ''
        }
    })

    showBtns()
}
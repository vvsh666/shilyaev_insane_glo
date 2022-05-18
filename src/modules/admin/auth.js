export const auth = (userService) => {
    const form = document.querySelector('form')
    const formInputs = form.querySelectorAll('input')
    const inputLogin = document.getElementById('name')
    const inputPassword = document.getElementById('type')
    const textLogin = form.querySelector('#name + .text-warning')
    const textPassword = form.querySelector('#type + .text-warning')

    const errorLogin = 'Не верное имя'
    const errorPassword = 'Не верный пароль'

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        userService.getUser(inputLogin.value).then(user => {
            if (user) {
                if (user.password !== inputPassword.value) {
                    textPassword.textContent = errorPassword
                    form.reset()
                } else {
                    document.cookie = `login=${inputLogin.value}`
                    document.cookie = `password=${inputPassword.value}`
                    document.location.href = `http://${window.location.host}/dist/admin/table.html`
                }
            } else {
                textLogin.textContent = errorLogin
                form.reset()
            }

        })

    })

    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            textLogin.textContent = ''
            textPassword.textContent = ''
        })
    })


}
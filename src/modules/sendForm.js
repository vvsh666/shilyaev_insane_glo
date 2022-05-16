import { animate, scrollBody } from "./helpers"

export const sendForm = (idForm) => {

    const form = document.getElementById(idForm)
    const popup = document.querySelector('.popup-thank')
    const close = popup.querySelector('.close-thank')

    const showPopup = () => {
        scrollBody(false)
        popup.style.opacity = 0
        popup.style.visibility = 'visible'

        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                popup.style.opacity = progress
            }
        })
    }

    const hidePopup = () => {
        scrollBody(true)
        popup.style.opacity = ''
        popup.style.visibility = ''
    }

    const validate = (list) => {
        let success = true

        list.forEach((input) => {
            if (input.name === 'name') {
                if (input.value === '') {
                    success = false
                }
            }
            if (input.name === 'phone') {
                if (!(/\+7 \([0-9]{3}\) [0-9]{3}\-[0-9]{2}\-[0-9]{2}/.test(input.value))) {
                    success = false
                }
            }
            if (input.type === 'checkbox') {
                if (!input.checked) {
                    success = false
                }
            }
        })
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (validate(formElements)) {

            sendData(formBody).then(data => {
                form.reset()
                showPopup()
            })
                .catch(error => {
                    console.log(error.message);
                })
        } else {
            alert('Данные не валидны!!!')
        }
    }

    try {
        if (!form) {
            throw new Error('Верните на место форму, пожалуйста!')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }

    close.addEventListener('click', hidePopup)
}
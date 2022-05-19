import { animate, scrollBody } from "./helpers"

export const sendForm = (idForm) => {

    const form = document.getElementById(idForm)
    const popup = document.querySelector('.popup-thank')
    const close = popup.querySelector('.close-thank')
    const checkboxBorder = form.querySelector('.checkbox__label')
    const checkboxInput = form.querySelector('.checkbox__input')
    const textLabel = form.querySelectorAll('label>span')
    const textInputs = form.querySelectorAll('input[type=text]')
    const loader = form.querySelector('.loader')

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
                if (form.classList.contains('feedback-block__form')) {
                    if (input.value.length < 2) {
                        textLabel[0].style.color = 'red'
                        success = false
                    }
                }

            }
            if (input.name === 'phone') {
                if (!(/\+7 \([0-9]{3}\) [0-9]{3}\-[0-9]{2}\-[0-9]{2}/.test(input.value))) {
                    success = false
                    if (form.classList.contains('feedback-block__form')) {
                        textLabel[1].style.color = 'red'
                    }
                }
            }
            if (input.type === 'checkbox') {
                if (!input.checked) {
                    checkboxBorder.style.border = '1px solid red'
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
            loader.style.display = 'block'
            sendData(formBody).then(data => {
                form.reset()
                loader.style = ''
                showPopup()
            })
                .catch(error => {
                    console.log(error.message);
                })
        } else {

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

    checkboxInput.addEventListener('click', () => {
        checkboxBorder.style = ''
    })

    if (form.classList.contains('feedback-block__form')) {
        textInputs.forEach(textInput => {
            textInput.addEventListener('input', (e) => {
                if (e.target.classList.contains('feedback-block__form-input_name')) {
                    if (e.target.value.length >= 2) {
                        textLabel[0].style = ''
                    }
                }
                if (e.target.classList.contains('feedback-block__form-input_phone')) {
                    if (/\+7 \([0-9]{3}\) [0-9]{3}\-[0-9]{2}\-[0-9]{2}/.test(e.target.value)) {
                        textLabel[1].style = ''
                    }
                }
            })
        })

    }

}
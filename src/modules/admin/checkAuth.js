export const checkAuth = (userService) => {

    const getCookie = (name) => {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    const redirect = () => {
        document.location.href = `http://${window.location.host}/dist/admin/`
    }

    document.addEventListener('DOMContentLoaded', () => {
        const login = getCookie('login')
        const password = getCookie('password')

        if (login || password) {
            userService.getUser(login).then(user => {
                if (user) {
                    if (user.login === login && user.password === password) {
                        return
                    } else {
                        redirect()
                    }
                } else {
                    redirect()
                }
            })
        } else {
            redirect()
        }

    })
}
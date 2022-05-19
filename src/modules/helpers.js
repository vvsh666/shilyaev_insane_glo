export const animate = ({ timing, draw, duration }) => {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}

export const scrollBody = (check) => {
    if (check) {
        document.body.style = ''
    } else {
        const scrollWidth = window.innerWidth - document.documentElement.clientWidth
        document.body.style.paddingRight = scrollWidth + 'px'
        document.body.style.overflow = 'hidden'
    }
}

export const debounce = (func, ms = 300) => {
    let timer

    return (...args) => {
        clearTimeout(timer)

        timer = setTimeout(() => { func.apply(this, args) }, ms)
    }
}
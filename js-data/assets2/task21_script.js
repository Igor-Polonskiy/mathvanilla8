(() => {
    const pencils = document.querySelector('.task21_pencils')
    const pencilsImg = document.querySelectorAll('.task21_pencilImg')
    const circleWrapper = document.querySelector('.task21_circleWrapper')
    const baloons = document.querySelectorAll('.task21_baloon')
    const reloadTaskBtn = document.querySelector('.task21_reloadTask')
    const checkingTaskBtn = document.querySelector('.task21_checkingTask')
    const checkTask = document.querySelector('.task21_checkTask')
    const chek_answerTxt = document.querySelector('.task21_chek_answer')

    let color = '#fff'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task21_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task21_pencilSelect')
            })
            e.target.classList.add('task21_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task21_baloon')) {
            e.target.closest('.task21_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task21_pencilSelect')
        })
        color = '#fff'
        baloons.forEach(item => {
            item.setAttribute('fill', color)
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        baloons.forEach(item => {


            if (item.classList.contains('task21_red')) {
                if (item.getAttribute('fill') === 'red') {
                    winVar++
                }
            }
            if (item.classList.contains('task21_#FBB03B')) {
                if (item.getAttribute('fill') === '#FBB03B') {
                    winVar++
                }
            }
            if (item.classList.contains('task21_#8CC63F')) {
                if (item.getAttribute('fill') === '#8CC63F') {
                    winVar++
                }
            }
            if (item.classList.contains('task21_#BA9BC9')) {
                if (item.getAttribute('fill') === '#BA9BC9') {
                    winVar++
                }
            }
            if (item.classList.contains('task21_#00D2FF')) {
                if (item.getAttribute('fill') === '#00D2FF') {
                    winVar++
                }
            }
            if (item.classList.contains('task21_white')) {
                if (item.getAttribute('fill') === '#fff' || item.getAttribute('fill') === '#FFFFFF') {
                    winVar++
                }
            }
        })
        console.log(winVar)
        if (winVar === 5) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()
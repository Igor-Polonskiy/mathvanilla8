(() => {
    const reloadTaskBtn = document.querySelector('.task14_reloadTask')
    const checkingTaskBtn = document.querySelector('.task14_checkingTask')
    const checkTask = document.querySelector('.task14_checkTask')
    const chek_answerTxt = document.querySelector('.task14_chek_answer')
    const inputElephant = document.querySelector('#task14_1')


    let answer1 = 0



    inputElephant.addEventListener('change', (e) => {
        answer1 = e.target.value
    })



    reloadTaskBtn.addEventListener('click', () => {
        inputElephant.value = ''
        answer1 = 0
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '4') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()
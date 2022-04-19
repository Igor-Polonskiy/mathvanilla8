(() => {
    const reloadTaskBtn = document.querySelector('.task15_reloadTask')
    const checkingTaskBtn = document.querySelector('.task15_checkingTask')
    const checkTask = document.querySelector('.task15_checkTask')
    const chek_answerTxt = document.querySelector('.task15_chek_answer')
    const task = document.querySelector('.task15_wrapper')
    const inputs = task.querySelectorAll('input')


    let answer = []
    let winVar = ['2', '1', '5', '7']

    inputs.forEach((item, index) => {
        item.addEventListener('change', (e) => {
            answer[index] = e.target.value
        })
    })

    reloadTaskBtn.addEventListener('click', () => {
        inputs.forEach(item => {
            item.value = ''
        })

        answer.length = 0


        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let win = 0
        winVar.forEach((item, index) => {
            if (item === answer[index]) {
                win++
            }
        })
        if (win === winVar.length) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()
(() => {
    const reloadTaskBtn = document.querySelector('.task1_reloadTask')
    const checkingTaskBtn = document.querySelector('.task1_checkingTask')
    const checkTask = document.querySelector('.task1_checkTask')
    const chek_answerTxt = document.querySelector('.task1_chek_answer')
    const task = document.querySelector('.task1_wrapper')
    const inputs = task.querySelectorAll('.input1_answer')



    let answer = []
    let winVar = ['8', '4', '7', '5', '6', '10', '10', 'КОЛИБРИ']

    inputs.forEach((item, index) => {
        item.addEventListener('change', (e) => {
            answer[index] = e.target.value.toUpperCase()
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
        console.log(answer)
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
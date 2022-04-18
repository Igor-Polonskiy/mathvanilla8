(() => {
    const reloadTaskBtn = document.querySelector('.task6_reloadTask')
    const checkingTaskBtn = document.querySelector('.task6_checkingTask')
    const checkTask = document.querySelector('.task6_checkTask')
    const chek_answerTxt = document.querySelector('.task6_chek_answer')
    const input1 = document.querySelector('#task6_select_1')
    const input2 = document.querySelector('#task6_select_2')
    const input3 = document.querySelector('#task6_select_3')






    let answer1 = 0
    let answer2 = 0
    let answer3 = 0

    input1.addEventListener('change', (e) => {
        answer1 = e.target.value
    })
    input2.addEventListener('change', (e) => {
        answer2 = e.target.value
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value
    })





    reloadTaskBtn.addEventListener('click', () => {
        input1.value = 0
        input2.value = 0
        input3.value = 0


        answer1 = 0
        answer2 = 0
        answer3 = 0

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '1' &&
            answer2 === '2' &&
            answer3 === '2') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()
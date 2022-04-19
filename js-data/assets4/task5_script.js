(() => {
    const answers = document.querySelector('.task5_answers')
    const reloadTaskBtn = document.querySelector('.task5_reloadTask')
    const checkingTaskBtn = document.querySelector('.task5_checkingTask')
    const checkTask = document.querySelector('.task5_checkTask')
    const chek_answerTxt = document.querySelector('.task5_chek_answer')

    const winVarTask5 = '3'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: '4 − 2 = 2',

        },
        {
            id: 2,
            src: '4 + 2 = 6',
        },
        {
            id: 3,
            src: '2 + 4 = 6',
        },
        {
            id: 4,
            src: '2 + 2 = 4',
        }
    ]

    insertAnswers(answersData)

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task5_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task5_answer_active')
                    finishAnswer.classList.remove('task5_green')
                    finishAnswer.classList.remove('task5_red')
                }
                item.classList.remove('task5_answer_active')
            })
            e.target.classList.add('task5_answer_active')
            finishAnswer = e.target
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        answers.innerHTML = ''
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
        insertAnswers(answersData)
        finishAnswer = null
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (finishAnswer) {
            finishAnswer.classList.remove('task5_answer_active')

            if (finishAnswer.getAttribute('data-id') === winVarTask5) {
                finishAnswer.classList.add('task5_green')
                chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
                checkTask.style.background = 'lightgreen'
            } else {
                finishAnswer.classList.add('task5_red')
                chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
                checkTask.style.background = 'lightpink'
            }
        }
    })

    function shuffleArr(arr) {
        return arr.sort(() => Math.random() - 0.5)
    }

    function insertAnswers(arr) {
        shuffleArr(arr)
        arr.forEach(item => {
            let e = document.createElement('div')
            e.innerText = item.src
            e.setAttribute('data-id', item.id)
            e.classList.add('task5_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task5_answer')
    }

})();
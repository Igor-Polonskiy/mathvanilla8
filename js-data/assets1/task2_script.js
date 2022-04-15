(() => {
    const reloadTaskBtn = document.querySelector('.task2_reloadTask')
    const checkingTaskBtn = document.querySelector('.task2_checkingTask')
    const checkTask = document.querySelector('.task2_checkTask')
    const chek_answerTxt = document.querySelector('.task2_chek_answer')
    const imgsWrapper = document.querySelector('.task2_imgwrapper')

    let pictures = [{
            id: 1,
            src: 'АО = АН + НО',
            data: true
        },
        {
            id: 2,
            src: 'АИ − НО = ОИ ',
            data: false
        },
        {
            id: 3,
            src: 'ОИ = НИ − НО',
            data: true
        },
        {
            id: 4,
            src: 'АН = НО − ОИ',
            data: false
        },
        {
            id: 5,
            src: 'АН + НО + ОИ = АИ',
            data: true
        }
    ]


    let count = 0

    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task2_img')
            answer.innerText = item.src
            answer.setAttribute('data-number', item.data)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task2_img')) {
            e.target.classList.toggle('task2_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task2_active')
        let winVar = 0
        imgs.forEach(item => {
            if (item.getAttribute('data-number') === 'true') {
                winVar++
            } else winVar--
        })

        if (winVar === 3) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()
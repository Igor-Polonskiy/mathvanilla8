(() => {
    const reloadTaskBtn = document.querySelector('.task19_reloadTask')
    const checkingTaskBtn = document.querySelector('.task19_checkingTask')
    const checkTask = document.querySelector('.task19_checkTask')
    const chek_answerTxt = document.querySelector('.task19_chek_answer')
    const drops = document.querySelectorAll('.task19_imgWrapper_img')
    const answersWrapper = document.querySelector('.task19_answers')
    const task = document.querySelector('.task19_wrapper')


    const answers = [{
            id: 1,
            data: '7 ? 1 =8'
        },
        {
            id: 2,
            data: '10 ? 1 =9'
        },
        {
            id: 2,
            data: '3 ? 1 =2'
        },
        {
            id: 1,
            data: '8 ? 1 =9'
        },
        {
            id: 2,
            data: '8 ? 1 =7'
        },
        {
            id: 1,
            data: '3 ? 1 =4'
        }
    ]

    function setAnswers() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task19_answer')
            answer.innerText = item.data
            answer.setAttribute('data-number', item.id)
            answersWrapper.append(answer)
        })
    }
    setAnswers()

    let draggingItem;
    let elemBelow;
    let shiftX;
    let shiftY

    function moveAt(pageX, pageY) {
        draggingItem.style.left = pageX - shiftX + "px";
        draggingItem.style.top = pageY - shiftY + "px";
    }

    task.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('task19_answer')) {
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''

            draggingItem = e.target
            draggingItem.style.cursor = "grabbing";

            shiftX = e.clientX - draggingItem.getBoundingClientRect().left;
            shiftY = e.clientY - draggingItem.getBoundingClientRect().top;

            draggingItem.style.position = "absolute";
            draggingItem.style.zIndex = 1000;
            document.body.append(draggingItem);

            moveAt(e.pageX, e.pageY);
        }
    })

    document.addEventListener('mousemove', (e) => {
        if (draggingItem) {
            moveAt(e.pageX, e.pageY);
            draggingItem.style.cursor = "grabbing";
        }
    })

    document.addEventListener('mouseup', (e) => {
        if (draggingItem) {
            draggingItem.style.visibility = 'hidden';
            elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            draggingItem.style.visibility = 'visible';
            draggingItem.style.cursor = "grab";
            if (elemBelow.classList.contains("task19_imgWrapper_img") && elemBelow.children.length < 4) {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                elemBelow.append(draggingItem);

            } else {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                answersWrapper.append(draggingItem);
            }
            draggingItem = null
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        drops.forEach(item => {
            item.innerHTML = ''
        })


        answersWrapper.innerHTML = ''
        setAnswers()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        drops.forEach(item => {
            if (item.children.length) {
                [...item.children].forEach(i => {
                    if (i.getAttribute('data-number') === item.getAttribute('data-number')) {
                        winVar++
                    }
                })

            }
        })



        if (winVar === 6) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()
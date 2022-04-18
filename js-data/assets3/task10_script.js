(() => {
    const audio = document.querySelectorAll('.task10_audio')
    const task10_prev = document.querySelector('.task10_prev')
    const task10_next = document.querySelector('.task10_next')
    const task10_slide = document.querySelector('.task10_img')
    const slide_caption = document.querySelector('.task10_slide_caption')
    const numberOfimgs = document.querySelector('.task10_count2')
    const count = document.querySelector('.task10_count1')
    const task10_begin = document.querySelector('.task10_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_8/assets3/task10_1.png',
            text: `Рассмотрим две серии рисунков и составим задачу по первой из них.`
        },
        {
            id: 2,
            src: 'Images_8/assets3/task10_2.png',
            text: `Составим первую задачу. С утра над постройкой муравейника трудились два муравья. К полудню к ним присоединились ещё два муравья. Сколько муравьёв стало трудиться над постройкой муравейника после полудня?`
        },
        {
            id: 3,
            src: 'Images_8/assets3/task10_3.png',
            text: `Количество муравьёв увеличилось на два.

            Запишем решение задачи. После полудня над постройкой муравейника стали трудиться четыре муравья.`
        },
        {
            id: 4,
            src: 'Images_8/assets3/task10_4.png',
            text: `Вторую задачу составь самостоятельно. Запиши краткое условие и решение задачи.`
        }
    ]

    task10_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task10_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task10_begin.style.display = 'none'
        } else if (e.target.classList.contains('task10_start2')) {
            task10_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task10_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task10_slide.append(element)

    task10_prev.addEventListener('click', () => {
        if (currentSlide > 1) {
            currentSlide--
            if (sound) {
                audio[currentSlide].pause()
                audio[currentSlide].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
            task10_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task10_prev.style.opacity = 0
        }


    })

    task10_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task10_prev.style.opacity = 1
            currentSlide++
            if (sound) {
                audio[currentSlide - 2].pause()
                audio[currentSlide - 2].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
        }
        if (currentSlide === pictures.length) {
            task10_next.style.opacity = 0
        }

    })
})()
(() => {
    const audio = document.querySelectorAll('.task18_audio')
    const task18_prev = document.querySelector('.task18_prev')
    const task18_next = document.querySelector('.task18_next')
    const task18_slide = document.querySelector('.task18_img')
    const slide_caption = document.querySelector('.task18_slide_caption')
    const numberOfimgs = document.querySelector('.task18_count2')
    const count = document.querySelector('.task18_count1')
    const task18_begin = document.querySelector('.task18_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_8/assets2/task18_1.png',
            text: `Яблоки в саду поспели,
            Мы отведать их успели:
            Три румяных, наливных,
            Одно с кислинкой... Сколько их?`
        },
        {
            id: 2,
            src: 'Images_8/assets2/task18_2.png',
            text: `На поляне у дубков
            Ёж увидел пять грибков.
            А подальше у осин
            Он нашёл ещё один.
            Кто ответить нам готов,
            Сколько ёж нашёл грибов?`
        },
        {
            id: 3,
            src: 'Images_8/assets2/task18_3.png',
            text: `Группа малышей-утят
            Плавать и нырять хотят.
            Два уплыли далеко,
            Один ныряет глубоко.
            Сколько же утят в пруду?
            Сосчитать я не могу.`
        }
    ]

    task18_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task18_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task18_begin.style.display = 'none'
        } else if (e.target.classList.contains('task18_start2')) {
            task18_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task18_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task18_slide.append(element)

    task18_prev.addEventListener('click', () => {
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
            task18_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task18_prev.style.opacity = 0
        }


    })

    task18_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task18_prev.style.opacity = 1
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
            task18_next.style.opacity = 0
        }

    })
})()
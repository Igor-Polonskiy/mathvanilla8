(() => {
    const audio = document.querySelectorAll('.task11_audio')
    const task11_prev = document.querySelector('.task11_prev')
    const task11_next = document.querySelector('.task11_next')
    const task11_slide = document.querySelector('.task11_img')
    const slide_caption = document.querySelector('.task11_slide_caption')
    const numberOfimgs = document.querySelector('.task11_count2')
    const count = document.querySelector('.task11_count1')
    const task11_begin = document.querySelector('.task11_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_8/assets3/task11_1.png',
            text: `Паша недавно начал коллекционировать значки с птицами. В его коллекции уже 5 значков. Старший брат подарил ему 2 значка. Сколько теперь значков в коллекции у Паши?`
        },
        {
            id: 2,
            src: 'Images_8/assets3/task11_2.png',
            text: `Аня очень любит рисовать. Недавно она поступила в художественную школу. Она уже написала 5 натюрмортов. Два из них очень понравились бабушке и Аня оформила их в рамки и подарила бабушке на 8 марта. Сколько живописных работ осталось у Ани?`
        },
        {
            id: 3,
            src: 'Images_8/assets3/task11_3.png',
            text: `Коля и Петя очень любят ловить рыбу и в тёплые дни ездят с папами на рыбалку. Сегодня улов Коли — 4 рыбы, а улов Пети — 2. Сколько всего рыб поймали мальчики?`
        }
    ]

    task11_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task11_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task11_begin.style.display = 'none'
        } else if (e.target.classList.contains('task11_start2')) {
            task11_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task11_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task11_slide.append(element)

    task11_prev.addEventListener('click', () => {
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
            task11_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task11_prev.style.opacity = 0
        }


    })

    task11_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task11_prev.style.opacity = 1
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
            task11_next.style.opacity = 0
        }

    })
})()
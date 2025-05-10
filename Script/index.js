const nav_button = document.querySelector('.nav_button');
const nav_list = document.querySelector('.nav_list');
const body = document.querySelector('body');
const footer_link = document.querySelectorAll('.footer_link');
const modal_hidden = document.querySelector('.is-hidden')
const modal_image = document.querySelectorAll('.modal_image')
const modal_button = document.querySelector('.modal_button')
const modal_img = document.querySelector('.modal_img')
const eventsCard = document.querySelectorAll('.events_card')
const modal_images = document.querySelector('.modal_images')
const modal_h3 = document.querySelector('.modal_title')

const instruments = document.querySelectorAll('.home_instrument');

nav_button.addEventListener(('click'), () => {
    nav_list.classList.toggle('nav_list_aside')
    nav_button.classList.toggle('nav_button_active')

    if(nav_list.classList.contains('nav_list_aside')) {
        body.style.overflow = '';

        footer_link.forEach((el) => {
            el.style.position = 'relative';
        });
    } else {
        body.style.overflow = 'hidden';

        footer_link.forEach((el) => {
            el.style.position = 'static';
        });
    }
});

const closeByEsc = (event) => {
    if(event.code === 'Escape') {
        closeModal()
    }
}

const closeModal = () => {
    modal_hidden.classList.add('is-hidden')
    body.style.overflow = '';
    document.removeEventListener('keydown', closeByEsc)
}

const openModal = () => {
    modal_hidden.classList.remove('is-hidden')  
    body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeByEsc)
}

modal_button.addEventListener('click', closeModal)
modal_image.forEach((img) => {
    img.addEventListener('click', (event) => {
        modal_img.src = event.target.src
        openModal()
    })
})

eventsCard.forEach((el) => {
    el.addEventListener('click', (event) => {
        const arr = event.currentTarget.dataset.img
        const arr1 = JSON.parse(arr)
        const modal_title = (event.currentTarget.querySelector('h3')).textContent

        const render = arr1.map((el) => {
            return `<img src='${el}' class="modal_event">`
        }).join('')

        modal_images.innerHTML = render
        modal_h3.innerHTML = modal_title
        openModal()
    })
})

instruments.forEach((el) => {
    el.addEventListener('click', (event) => {
        const audio = event.currentTarget.querySelector('audio')
        audio.play()
    })
})
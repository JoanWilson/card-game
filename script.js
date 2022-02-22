const ArrayCards = [
    './assets/card-airplane.svg',
    './assets/card-alien.svg',
    './assets/card-anchor.svg', 
    './assets/card-baby.svg', 
    './assets/card-backpack.svg', 
    './assets/card-ball.svg', 
    './assets/card-bike.svg', 
    './assets/card-box.svg', 
    './assets/card-bug.svg', 
    './assets/card-cake.svg', 
    './assets/card-car.svg', 
    './assets/card-cat.svg', 
    './assets/card-clock.svg', 
    './assets/card-dog.svg', 
    './assets/card-ghost.svg', 
    './assets/card-gift.svg', 
    './assets/card-halter.svg', 
    './assets/card-heart.svg', 
    './assets/card-robot.svg', 
    './assets/card-toilet-paper.svg', 
    './assets/card-tshirt.svg'
]

const cards = document.getElementsByTagName('img')

cards.item(0).addEventListener('click', e => {
    e.target.src = ArrayCards[Math.floor(Math.random() * ArrayCards.length)]
}, {once: true})

cards.item(1).addEventListener('click', e => {
    e.target.src = ArrayCards[Math.floor(Math.random() * ArrayCards.length)]
}, {once: true})

cards.item(2).addEventListener('click', e => {
    e.target.src = ArrayCards[Math.floor(Math.random() * ArrayCards.length)]
}, {once: true})

cards.item(3).addEventListener('click', e => {
    
    e.target.src = ArrayCards[Math.floor(Math.random() * ArrayCards.length)]
}, {once: true})

cards.item(4).addEventListener('click', e => {
    e.target.src = ArrayCards[Math.floor(Math.random() * ArrayCards.length)]
}, {once: true})

cards.item(5).addEventListener('click', e => {
    e.target.src = ArrayCards[Math.floor(Math.random() * ArrayCards.length)]
}, {once: true})


const embaralharCartas = () => {
    for (let i = 0; i < 5; i++) {
        cards.item(i).src = './assets/card-front-1.svg'      
    }
    location.reload()
}


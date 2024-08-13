const buttons=document.querySelectorAll('.button')

const body=document.querySelector('body')

const h1=document.querySelector('h1')
const h2=document.querySelector('h2')

// console.log(buttons)
// console.log(body)

function changeBlack(){
    h1.style.color="black"
    h2.style.color="black"
}

function changeWhite(){
    h1.style.color="white"
    h2.style.color="white"
}


buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click',function (e){
        // console.log(e)
        // console.log(e.target) ->source of event
        if(e.target.id=='red'){
            body.style.backgroundColor=e.target.id
            changeBlack()
        }
        if(e.target.id=='blue'){
            body.style.backgroundColor=e.target.id
            changeWhite()
        }
        if(e.target.id=='yellow'){
            body.style.backgroundColor=e.target.id
            changeBlack()
        }
        if(e.target.id=='green'){
            body.style.backgroundColor=e.target.id
            changeWhite()
        }
    })
})


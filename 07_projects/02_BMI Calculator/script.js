const form=document.querySelector('form')

// console.log(form)
//=> will give always empty value
// const Height=parseInt(document.querySelector('#height'))
// const Weight=parseInt(document.querySelector('#weight'))   

form.addEventListener('submit',function (e){
    e.preventDefault(); //to prevent default submission of form
    // console.log(e)
    // console.log(e.target)
    const Height=parseInt(document.querySelector('#height').value)
    const Weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')
    const category=document.querySelector('#category')

    if(Height<0 || Height=='' || isNaN(Height)){
        result.innerHTML="Enter a Valid Height"
    }
    else if(Weight<0 || Weight=='' || isNaN(Weight)){
        result.innerHTML="Enter a Valid Weight"
    }else{
        const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);

        result.innerHTML=`Your BMI : ${bmi}`
        if(bmi<=18.5){
            category.innerHTML="Your Category: Underweight"
        }
        else if(bmi>=18.5 && bmi<=24.9){
            category.innerHTML="Your Category: Normal weight"
        }
        else if(bmi>=25 && bmi<=29.9){
            category.innerHTML="Your Category: Overweight"
        }else{
             category.innerHTML="Your Category: Obesity"
        }
    }  
})
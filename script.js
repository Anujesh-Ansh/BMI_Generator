// this commented code gives empty values
// const height = document.getElementById('height').value;
// const weight = document.getElementById('weight').value;


// const calculateBMI = document.querySelector('button');

// calculateBMI.addEventListener('click',function(e){
//     console.log('Button Clicked');
//     document.getElementById('result').innerHTML = weight+height;
    
// })

const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('result');
    console.log('Height:',height);
    console.log('Weight:',weight);

    if(height === '' || isNaN(height)){
        result.innerHTML = 'Please provide a valid height';
    }else if(weight === '' || isNaN(weight)){
        result.innerHTML = 'Please provide a valid weight';
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        if(bmi < 18.5){
            result.innerHTML = `<h2>Your BMI is ${bmi}. You are Underweight</h2>`;
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = `<h2>Your BMI is ${bmi}. You are Normal</h2>`;
        }else if(bmi > 24.9 && bmi <= 29.9){
            result.innerHTML = `<h2>Your BMI is ${bmi}. You are Overweight</h2>`;
        }else{
            result.innerHTML = `<h2>Your BMI is ${bmi}. You are Obese</h2>`;
        };
    }

})
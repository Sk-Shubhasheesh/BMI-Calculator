const form = document.querySelector('form');

/* Any form is submitted using POST or GET method.And when the form is submitted the value is go to server. So
 first we need to stop it beacuse we did not send to the server so we stop the default action of form.*/
 
 // if we extract value first then this usecase give you empty value
 //const hight = parseInt(document.getElementById('#height').value)
 form.addEventListener('submit', function(e){
    e.preventDefault(); // strop default action of form
    
    // select value
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    // check for height and weight
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Plese give a valid height"
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Plese give a valid weight"
    } else {
        // calculate BMI
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        // show the result
        results.innerHTML = `<span>${bmi}</span>`

    }


 })
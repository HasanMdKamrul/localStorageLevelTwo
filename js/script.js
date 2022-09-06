// ** Intial counter value saved in LS

// let count = localStorage.setItem('counter', 0);

// ** get the saved value of counter from the ls
const counterSet = ()=>{
    localStorage.setItem('counter',0);
}

const counterGet = ()=>{
    const savedCounterValue = localStorage.getItem('counter');
    let savedCounterValueParsed = JSON.parse(savedCounterValue);
    return savedCounterValueParsed;
}



// ** Initial display

if (counterGet() > 0) {
    document.getElementById('display').innerText = `${counterGet()}`
} else{
    counterSet();
    const savedValue = counterGet()
    document.getElementById('display').innerText = `${savedValue}`
}

// savedCounterValueParsed > 0 ?  document.getElementById('display').innerText = `${savedCounterValueParsed}` :  counterSet();

// ** counetr Increament

const increament = ()=>{
    let counter = counterGet()
    ++counter;
    // ** display after increament
    document.getElementById('display').innerText = `${counter}`
    // ** stringyfy the new increament value and set to the ls
    
    const savedCounterValueStringyfy = JSON.stringify(counter);

    // ** set the value to ls

    localStorage.setItem('counter', savedCounterValueStringyfy);
   
}
const decrement = ()=>{
    let counter = counterGet()
    --counter;
    if(counter < 0){
        return
    }
    // ** display after decrement
    document.getElementById('display').innerText = `${counter}`
    // ** stringyfy the new increament value and set to the ls
    
    const savedCounterValueStringyfy = JSON.stringify(counter);

    // ** set the value to ls

    localStorage.setItem('counter', savedCounterValueStringyfy);
   
}


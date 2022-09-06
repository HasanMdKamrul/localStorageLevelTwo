// ** Intial counter value saved in LS

// let count = localStorage.setItem('counter', 0);

// ** get the saved value of counter from the ls
const counterSet = ()=>{
    localStorage.setItem('counter',0);
}

const savedCounterValue = localStorage.getItem('counter');
let savedCounterValueParsed = JSON.parse(savedCounterValue);

// ** Initial display

if (savedCounterValueParsed > 0) {
    document.getElementById('display').innerText = `${savedCounterValueParsed}`
} else{
    counterSet();
    const savedValue = JSON.parse(localStorage.getItem('counter'));
    document.getElementById('display').innerText = `${savedValue}`
}

// savedCounterValueParsed > 0 ?  document.getElementById('display').innerText = `${savedCounterValueParsed}` :  counterSet();

// ** counetr Increament

const increament = ()=>{
    ++savedCounterValueParsed;
    // ** display after increament
    document.getElementById('display').innerText = `${savedCounterValueParsed}`
    // ** stringyfy the new increament value and set to the ls
    
    const savedCounterValueStringyfy = JSON.stringify(savedCounterValueParsed);

    // ** set the value to ls

    localStorage.setItem('counter', savedCounterValueStringyfy);
   
}
const decrement = ()=>{
    --savedCounterValueParsed;
    if(savedCounterValueParsed < 0){
        return
    }
    // ** display after decrement
    document.getElementById('display').innerText = `${savedCounterValueParsed}`
    // ** stringyfy the new increament value and set to the ls
    
    const savedCounterValueStringyfy = JSON.stringify(savedCounterValueParsed);

    // ** set the value to ls

    localStorage.setItem('counter', savedCounterValueStringyfy);
   
}


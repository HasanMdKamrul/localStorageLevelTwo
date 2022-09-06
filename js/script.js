// ** Intial counter value saved in LS

// let count = localStorage.setItem('counter', 0);

// ** get the saved value of counter from the ls

const savedCounterValue = localStorage.getItem('counter');
let savedCounterValueParsed = JSON.parse(savedCounterValue);

// ** Initial display
 savedCounterValueParsed > 0 ?  document.getElementById('display').innerText = `${savedCounterValueParsed}` : document.getElementById('display').innerText = `${0}`

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
    // ** display after increament
    document.getElementById('display').innerText = `${savedCounterValueParsed}`
    // ** stringyfy the new increament value and set to the ls
    
    const savedCounterValueStringyfy = JSON.stringify(savedCounterValueParsed);

    // ** set the value to ls

    localStorage.setItem('counter', savedCounterValueStringyfy);
   
}


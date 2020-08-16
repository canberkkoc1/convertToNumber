const number = document.getElementById("inputNumber");
const result = document.querySelector("#outputNumber");

/* select value */

const from  = document.getElementById("from");
const to = document.getElementById("to");
/* h3 select*/
const firstH = document.querySelector(".firstH");
const scnh = document.querySelector(".scnd")

/* spans */
const span1 = document.getElementById("nmb");
const span2 = document.querySelector(".outputNumber");
/* select onchange function */
function fromFnc(){
    if(from.value == "bin"){  
        to.value="dec";  
        firstH.innerHTML="Enter Binary Number:";
        scnh.innerHTML = "Decimal Number:";
        span1.innerHTML = "2";
        span2.innerHTML = "10";
    }else{
        firstH.innerHTML = "Enter Decimal Number:";
        scnh.innerHTML = "Binary Number:"
        to.value="bin";
        span1.innerHTML = "10";
        span2.innerHTML = "2";
    }
    
}
function toFnc(){
    if(to.value == "dec"){  
        from.value="bin";  
        firstH.innerHTML="Enter Binary Number:";
        scnh.innerHTML = "Decimal Number:";
        span1.innerHTML = "2";
        span2.innerHTML = "10";
    }else{
        firstH.innerHTML = "Enter Decimal Number:";
        scnh.innerHTML = "Binary Number:"
        from.value="dec";
        span1.innerHTML = "10";
        span2.innerHTML = "2";
    }
    
}
/* Button onclick functions */
function convert(){
    if(number.value == "" || isNaN(number.value)){
        alert("Please enter the number")
    }
  else if(from.value == "bin"){
      var  binary = parseInt(number.value,2);
      result.innerHTML = binary;
      console.log(binary);
  }else if (from.value == "dec") {
      var decimal = Number(number.value).toString(2);
      result.innerHTML = decimal;
      console.log(decimal);
  }else{
      return "Error";
  }
}

function reset(){
    location.reload();
}

function swap(){
    return fromFnc()
    console.log("asdasd")
}
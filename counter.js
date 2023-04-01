let count = 0 
let element = document.getElementById("count");
let element2 = document.getElementById("sv")
function inc(){
    count +=1 ;
    element.innerText = count;
    console.log(count)
}

function save(){
   let g =" -" + count
   element2.innerText += g 
}
 function restart(){
    count =0
    element.innerText = count
 }
 
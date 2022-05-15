let arrayToShow=Array();
let arrNumber=0
function addElement(){
    arrayToShow[arrNumber] =document.getElementById("importElement").value;
    arrNumber++;
    document.getElementById("importElement").value=""
}
function displayElement(){
    let showElement=""
    for(let i=0;i<arrayToShow.length;i++){
       showElement +="Element"+i+"="+ arrayToShow[i]+"\n"
    }
    document.getElementById("showElement").innerText=""+showElement
}
let arrayToShow=new Array();
let arrNumber=0
let stringArray
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
function reverseArray(){
    let arrLast=arrayToShow.length-1
    let arrFirst=0;
    document.getElementById("showElement").innerText=""
    while (arrLast>arrFirst){
        stringArray=arrayToShow[arrLast]
        arrayToShow[arrLast]=arrayToShow[arrFirst]
        arrayToShow[arrFirst]=stringArray
        arrLast--
        arrFirst++
    }

}
function findElement(){
    let elementToCheck =parseInt( prompt("Xin mời nhập số cần kiểm tra"));
    for(let i=0;i<arrayToShow.length;i++){
        if(arrayToShow[i]==elementToCheck){
            document.getElementById("showElement").innerText="Phần tử "+elementToCheck+"nằm ở vị trí index : "+i;
            break;
        }
    }

}function findMax(){
    let maxElement=arrayToShow[0]
    for(let i=1;i<arrayToShow.length;i++){
        if(arrayToShow[i]>maxElement){
            maxElement=arrayToShow[i]
        }
    }
    document.getElementById("showElement").innerText=""+maxElement
}
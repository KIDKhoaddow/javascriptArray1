let arrBoard=[]

var numberX
var numberY
const st=setInterval(showCaro,1000)
function createCaro(){
    numberX=document.getElementById("numberOfHorizental").value;
    numberY=document.getElementById("numberOfVertical").value;

    for(let i=0;i<numberX;i++){
        arrBoard[i]=new Array()
        for(let j=0;j<numberY;j++){
            arrBoard[i][j]=0
        }
    }
}


function showCaro(){
    let arrToShow=""
    for(let i=0;i<numberX;i++){
        for(let j=0;j<numberY;j++){
            arrToShow+=""+arrBoard[i][j]+"&emsp;";

        }
        arrToShow +="<br/>"
    }
    document.getElementById("Chessboard").innerHTML=""+arrToShow

}


function playX(){
    let positionX=document.getElementById("positionX").value;
    let positionY=document.getElementById("positionY").value;
    arrBoard[positionX-1][positionY-1]="X"
}

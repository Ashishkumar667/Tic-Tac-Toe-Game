let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg")



let turn0=true; //playerx,player0
let count= 0; // To track draw

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame= ()=>{
    turn0=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide")
};




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       console.log("Box was clicked")
       
        if(turn0){
            box.innerText="0"
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled = true;
        count++;

        let winner = checkwinner();
        if(count === 9 && !winner){
             draw();
        }
    });
});

const  draw=()=>{
  msg.innerText=`Game was draw.`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};


const enableboxes =()=>{
    for(let box of boxes){
       box.disabled =false;
       box.innerText ="";
    }
   }



const disableboxes =()=>{
 for(let box of boxes){
    box.disabled =true;
 }
}


const showwinner =(winner)=>{
    msg.innerText =`Congratulations, player with sign '${winner}' has won the game.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

 const checkwinner= () =>{
    for(let pattern of winpattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val =boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != ""&& pos3val!=""){
        if(pos1val=== pos2val && pos2val === pos3val){
            console.log("Winner",pos1val );

            showwinner(pos1val);
        }
     }
  }
};

resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);


let con=document.querySelectorAll(".con");
let machine=document.querySelectorAll(".machine");
let user=document.querySelector(".user");
let computer=document.querySelector(".machine");
let winModel=document.querySelector(".win-model");
let winner=document.querySelector(".winner");
let play=document.querySelector(".play");
let score=JSON.parse(localStorahe.getItem("score"))
let scoreElem=docuent.getElementById("score");
if(score){
  scoreElem.innerText=score;
}
let count=0;
let random=Math.floor(Math.random()*3);
con.array.forEach((element,index) => {
  element.addEventListner("click",()=>{
    user.style.opacity="1";
    con.forEach(item =>{
      item.style.display="none";
    });
    element.style.display="block";
    element.classList.add("show")
    setTimeout(() => {
    computer.style.opacity="1";
    setTimeout(()=>{
      machine[raandom].style.display="block";
      machine[random].classList.add("right");
    },1000)
    setTimeout(()=>{
      if(random==index){
        winModel.style.display="grid";
        winner.innerText="Its a Tie";
      }else if(index==0 &&random==2 || index==1 && random==0 || index==2 && random==1){
          winModel.style.display="grid";
          winner.innerText="You Win";
          count++;
          scoreElem.innerText=count;
          localStorage.setItem("score",JSON.stringify(count));
      }
      else{
          winModel.style.display="grid";
          winner.innerText="You loose";
      }

    },1500)
    }, 500);
  })
  
});
play.addEventListener("click",()=>{
      window.location.reload();
})
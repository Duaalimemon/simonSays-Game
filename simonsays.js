  // first step is to start the game by pressing any key and the starting level ups with flashing of button
   // two arrays , one for computer sequence and other for user sequence , computerseq willl memorize or store the sequence automatticaly so here is 
   let gameSeq=[];
   let userSeq=[];


     // array to choose random bttns   
   let bttns=["yellow" , "red", "green" , "purple"];
   //varriable to start the game
   let started=false;
   let level=0;

   let h3=document.querySelector("h3");


   // on clicking the any key , game will be started
   document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
   });

   
    // flashing
    function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
   }
  
   //levelup function
    function levelUp(){
    userSeq=[];    
    level++;  
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()* bttns.length);
    let randColr=bttns[randIdx];
    let randBtn=document.querySelector(`.${randColr}`);
    // console.log(randIdx);
    // console.log(randColr);
    // console.log(randBtn);   
    // random button choose
    
    gameSeq.push(randColr);
    console.log(gameSeq); 

    btnFlash(randBtn);
   }

   function checkAns(idx){
    //  console.log("current level : " , level);

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    } else{
         h3.innerHTML=
         `Game over! your score is <b>${level}</b> <br> press any key to Start Again`; 
         document.querySelector("body").style.backgroundColor="red";
            setTimeout (function(){ 
            document.querySelector("body").style.backgroundColor="black";
         }, 150);
         reset(); 
    }
   }

   function btnPress(){
   let detectBtn=this;
   btnFlash(detectBtn);

   userColr=detectBtn.getAttribute("id");
   userSeq.push(userColr);

   checkAns(userSeq.length-1);
   }

   let allBtns=document.querySelectorAll(".button");
   for (btn of allBtns){
    btn.addEventListener("click" , btnPress);
   }


   function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
   }

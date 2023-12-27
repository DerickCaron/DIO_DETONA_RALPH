const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        characterlife: document.querySelector("#characterlife"),
    },
    values: {
        timerId: null,
        countDownTimerId: setInterval(countDown, 1000),
        gameVelocity:1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
        life: 3,
    },
}



function randomSquare(){
    state.view.squares.forEach((square)=>{square.classList.remove("enemy");});

    let randomNumber = Math.floor(Math.random()*9)
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function playSound(audioName) {
    let audio = new Audio(`./audios/hit.m4a`);
     audio.volume = 0.2;
     audio.play();
   }

function moveEnemy(){
    state.view.timerId = setInterval(randomSquare, state.values.gameVelocity)

}




function adicioneEventoDeVida(){
  state.view.squares.forEach((square) => {
      square.addEventListener("mousedown", () => { 
       
        if(square.id === state.values.hitPosition) {
          // A vida do personagem não diminui
          
        } else {
          state.values.life--;
          state.view.score.textContent = state.values.
          result;
          state.view.characterlife.textContent = state.values.life;
        }
      });
    });
}


function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => { 
         
          if(square.id === state.values.hitPosition) {
            playSound("hit");
            state.values.result++;
            state.view.score.textContent = state.values.
            result;
          }

          if(state.values.life < 0){
            state.values.life = 3;
            state.values.curretTime = 60;
            alert("Acabou as vidas! O seu resultado foi: " + state.values.result);
            state.values.result = 0;
            state.view.score.textContent = state.values.result;
            state.view.characterlife.textContent = state.values.life;
          }

        });
      });
}




function countDown() {
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;
  
    if (state.values.curretTime <= 0) {
      alert("Acabou o tempo! O seu resultado foi: " + state.values.result);
      state.values.life = 3;
      state.values.curretTime = 60;
      state.values.result = 0;
      state.view.score.textContent = state.values.result;
      state.view.characterlife.textContent = state.values.life;
      state.view.timeLeft.textContent = state.values.curretTime;
    }
  }



function initialize(){
    adicioneEventoDeVida();
    addListenerHitBox();
    moveEnemy();
    AcabouVidas();

}

initialize();
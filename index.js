const cardsArray = [
  {
    'name' : 'javascript',
    'img' : 'javascript.png'
  },
  {
    'name' : 'php',
    'img' : 'php.png'
  },
  {
    'name' : 'nodejs',
    'img' : 'nodejs.png'
  },
  {
    'name' : 'html5',
    'img' : 'html5.png'
  },
  {
    'name' : 'css',
    'img' : 'css.png'
  },
  {
    'name' : 'mysql',
    'img' : 'mysql.png'
  },
  {
    'name' : 'mysql1',
    'img' : 'mysql1.png'
  },
  {
    'name' : 'github',
    'img' : 'github.png'
  },
  {
    'name' : 'vs',
    'img' : 'vs.png'
  },
  {
    'name' : 'java',
    'img' : 'java.png'
  },
  {
    'name' : 'java1',
    'img' : 'java1.png'
  },
  {
    'name' : 'c',
    'img' : 'c.png'
  },
  {
    'name' : 'cpp',
    'img' : 'cpp.png'
  },
  {
    'name' : 'code',
    'img' : 'code.png'
  },
  {
    'name' : 'python',
    'img' : 'python.png'
  }
  ];
  let duplicateArray = cardsArray.concat(cardsArray);
  
  const cardsContainer = document.getElementById('cards-container');
  
  
  let clickCount = 0;
  let firstCard = "";
  let secoundCard = "";
  
  const matchedCard =() =>{
  let selectedCards = document.querySelectorAll(".selected-card");
  selectedCards.forEach(e => {
    e.classList.add('match');
  })
  
  let matchedCards = document.querySelectorAll(".match");
  if (matchedCards.length === duplicateArray.length) {
    setTimeout(() => {
      alert("Congratulations! You have won the game!");
      window.load();
    }, 500);
  }
}

  
  const resetGame =() =>{
    clickCount = 0;
    firstCard = "";
    secoundCard = "";
    let selectedCards = document.querySelectorAll(".selected-card");
    selectedCards.forEach(e => {
      e.classList.remove('selected-card');
    })
  }
  
  
  cardsContainer.addEventListener("click",(e)=>{
    if (e.target.parentNode.classList.contains('match')) {
         return false;
  }
    if(e.target.id == 'cards-container'){
      return false;
    }else{
      clickCount++;
      if(clickCount <= 2){
        if(clickCount === 1){
         firstCard = e.target.parentNode.dataset.name;
          e.target.parentNode.classList.add('selected-card');
        }else{
          secoundCard = e.target.parentNode.dataset.name;
          e.target.parentNode.classList.add('selected-card');
        }
        if(firstCard !== "" && secoundCard !== ""){
        if (firstCard === secoundCard) {
          setTimeout(() => {
            matchedCard();
            resetGame();
            
          }, 1000);
          
        }else{
          setTimeout(() => {
            resetGame();
            
          }, 1000);
          
        }
        }
      }
    }
  });
  
  function abc(){
    cardsContainer.innerHTML = '';
    let suffledArray = duplicateArray.sort(()=> 0.5 - Math.random());
  
  for(let i=0; i<suffledArray.length;i++){
    const childDiv = document.createElement('div');
    childDiv.className = 'child-div';
    childDiv.dataset.name = suffledArray[i].name;
    
    const front = document.createElement('div');
    front.className = 'front';
    const back = document.createElement('div');
    back.className = 'back';
    back.style.backgroundImage = `url(${suffledArray[i].img})`;
    cardsContainer.appendChild(childDiv);
    childDiv.appendChild(front);
    childDiv.appendChild(back);
    
  }
  }
  abc();
  
 const refresh = () =>{
   const loadIcon = document.createElement('img');
   loadIcon.src = "loading.png"
   loadIcon.className = 'load-icon';
   cardsContainer.appendChild(loadIcon);
 }
 
 const btn = document.querySelector(".restart");
 btn.addEventListener("click", ()=>{
 
   setTimeout(function() {
     abc();
   }, 500);
   refresh();
 })
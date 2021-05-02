class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("orange");

    //write code to show a heading for showing the result of Quiz 
    fill ("red");
    textSize (30);
    text("result of the quiz",340,50);
    text ("------------------------------",320,65);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
       var y=230;
       fill("green");
       textSize (40);
       text ("note:contestant how answer correct are green",130,230);

       for(var tlr in allContestant){
         var correctAns="2";
         if(correctAns===allContestant[plr].answer)
          fill ("green");
          else
           fill ("red");
            
           y=y+30
           textSize(20);
           text (allContestant[plr].name+":"+allContestant[plr].answer,250,y);
       }
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}

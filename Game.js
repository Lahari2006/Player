class Game{

    constructor(){

}
 
GetState(){
    var GameStateRef =  database.ref('GameState');
    GameStateRef.on("value", function(data){GameState = data.val();})
}
update(state){
    database.ref('/').update({
        GameState : state
    }) // '/' refers entire database
}
start(){
    if (GameState === 0)
{
player = new Player();
player.GetCount();
form = new Form();
form.display();
}
}

}
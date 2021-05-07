class Player{

    constructor(){

}
 
GetCount(){
    var PlayerCountRef =  database.ref('PlayerCount');
    PlayerCountRef.on("value", function(data){PlayerCount = data.val();})
}
updateCount(count){
    database.ref('/').update({
        PlayerCount : count
    }) // '/' refers entire database
}
 update(name){
// updates name according to index of the player
    var playerindex = "Player"+PlayerCount;
database.ref(playerindex).set({name:name});
 }

}
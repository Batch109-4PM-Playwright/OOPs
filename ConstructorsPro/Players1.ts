
class PlayerData
{
    playerinfo(pjersey : number,  pname : string) : void
    {
        console.log("The Player JERSEY number is : " +pjersey);
        console.log("The Player name is : " +pname)
    }
    playerPlay(pjersey : number,  pgame : string) : void
    {
        console.log("The Player JERSEY number is : " +pjersey);
        console.log("The Player playing game is  is : " +pgame)
    }
    playerState(pjersey : number,  pstate : string) : void
    {
        console.log("The Player JERSEY number is : " +pjersey);
        console.log("The Player State is  is : " +pstate)
    }
}

let P = new PlayerData();
P.playerinfo(10, 'Sachin');
P.playerPlay(10, 'Cricket');
P.playerState(10, 'Maharastra');

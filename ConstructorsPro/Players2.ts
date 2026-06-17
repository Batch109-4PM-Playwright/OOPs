
class PlayerData
{
    pjersey;  //declare
    constructor(pid : number)
    {
        this.pjersey = pid;    //pid stores into pjersey
    }
    playerinfo(pname : string) : void
    {
        console.log("The Player JERSEY number is : " +this.pjersey);
        console.log("The Player name is : " +pname)
    }
    playerPlay(pgame : string) : void
    {
        console.log("The Player JERSEY number is : " +this.pjersey);
        console.log("The Player playing game is  is : " +pgame)
    }
    playerState(pstate : string) : void
    {
        console.log("The Player JERSEY number is : " +this.pjersey);
        console.log("The Player State is  is : " +pstate)
    }
}

let P = new PlayerData(10);
P.playerinfo('Sachin');
P.playerPlay('Cricket');
P.playerState('Maharastra');

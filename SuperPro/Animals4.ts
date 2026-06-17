class cow
{
    Color = "Hai I am Cow and My color is White"   //parent variable and child variable are same
    constructor()
    {
        console.log("Parent Constructor---> " +this.Color);
    }
}

class calf extends cow
{
    Color = "Hai I am Calf and My color is light Brown";   //parent variable and child variable are same

    familyColor() : void
    {
        //console.log(super.Color);  //undefined  --> we can't access parent variable with "super" keyword
        console.log(this.Color);
    }

    constructor()
    {
        super();  //default calls parent constructor
    }
}

let C = new calf();
C.familyColor();

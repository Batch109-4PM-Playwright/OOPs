

class cow
{
    Color = "Hai I am Cow and My color is White"   //parent variable and child variable are same
}

class calf extends cow
{
    Color = "Hai I am Calf and My color is light Brown";   //parent variable and child variable are same

    familyColor() : void
    {
        console.log(this.Color);
        console.log(this.Color);
    }
}

let C = new calf();
C.familyColor();
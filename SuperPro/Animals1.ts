

class cow
{
    cowColor = "Hai I am Cow and My color is White"
}

class calf extends cow
{
    calfColor = "Hai I am Calf and My color is light Brown";

    familyColor() : void
    {
        console.log(this.cowColor);
        console.log(this.calfColor);
    }
}

let C = new calf();
C.familyColor();
class summing    //parent class
{
   static a : number = 71;
   static b : number = 84;
   static add() : void
    {
        console.log("The Addition of A and B is : " +(this.a+this.b))
    }
}
class diff extends summing   //child class  ------>  //child class extends parent class
{
    j : number = 92;
    k : number = 55;
    substract() : void
    {
        console.log("The Difference of J and K is : " +(this.j-this.k));
    }
}
let N = new diff();
N.substract();
diff.add();



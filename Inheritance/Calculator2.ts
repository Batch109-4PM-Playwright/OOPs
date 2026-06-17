class summing
{
    a : number = 71;
    b : number = 84;
    add() : void
    {
        console.log("The Addition of A and B is : " +(this.a+this.b))
    }
}
class diff
{
    j : number = 92;
    k : number = 55;
    substract() : void
    {
        console.log("The Difference of J and K is : " +(this.j-this.k));
    }
    hello() : void
    {
        let T = new summing();   //creating object ref to summing class in diff class
        T.add();  //calling method using object ref in diff class
    }
}
let N = new diff();
N.substract();
N.hello();


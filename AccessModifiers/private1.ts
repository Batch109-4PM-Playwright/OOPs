class father
{
    private bankBalance : number = 50000;  //accessing globally
}

class son extends father
{
    balance() : void
    {
    console.log("The Bank Balance of the son is : " +this.bankBalance);
    }
}

let C = new son();
C.balance();
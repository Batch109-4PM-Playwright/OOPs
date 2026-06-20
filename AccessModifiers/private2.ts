class father
{
    #bankBalance : number = 50000;    //private
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
interface hloan
{
    homeloan():void;
}
interface ploan
{
    personalloan():void;
}
interface ccard 
{
     mycreditcard():void;
}

class mybankaccount implements ccard, ploan, hloan
{
    mycreditcard():void
    {
        console.log("My Credit Card number is 5451610301234");
    }
    personalloan(): void
    {
        console.log("My Personal Loan limit is 200000");
    }
    homeloan():void
    {
        console.log("House Loan applied for 3500000");
    }
    myaccount():void
    {
        console.log("My Accout number is 1234987656");
    }
}

let B = new mybankaccount();
B.mycreditcard();
B.myaccount();


class ATMData
{
    #pin;
    #balance;
    #amount;

    setdata(userpin : number) : void   //1234
    {
        this.#pin = userpin;    //1234 (userpin) stores into pin
    }

    getpin() : number
    {
        return this.#pin;
    }
}

class ATMUser
{

    userdata() : void
    {
        let A = new ATMData();
        A.setdata(1234);
        console.log(A.getpin())
    }

}

let T = new ATMUser();
T.userdata();
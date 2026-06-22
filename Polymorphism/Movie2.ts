class morningshow
{
    ticketdata(moviename : string , cost : number)
    {
        console.log("-----Moring Show-----");
        console.log("Morning Show --> " +moviename);
        console.log("Morning Show ---> " +cost);
    }
}

class matineeshow extends morningshow
{
     ticketdata(moviename : string , cost : number)
    {
        console.log("-----Matinee Show-----");
        console.log("Matinee Show --> " +moviename);
        console.log("Matinee Show ---> " +cost);
        super.ticketdata("Vasu", 350);
    }
}

let A = new matineeshow();
A.ticketdata("Peddi", 250);


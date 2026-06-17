class lion
{
   role() : void
   {
    console.log("Lion ---> King of the Forest")
   }
}

class cub extends lion
{
   role() : void
   {
    super.role();   //calls the parent method
    console.log("Cub ---> Prince of the Forest")
   }
}

let C = new cub();
C.role();


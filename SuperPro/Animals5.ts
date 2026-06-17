class lion
{
   lionrole() : void
   {
    console.log("Lion ---> King of the Forest")
   }
}

class cub extends lion
{
   cubrole() : void
   {
    console.log("Cub ---> Prince of the Forest")
   }
}

let C = new cub();
C.lionrole();
C.cubrole();

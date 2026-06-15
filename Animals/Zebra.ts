
class hobbies
{

   k : string = "Eating grass";  //instance or non-static variable
  
   coloroftheanimal() : void   //non-static method
   {
      let legs : number = 4;   //local variable
      console.log("Non-static ---> " +this.k);
      console.log(legs);

   }

   static heightoftheanimal() : void //static method
   {  
       console.log("Static ---> Learning Hard and work smart");
       console.log("Static ----> " +this.k);
   }
}

let W = new hobbies();

W.coloroftheanimal();

hobbies.heightoftheanimal();




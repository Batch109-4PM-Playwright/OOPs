
class hobbies
{

   k : string = "Hunting";  //instance variable

   coloroftheanimal() : void   //it is a method
   {
      let legs : number = 4;   //local variable
      // console.log(k);
      console.log(legs);

   }
}
//creating T as an Object reference for the class
let T = new hobbies();   //let --> variable declaration, T --> object ref, new --> keyword, hobbies() --> construtor

console.log(T.k);   //accessing instance variable using object reference
T.coloroftheanimal(); //calling method using object reference


class A
{
    
   valueA = "Hai I am in Class A";
    
}

class B extends A
{
    methodB()
    {
        console.log("B---> " +this.valueA);  //accessing parent variable into child method 
    }
}

class C
{
    methodC()
    {
        let U = new A();
        console.log("C---> " +U.valueA);  //accessing class A variable into another Class C with public
    }
}

let M = new B();
M.methodB();
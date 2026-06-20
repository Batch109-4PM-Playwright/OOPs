class A
{
    
  protected valueA = "Hai I am in Class A";
    
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
        console.log("C---> " +this.valueA);  //accessing class A variable into another Class C 
    }
}

let M = new B();
M.methodB();
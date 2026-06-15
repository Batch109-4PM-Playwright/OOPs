

class methodsdata
{

    m1() : void
    {
        console.log("Non-Static ---> M1");
        this.m3();
    }

    static m2() : void
    {
        console.log("Static ---> M2");
        //m1();      //calling non-static methods into static methods  //ReferenceError: m1 is not defined
    }

    m3() : void
    {
        console.log("Non-Static ---> M3");
       // this.m4();   //TypeError: this.m4 is not a function
    }

    static m4() : void
    {
        console.log("Static ---> M4");
        this.m2();
    }

}

methodsdata.m4();
let U = new methodsdata();
U.m1();

class lax
{
    laxmaiah() : void
    {
        console.log("Hai I am Father of SnNTR")
    }
}
class snntr extends lax
{
    sntr() : void
    {
        console.log("Hai I am Father of HariKrishna")
    }
}
class harikrishna extends snntr
{
    hari() : void
    {
        console.log("Hai I am Father of JnNTR")
    }
}
class jnntr extends harikrishna
{
    jntr() : void
    {
        console.log("Hai I am son of HariKrishna")
    }
}

let A = new jnntr();
A.jntr();
A.laxmaiah();

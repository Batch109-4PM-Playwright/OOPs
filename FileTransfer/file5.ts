

export  function empdata() : void
{
    console.log("Hai we are calculating Employee data");
}

export default function empsalary(g : number) : number   //default export
{
    console.log("Hai we are calculating Emp ratinng for next YEA");
    return (g + (g*0.1));
}
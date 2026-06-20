

abstract class TodayLibrary
{
    BooksSet1() :void
    {
        let books1 : number = 500; 
        console.log("The Number of books we recived on Today are : " +books1);
    }
    abstract BookSet2() : void;
}

class TomorrowLibrary extends TodayLibrary
{
        BookSet2() : void
        {
            let books2 = 132;
            console.log("The Number of books in the child class received to do : " +books2);
        }
}

let R = new TomorrowLibrary();
R.BooksSet1();
R.BookSet2();

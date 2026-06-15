

import {avg, sqldif, carNo} from '../FileTransfer/file1'   //imported file1 data to file4
import {avg as m, sqldif as n , carNo as z}  from '../FileTransfer/file3'   //imported file1 data to file4


let A : number = avg(5, 8);  //file1
let D : number = sqldif(6, 3);  //file1
let K : number = m(19, 5);   //file3
let P : number = n(15, 7);
console.log(A + 8);
console.log(D);
console.log(K);
console.log(P);
console.log("The Car Number in File1 is : " +carNo);
console.log("The Bike Number in File3 is : " +z);


//begin by determining what day it is right now...
const myDate = new Date();      //get a new Date Object
let year, month, dayOfMonth;    //use 'let' since some of these might need to change
year = myDate.getFullYear();    //get year
//adjust zero based counting (eg: January is otherwise month 0)
month  = myDate.getMonth()+1;   //getMonth() returns the month from 0 to 11 so you need to add 1 to get the current month.
dayOfMonth = myDate.getDate();  //get day


// function leapYearCheck(year){
//     if(year%4 ==0 && (year%400 == 0 || year%100 !=0)){
//         console.log("It's a LEAP YEAR")
//     }
//     else{
//         console.log("It's NOT LEAP YEAR")
//     }
// }
// leapYearCheck(1700)


//Checking either leapYear or not
function leapYearCheck (num){
    if (num % 4 == 0 && (num % 400 == 0 || num % 100 != 0)){
        console.log( 'Your year',num, 'is leap year')
    }else{
        console.log( 'Your year' ,num, 'is not leap year' )
    }
}

leapYearCheck(2020)
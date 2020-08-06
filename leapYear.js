function leapYear(year){
    if(year%4==0 && (year%400 ==0 || year%100!=0)){
        console.log("your year is 'LEAPYEAR'");
    }else{
        console.log("your year is 'NOT LEAPYEAR'");
    }
}

leapYear(1700);

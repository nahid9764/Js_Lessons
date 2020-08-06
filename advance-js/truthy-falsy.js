// Falsy Value:
/*****
 * 0
 * ""
 * null
 * NaN
 * undefined
 *****/

// Truthy Value:
/******
 * "0"
 *  {}
 *  []
 *  " "
 */

 let num = 0;
 if(num || num == 0){
     console.log("condition is true.")
 }else{
     console.log("condition is false.")
 }
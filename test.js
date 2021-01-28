function  test() {
    let res = [];
    let arr = [123,163];
    let obj = [[{a: 121}],[{a: 121}],[{a: 123}],[{a: 163}],[{a: 163}]];
 for (let i = 0; i<arr.length; i++)
     for ( let j = 0 ; j < arr.length ; j++){
         console.log(arr[i] )
         console.log(obj[j][0].a)
         if(arr[i] === obj[j][0].a){
             console.log(11111)
            res.push(obj[j][0]);
            break;
         }
     }
 console.log(res);
}
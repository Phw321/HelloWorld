console.log('----------------------')
var hello:string = "hello typescript"
console.log(hello)
console.log('----------------------')
class car {
    name():void {
        console.log("滴滴~~~~~")
    }
}
const obj = new car();
obj.name();
console.log('----------------------')
let arr: Array<number> = [1, 2];
console.log(...arr)
console.log('----------------------')
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
console.log(...arrayList)
console.log('----------------------')
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 1000 * i);
// }
// console.log('----------------------')
for (let j = 0; j < 10; j++) {
    setTimeout(function() { console.log(j); }, 1000 * j);
}
console.log('----------------------')
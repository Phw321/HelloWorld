console.log('----------------------');
var hello = "hello typescript";
console.log(hello);
console.log('----------------------');
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.name = function () {
        console.log("滴滴~~~~~");
    };
    return car;
}());
var obj = new car();
obj.name();
console.log('----------------------');
var arr = [1, 2];
console.log.apply(console, arr);
console.log('----------------------');
var arrayList = [1, false, 'fine'];
arrayList[1] = 100;
console.log.apply(console, arrayList);
console.log('----------------------');
var _loop_1 = function (j) {
    setTimeout(function () { console.log(j); }, 1000 * j);
};
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 1000 * i);
// }
// console.log('----------------------')
for (var j = 0; j < 10; j++) {
    _loop_1(j);
}
console.log('----------------------');

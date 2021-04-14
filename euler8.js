var n = 45;
var k = 13;
var num = "123456789123456789123456789123456789123456789";
var prod = 1;
var max_prod = 0;
for (var i = 0; i < num.length - k; i++) {
    for (var j = 0; j < k; j++) {
        prod = prod * parseInt(num.charAt(j + i));
    }
    if (prod > max_prod) {
        max_prod = prod;
    }
    prod = 1;
}
console.log(max_prod);

function PizzaList(size, crust, topping=[]) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

PizzaList.prototype.wholePizza = function(){

var priceTheSize;
var priceTheCrust;
if(this.size == "theSmall") {
    priceTheSize = 100;
}
else if(this.size == "theMedium") {
    priceTheSize = 200;
}
else{
    priceTheSize = 300;
}

if(this.crust == "theCrispy") {
    priceTheCrust = 50;
}
else if(this.crust == "theStuffed"){
    priceTheCrust = 100;
}
else {
    priceTheCrust = 200;
}

var toppingPr = [];

for (var cash = 0; cash < this.topping.length; cash++) {
    if(this.topping[cash] == "onion"){
        var priceTheOnions = 50;
        toppingPr.push(priceTheOnions);
    }
}

for (var cash = 0; cash < this.topping.length; cash++) {
    if(this.topping[cash] == "broccolini "){
        var priceTheBroccolini  = 100;
        toppingPr.push(priceTheBroccolini );
    }
}

for (var cash = 0; cash < this.topping.length; cash++) {
    if(this.topping[cash] == "garlic"){
        var priceTheGarlic = 80;
        toppingPr.push(priceTheGarlic);
    }
}
console.log(toppingPr);

var toppingPrice = 0;
var i = 0;
while(i < toppingPr.lenght){
    toppingPrice = toppingPrice + toppingPr[i]
    i++;
}
console.log(toppingPrice);

var theTotal = priceTheSize + priceTheCrust + toppingPrice;
return theTotal;
}

$("form").submit(function(e){
 e.preventDefault();
 var sizeSelect = $("select#theSize").val();
 var crustSelect = $("select#theCrust").val();
 var toppingSelect = [];
 var quantitySelect = $("select#quantity").val();
 toppingSelect = $("input:checkbox:checked").map(function(){
    return $(this).val();
 }).get();
 var newCustomer = new PizzaList(sizeSelect,crustSelect,toppingSelect);
 $('#display').text(newCustomer.wholePizza());
 console.log(newCustomer.wholePizza());
 var dan = newCustomer.wholePizza()*quantitySelect;
 $('#result').text(dan);
 
})


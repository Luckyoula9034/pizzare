function results(type,flavor,size,crust,toppings){
    results.type=type;
    results.flavor=flavor;
    results.size=size;
    results.crust=crust;
    results.toppings=toppings;
};

results.prototype.order=function(){
    return "thank you have made an order " + " of pizza with" + results.type + "a flavor of" + results.flavor + "and size of" + results.size + "a crust" + results.crust
}



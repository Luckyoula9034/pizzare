$(document).ready(function() {
  $("#checkout").click(function() {
    var type = $("#type").val();
    var flavor=$ ("#flavor").val();
    var size= $("#size").val();
    var crust= $("#crust").val();
    var toppings= $("#toppings").val();
    var number=[];
    number=number.lenth(function(name){return ;});
    
      alert(number+"")
    

    
    alert( "" + type + " a size of " + size + ", a flavor " + flavor +crust+""+toppings+"");
    alert("thank you for making your order")
    prompt("enter you location")
    alert("thank you for giving your location")
    alert("You delivery will be made soon,continue shoping with us")
  });
});


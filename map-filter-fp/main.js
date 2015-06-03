console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});

////////////////////Question 3/////////////////////

  var itemsPrice = items.map(function(items){
    return items.price
  })

  var sum = itemsPrice.reduce(function(acc, curr) {
     return acc + curr;
    })

  var avgPrice = sum / itemsPrice.length

  document.querySelector("#answer1").innerHTML=avgPrice

  ////////////////////Question 2////////////////////

  var priceBetween = items.filter(function(item) {
    return item.price >= 14 && item.price <= 18;
  })

  var itemsBetween = priceBetween.map(function(item){
      return  item.title + "||";

    });
    document.querySelector("#answer2").innerHTML=itemsBetween

  ///////////////Question 3///////////////////

  var curr = items.filter(function(obj) {

     return obj.currency_code === "GBP"

  }).map(function(obj) {

    return obj.title + " $" + obj.price
  });
  document.querySelector("#answer3").innerHTML=curr

  ///////////////Question 4///////////////////


  var wood = items.filter(function(obj) {

      return _.contains(obj.materials, "wood")

  }).map(function(obj) {

    return obj.title + "||";

  })
  document.querySelector("#answer4").innerHTML=wood

  ///////////////Question 5////////////////////

  var shitLoad = items.filter(function(obj) {

      return obj.materials.length >= 8
    });

    var list = shitLoad.map(function(obj) {

    return obj.title + "|--|" + obj.materials + "|--|" + obj.materials.length
    })

    document.querySelector("#answer5").innerHTML=list

  //////////////Question 6////////////////////

  var whoMade = items.filter(function(obj) {
    return _.contains(obj, "i_did")
  })

  var whoMadeLength = whoMade.length

  document.querySelector("#answer6").innerHTML=whoMadeLength

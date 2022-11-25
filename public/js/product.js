import products from '/js/products.js'
 $(document).ready(function () {
    console.log("js")
    $(function () {
       for (var i = 0; i < products.length; i++) {
          console.log(products[i])
          $("#card").html(`${products[i].name} <br> ${products[i].price} <br> ${products[i].category} <img class="card-image" src=images/${products[i].image}.png />`)
          $(".card-img").css({"width":"100px", "height":"100px"})
       }

    });
 })
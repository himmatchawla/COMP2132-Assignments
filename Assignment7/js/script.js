$(document).ready(function () {
  const pricePerItemCAD = 20;
  let selectedColor = "black";
  let selectedView = "no-model";
  updateTotal();

  // change the qty
  $('#qty').on('change', function () {
    updateTotal();
  });

  // updating total cost of order
  function updateTotal() {
    const selectedQuantity = parseInt($('#qty').val());
    const totalCost = selectedQuantity * pricePerItemCAD;
    $('#total').text(totalCost.toFixed(2));
  }

  // click thumnail to change shown picture
  $('.thumbnail').on('click', function () {
    $('.thumbnail').removeClass('selected');
    $(this).addClass('selected');

    const view = $(this).attr('alt');
    selectedView = view;

    const newSrc = `product-images/t-shirt-${selectedColor}-${view}.jpg`;
    $('#mainImage').attr('src', newSrc);
  });

  // changing colour of Shirt
  $('input[name="color"]').on('change', function () {
    selectedColor = $(this).val();
    $('#colorLabel').text(selectedColor);


    const newMainSrc = `product-images/t-shirt-${selectedColor}-${selectedView}.jpg`; // update big img when colour is changed
    $('#mainImage').attr('src', newMainSrc);


    $('.thumbnail').each(function () { // udate thumbnails when changing colours
      const view = $(this).attr('alt');
      $(this).attr('src', `product-images/t-shirt-${selectedColor}-${view}.jpg`);
    });
  });

  // select size
  $('input[name="size"]').on('change', function () {
    const selectedSize = $(this).val();
    $('#sizeLabel').text(selectedSize);

    //  submit button
    $('#submitBtn')
      .prop('disabled', false)
      .val('Add To Cart');
  });
});

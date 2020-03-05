var $form = $('form#form'),
    url = 'https://script.google.com/macros/s/AKfycbydUZ-udhE4aXnuHlosWbiFBrS5t077crypnaTNkioRMVC6alVG/exec'

$('#submit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})

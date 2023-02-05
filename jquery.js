$(".naslov").on("click", function () {
  $(".meni").hide();
  $(".sadrzaj").show();
});
$(".nazad").on("click", function () {
  $(".sadrzaj").hide();
  $(".meni").show();
});
$(".meni div").on("click", function () {
  let naziv = $(this).attr("class");
  let url = naziv + ".jpg";
  $(".naslov, .meni").hide();
  $(".ponuda div")
    // .attr("class", naziv)
    .show()
    .addClass("element")
    .prepend(`<img src='./img/${url}'>`);
  console.log(url);
  console.log(naziv);
});
$(".nazad").on("click", function () {
  $(".element").remove();
  location.reload();
});

$("#show-answer1").click(() => {
  $("#answer1").slideToggle();
});
$("#show-answer2").click(() => {
  $("#answer2").slideToggle();
});
$("#show-answer3").click(() => {
  $("#answer3").slideToggle();
});
$("#contact").hover(() => {
  console.log("gff");
  $(this).css({
    backgroundColor: "black",
  });
});

$(document).ready(function () {
  $(".design").click(function () {
    $(".imgdesign").toggle();
    $(".description1").toggle();
  });
  $(".development").click(function () {
    $(".imgdevelopment").toggle();
    $(".description2").toggle();
  });
  $(".productmngt").click(function () {
    $(".productmngtimg").toggle();
    $(".description3").toggle();
  });
});

$(document).ready(function () {
  $(".portimg").hover(function () {
    $(".imgtitle", this).slideToggle("slow");
  });
});

function submitmsg() {
  var name = $(".message").val();
  var email = $(".email").val();
  var message = $(".message").val();
  if (name === "" || email === "" || message === "") {
    alert("Please input all fields");
  } else {
    alert(
      "Hey" +
        name +
        " We have received your message and will contact you shortly"
    );
  }
}

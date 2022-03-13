$(document).ready(function(){
    $(".design").click(function(){
        $(".imgdesign").toggle();
        $(".description1").toggle();
    });
    $(".development").click(function(){
        $(".imgdevelopment").toggle();
        $(".description2").toggle();
    });
    $(".productmngt").click(function(){
        $(".productmngtimg").toggle();
        $(".description3").toggle();
    });

})
// $(document).ready(function(){
//     $(".portimg").hover(function(){
//         $(this).find(".imgtitle").fadeIn(300);

//     }, function(){
//         $(this).find("imgtitle").fadeOut(150);
//     });
// })
$(document).ready(function(){
    $(".portimg").hover(function(){
        $(".imgtitle",this).slideToggle("slow");
    })
 

    
})

















// function submitmsg(){
//     var name=document.getElementById("name").value;
//     var email=document.getElementById("email").value;
//     var message=document.getElementById("message").value;
//     if ((name=== false) && (email === false) && (message === false)){
//         alert("please fill in all fields")
//         document.getElementById("form")

//     }
    
  
// }
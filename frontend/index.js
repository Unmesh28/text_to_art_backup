//document.getElementById('spinner').style.display = 'none';
document.getElementById("prompt_input").style.display = "none";


function namePressEnter(e) {
  //console.log("Hello")
  if(e.keyCode === 13){
    e.preventDefault(); // Ensure it is only this code that runs

    //alert("Enter was pressed was presses");
    document.getElementById("prompt_input").style.display = "block";
    document.getElementById("prompts").focus();
}}
  

function generateImageVideo(e) {
  if(e.keyCode === 13){
    console.log("Called..........")
    
    
    //document.getElementById('spinner').style.display = 'block';

    // var x = document.getElementById("myForm").elements.length;
    // console.log(x)
    
    var name = document.getElementById("name").value;
    var prompts = document.getElementById("prompts").value;
    sessionStorage.setItem("prompts", prompts);
    sessionStorage.setItem("name", name);
    
    console.log(prompts);

    window.open("loader_page.html", "_self");

  }
}


//     // var obj = new Object();
//     // //obj.name = name;
//     // obj.prompts = prompts;
//     // obj.style = style;
//     // obj.make_video = true;
//     // var jsonString= JSON.stringify(obj);
//     // console.log(jsonString)

    

//     // $.ajax({
//     //     url: 'http://e106-3-110-60-245.ngrok.io/generate',
//     //     type: "POST",
//     //     data: jsonString,
//     //     dataType: "json",
//     //     contentType: "application/x-www-form-urlencoded",
//     //     success: function (data) {
//     //         console.log(data);
//     //         document.getElementById('spinner').style.display = 'none';
//     //     },
//     //     error: function (error) {
//     //         console.log(`Error ${error}`);
//     //         document.getElementById('spinner').style.display = 'none';
//     //     }
//     // });

    
// }

// $.fn.upform = function() {
//     var $this = $(this);
//     var container = $this.find(".upform-main");
  
//     $(document).ready(function() {
//       $(container).find(".input-block").first().click();
//     });
  
//     $($this).find("form").submit(function() {
//       return false;
//     });
  
//     $(container)
//       .find(".input-block")
//       .not(".input-block input")
//       .on("click", function() {
//       rescroll(this);
//     });
  
//     $(container).find(".input-block input").keypress(function(e) {
//       if (e.which == 13) {
//         if ($(this).hasClass("required") && $(this).val() == "") {
//         } else moveNext(this);
//       }
//     });
  
//     $(container).find('.input-block input[type="radio"]').change(function(e) {
//       moveNext(this);
//     });
  
//     $(window).on("scroll", function() {
//       $(container).find(".input-block").each(function() {
//         var etop = $(this).offset().top;
//         var diff = etop - $(window).scrollTop();
  
//         if (diff > 100 && diff < 300) {
//           reinitState(this);
//         }
//       });
//     });
  
//     function reinitState(e) {
//       $(container).find(".input-block").removeClass("active");
  
//       $(container).find(".input-block input").each(function() {
//         $(this).blur();
//       });
//       $(e).addClass("active");
//       /*$(e).find('input').focus();*/
//     }
  
//     function rescroll(e) {
//       $(window).scrollTo($(e), 200, {
//         offset: { left: 100, top: -200 },
//         queue: false
//       });
//     }
  
//     function reinit(e) {
//       reinitState(e);
//       rescroll(e);
//     }
  
//     function moveNext(e) {
//       $(e).parent().parent().next().click();
//     }
  
//     function movePrev(e) {
//       $(e).parent().parent().prev().click();
//     }
//   };
  
//   $(".upform").upform();
//   $.fn.upform = function() {
//     var $this = $(this);
//     var container = $this.find(".upform-main");
  
//     $(document).ready(function() {
//       $(container).find(".input-block").first().click();
//     });
  
//     $($this).find("form").submit(function() {
//       return false;
//     });
  
//     $(container)
//       .find(".input-block")
//       .not(".input-block input")
//       .on("click", function() {
//         rescroll(this);
//       });
  
//     $(container).find(".input-block input").keypress(function(e) {
//       if (e.which == 13) {
//         if ($(this).hasClass("required") && $(this).val() == "") {
//         } else moveNext(this);
//       }
//     });
  
//     $(container).find('.input-block input[type="radio"]').change(function(e) {
//       moveNext(this);
//     });
  
//     $(window).on("scroll", function() {
//       $(container).find(".input-block").each(function() {
//         var etop = $(this).offset().top;
//         var diff = etop - $(window).scrollTop();
  
//         if (diff > 100 && diff < 300) {
//           reinitState(this);
//         }
//       });
//     });
  
//     function reinitState(e) {
//       $(container).find(".input-block").removeClass("active");
  
//       $(container).find(".input-block input").each(function() {
//         $(this).blur();
//       });
//       $(e).addClass("active");
//       /*$(e).find('input').focus();*/
//     }
  
//     function rescroll(e) {
//       $(window).scrollTo($(e), 200, {
//         offset: { left: 100, top: -200 },
//         queue: false
//       });
//     }
  
//     function reinit(e) {
//       reinitState(e);
//       rescroll(e);
//     }
  
//     function moveNext(e) {
//       $(e).parent().parent().next().click();
//     }
  
//     function movePrev(e) {
//       $(e).parent().parent().prev().click();
//     }
//   };
  
//   $(".upform").upform();
  

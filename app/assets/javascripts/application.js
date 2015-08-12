// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){
    // this function expands the form for adding a new lesson

     $("#newLesson").click(function(){
         if ($(window).width() >= 700){
             $("#newLessonForm").animate({
                     width: "50%",
                     height: "350px",
             }, 800, function(){
                $("#newLessonForm").css({
                    "display": "block",
                    "margin-top": "50px"
                })
             });
         } else {
             $("#newLessonForm").animate({
                     width: "100%",
                     height: "350px",
             }, 800, function(){
                $("#newLessonForm").css({
                    "display": "block",
                    "margin-top": "50px"
                })
             });
         }
     });
     // this function controls the form for editing an existing lesson
    $(".editForm").on("click", function(){
         var self = this;
         $(self).children().animate({
             width: "100%",
             height: "370px"
         }, 1000, function(){
             $(self).children().css("display", "block")
         });

     });
     // this function hides a form if the user hits "cancel"
     $(".hideForm").on("click", function(){
         event.stopPropagation()
         var self = this;
         $(self).parent().animate({
             width: "0",
             height: "0"
         }, 800, function(){
             $(self).parent().css("display", "none")

         });

     });

// this function lets the instructor copy the survey link to his/her clipboard with a single click
function copyToClipboard(link){
	var copyDiv = document.createElement('div');
	copyDiv.contentEditable = true;
	document.body.appendChild(copyDiv);
    copyDiv.innerHTML = link;
	copyDiv.unselectable = "off";
    copyDiv.focus();
	document.execCommand('SelectAll');
	document.execCommand("Copy", false, null);
	document.body.removeChild(copyDiv);
	// window.scroll(0,0);
}

// on click, collect the html with the link address in it, then pass into copyToClipboard
$(".copy").on("click", function(){
    var surveyLink = $(this).children().html()
    copyToClipboard(surveyLink);

})
$(".graph").hide();

$("button").on("click", function(){
  $(".graph").hide();
  $("." + this.className).show();
})

$("#showComments").on("click", function(){
    $(".comments-list").css("display", "block")

});



}); // closes document.ready DO NOT DELETE

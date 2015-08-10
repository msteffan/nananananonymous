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
    // this function controls clicks on Guardian content (if it has been loaded after a search) and controls expanding/descreasing the size of the columns
     $("#newLesson").click(function(){
         $("#newLessonForm").animate({
             width: "50%",
             height: "150px",
         }, 800, function(){
            $("#newLessonForm").css("display", "block")
         });
     });

    $(".editForm").on("click", function(){
         var self = this;
         $(self).children().animate({
             width: "100%",
             height: "150px"
         }, 1000, function(){
             $(self).children().css("display", "block")
         });

     });

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








}); // closes document.ready DO NOT DELETE

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
//= require_tree .


$(document).ready(function(){
    // this function expands the form for adding a new lesson
     $("#newLesson").click(function(){
        $("#newLessonForm").toggle("display")

     });
     // this function controls the form for editing an existing lesson
    $(".editForm").on("click", function(){
         var self = this;
         var clickedDiv = $(self).parent();
         $(clickedDiv).children(".showLessonForm").toggle("display")

     });
     // this function hides a form if the user hits "cancel"
     $(".hideForm").on("click", function(){
         event.stopPropagation()
         var self = this;
         $(self).parent().parent().toggle("display")



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
    	window.scroll(this);
    }

    // on click, collect the html with the link address in it, then pass into copyToClipboard
    $(".copy").on("click", function(){
        var surveyLink = $(this).children().html()
        copyToClipboard(surveyLink);

    })

    //controls the report page
    $(".graph.pie").hide();
    $(".graph-button").on("click", function(){
        $(".graph").hide();
        $("." + this.className.split(' ')[1]).show();
    })

    // controls the comments
    $("#showComments").on("click", function(){
        $(".comments-list").slideToggle("display")
    });


//this disables and enables the submit button when 2 radio buttons are clicked
$('input[type="submit"]').prop('disabled', true);

     $(document).on("click", function() {
       if($(this).find('input[type="radio"]:checked').length >= 2)
           {
             console.log('enabled');
             $("input[type=submit]").prop("disabled", false);
           }
     });



}); // closes document.ready DO NOT DELETE

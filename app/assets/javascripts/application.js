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

     $(function () {
     $('#comfort_chart').highcharts({
         chart: {
             type: 'column'
         },
         title: {
             text: 'Comfortability'
         },
         subtitle: {
             text: 'Lesson'
         },
         xAxis: {
             categories: [
                 '0',
                 '1',
                 '2',
                 '3',
                 '4',
                 '5',
             ],
             crosshair: true
         },
         yAxis: {
             min: 0,
             title: {
                 text: 'Vote Quantity'
             }
         },
         tooltip: {
             headerFormat: '<span style="font-size:10px">Comfortability: {point.key}</span><table>',
             pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                 '<td style="padding:0"><b>{point.y} votes</b></td></tr>',
             footerFormat: '</table>',
             shared: true,
             useHTML: true
         },
         plotOptions: {
             column: {
                 pointPadding: 0.2,
                 borderWidth: 0
             }
         },
         series: [{
             name: 'Student Feedback',
             data: [2, 8, 9, 17, 21, 4]
         }]
     });
 });

 $(function () {
    $('#complete_chart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Completeness'
        },
        subtitle: {
            text: 'Lesson'
        },
        xAxis: {
            categories: [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Vote Quantity'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">Completeness: {point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} votes</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Student Feedback',
            data: [2, 8, 9, 17, 21, 4]
        }]
    });
});





}); // closes document.ready DO NOT DELETE

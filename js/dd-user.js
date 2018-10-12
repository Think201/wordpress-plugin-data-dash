/******* Jquery No Conflict Function *******/
window.$ = jQuery.noConflict();

function DataDash(CounterId, CounterData){

  var settings =
  {
    CounterId           : null,
    CounterStartValue   : 0,
    CounterIncValue     : 0,
    CounterIncTime      : 0,
    incTimeOut          : 0
  };

  settings.CounterId            = CounterId;
  settings.CounterStartValue    = CounterData['value'];
  settings.CounterIncValue      = CounterData['increment'];
  settings.CounterIncTime       = CounterData['time']*1000; 

  init = function() {
    get();
  },

  get = function() {

    // Calculation for incrementing value
    settings.incTimeOut = Math.floor(settings.CounterIncTime / settings.CounterIncValue);

    incrementCounter();

  },

  incrementCounter = function() {
    settings.CounterStartValue += getRandomInt(1,5);
    
    $('#'+settings.CounterId).html(numberWithCommas(settings.CounterStartValue));

    setTimeout("incrementCounter()", settings.incTimeOut)

  },

  numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return {
    init : init
  };
  // get the id

  // set the timer

  // do the ajax thingy

  // on sucess call the timer



};




// var DataDash = {

//   settings:
//   {
//     formObj  : null,
//   },

//   get: function(id)
//   {    
//     $.ajax({
//       url: DDUserAjax.ajaxurl,
//       type: 'post',
//       data: {action: 'dd_get_all_counters', id: id},
//       success: function(data, status) 
//       {
//         $(data.id).html(data.html);
//         DataDash.flipTheNumber(data);
//       },
//       error: function()
//       {    
//        return false; 
//      }                        
//    }); 
//   },

//   filterNumbersIntoSpan: function(Numbers)
//   {
//     var html = '';
//     $.each($(Numbers), function(index, value){
//       if(value === ',') {
//         html += '<span class="dd_comma">'+value+'</span>';
//       }
//       else {
//         html += '<span class="dd_number">'+value+'</span>';
//       }        
//     });

//     return html;
//   },

//   flipTheNumber: function(data)
//   {
//     // Get the existing source
//     var existing = $(data.id);

//     var current = $(data.html);

//     $.each($(data.id).find('span'), function(index, value){       

//       if($(value).text() !== $(current[index]).text()) {

//         $(current[index]).addClass('ddrotate');

//       }     

//     });

//     return $(current);
//   }
// };
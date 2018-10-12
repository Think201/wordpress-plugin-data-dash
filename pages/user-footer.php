<script type='text/javascript'>
   $( document ).ready(function() 
   {
      var Counters = Array();

      (function getCountersData() {
      //var ddJSInverval = $('.dd_counter').data('ddjstimeout');     
      var ddCounterObj = $('.dd_counter');


      $.each($(ddCounterObj), function(index, value) {

         var dd_counterid = $(value).data('counterid');

         Data = new Array();

         Data['value']        = $(value).data('value');
         Data['increment']    = $(value).data('incvalue');
         Data['time']         = $(value).data('time');

         Counters[index] = new DataDash(dd_counterid, Data);
         Counters[index].init();

            //dd_counterid = dd_counterid.split("_").pop();

            //DataDash.get(dd_counterid); 

         });

         //setInterval(getCountersData, ddJSInverval);

      })();
   });
</script>


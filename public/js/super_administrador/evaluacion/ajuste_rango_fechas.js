$( function() {
  var dateFormat = "dd/mm/yy",
    from = $( "#fecha_inicio" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: "dd/mm/yy",
        maxDate: '+1w',
        minDate: '-24m',
      })
      .on( "change", function() {
        var x = 5; //or whatever offset
        var CurrentDate = getDate( this );
        CurrentDate.setMonth(CurrentDate.getMonth() + x);
        to.datepicker( "setDate", CurrentDate );
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
      to = $( "#fecha_fin" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: "dd/mm/yy",
        maxDate: '+1w',
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });

      function getDate( element ) {
        var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }
          return date;
        }
      });

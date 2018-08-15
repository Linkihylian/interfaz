
    $( function() {
        var dateFormat = "dd/mm/yy",
        from = $( "#fecha_inicio_evaluacion" )
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            dateFormat: "dd/mm/yy",
            maxDate: '+1m',
            minDate: '+0m',
        })
        .on( "change", function() {

            Date.prototype.setDay = function(dayOfWeek) {
                this.setDate(this.getDate() - this.getDay() + dayOfWeek);
            };

            var d = getDate( this );
            d.setDay(61);

            console.log(d);
            //to.datepicker("setDate", d );
            to.datepicker( "option", "maxDate", d );
            to.datepicker( "option", "minDate", getDate( this ) );
            $("#datepicker4").removeAttr("disabled")


            /*to.datepicker( "option", "minDate", getDate( this ) );
            $("#datepicker4").removeAttr("disabled")*/
        }),

        to = $( "#fecha_fin_evaluacion" ).datepicker({
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
    } );

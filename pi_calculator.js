$(function(){
    $('#EstimateResult').hide();

    $('#field1').rangeslider({
        polyfill:false,
        onInit:function(){
            $('#input1').val($('input[type="range"]').val());
        },
        // Change the value of input field when slider slides
        onSlide:function(){
            $('#input1').val(this.value);
            console.log('$'+$('#input1').val());
        }
    });
    // Change the value of slider field when input changes
    $('#input1').on('input', function() {
        if (this.value.length == 0) { $('#field1').val(0).change(); } 
        $('#field1').val(this.value).change();
    });
  
  
    $('#field2').rangeslider({
        polyfill:false,
        onInit:function(){
            $('#input2').val($('input[type="range"]').val());
        },
        // Change the value of input field when slider slides
        onSlide:function(){
            $('#input2').val(this.value);
            console.log('$'+$('#input2').val());
        }
    });
    // Change the value of slider field when input changes
    $('#input2').on('input', function() {
        if (this.value.length == 0) { $('#field2').val(0).change(); }
        $('#field2').val(this.value).change();
    });


    $('#field3').rangeslider({
        polyfill:false,
        onInit:function(){
            $('#input3').val($('input[type="range"]').val());
        },
        onSlide:function(){
            $('#input3').val(this.value);
            console.log('$'+$('#input3').val());
        }
    });
    // Change the value of slider field when input changes
    $('#input3').on('input', function() {
        if (this.value.length == 0) { $('#field3').val(0).change(); }
        $('#field3').val(this.value).change();
    });


    $('#field4').rangeslider({
        polyfill:false,
        onInit:function(){
            $('#input4').val($('input[type="range"]').val());
        },
        onSlide:function(){
            $('#input4').val(this.value);
            console.log('$'+$('#input4').val());
        }
    });
    // Change the value of slider field when input changes
    $('#input4').on('input', function() {
        if (this.value.length == 0) { $('#field4').val(0).change(); }
        $('#field4').val(this.value).change();
    });

});


function settlement(form){
  $("#EstimateResult").slideDown();
  $('html, body').animate({scrollTop:($('#EstimateResult').offset().top)},1500);
  damages=parseFloat($('#field2').val())+parseFloat($('#field3').val())+parseFloat($('#field4').val());
  special_damages=parseFloat($('#field1').val());
  low_settlement=(4*special_damages)+damages;
  high_settlement=(7*special_damages)+damages;
  totalDamages=special_damages+damages;

  $('#sum').text("$"+totalDamages.toLocaleString());
  $('#low').text("$"+low_settlement.toLocaleString());
  $('#high').text("$"+high_settlement.toLocaleString());
  
}
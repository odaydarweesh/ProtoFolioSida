jQuery(document).ready(function(){

    jQuery(".detalier").hide();
    jQuery(".projektstitle").click(function(){
          jQuery(this).next(".detalier").slideToggle();
    });

   jQuery(" .container .projektstitle").addClass("pointer");
});



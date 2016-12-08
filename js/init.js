(function($){
  $(function(){

    $('.button-collapse').sideNav();

     $('.modal').modal();

    $('.collapsible').collapsible({
      accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      onOpen: function(el) {
        el.find(".collapsible-header #action-icons").show();
      }, // Callback for Collapsible open
      onClose: function(el) {
      el.find(".collapsible-header #action-icons").hide();
     } // Callback for Collapsible close
    }
  );

  }); // end of document ready
})(jQuery); // end of jQuery name space

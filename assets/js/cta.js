(function ($) {
  "use strict";

  $(document).ready(function(){
    var mailing_list = $(".mailing-list");
    $(".post .cta").each(function() {
      var cta = $(this);
      var text = cta.data('cta');
      var new_mailing_list = mailing_list.clone();
      new_mailing_list.find("h4").text(text);
      cta.replaceWith(new_mailing_list);
    })
  });

}(jQuery));

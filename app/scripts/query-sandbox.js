/**
 * Created by Pelowok on 8/13/15.
 */

$(document).ready(function(){


  $("img.toggler").click(function(){
    $(this).next().toggle(250);
    $(this).slideToggle(250);
  });

})

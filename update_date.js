/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function update_date(nid){
    jQuery.ajax({
    type: "POST",
	  url: Drupal.settings.basePath+'update-date/'+nid,
	  success: function(data) {
              jQuery('.date-display-single').html(data);
          }});
}

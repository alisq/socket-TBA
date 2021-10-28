//THIS COPIES THE SHORT DESCRIPTION FIELD INTO THE IMAGE ALT FIELDS IF THEY ARE EMPTY


f = jQuery('<div></div>').append( jQuery(".form-item--field-description-short-0-value textarea").val() ).text();

jQuery("#edit-field-images-table .form-managed-file__meta-items input").each(function(){
  if (jQuery(this).val() == "") {
    jQuery(this).val(f)
  }
});

  


 var model = (function () {
   var resetForm = function () {
     var $textFields = $('input[name]');
     var $radioBtns = $('input[type="radio"]');
     var $checkbox = $('input[type="checkbox"]');
     var $dropdown = $('select[name="services"]');
     var firstDropDownVal = $('select option').first().val();
     var $textarea = $('textarea[name="message"]');

     $textFields.val('');
     $radioBtns.prop('checked', false);
     $checkbox.prop('checked', false);
     $dropdown.val(firstDropDownVal);
     $textarea.val('');
   };

   return {
     resetForm: resetForm
   };
 }());

 var validateAPI = (function () {
   var validateForm = function (form) {
     $(form).validate({
       focusCleanup: true,
       rules: {
         fullName: {
           required: true,
           minlength: 3
         },
         email: {
           required: true,
           email: true
         },
         id: {
           required: true,
           minlength: 13
         },
         services: {
           required: true
         },
         radio: {
           required: true
         },
         terms: {
           required: true
         },
         question: {
           required: true
         },
         image: {
           required: true,
           uploadFile: true,
           extension: 'jpe?g,png'
         }
       },
       messages: {
         fullName: 'Please specify your full name',
         email: 'Please provide a valid e-mail address',
         id: 'Please provide a 13-digit ID number',
         services: 'Please choose a service',
         terms: 'Please check the box',
         question: 'Please pick an option',
         image: 'Please upload an image file with format JPEG, JPG or PNG'
       },
       errorPlacement: function (error, element) {
         error.appendTo(element.parent().parent());
       }
     });
   };
   return {
     validateForm: validateForm
   };
 }());

 var handlers = (function () {
   var submitListener = function () {
     var submitForm = function () {
       $('#bs-form').submit();
     };
     $('#submit').on('click', submitForm);
   };

   var resetListener = function () {
     var resetForm = function () {
       model.resetForm();
       $('label.error').hide();
     };
     $('#reset').on('click', resetForm);
   };

   return {
     submitListener: submitListener,
     resetListener: resetListener
   };
 }());

 $(document).ready(function () {
   handlers.submitListener();
   handlers.resetListener();
   validateAPI.validateForm('#bs-form');
 });

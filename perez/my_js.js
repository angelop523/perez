
$(function () {
    $('#register').submit(function (e) {
        e.preventDefault();

        let firstName = $('#first_name').val();
        let lastName = $('#last_name').val();
        let email = $('#email').val();

        if (firstName == null) {
            $('#first_name_msg').html('This field is required.');
        } else {
            $('#first_name_msg').html('');
        }

        if (lastName == null) {
            $('#last_name_msg').html('This field is required.');
        } else {
            $('#last_name_msg').html('');
        }

        if (email == null) {
            $('#email_msg').html('This field is required.');
        } else {
            $('#email_msg').html('');
        }

        
  var password = $('#password').val();
  var confirm_password = $('#confirm_password').val();


  if(password != confirm_password) {
    alert('password not match');
  } else {
    alert('successfully register');
    window.location.replace("login.html");
  }

  $('.input-field input').on('keyup', function()
{
    var self = $( this );
    

    if ( self.val() != '' ) {
        self.addClass('active');
    } else {
        self.removeClass('active');
    }
});
    
    })


});




/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $('form').submit(function(event) {

        var formData = {
            fullName: $("input#fullName").val(),
            subject: $("input#subject").val(),
            job: $("input#job").val(),
            company: $("input#company").val(),
            email: $("input#email").val(),
            phone: $("input#phone").val(),
            message: $("textarea#message").val()
        };

        $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url: 'php/hireme.php', // the url where we want to POST
                data: formData, // our data object
                dataType: 'json',
                encode: true // what type of data do we expect back from the server
            })
            // using the done promise callback
            .done(function(data) {
                if (!data.success) {

                  if(data.errors.fullName) {
                    $('#fullName-input').addClass('has-error');
                    $('#fullName-input').append('<span class="help-block">' + data.errors.fullName + '</span>');
                  }

                  if(data.errors.subject) {
                    $('#subject-input').addClass('has-error');
                    $('#subject-input').append('<span class="help-block">' + data.errors.subject + '</span>');
                  }

                  if(data.errors.job) {
                    $('#job-input').addClass('has-error');
                    $('#job-input').append('<span class="help-block">' + data.errors.job + '</span>');
                  }

                  if(data.errors.company) {
                    $('#company-input').addClass('has-error');
                    $('#company-input').append('<span class="help-block">' + data.errors.company + '</span>');
                  }

                   if(data.errors.phone) {
                    $('#phone-input').addClass('has-error');
                    $('#phone-input').append('<span class="help-block">' + data.errors.phone + '</span>');
                  }

                  if(data.errors.email) {
                    $('#email-input').addClass('has-error');
                    $('#email-input').append('<span class="help-block">' + data.errors.email + '</span>');
                  }

                  if(data.errors.message) {
                    $('#message-textarea').addClass('has-error');
                    $('#message-textarea').append('<span class="help-block">' + data.errors.message + '</span>');
                  }

                } else {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#hiremeForm').trigger("reset");
                }

            });
        event.preventDefault();
        $('.form-group').removeClass('has-error');
        $('.help-block').remove();
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
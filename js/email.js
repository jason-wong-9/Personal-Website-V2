$('#submit').click(function() {
    var senderName = $("#name").val();
    var senderEmail = $("#email").val();
    var senderMessage = $("#message").val();
    
    var emailContent = "Name: " + senderName + "\n From: " + senderEmail + "\n Message: \n" + senderMessage;
    console.log(senderMessage);
    if ((senderName != "") && (senderEmail != "") && (senderMessage != "")) {
        $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'QSasepJ8JBOZ_bNeAAK1uQ',
                'message': {
                    'from_email': 'twistedfate@jasonkcwong.com',
                    'to': [
                        {
                            'email': 'twistedfate@jasonkcwong.com',
                            'type': 'to'
                        }
            
                    ],
                    'autotext': 'true',
                    'subject': 'Message From Personal Portfolio',
                    'html': emailContent
                }
            }
        }).done(function(response) {
            console.log(response); // if you're into that sorta thing
        });
    }
    
});
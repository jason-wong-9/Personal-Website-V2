$('#submit').click(function() {
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': 'QSasepJ8JBOZ_bNeAAK1uQ',
            'message': {
                'from_email': 'jason_19960903@hotmail.com',
                'to': [
                    {
                        'email': 'jason_19960903@hotmail.com',
                        'type': 'to'
                    }
            
                ],
                'autotext': 'true',
                'subject': 'YOUR SUBJECT HERE!',
                'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
            }
        }
    }).done(function(response) {
        console.log(response); // if you're into that sorta thing
    });
});
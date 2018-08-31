//bez odswiezania strony dostajemy z serwera komunikat o bledzie

/*
$(function(){
    alert();
})*/



$(function(){
  $('form').on('submit', function(e){ //uchwyt do submit!
    e.preventDefault(); //blokujemy domyslne odswiezanie przegladarki, musimy do callbacka dodac e
    const mail = $('#mail').val(); //uchwyt i dostep do maila - id
    const mail = $('#subject').val(); //uchwyt i dostep do tytulu - id
    const mail = $('#message').val(); //uchwyt i dostep do wiadomosci - id
//ODTAD DO 34 JEST ZLE
    $.ajax({
        type: $('form').attr('method'), //pobieramy atrybut z metody jesli w html post to tu post itd
        url: $('form').attr('action'), //pobieramy tez a html-a
        dataType: 'json', //bez tego bylby zwykly tekst
        data: {
            mail: mail,
            subject: subject,
            messsage: message

        },
        success: function(response) {
//            console.log(response);
                if('success' in response) {
                    console.log('mail zostalwyslany');
                }
                else {
                    const lab1 = $('label:eq(0)');
                    const lab2 = $('label:eq(1)');
                    const lab3 = $('label:eq(2)');

                    if('mail' in response) {
                        lab1.html('podales blednego maila');
                    }
                }
            
        },
        error: function(xhr) {
//            console.log(xhr);
        }
    });


  });

});
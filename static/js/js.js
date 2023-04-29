document.querySelector("a").addEventListener("click", function(e){
    e.preventDefault()


    /*
    fetch().then().catch()
    - faccio la richiesta asincrona con fetch
    - il codice inserito in "then" viene esguito se la fetch va a buon fine
    - il codice inserito in "catch" viene seguito se la fetch va in errore

    fetch()
        .then()
        .catch()
    Questo modo di scrivere è assolutamente uguale a scrivere 
    tutto su una riga ma è più leggibile.

    fetch("https://api.chucknorris.io/jokes/random")
        .then()
        .catch()

    Il primo argomento della funzione fetch è l'URL a cui vogliamo mandare
    la richiesta asincrona. 

    fetch("https://api.chucknorris.io/jokes/random")
        .then(function(response){

        })
        .catch()
    
    Possiamo passare a then una funzione con un unico argomento (io l'ho chiamato
    response ma siamo liberi di chiamarlo come vogliamo) che verrà eseguita se la
    richiesta va a buon fine.
    
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function(response){
            
        })
        .catch(function(error){

        })

    Possiamo passare a catch un'altra funzione con un unico argomento 
    (io l'ho chiamato error ma siamo liberi di chiamarlo come vogliamo) 
    che verrà eseguita se la richiesta NON va a buon fine.

    Le funzioni che passiamo come argomenti a then e catch prendono il nome
    di funzioni di callback. 

    function thenCallback(response){

    }

    function catchCallback(error){

    }

    fetch("https://api.chucknorris.io/jokes/random")
        .then(thenCallback)
        .catch(catchCallback)

    In questa maniera ottengo lo stesso risultato di prima solo che ho dichiarato
    le funzioni fuori dalle then/catch.

    */

    function thenCallback(response){
        // console.log(response)
        // console.log(response.status)

        if(response.status === 200){
            return response.json()
        }
    }

    function catchCallback(error){
        console.log(error)
        document.querySelector("#error").innerHTML = error
    }

    function finalCallback(data){
        // console.log(data)
        // QUI HO ACCESSO AL JSON FINALE
        console.log(data.value)
        document.querySelector("#joke").innerHTML = data.value
    }

    fetch("https://api.chucknorris.io/jokes/random")
        .then(thenCallback)
        .then(finalCallback)
        .catch(catchCallback)

    /* 
    Questa seconda "then" la facciamo per accedere al JSON finale che
    mi interessa. All'interno di questa "then" posso accedere ai campi che
    voglio utilizzare.
    */

})
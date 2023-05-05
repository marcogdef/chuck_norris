document.querySelector("a").addEventListener("click", function(e){
    e.preventDefault()

    function thenCallback(response){
        if(response.status === 200){
            return response.json()
        }
    }

    function catchCallback(error){
        console.log(error)
        document.querySelector("#error").innerHTML = error
    }

    function finalCallback(data){
        console.log(data.value)
        document.querySelector("#joke").innerHTML = data.value
    }

    fetch("https://api.chucknorris.io/jokes/random")
        .then(thenCallback)
        .then(finalCallback)
        .catch(catchCallback)

})

function copiaTesto() {
    let jokeDisplay = document.querySelector(".jokeContainer")
    let elementoDaCopiare = document.querySelector(".jokeContainer");
  
    let selezione = window.getSelection();
    let intervallo = document.createRange();
    intervallo.selectNodeContents(elementoDaCopiare);
    selezione.removeAllRanges();
    selezione.addRange(intervallo);
  
    document.execCommand("copy");
    selezione.removeAllRanges();
  }


let copyBtn = document.querySelector(".copyButton")
copyBtn.addEventListener("click", function(e){
copiaTesto()
alert("Battuta copiata")})



//si fuese un json externo se usaria una variable para almacenar
// data = 'https:etc etc.json'
// fetch(data)

// .then consume la promesa
// si la promesa falla se va a .catch






// CON METODO .THEN

fetch("data.json")
    .then((res)=> {     
        if(!res.ok){
            throw new Error('Error 404');         //consume la promesa, si hay error lanza error
        }
        return res.json();                        // sino devuelve res.json
    })

    .then((data)=> {
        data.forEach((item)=>{                   // recorre los elementos de data
            console.log(item.name);              // muestra el valor de name de cada item
        })
    })

    .catch((err)=> console.log(err.message))      // toma el error y lo muestra en consola

    







//CON METODO ASYNC Y AWAIT

const getGames = async () => {                 //async: es para que funcione el await
    try {                                      //try: intenta
        const res = await fetch("data.json");  //Await: esperar a que el fetch se consuma
        if(!res.ok){
            throw new Error ("error");
        }
        const data = await res.json();         //
        const gameList = document.getElementById('gameList');

        data.forEach(item => {
            const li = document.createElement('li');     //CREANDO ELEMENTO LI CREATE ELEMENT
            li.textContent = item.name;
            gameList.appendChild(li);
        })
    } catch (error) {                          //en caso de error
        console.log(error)
    }
}

getGames();






// LO MISMO PERO CREANDO CON INNERHTML




const getGames = async () => {
    try {
        const res = await fetch("data.json");
        if (!res.ok) {
            throw new Error("error");
        }
        const data = await res.json();
        const gameList = document.getElementById("gameList"); // Obtener el elemento ul

        let liHTML = ''; // Variable para almacenar el HTML de los elementos li

        data.forEach(item => {
            liHTML += `<li><span>${item.name}</span></li>`; // Agregar el HTML del li con el nombre del juego
        });

        gameList.innerHTML = liHTML; // Establecer el contenido HTML del ul
    } catch (error) {
        console.log(error);
    }
}

getGames();






// LO MISMO PERO CON INNERTEXT

const getGames = async () => {
    try {
        const res = await fetch("data.json");
        if (!res.ok) {
            throw new Error("error");
        }
        const data = await res.json();
        const gameList = document.getElementById("gameList"); // Obtener el elemento ul

        data.forEach(item => {
            const li = document.createElement("li"); // Crear un nuevo elemento li
            li.innerText = item.name; // Establecer el contenido de texto del li usando innerText
            gameList.appendChild(li); // Agregar el li al ul
        });
    } catch (error) {
        console.log(error);
    }
}

getGames();
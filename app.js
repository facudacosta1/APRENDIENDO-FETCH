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
        data.forEach(item => {
            console.log(item.name);
        })
    } catch (error) {                          //en caso de error
        console.log(error)
    }
}

getGames();
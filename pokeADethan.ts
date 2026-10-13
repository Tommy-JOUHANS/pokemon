import * as https from "https"
import * as http from "http"

function startServer(){
    const server = http.createServer((req,res)=>{
        if(req.url === '/wild') {
         res.end(JSON.stringify("Hardy") + "\n");;
        }
        else if (req.url === '/capture') {
            res.end()
        }
    });
    server.listen(3000, () => {
        console.log("Server running at http://localhost:3000/");
    });
    
}

const pokeApi = "https://pokeapi.co/api/"

async function getPokemonById(id)
{

    const endpoint = "v2/pokemon/";
    //const res = await https.get(pokeApi + endpoint + id)
    const res = await fetch(pokeApi + endpoint + id);
    return await res.json();
    /*
    await https.get(pokeApi + endpoint + id, (res)=>{
        let data = "";

        res.on("data", (dataChunk) => {
            data += dataChunk;
        });

        res.on("end", () =>{
            const response = JSON.parse(data);
            return response;
        });
    });*/

}
/* Ajout du pokemon
async function postPokemonID(id){
    await https.add(pokeApi + endpoint + id, (res)=>{
        let data = "";

        res.on("data", (dataChunk) => {
            data += dataChunk;
        });

        res.on("end", () =>{
            const response = JSON.parse(data);
            return response;
        });
    }) 

}*/

async function main(){
    console.log(await getPokemonById(1));
    startServer();
}

main()
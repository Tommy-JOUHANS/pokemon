import * as https from "https"
import * as http from "http"

function startServer(){
    const server = http.createServer(async(req,res)=>{
        if(req.url === '/wild') {
         res.end(JSON.stringify(await getPokemonById(4))+ "\n" );
        }
        else if (req.url !== '/wild') {
            res.end(JSON.stringify("404 Page Non Trouvé") + "\n")
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
    const res = await fetch(pokeApi + endpoint + id);
    return await res.json();
    
    

}


async function main(){
    console.log(await getPokemonById(1));
    startServer();
}

main();
import { createServer, Server } from "miragejs";

    
if (window.Server) {
    Server.shutdown()
}

window.server = createServer({
    routes() {
        this.get("/api/usuarios/", () => {
            return [{  id: 0, mail: "jaramillo.nicole@gmail.com", pass: 202030, name: "Nicole Jaramillo" },
            { id: 1, mail: "lerolero@hotmail.com", pass: 2021, name: "Lero Lero" },
            { id: 2, mail: "Dunkirk", pass: 2030, name: "Usuario Prueba" }]
            
            
        })
    },
})


export const apiGetPost = () => {

    const request = {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    return fetch("/api/usuarios/", request)
        .then(response => response.json());
    
};


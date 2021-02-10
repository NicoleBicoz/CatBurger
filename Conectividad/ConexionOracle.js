import React, { Component, useState, useEffect } from "react"
import { Text, View } from "react-native"
import { createServer } from "miragejs"

        if (window.server) {
            server.shutdown()
        }

        window.server = createServer({
            routes() {
                this.get("/api/usuarios", () => {
                    return {
                        users: [
                            { id: 1, mail: "jaramillo.nicole@gmail.com", pass: 202030 },
                            { id: 2, mail: "lerolero@hotmail.com", pass: 2021 },
                            { id: 3, mail: "Dunkirk", pass: 2030 },
                        ],
                    }
                })
            },
        })

export default class funcionesProcedimientos extends React.Component {

    componentDidMount = () =>{
        fetch("/api/usuarios")
                .then((response) => response.json())
                .then((json) => {
                    console.log("Wena " + json.users[0].mail)
                    wena = json.users[0].mail
                })
                .catch((error) => {
                    console.error("Wena 2" + error)
                });
    }
    
    render() {
        return(<Text>Hola</Text>)
    }

}


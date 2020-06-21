import React, { useState, useEffect } from "react"

import EngineForm from "./components/EngineForm"
import SearchForm from "./components/SearchForm"
import EngineItem from "./components/EngineItem"

import api from "./services/api"

import "./App.css"
import "./Sidebar.css"
import "./Main.css"
import "./global.css"

function App() {
    const [engines, setEngines] = useState([])
    const [byModel, setByModel] = useState([])
    const [isSearch, setIsSearch] = useState(false)

    useEffect(() => {
        async function loadEngines() {
            const response = await api.get("/engines")

            setEngines(response.data)
        }

        loadEngines()
    }, [])

    async function handleGetEngine(model) {
        const response = await api.get(`/search?model=${model}`)

        setByModel(response.data)
        setIsSearch(true)
    }

    async function handleAddEngine(data) {
        const response = await api.post("/engines", data)

        setEngines([...engines, response.data])
        setIsSearch(false)
    }

    return (
        <div id="app">
            <aside>
                <h2>Formulário de cadastro de motores</h2>
                <EngineForm onSubmit={handleAddEngine} />
                <SearchForm onSubmit={handleGetEngine} />
            </aside>
            <main>
                <ul>
                    {isSearch &&
                        byModel.map((engine) => (
                            <EngineItem key={engine._id} engine={engine} />
                        ))}
                </ul>
            </main>
        </div>
    )
}

export default App

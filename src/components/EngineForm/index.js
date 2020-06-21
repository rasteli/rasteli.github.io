import React, { useState } from "react"

export default function EngineForm({ onSubmit }) {
    const [model, setModel] = useState("")
    const [frequency, setFrequency] = useState("")
    const [rpm, setRPM] = useState("")
    const [power, setPower] = useState("")
    const [wire, setWire] = useState("")
    const [turns, setTurns] = useState("")
    const [pace, setPace] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        await onSubmit({
            model,
            frequency,
            rpm,
            power,
            wire,
            turns,
            pace,
        })

        setModel("")
        setFrequency("")
        setRPM("")
        setPower("")
        setWire("")
        setTurns("")
        setPace("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="model">Modelo</label>
                    <input
                        type="text"
                        id="model"
                        required
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="hz">Frequência</label>
                    <input
                        type="number"
                        id="hz"
                        required
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="rpm">RPM</label>
                    <input
                        type="number"
                        id="rpm"
                        required
                        value={rpm}
                        onChange={(e) => setRPM(e.target.value)}
                    />
                </div>
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="power">Potência CV</label>
                    <input
                        type="text"
                        id="power"
                        required
                        value={power}
                        onChange={(e) => setPower(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="wire">Fio AWG</label>
                    <input
                        type="number"
                        id="wire"
                        required
                        value={wire}
                        onChange={(e) => setWire(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="turns">Espiras</label>
                    <input
                        type="number"
                        id="turns"
                        required
                        value={turns}
                        onChange={(e) => setTurns(e.target.value)}
                    />
                </div>
            </div>

            <div className="input-block last-box">
                <label htmlFor="pace">Passo</label>
                <input
                    type="text"
                    id="pace"
                    required
                    value={pace}
                    onChange={(e) => setPace(e.target.value)}
                />
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

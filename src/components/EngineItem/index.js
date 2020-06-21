import React from "react"

import "./styles.css"

export default function EngineItem({ engine }) {
    return (
        <li>
            <header>
                <h3>Modelo: {engine.model}</h3>
            </header>
            <div id="engine-spec">Frequência: {engine.frequency} Hz</div>
            <div id="engine-spec">RPM: {engine.rpm}</div>
            <div id="engine-spec">Potência: {engine.power} CV</div>
            <div id="engine-spec">Fio AWG: {engine.wire}</div>
            <div id="engine-spec">Espiras: {engine.turns}</div>
            <div id="engine-spec">Passo: {engine.pace}</div>
        </li>
    )
}

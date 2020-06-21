import React, { useState } from "react"

export default function SearchHeader({ onSubmit }) {
    const [model, setModel] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        await onSubmit(model)

        setModel("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block last-box">
                <label htmlFor="search-box">Buscar motor por modelo</label>
                <input
                    type="text"
                    id="search-box"
                    required
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
            </div>
            <button type="submit">
                <span role="img" aria-label="magnifier">
                    &#128269;
                </span>
            </button>
        </form>
    )
}

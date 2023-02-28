import React from "react"
import { Route, Routes } from "react-router-dom"
import { CharacterDetails, CharactersList } from "./pages"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
    </>
  )
}

export default App

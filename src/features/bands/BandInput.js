import React, { useState } from "react";

function BandInput({ onBandSubmit }) {

  const [name, setName] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onBandSubmit(name)
    setName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">name</label>
      <input name="name" type="text" value={name} onChange={handleChange} />
      <button type="submit">add band</button>
    </form>
  );
}

export default BandInput;

import React from "react";
import { useDispatch, useSelector } from "react-redux"
import BandInput from "./BandInput"
import { bandAdded } from "./bandsSlice"

function BandsContainer() {

  const dispatch = useDispatch()
  const bands = useSelector(state => state.bands.entities)

  const onBandSubmit = (name) => {
    dispatch(bandAdded(name))
  }

  const displayBands = bands.map(band => {
    return (
      <li key={band}>{band}</li>
    )
  })

  return (
    <div>
      <BandInput onBandSubmit={onBandSubmit} />
      <ul>
        {displayBands}
      </ul>
    </div>
  )
}

export default BandsContainer;

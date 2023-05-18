import React from 'react'

const Poruka = ({poruka, promjenaVaznosti}) => {
  const oznaka = poruka.vazno 
  ? 'Oznaci kao nevazno' : 'oznaci kao vazno'

  return (
    <li>
      {poruka.sadrzaj}
      <button onClick={promjenaVaznosti}>{oznaka}</button>
    </li>
  )
}

export default Poruka
const Fortuna = ({ data }) => {

  return(
    <article className="fortuna">
      <img src="/galleta_fondo.png" alt="fondo" className="imgFortuna"/>
      <h1 className="text">{data.phrase}</h1>
    </article>
  )
}

export default Fortuna
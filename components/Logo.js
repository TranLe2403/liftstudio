function Img () {
  return (
    <div>
      <img src="/static/logo.svg" alt="logo" className="logo_img"/>
      <style jsx>
        {`
      .logo_img {
        background: black;
      }
      `}
      </style>
    </div>
  );
}

export default Img
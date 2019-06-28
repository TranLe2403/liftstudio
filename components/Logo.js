function Img () {
  return (
    <div>
      <img src="/static/logo.svg" alt="logo" className="logo_img"/>
      <style jsx>
        {`
      .logo_img {
        height: 60px;
        width: 60px;
        background: black;
      }
      `}
      </style>
    </div>
  );
}

export default Img
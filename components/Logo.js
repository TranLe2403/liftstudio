function Img () {
  return (
    <div>
      <img src="/static/logo.svg" alt="logo" className="logo_img"/>
      <style jsx>
        {`
      .logo_img {
        background: #444141;
        z-index: 1;
      }
      `}
      </style>
    </div>
  );
}

export default Img
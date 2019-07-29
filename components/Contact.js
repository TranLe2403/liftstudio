import React from 'react'


export default function Logo_Contact() {
  return (
    <div>
      <div className="group">
        <React.Fragment>
          <Logo src="/static/gmail.png" alt="gmail" name="Email:" />
          <Logo src="/static/Rectangle 8.2.png" alt="fb" name="Facebook:" />
          <Logo src="/static/office.png" alt="home" name="Office:" />
        </React.Fragment>
      </div>
      <style jsx>
        {`
            .group{
              margin: 100px;  
            }
            
        `}
      </style>
    </div>
  );
}

function Logo(props) {
  return (
    <div>
      <div className="Contact">
        <img src={props.src} alt={props.alt} className="logo" />
        <div className="contact_part">{props.name}</div>
      </div>
      <style jsx>
        {`
                    .logo{
                        width: 50px;
                        height: 50px;
                    }
                    .contact_part{
                        margin: 20px;
                        font-family: 'Montserrat';
                        letter-spacing: 3px;
                        font-size:40px;
                        height: 50px;
                    }
                    .Contact {
                        padding-left: 50px;
                        display: flex;
                        align-items: center;
                        color: white;

                    }
                    
                `}
      </style>
    </div>
  );
}
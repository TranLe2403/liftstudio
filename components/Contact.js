import React from 'react'


export default function Logo_Contact() {
  return (
    <div>
      <div className="group">
        <React.Fragment>
          <Logo src="https://cutt.ly/AwpgtSt" alt="gmail" name="Email:" />
          <Logo src="https://cutt.ly/IwpgIvr" alt="fb" name="Facebook:" />
          <Logo src="https://cutt.ly/7wpgSt4" alt="home" name="Office:" />
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
                        padding-left: 20px;
                        display: flex;
                        align-items: center;
                        color: white;
                        width: 50%

                    }
                    @media screen and (min-width: 768px) {
  /* For desktop: */
        .desc {
          font-size: 30px;
          letter-spacing: 2px;
          padding-top: 30px;

        }
        .game_title {
          font-size: 40px;
          letter-spacing: 3px;
          text-align: left;
        }
      }
                    
                `}
      </style>
    </div>
  );
}
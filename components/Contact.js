import React from 'react'


export default function Logo_Contact() {
  return (
    <React.Fragment>
      <div className="group">
          <Logo src="https://cutt.ly/AwpgtSt" alt="gmail" name="Email: abc@gmail.com" />
          <Logo src="https://cutt.ly/IwpgIvr" alt="fb" name="Facebook: LIFT" />
          <Logo src="https://cutt.ly/7wpgSt4" alt="home" name="Office: Leppavara" />
      </div>
      <style jsx>
        {`
            .group{
             width: 60%;
            }
            @media screen and (min-width: 768px) {
  /* For desktop: */
            .group{
              margin: 50px 50px 50px 20px; 
             
            }
      }
        `}
      </style>
    </React.Fragment>
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
                        width: 30px;
                        height: 30px;
                        align-self: center;
                        justify-self: center;
                    }
                    .contact_part{
                      margin: 25px 0;
                      font-family: 'Montserrat';
                      letter-spacing: 1.5px;
                      font-size: 17px;
                      display: flex;
                      justify-self: left;


                    }
                    .Contact {
                        display: grid;
                        color: white;
                        grid-template-columns: 20% 40%;    
                        grid-gap: 10px;
                        justify-content: center;  
                        width: 100%                 
                    }
                    @media screen and (min-width: 768px) {
  /* For desktop: */
                      .contact_part{
                        letter-spacing: 3px;
                        font-size: 27px;
                        height: 50px;
                        width: 100%;
                    }
                    .logo{
                        width: 50px;
                       height: 50px;
                    }
                    .Contact {
                        padding-left: 30px;
                    }
      }
                    
                `}
      </style>
    </div>
  );
}
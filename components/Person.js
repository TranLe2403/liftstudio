import React from "react";
import Logo from "../components/Logo_SN.js";

export default function Person(props) {
  return (
    <div>
      <div className="person_info">
        <div className="avatar_container">
          <img src={props.src} alt={props.alt} className="avatar" />
          <h2 className="name">{props.name}</h2>
        </div>

        <div className="logo_network">
          <a className="logo" href={props.fb} target="_blank" rel="noopener noreferrer">
            <Logo src="https://cutt.ly/IwpgIvr" alt="fb" />
          </a>

          <a className="logo" href={props.github} target="_blank" rel="noopener noreferrer">
            <Logo src="https://cutt.ly/nwpgU6A" alt="github" />
          </a>

          <a className="logo" href={props.gmail} target="_blank" rel="noopener noreferrer">
            <Logo src="https://cutt.ly/AwpgtSt" alt="gmail" />
          </a>
        </div>

        <p className="desc">{props.description}</p>
      </div>
      <style jsx>
        {`
          .avatar_container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            justify-self: center;
            align-self: center;
          }
          .person_info {
            width: 100%;
            height: 100%;
            background-color: ${props.background};
            display: flex;
          }
          .avatar {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          .name {
            font-family: "Orbitron";
            font-size: 14px;
            letter-spacing: 7px;
            color: #ffffff;
            text-align: center;
          }
          .desc {
            font-family: "Montserrat";
            font-size: 15px;
            width: 80%;
            color: #ffffff;
            letter-spacing: 3px;
            justify-self: center;
            align-self: center;
          }
          .logo_network {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            align-self: center;
            margin-left: 20px;
            margin-right: 20px;
          }
          @media screen and (min-width: 768px) {
            /* For desktop: */
            .avatar_container {
              width: 100%;
            }
            .person_info {
              width: 100%;
              max-width: 400px;
              height: 100%;
              background-color: ${props.background};
              display: flex;
              flex-direction: column;
              justify-content: center;
              flex: 1;
            }
            .avatar {
              width: 100%;
              height: 100%;
              max-width: 400px;
              border-radius: 50%;
            }
            .name {
              font-family: "Orbitron";
              font-size: 25px;
              letter-spacing: 7px;
              color: #ffffff;
              text-align: center;
            }
            .desc {
              font-family: "Montserrat";
              font-size: 20px;
              width: 80%;
              color: #ffffff;
              letter-spacing: 3px;
              align-self: start;
              margin-top: 0;
              margin-bottom: 0;
            }
            .logo_network {
              display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: auto;
              margin-right: auto;
              align-self: start;
            }
          }
        `}
      </style>
    </div>
  );
}

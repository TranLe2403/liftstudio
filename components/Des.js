import React from 'react'
export default function Des(props) {
    return (
      <div>
        <div className="game_desc">
          <h2 className="game_title">{props.game}</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <style jsx>
        {`
        
        .game_title {
          font-family: 'Orbitron';
          font-size: 40px;
        }
        .desc{
          font-family: 'Montserrat';
          font-size: 30px;
          width: 630px;
          height: 314px;
          padding-top: 30px;
        }
    
        `}
      </style>


        
      </div>
  
    );
  }
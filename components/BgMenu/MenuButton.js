  import {useState} from 'react'

  export default function MenuButton ({open, color, onClick}) {
    const [colorButton] = useState(color ? color : '#F1EBEB' )
    console.log('lhttt')
    return (
        <React.Fragment>
           <div className="button" onClick = {onClick}>
                <div className ="line top"></div>       
                <div className="line middle"/>
                <div className="line bottom"/>
            </div> 
           <style jsx>
            {`
                .button {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    padding: 4px;
                    }
                .line {
                    height: 2px;
                    width: 35px;
                    background-color: ${colorButton}; 
                    transition: all 0.2s ease;
                }
                .top {
                    transform: ${open ? 'rotate(45deg)' : 'none'};
                    transform-origin: top left;
                    margin-bottom: 10px;
                }
                .middle {
                    opacity: ${open ? 0 : 1};
                    transform: ${open ? 'translateX(-16)' : 'none'};
                }
                .bottom {
                    transform: ${open ? 'translateX(-1px) rotate(-45deg)' : 'none'};
                    transform-origin: top left;
                    margin-top: 10px;
                }
                `}
            </style>
        </React.Fragment>
    )
  }
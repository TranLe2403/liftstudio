import Layout from '../components/MyLayout.js'
import Img from '../components/Logo'
import Logo_Contact from '../components/Contact'



export default function Contact() {
    return (
        <Layout>
            <div className="title_bar">
                <h1 className="h">
                    <span className="title">CONTACT</span>
                </h1>
            </div>
            <div className="bg_layer2">
                <div className="contact">
                    <div>
                        <Logo_Contact />
                    </div>
                    <div className="logo_part">
                        <div className="des_logo">
                            <Img />
                        </div>
                        <h1 className="logo_name">LIFT STUDIO</h1>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                .contact::before{
                    content: " ";
                    background: linear-gradient(to right, rgba(4,4,4,0.85), rgba(4,4,4,0.85)), url("/static/contact-bg.png") ;
                    background-size: 100% 100%;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: -1;
                    
                }
            .contact {
                display: flex;
                justify-content: space-between;
                position: relative;
                z-index: 1;
            }
            .h {
          padding-top: 20px;
        }
          .title_bar {
            margin-top: 5px;
            height: 100px;
            background-color: #F9A825;
            text-align: center;

          }
          .title {
            margin: 10px;
            font-family: 'Orbitron';
            text-align: center;
            font-size: 60px;
            border-bottom: 3px solid black;
            letter-spacing: 5px;
            
          }
            .logo_name{
                font-family: 'Orbitron';
                font-size:50px;
                letter-spacing: 7px;
                color: white;
            }
            .des_logo {
                width: 280px;
                height: 280px;
                
            }
            .logo_part{
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: flex-end;
                margin: 100px;
                z-index: 1;
                
            }
        `}
            </style>
        </Layout>
    );
}

import Layout from '../components/MyLayout.js'
import Img from '../components/Logo'
import Logo_Contact from '../components/Contact'


export default function Contact() {
    return (
        <Layout>
            <div className="contact_page">
                <div className="title_bar">
                    <h1 className="title">CONTACT</h1>
                </div>
                <div className="bg_layer">
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
            </div>
            <style jsx>
                {`
                .bg_layer{
                    height: calc(100% - 100px);
                }
                .contact_page{
                    flex-grow: 1;
                }
                .contact::before{
                    content: " ";
                    background: linear-gradient(to right, rgba(4,4,4,0.85), rgba(4,4,4,0.85)), url("https://cutt.ly/LwpgFq9") ;
                    background-size: 100% 100%;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: -1;
                    
                }
            .contact {
                display: flex;
                justify-content: center;
                position: relative;
                z-index: 1;
                height: 100%;
                align-items: center;
            }
          .title_bar {
            height: 100px;
            background-color: #F9A825;
            text-align: center;

          }
          .title {
            margin-top: 20px;
            font-family: 'Orbitron';
            text-align: center;
            font-size: 60px;
            border-bottom: 3px solid #444141;
            letter-spacing: 5px;
            color: #444141;
            display: inline-block;

            
          }
            .logo_name{
                font-family: 'Orbitron';
                font-size:50px;
                letter-spacing: 7px;
                color: white;
                width:70%;
                text-align: center;
            }
            .des_logo {
                width: 280px;
                height: 280px;
                
            }
            .logo_part{
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: flex-start;
                padding: 100px 0px;
                z-index: 1;
                width: 50%;

                
            }
        `}
            </style>
        </Layout>
    );
}

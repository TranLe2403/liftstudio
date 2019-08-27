import Layout from '../components/MyLayout.js'
import Img from '../components/Logo'

/*  Responsive by JS
import WindowDimensionsProvider from '../components/WindowDimensionsProvider'
import   Content from '../components/Content'



function App (){
  return (
    <WindowDimensionsProvider>  
    <div className="App">
      <Content />
    </div>
  </WindowDimensionsProvider>
  );
}*/

export default function Blog() {
  return (
    <Layout>
      <div className="bg">
        <div className="home">
          <div className="des_logo">
            <Img />
          </div>
          <h1 className="title">LIFT STUDIO</h1>
          <p className="description">Ut enim ad minim veniam,laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <style jsx>
        {`
        .bg {
          flex-grow: 1;
        }




      .des_logo {
          width: 150px;
          height: 150px;
          padding-top: 60px;
          position: relative;
          padding-bottom: 10px;
        }
        .des_logo::after {
          z-index: 1;
          opacity: 1; 
          position: absolute;
        }
      .home::before {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          content: " ";
          background-image: linear-gradient(to right, rgba(4,4,4,0.85), rgba(4,4,4,0.85)),
                            url("https://cutt.ly/EwpgjBY"), 
                            url("https://cutt.ly/4wpgxGI"),
                            url("https://cutt.ly/2wpgcwu"),
                            url("https://cutt.ly/zwpgcDs");
          background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
          background-position: top left, top right, bottom left, bottom right;
          background-size: 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
        }
      .title {
          font-family: 'Orbitron';
          font-size:22px;
          letter-spacing: 2px;
          color: white;
        }
        .description {
          font-family: 'Montserrat';
          font-size: 14px;
          color: white;
          width: 240px;
          text-align: center;
          letter-spacing: 2px;
          text-align: justify;
        }
        .home {
          display: flex;
          align-items: center;
          flex-direction: column; 
          height: 700px;
          position: relative;
          z-index: 1;
          height: 100%;
          justify-content: center;
          
        }



        @media screen and (min-width: 768px) {
  /* For desktop: */
      
        .des_logo {
          width: 265px;
          height: 265px;
          padding-bottom: 0;
        }
        .title {
          font-size: 45px;
          letter-spacing: 5px;
        }
        .description{ 
          font-size: 20px;
          letter-spacing: 5px;
          width: 40%;
          }
          .home::before {
            background-position: 0 0, 33% 0, 66.5% 0, 100% 0;
            background-size: 100%, 25%, 25%, 25%, 25%;
          }
        
      }
        `}
      </style>

    </Layout>
  );
}

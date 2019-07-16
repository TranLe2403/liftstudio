import Layout from '../components/MyLayout.js'
import Img from '../components/Logo'



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
        .title {
          font-family: 'Orbitron';
          font-size:45px;
          letter-spacing: 5px;
          color: white;
        }
        .description {
          font-family: 'Montserrat';
          font-size: 20px;
          color: white;
        }
        .des_logo {
          width: 265px;
          height: 265px;
          padding-top: 80px;
        }

        .home {
          display: flex;
          align-items: center;
          flex-direction: column;
          background-color: #040404;
          opacity: 0.85; 
          min-height: 600px;
        }
        .bg {
          background-image: url("/static/home1.png"), 
                            url("/static/home2.png"),
                            url("/static/home3.png"),
                            url("/static/home4.png");
          background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
          background-position: 0 0, 34% 0, 68% 0, 100% 0;
        }
        `}
      </style>
    </Layout>
  );
}

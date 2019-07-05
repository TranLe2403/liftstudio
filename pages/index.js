import Layout from '../components/MyLayout.js'
import Img from '../components/Logo'



export default function Blog() {
  return (
    <Layout>
      <div className="home">
        <div className="des_logo">
          <Img />
        </div>
        <h1 className="title">LIFT STUDIO</h1>
        <p className="description">Ut enim ad minim veniam,laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <style jsx>
        {`
        .title {
          font-family: 'Orbitron';
          font-size:45px;
        }
        .description {
          font-family: 'Montserrat';
          font-size: 20px;
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
        }
        `}
      </style>
    </Layout>
  );
}

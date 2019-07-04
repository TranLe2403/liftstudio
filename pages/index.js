import Layout from '../components/MyLayout.js'
import Img from '../components/Logo'



export default function Blog() {
  return (
    <Layout>
      <Img />
      <h1 className="title">LIFT STUDIO</h1>
      <p className="description">Ut enim ad minim veniam,laboris nisi ut aliquip ex ea commodo consequat.</p>
      
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
        `}
      </style>
    </Layout>
  );
}

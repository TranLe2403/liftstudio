import Layout from '../components/MyLayout.js'
import Pic from '../components/Pic'
import Des from '../components/Des'

export default function Games() {
  return (
    <Layout>
      <div className="title_bar">
        <h1 className="title">OUR GAME</h1>
      </div>
      <div className="content_bar">
        <div className="background1_pic">

        </div>
        <div className="des">
          <Des game="GAME 1" />
          <Pic src="/static/sonic.png" alt="game1" />

        </div>
      </div>

      <div className="content_bar">
        <div className="background2_pic">

        </div>
        <div className="des">
          <Des game="GAME 2" />
          <Pic src="/static/mario.png" alt="game2" />

        </div>
      </div>

      <style jsx>
        {`
        .title_bar{
          height: 80px;
          background-color: #F9A825;

        }
        .title {
          margin: 10px;
          font-family: 'Orbitron';
          text-align: center;
          font-size: 60px;
          padding-top: 15px;
          text-decoration: underline;
        }
        .des {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 50px 100px;
          background-color: #E5E5E5
        }
        .content_bar {
          padding: 80px 60px;
        }
    
        `}
      </style>

    </Layout>
  );
}



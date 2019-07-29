import Layout from '../components/MyLayout.js'
import Pic from '../components/Pic'
import Des from '../components/Des'

export default function Games() {
  return (
    <Layout>
      <div className="title_bar">
        <h1 className="h">
        <span className="title">OUR GAMES</span>
        </h1>
      </div>
      <div className="content_bar1">
        <div className="des">
          <Des game="GAME 1"/>
          <Pic src="/static/sonic.png" alt="game1"/>

        </div>
      </div>

      <div className="content_bar2">
        <div className="des">
          <Pic src="/static/Mario.png" alt="game2"/>
          <Des game="GAME 2"/>
        </div>
      </div>

      <style jsx>
        {`
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
          .des {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px 100px;
            background-color: #E5E5E5;
          }
          .content_bar2 {
            padding: 80px 60px;
            background-image: url("/static/Mario-bg.png");
            background-size: 100% 100%;
          }
          .content_bar1 {
            padding: 80px 60px;
            background-image: url("/static/Rectangle 4.png");
            background-size: 100% 100%;
          }
           `
        }</style>

    </Layout>
  );
}

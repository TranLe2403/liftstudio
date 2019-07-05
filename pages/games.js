import Layout from '../components/MyLayout.js'
import MyImage1 from './img1'
export default function About() {
  return (
    <Layout>
      <div>
        <div className="title_bar">
        <h1 className="title">Our Games</h1>
        </div>
        <div className="g1">
          <div className="game_desc">
            <h2 className="game1">Game 1</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="game_pic">
            <MyImage1 />
          </div>
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
        }
        .game1 {
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
        .g1 {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 1320px;
          height: 643px;
        }
    
        `}
      </style>
    </Layout>
  )
}

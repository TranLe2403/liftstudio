import Layout from '../components/MyLayout.js'
import Person from '../components/Person.js'



export default function Team() {
	return (
		<Layout>
			<div>
				<div className="title_bar">
					<h1 className="title">OUR TEAM</h1>
				</div>
				<div className="bg">
				<div className="team">
					<Person name="TRAN LE" src="/static/TRANLE.jpg" alt="tranle" className="tranle"/>
					<Person name="VU DAO" src="/static/VUDAO.jpg" alt="vudao" className="vudao"/>
					<Person name="QUAN DAO" src="/static/QUANDAO.jpg" alt="quandao" className="quandao"/>
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
					text-decoration: underline;
					letter-spacing: 5px;
				  }
      			.team {
					display: flex;
					flex-direction: row;  
					align-items: center;
					background-color: #040404;
					opacity: 0.85; 
		  
				}
				.bg {
					background: linear-gradient(90deg, #C4C4C4 33%, #FDFDFD 33%, #FDFDFD 67%, #C4C4C4 66%);
				}
      			`}
      </style>
		</Layout>
	);
}

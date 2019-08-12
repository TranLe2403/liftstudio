import Layout from '../components/MyLayout.js'
import Person from '../components/Person.js'



export default function Team() {

	return (
		<Layout>
			<div>
				<div className="title_bar">
					<h1 className="h">
						<span className="title">OUR TEAM</span>
					</h1>
				</div>
				<div className="bg">
					<div className="team">
						<Person name="TRAN LE" src="/static/TRANLE.jpg" alt="tranle" fb="https://www.facebook.com/tran2403" github="https://github.com/TranLe2403" gmail="mailto:tratran.0324@gmail.com"/>
						<Person name="VU DAO" src="/static/VUDAO.jpg" alt="vudao" fb="https://www.facebook.com/anhvudao17" github="https://github.com/greengrass17" gmail="mailto:anhvudao17@gmail.com"/>
						<Person name="QUAN DAO" src="/static/QUANDAO.jpg" alt="quandao" fb="https://www.facebook.com/dendimaniac" github="https://github.com/dendimaniac" gmail="mailto:daq30899@gmail.com"/>

					</div>
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
            	border-bottom: 3px solid #444141;
            	letter-spacing: 5px;
				color: #444141;

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

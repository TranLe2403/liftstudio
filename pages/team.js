import Layout from '../components/MyLayout.js'
import Person from '../components/Person.js'
import fetch from 'isomorphic-unfetch';




export default function Team(props) {
	
	return (
		<Layout>
			<div className="team_page">
				<div className="title_bar">
					<h1 className="title">OUR TEAM</h1>
				</div>
				<div className="bg">
					<div className="team">
						
						{
							props.persons.map(person => {
								return (
									<Person key={person.name} name={person.name} src={person.avatar} fb={person.fb} github={person.github} gmail={person.gmail} />
								)
							})
						}
					</div>
									
				</div>
			</div>

			<style jsx>
				{`
			.team_page{
				flex-grow: 1;
			}

         	.title_bar {
            	height: 65px;
            	background-color: #F9A825;
            	text-align: center;
				flex-grow: 1;
          	}
          	.title {
	            margin-top: 20px;
    	        font-family: 'Orbitron';
        	    text-align: center;
            	font-size: 26px;
            	border-bottom: 3px solid #444141;
            	letter-spacing: 5px;
				color: #444141;
				display: inline-block;

	        }
      		.team {
				display: flex;
				flex-direction: column;  
				align-items: center;
				background-color: #040404;
				opacity: 0.85; 	
				height: 100%;
				  
			}
			.bg {
				background: linear-gradient(180deg, #C4C4C4 33%, #FDFDFD 33%, #FDFDFD 67%, #C4C4C4 66%);
				height: calc(100% - 100px);
			}
			@media screen and (min-width: 768px) {
  /* For desktop: */
  			.title_bar {
            	height: 100px;
        	}
        	.title {
        		font-size: 60px;
        	}
			.team {
				flex-direction: row;
			}
			.bg {
				background: linear-gradient(90deg, #C4C4C4 33%, #FDFDFD 33%, #FDFDFD 67%, #C4C4C4 66%);
			}
      }
		
      			`}
			</style>
		</Layout>
	);
}
Team.getInitialProps = async function() {
	const res = await fetch('http://localhost:8000/team');
	const data = await res.json();
  
	console.log(`Show data fetched. Count: ${data.length}`);
  
	return {
	  persons: data
	};
  };


import Layout from "../components/MyLayout.js";
import Person from "../components/Person.js";
import { attributes } from "../content/team.md";

export default function Team(props) {
  let { title, persons } = attributes;
  return (
    <Layout>
      <div className="team_page">
        <div className="title_bar">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bg">
          <div className="team">
            {persons.map(person => {
              return (
                <Person
                  key={person.name}
                  name={person.name}
                  src={person.avatar}
                  fb={person.fb}
                  github={person.github}
                  gmail={person.gmail}
                  description={person.description}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .team_page {
            flex-grow: 1;
          }

          .title_bar {
            height: 65px;
            background-color: #f9a825;
            text-align: center;
            flex-grow: 1;
          }
          .title {
            margin-top: 20px;
            font-family: "Orbitron";
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
            align-items: stretch;
            justify-content: space-around;
            background-color: #040404;
            opacity: 0.85;
            height: 100%;
            flex-wrap: wrap;
            padding: 20px;
            box-sizing: border-box;
          }
          .bg {
            background-color: #c4c4c4;
            opacity: 0.85;
            height: 100%;
          }
          @media screen and (min-width: 768px) {
            /* For desktop: */
            .title_bar {
              height: 100px;
            }
            .title {
              font-size: 60px;
              margin-top: 0px;
            }
            .team {
              flex-direction: row;
              height: 100%;
              align-items: stretch;
              justify-content: space-around;
            }
            .bg {
              height: 100%;
            }
          }
        `}
      </style>
    </Layout>
  );
}

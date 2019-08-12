import Img from './Logo'
import Link from './Link'

export default function Header() {
  
  const links = [
      {href: "/", name: "HOME"},
      {href: "/games", name: "GAMES"},
      {href: "/team", name: "TEAM"},
      {href: "/contact", name: "CONTACT"}
  ];

  return (
    <div>
      <div className="header">
        <div className="nav_logo">
          <Img />
        </div>
        <div className="menu">


          {
            links.map(link => {
              return (
              <Link activeClassName="active" href={link.href} key={link.name}>
                  <a className="link">{link.name}</a>
              </Link>
            )})
          }
          
        </div>
      </div>
      <style jsx>{`
      .active{
        border-bottom: 5px solid #444141;
 
      }
      .nav_logo {
        padding: 10px 30px;
        width: 60px;
        height: 60px;
      }
      .menu {  
        padding-right: 30px;
        font-weight: 1000;
          }
      .link {
        color: #444141;
        margin-right: 20px;
        font-family: Orbitron;
        font-size:25px;
        text-decoration: none;
        letter-spacing: 3px;
        padding: 10px;

      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F9A825;
        height: 80px;
      }
    `}</style>
    </div>

  )
}


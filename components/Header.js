import Img from './Logo'
import Link from './Link'


export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="nav_logo">
          <Img />
        </div>

        <div className="menu">
          <Link activeClassName='active' href="/">
            <a className="link">HOME</a>
          </Link>
          <Link activeClassName='active' href="/games">
            <a className="link">GAMES</a>
          </Link>
          <Link activeClassName='active' href="/team">
            <a className="link">TEAM</a>
          </Link>
          <Link activeClassName='active' href="/contact">
            <a className="link">CONTACT</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
      .active{
        border-bottom: 4px solid black;
        height: 40px;
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
        padding: 0 10px;

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

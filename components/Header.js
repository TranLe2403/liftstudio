import Link from 'next/link'
import Img from './Logo'


export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="nav_logo">
          <Img />
        </div>

        <div className="menu">
          <Link href="/">
            <a className="link">HOME</a>
          </Link>
          <Link href="/games">
            <a className="link">GAMES</a>
          </Link>
          <Link href="/team">
            <a className="link">TEAM</a>
          </Link>
          <Link href="/contact">
            <a className="link">CONTACT</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
      .nav_logo {
        padding: 10px 30px;
        width: 60px;
        height: 60px;
      }
      .menu {  
        padding-right: 30px;
          }

      .link {
        color: #444141;
        margin-right: 20px;
        font-family: Orbitron;
        font-size:25px;
        text-decoration: none;
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

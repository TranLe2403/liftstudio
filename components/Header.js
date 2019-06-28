import Link from 'next/link'
import Img from './Logo'

const linkStyle = {
  marginRight: 15
  
}

export default function Header() {
  return (
    <div>
      <Img />
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/games">
        <a style={linkStyle}>Games</a>
      </Link>
      <Link href="/team">
        <a style={linkStyle}>Team</a>
      </Link>
      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
      </Link>
      <style jsx>{`
         a {
          color: red;
          font-family: Orbitron;
          font-size:25px;
        }
      `}</style>

    </div>
  )
}

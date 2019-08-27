import Header from './Header'



export default function Layout(props) {
  return (
    <div>
    <div className="nav">
      <Header />
      {props.children}
    </div>
    <style jsx>{`
      .nav{
        height: 100vh;
        display: flex;
        flex-direction: column;


      }  
  `}
  </style>
  </div>
  )
}

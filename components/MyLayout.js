import Header from './Header'

const layoutStyle = {
  padding: 20,
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}

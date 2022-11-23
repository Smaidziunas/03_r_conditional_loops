import './NavLink.css'

function NavLink(props) {
  return (
  <a className="NavLink" href={props.to}>{props.children}</a>
  )
}

export default NavLink
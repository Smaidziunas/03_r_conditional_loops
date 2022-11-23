import Icon from '../UI/icon/Icon'
import './NavLink.css'


function NavLink(props) {
  return (
  <a className={`navLink ${props.isCurrent ? 'current' : ''}`} href={props.to}><Icon>{props.icon}</Icon>{props.children}
  </a>
  )
}

export default NavLink
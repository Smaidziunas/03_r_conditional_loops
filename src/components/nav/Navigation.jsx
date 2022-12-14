import './Navigation.css';
import NavLink from './NavLink';


// { id: 1, to: '#home', text: 'Welcome', active: false, icon: 'home' }
// susikurti nauja komponenta

  function Navigation(props){
    return ( 
    <header className="mainHeader">
      <nav className='container'>
        {props.data.map((obj) => {
          return (
          <NavLink key={obj.id} to={obj.to} icon={obj.icon} isCurrent={obj.active}>{obj.text}</NavLink>
          )
          })}
      
      </nav>
      </header>
    )
  }

  export default Navigation



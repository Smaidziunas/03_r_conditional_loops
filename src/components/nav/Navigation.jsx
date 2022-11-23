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
          <NavLink to={obj.to}>{obj.text}</NavLink>
          )
          })}
      
      </nav>
      </header>
    )
  }

  export default Navigation



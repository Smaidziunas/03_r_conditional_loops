function Icon(props) {
  let iconClassStr = 'fa fa-';
  iconClassStr += props.children;
// jeigu props.size = #lg, tada pridedam 'fa-3x'
  // iconClassStr += props.size === 'lg' ? ' fa-3x' : '';


  let iconClasStr3x = iconClassStr + ' fa-3x';
  

// patikrinimas ar komponentas gavo klase tarp pradzios ir pabaigos tagu
  if(!props.children) {
    return <i className='fa fa-times-circle fa-3x' aria-hidden="true"></i>
  }



  return <i className= {props.size === 'lg' ? iconClasStr3x : iconClassStr}  aria-hidden="true"></i>
}

export default Icon;
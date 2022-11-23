function Condition() {

  const userIsAdmin = true;
  const isUserLoggedIn = false;


  return <div>
    {userIsAdmin ? <h2>Main Title Admin</h2> : <h2>Secondary title</h2>}
    {userIsAdmin && <h3>Subtitile</h3>} 
    {isUserLoggedIn ? <button>Login</button> : <button>Logout</button>}
  </div>
}


export default Condition;
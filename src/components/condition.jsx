
const user1 = {
  name: 'James Bunt',
  age: 40,
  gender: 'male',
  town: 'Boston',
};


function Condition() {

  const userIsAdmin = true;
  const isUserLoggedIn = false;

  const gendr = user1.gender === 'male' ? 'Man' : 'Woman';
  const condAge = user1.age >= 18 ? 'adult' : 'teenager'
  const continent = user1.town === 'London' ? 'Europe' : 'USA'

  return <div>
    {userIsAdmin ? <h2>Main Title Admin</h2> : <h2>Secondary title</h2>}
    <h2>{userIsAdmin ? 'Main Title Admin' : 'Secondary title'}</h2>

    {userIsAdmin && <h3>Subtitile</h3>} 
    {isUserLoggedIn ? <button>Login</button> : <button>Logout</button>}

    {/* <h3>{`${gendr} ${user1.name} is ${condAge} and is from ${continent}.`} </h3> */}
    <h3>{gendr} {user1.name} is {condAge} and is from {continent}. </h3>

  </div>
}


export default Condition;
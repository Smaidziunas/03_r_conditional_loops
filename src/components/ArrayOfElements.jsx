// const colors = [
//   { id: 1, value: 'red' }, // cObj
//   { id: 2, value: 'green' },
//   { id: 3, value: 'blue' },
//   { id: 4, value: 'yellow' },
// ];

function ArrayOfElements(props) {
  const h2Styles = {
    fontSize: '3rem',
    color: 'tomato',
  };
  return (
    <div>
      <h2 style={h2Styles}>ArrayOfElements</h2>
      <ul>
        {props.data.map((cObj) => {
          // validation computation
          return (
            <li key={cObj.id} style={{ color: cObj.value }}>
              {cObj.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArrayOfElements;



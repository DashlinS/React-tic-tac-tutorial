function Square({ value, onSquareClick }) { //destructuring 
  // function handleClick(){
  //   console.log('clicked')
  // }
  // const [value, setValue] = useState(null);

  // const handleClick = () => {
  //   setValue('X');
  // }

  return <button className="square" onClick={onSquareClick}>
  {value}
  </button>;
}

export default Square;
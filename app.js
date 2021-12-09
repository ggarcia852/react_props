import "./styles.css";


function upperCase(str) {
  return str.toUpperCase()
}

const imageLink = 'https://i.pravatar.cc/300'
const h1Class = 'header'
const big = 'big'

const Button = (props) => (
  <button className={`button ${props.isLight ? 'light' : 'solid'}`}>{props.text}</button>
)

function Header(props) {
  return (
    <div>
      <h1 className={`anotherClass ${h1Class} ${big}`}>
        Hello {props.name ? upperCase(props.name) : 'no name'}, {props.age}
      </h1>
      {!props.showImage ? null : <img src={imageLink} alt='placeholder' />}
      {props.showImage && <img src={imageLink} alt='placeholder' />}
      <Button text={props.buttonText} />
    </div>
  )
}


export default function App() {
  const name = 'George'
  return (
    <div className="App">
      <Button text={'log in'} isLight={true} />
      <Button text={'log out'} isLight={false} />
      <Button text={'log in'} isLight />
      <Button text={'log out'}  />
      <Header showImage={false} name={name} age={32} buttonText='Sign Up'/>
      <Header showImage buttonText='Log Out' />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

import './App.css';
import TextStyling from './Components/textStyling';
import './Components/StylesheetOne.css'

const stylesheet = {
  fontSize: "25px",
  textAlign: "center",
  margin: "40px",
  border: "1px solid green",
  color: "red"
};

export default function App() {
  return (
    <div className="App">
      <TextStyling stylesheet={stylesheet} />
      <div className="StyledText">
      <h1>Boo</h1>
    </div>
    </div>

  );
}


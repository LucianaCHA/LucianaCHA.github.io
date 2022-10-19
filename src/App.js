import './App.css';

function App() {

  const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

document.documentElement.style.setProperty('--main-bg-color', randomColor);
  return (
    <div className="App" >
      <div id="quote-box">
        <div id="text">
          <p>Random Quote</p>
        </div>        
      </div>
    </div>
  );
}

export default App;

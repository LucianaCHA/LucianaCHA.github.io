import './App.css';

function App() {

  const newQuote = () => {

    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    const color = "#"+((1<<6)*Math.random()|0).toString(16); 

    
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
    document.documentElement.style.setProperty('--main-color', color);
  }

  

  return (
    <div className="App" >
      <div id="quote-box">
        <div id="text">
          <p>Random Quote</p>
        </div>
        <div id="author">
          <p>Random Author</p>
        </div>
        <div id="new-quote">
          <button onClick= {newQuote} color="main" className='new-quote'> New quote</button>
        </div> 
        <div id="tweet">
          <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet quote</a>
        </div>

      </div>
    </div>
  );
}

export default App;

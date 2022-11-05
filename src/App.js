import './App.css';
import { quotesMock } from './quotesMock';
function App() {

const newQuote = () => {

    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    const color = "#"+((1<<6)*Math.random()|0).toString(16); 
    
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
    document.documentElement.style.setProperty('--main-color', color);
    
  const randomQuote = quotesMock[Math.floor(Math.random() * quotesMock.length)];

  let text = randomQuote.text;
  let author = randomQuote.author;
  console.log(randomQuote);
  document.getElementById('text').innerHTML = text;
  
  document.getElementById('author').innerHTML = author;
}

  return (
   <div className="App" >
      <div id="quote-box">
        <div id="text">
          <p>The first step to getting the things you want out of life is this: decide what you want.</p>
        </div>
        <div id="author">
          <p>Ben Stein</p>
        </div>
        <div id="new-quote">
          <button onClick= {newQuote} color="main" className='new-quote'> New quote</button>
        <div id="tweet">
          <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet quote</a>
        </div>
        </div> 

      </div>
    </div>
  );
}

export default App;

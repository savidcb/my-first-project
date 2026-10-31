import { useState, useEffect } from'react';
import './App.css';
import QuoteBox from './QuoteBox';

function app() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState('Çlick To Downloud');
  const [author, set author] = useState('');

  const fetchQuo = async () => {
    setQuote('Downloading...');
    setauthor('');
    try  {
      const respone = await fetch("https://dummyjson.com/quotes/random");
      const data = await respone.json();
      setQuote(`${data.author}`);      
    } catch (error) {
      setQuote(There’s a problem downloading!)
  }
};

useEffect(() => {
  fetch();
}, []);

return (
  <div className="card">
    <h1>Hello! Click to Count</h1>
    <p>You have Click {Count} time</p>

    <div className="button-groub">
      <button onClick={() => setCount(count +1)}>Click Me</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
    <hr style={{ margin: '30px 0', borderColor: '#38bdf8' }} />
    <QuoteBox 
        quote={quote} 
        author={author} 
        onRefresh={fetchQuote} 
    />
  </div>
 );
}
export default App;




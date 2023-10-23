import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button
          className="btn btn-primary"
          onClick={() => setCount(value => value + 1)}>
          Clicked {count} times
        </button>
      </div>
    </>
  );
}

export default App;

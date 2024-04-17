import './App.css'

function App() {
 let time = new Date()
  return (
    <div className='clock'>
      <h3>Bharat Clock</h3>
      <p className='lead'>This is the clock that shows time in bharat at all times</p>
      <p className='lead'>This is the curent time:{time.toLocaleDateString()}-{time.toLocaleTimeString()} </p>
    </div>
  )
};

export default App

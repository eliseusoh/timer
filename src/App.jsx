import Timer from "./Timer"
import './App.css';

function App() {

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '700',
        color: '#9f7aea',
        marginBottom: '24px',
        fontFamily: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`
      }}>
        Tik Tok Timer </h2>
      <Timer />
    </div>
  )
}

export default App;

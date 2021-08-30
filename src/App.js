import './App.css';
import GlobalStyles from './components/GlobalStyles';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <>
    <div className="App">
      <FAQ question="Where would you use Styled Components?" answer="Everywhere!" />
    </div>
    <GlobalStyles />
    </>
  );
}

export default App;

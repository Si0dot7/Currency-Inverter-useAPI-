import money from './Image/money.png'
import CurrencyComponent from './Components/CurrencyComponent';
import './App.css'

function App() {
  return (
    <div className = 'App'>
      <img src = {money} alt = 'logo' className = 'money'/>
      <h1>แอพแปลงสกุลเงิน (API)</h1>
      <div className = 'container'>
        <CurrencyComponent/>
        <div className = 'equal'> = </div>
        <CurrencyComponent/>
      </div>
    </div>
  );
}

export default App;

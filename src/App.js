import './App.scss';
import Bill from './components/Bill';
import BillInput from './components/BillInput';
import PeopleInput from './components/PeopleInput';
import TipSelector from './components/TipSelector';

function App() {
  return (

    <div className="page-wrapper">
      <header className="header">
        <h1 className="heading-primary">
          SPLI
          <span className="line-breaker">TTER</span>
        </h1>
      </header>

      <main className="main-content">
        <div className="content-wrapper">

          <div className="inputs"> <BillInput />
            <TipSelector />
            <PeopleInput /></div>
          <div className="outputs">
            <Bill />
          </div>
        </div>

      </main>
    </div>

  );
}

export default App;

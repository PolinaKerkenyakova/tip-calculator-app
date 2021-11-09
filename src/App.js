import './App.scss';
import BillInput from './components/BillInput';
import PeopleInput from './components/PeopleInput';

function App() {
  return (

    <div className="page-wrapper">
      <header>
        <h1 className="heading-primary">
          SPLI
          <span className="line-breaker">TTER</span>
        </h1>
      </header>

      <main className="main-content">
        <div className="content-wrapper">

          <BillInput />
          <PeopleInput />
        </div>

      </main>
    </div>

  );
}

export default App;

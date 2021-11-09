import './App.scss';
import BillInput from './components/BillInput';

function App() {
  return (
    <div className="page-wrapper">
      <div className="content-wrapper">

        <header>
          <h1 className="heading-primary">
            SPLI
            <span className="line-breaker">TTER</span>
          </h1>
        </header>

        <main className="main-content">
          <BillInput />
        </main>

      </div>
    </div>

  );
}

export default App;

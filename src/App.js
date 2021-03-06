import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import Header from './components/Header/Header';
import EmailInput from './components/EmailInput/EmailInput';
import SubmitButton from './components/SubmitButton/SubmitButton';


function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <EmailInput />
        <SubmitButton />
      </Layout>

    </div>
  );
}

export default App;

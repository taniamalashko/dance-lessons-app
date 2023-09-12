import './App.css';
import Header from './components/header/Header';
import { MainWrapper, Main} from './styled';
import { Lessons } from './pages/lessons';
import Footer from './components/footer/footer';

function App() {
  return (
    <MainWrapper>
      <div className='container'>
        <Header />
        <Main className='main'>
          <Lessons />
        </Main>
        <Footer/>
      </div>
    </MainWrapper>
  );
}

export default App;

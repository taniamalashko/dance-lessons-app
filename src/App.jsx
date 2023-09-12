import './App.css';
import Header from './components/header/Header';
import { MainWrapper, Main, Container} from './styled';
import { Lessons } from './pages/lessons';
import Footer from './components/footer/footer';

function App() {
  return (
    <MainWrapper>
      <Container>
        <Header />
        <Main>
          <Lessons />
        </Main>
        <Footer/>
      </Container>
    </MainWrapper>
  );
}

export default App;

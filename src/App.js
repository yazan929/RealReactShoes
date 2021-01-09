import logo from './logo.svg';
import Footer from './Footer';
import Header from './Header';
import BreakPart from './Break';
import ShoeList from './ShoeList';
import ShoeInfoComponent from './ShoeInfoComponent';




function App() {

  return (    
      <div className="App">
        <Header />
        
        <BreakPart />
        
        <ShoeInfoComponent/>

        <ShoeList />

        <Footer />
      </div>    
  );
}

export default App;



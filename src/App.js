import logo from './logo.svg';
import Navbar from './components/navbar'
import Grid from './components/grid'
import Footer from './components/footer'
import './App.css';
import data from './data' 

function App() {
  const cards = data.map(item =>{
    return(
      <Grid
         img = {item.img}
         location = {item.location}
         link = {item.link}
         name = {item.name}
         date = {item.date}
         vlog = {item.vlog}
      />
    )
  })
  return (
    <div className="App">
     <Navbar/>
     {cards}
     <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SingelCard from './components/Navigation/SingleCard/SingleCard';
import { Grid } from '@mui/material';
import Footer from './components/Navigation/Footer/Footer';

const mockData = [{
  id: 1, 
  name: 'Home Alone', 
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFZ_bQ_Ho_FjPt1AW1ytiuIA1BCgfmslFKw&usqp=CAU", 
  time: '1hr: 50mins'},
 {id: 2,
  name: 'Black Adam', 
  image:"https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/eaa9a004-631a-4e83-a8e0-7c2577c224a3/1200x630",
  time: '2hr: 10mins'},
  {id: 3, 
    name: 'Back to the Future',
   image:"https://static1.squarespace.com/static/5c62c09c4d546e27dc1016c7/t/653ffe22872886679b3f9c6e/1698692642521/ff68e65f5d5ee5dd98fc71c1218a71e3e1008668880b6430d4e912ebf5bda412._UR1920%2C1080_.jpg?format=1500w", 
   time: '2hr: 50mins'}, 
  {id: 4, 
    name: 'Avengers', 
    image:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    time: '2hr:30mins'}];

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Grid container spacing={2}sx={{padding:'15px'}}>
     {mockData.map(({id,image,time,name})=>(
      <Grid item xs={3} key={id}>
     <SingelCard
     id={id}
     image={image}
     time={time}
     name={name}
     /></Grid>
     ))}
     </Grid>
    <Footer/>
    </div>
  );
}

export default App;

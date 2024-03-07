import { useEffect, useState  } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getRuntime } from './Store/homeSlice';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import SearchResult from './pages/SearchResult';
import PageNotFound from './pages/PageNotFound';


function App() {
  const dispatch=useDispatch();
  const {url}=useSelector((state=>state.home))
  useEffect(()=>{
    fetchApiConfig();
  },[]);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
        console.log(res);

        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
            
        };

        dispatch(getApiConfiguration(url));
    });
};

// const genresCall = async () => {
//   let time =fetchDataFromApi();
//   let endPoints = ["tv", "movie"];
//   let allGenres = {};

 
//   const data = await Promise.all(promises);
//   console.log(data);
//   data.map(({ genres }) => {
//       return genres.map((item) => (allGenres[item.id] = item));
//   });

//   dispatch(getRuntime(allGenres));
// };


  
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'; 
import './index.css';
// import { movies } from "./Data/data";
// import Rating from "./Components/Filter/Rating";
import NavBar from "./Components/NavBar/NavBar";
import Movies from "./Components/Movies/Movies";
import SideBar from './Components/Filter/SideBar';
import ToWatch from './Components/ToWatch/ToWatch';

function App() {
	const [allMovies, setAllMovies] = useState(false);
	const [showSideBar, setShowSideBar] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [showToWatch, setShowToWatch] = useState(false);
	
	const sortByRating = (array, string) => {
		setShowSideBar(false);
		setToggle(!toggle);
		
		return array.sort((a, b) => {
			return b[string] - a[string];
		});
	}
	
	
	// const genres = Rating(movies, "genres");
	// const actors = Rating(movies, "actors");
	
	// const topGenres = top(genres, 10);
	// const topActors = top(actors, 10);


	return (
		<>
			<NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} setShowToWatch={setShowToWatch} showToWatch={showToWatch}/>
			{
				showSideBar &&
				<SideBar setAllMovies={setAllMovies} setShowSideBar={setShowSideBar}/>
			}
			<Movies allMovies={allMovies} sortByRating={sortByRating} setShowToWatch={setShowToWatch}/>
			{
				showToWatch &&
				<ToWatch setShowToWatch={setShowToWatch} showToWatch={showToWatch}/>
			}
		</>
	);
}

export default App;

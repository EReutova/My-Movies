import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import { getSelectedGenre } from "../../Redux/genresSlice";
import { movies } from "../../Data/data";
import Movie from "./Movie";

const Movies = ({allMovies, setAllMovies, sortByRating, setShowToWatch}) => {
    const selectedGenre = useSelector(getSelectedGenre);
    const [onTop, setOnTop] = useState(false);

    useEffect(() => {
        setAllMovies(true);
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 500) {
                setOnTop(true);
            } else {
                setOnTop(false);
            }
        });
    }, []);

    const handleOnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });   
    }

    return(
        <Wrapper>
            <Div>
                <Button onClick={() => {sortByRating(movies, "IMDb")}}>Сортировать по рейтингу IMDb</Button>
                <Button onClick={() => {sortByRating(movies, "year")}}>Сортировать по дате выхода</Button>
            </Div>
            {
                movies
                .filter((movie) => {
                    if(allMovies === true) return true; 
                    return movie.genres.includes(selectedGenre);
                })
                .map(movie => <Movie key={movie.id} movie={movie} setShowToWatch={setShowToWatch}/>)
            }
            {
                onTop &&
                <Btn onClick={handleOnTop}><BsFillArrowUpCircleFill /></Btn>
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin-top: 80px;
`;
const Div = styled.div`
    display: flex;
    justify-content: center;
`;
const Button = styled.button`
    background: transparent;
    border: none;
    font-size: 20px;
    padding: 5px 20px;
    &:hover{
        color: grey;
        cursor: pointer;
    }
    &:focus{
        color: grey;
    }
`;
const Btn = styled.button`
    position: fixed;
    right: 20px;
    top: 80vh;
    font-size: 40px;
    opacity: 0.8;
    border: none;
    background: transparent;
    &:hover{
        cursor: pointer;
        color: gray;
    }
`;
export default Movies;
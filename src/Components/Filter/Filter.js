import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { getSelectedGenre, filterGenre } from "../../Redux/genresSlice";

const Filter = ({genre, setAllMovies, setShowSideBar}) => {
    const dispatch = useDispatch();
    const selectedGenre = useSelector(getSelectedGenre);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [selectedGenre]);

    const setCategory = () => {
        dispatch(filterGenre(genre));
        setAllMovies(false);
        setShowSideBar(false);
    }
    
    return(
        <Wrapper>
            {
                selectedGenre !== genre
                ? <Par key={genre} onClick={setCategory}>{genre}</Par>
                : <SelectedPar key={genre} onClick={setCategory}>{genre}</SelectedPar>
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    color: white;
`;
const Par = styled.p`
    margin: 0;
    padding: 5px 15px;
    font-size: 17px;
    &:hover{
        cursor: pointer;
        background-color: grey;
    }
`;
const SelectedPar = styled(Par)`
    background-color: grey;
`;
export default Filter;
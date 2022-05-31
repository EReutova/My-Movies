import styled from "styled-components";

import { movies } from "../../Data/data";
import Filter from "./Filter";
import Rating from "./Rating";

const SideBar = ({setAllMovies, setShowSideBar}) => {
    const genres = Rating(movies, "genres");

    const setAll = () => {
        setAllMovies(true);
        setShowSideBar(false);
    }

    return(
        <Wrapper>
            <Head onClick={setAll}>Все жанры</Head>
            {
                genres.map(genre => <Filter genre={genre} key={genre} setAllMovies={setAllMovies} setShowSideBar={setShowSideBar}/>)
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    width: 300px;
    position: fixed;
    top: 10vh;
    height: 90vh;
    overflow-y: auto;

`;
const Head = styled.h3`
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    padding: 5px 20px;
    &:hover{
        color: grey;
    }
`;
export default SideBar;
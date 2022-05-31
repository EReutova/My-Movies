import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {BsFillBookmarkFill} from 'react-icons/bs';
import {MdSmartDisplay} from 'react-icons/md';

import { addItemToWatch, getToWatchItems } from "../../Redux/toWatchSlice";

const Movie = ({movie, setShowToWatch}) => {
    const dispatch = useDispatch();
    const toWatchItems = useSelector(getToWatchItems);

    const handleAddToWatch = () => {
        let match = toWatchItems.find((item) => {
            return item.movieID === movie.id
        })
        if (!match) {
            dispatch(addItemToWatch({movie}));
            setShowToWatch(false);
        }
        /////////TODO//////////////////
        else {
            window.alert("movie is already in your to watch list")
        }
    }
    
    const handleOpenTrailer = () => {
        window.open(
            `${movie.video}`,
            '_blank'
        );
    }

    return (
        <Main key={movie.id}>
            <Wrapper>
                <Img src={`./images/${movie.label}.jpeg`} alt={movie.label}/>
                <Container>
                    <Header>{movie.name}</Header>
                    <SubHeader>{movie.originalName}</SubHeader>
                    <Par>IMDb: {movie.IMDb}</Par>
                    <Div>
                        <About>
                            <Button onClick={handleAddToWatch}><BsFillBookmarkFill/> Буду смотреть</Button>
                            <SubHeaderBlack>О фильме</SubHeaderBlack>
                            <table>
                                <tbody>
                                    <tr>
                                        <Th>Год производства</Th>
                                        <td>{movie.year}</td>
                                    </tr>
                                    <tr>
                                        <Th>Страна</Th>
                                        <td>{movie.country}</td>
                                    </tr>
                                    <tr>
                                        <Th>Жанр</Th>
                                        <td>{
                                            movie.genres.map((genre) => {
                                                return (
                                                    <span key={Math.floor(Math.random() * 100000000000000)}>{genre} </span>
                                                )
                                            })
                                        }</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Btn onClick={handleOpenTrailer}><MdSmartDisplay/></Btn>
                        </About>
                        <Actors>
                            <SubHeaderBlack>В главных ролях</SubHeaderBlack>
                            {
                                movie.actors.map((actor) => {
                                    return (
                                        <div key={actor}>{actor}</div>
                                    )
                                })
                            }
                        </Actors>
                    </Div>
                </Container>
            </Wrapper>
            
            {
                typeof(movie.about) === "string" &&
                <Par>{movie.about}</Par>
            }
            {
                typeof(movie.about) === "object" &&
                movie.about.map((par) => {
                    return <Par key={Math.floor(Math.random() * 100000000)}>{par}</Par>
                })
            }
        </Main>
    )
}
const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    background-color: lightgray;
    &:hover{
        box-shadow: 0 0 10px grey, 0 0 15px grey, 0 0 20px grey;

    }
`;
const Wrapper = styled.div`
    display: flex;
    /* height: 400px; */
`;
const Img = styled.img`
    margin-right: 20px;
    width: 300px;
`;
const Container = styled.div`
    width: 100%;
`;
const Header = styled.h2`
    margin: 0;
    margin-right: 20px;
`;
const SubHeader = styled.h3`
    margin: 10px 0;
    color: grey;
`;
const SubHeaderBlack = styled(SubHeader)`
    color: black;
`;
const Par = styled.p``;
const Button = styled.button`
    padding: 10px 20px;
    background: transparent;
    border: 1px solid black;
    border-radius: 20px;
    margin-right: 10px;
    height: 40px;
    font-size: 15px;
    &:hover{
        color: grey;
        cursor: pointer;
    }
`;
const Btn = styled(Button)`
    font-size: 50px;
    border: none;
    margin-left: -20px;
    &:hover{
        color: red;
    }
`;

const Th = styled.th`
    text-align: left;
    padding-right: 5px;
`;
const Div = styled.div`
    display: flex;
    
`;
const About = styled.div`
    width: 80%;
`;
const Actors = styled.div`
    width: 20%;
    align-self: flex-end;
`;
export default Movie;
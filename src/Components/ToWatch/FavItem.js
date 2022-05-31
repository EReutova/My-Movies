import styled from "styled-components";

import {BiTrashAlt} from "react-icons/bi";
import {MdSmartDisplay} from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItemFromToWatch } from "../../Redux/toWatchSlice";
import { movies } from "../../Data/data";

const FavItem = ({item}) => {
    const dispatch = useDispatch();

    const movie = movies.find((el) => {
        return el.id === item.movieID
    })


    const removeFromList = () => {
        dispatch(removeItemFromToWatch({toWatchItemId: item.id}))
    }

    const handleOpenTrailer = () => {
        window.open(
            `${movie.video}`,
            '_blank'
        );
    }


    return(
        <Wrapper>
            <Icon onClick={removeFromList}><BiTrashAlt/></Icon>
            <Play onClick={handleOpenTrailer}><MdSmartDisplay/></Play>
            <Img src={`./images/${movie.label}.jpeg`} alt={movie.label}/>
            <Div>
                <Title>{movie.name}</Title>
                <SubTitle>{movie.originalName}</SubTitle>
                <Par>IMDb: {movie.IMDb}</Par>
                <Table>
                    <tbody>
                        <tr>
                            <Th>Год</Th>
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
                </Table>
            </Div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 20px;
    margin: 10px;
    background: black;
    color: white;
    display: flex;
    position: relative;
    &:hover{
        box-shadow: 0 0 10px grey, 0 0 15px grey, 0 0 20px grey;
    }
`;
const Img = styled.img`
    width: 120px;
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
`;
const Title = styled.h4`
    font-size: 16px;
    margin-bottom: 5px;
`;
const SubTitle = styled(Title)`
    font-size: 14px;
    color: grey;
`;
const Par = styled.div`
    font-size: 12px;
    margin-bottom: 10px;
`;
const Table = styled.table`
    font-size: 14px;
`;
const Th = styled.th`
    text-align: left;
    vertical-align: top;
    padding-right: 5px;
`;
const Icon = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 20px;
    color: white;
    background: transparent;
    border: none;
    &:hover{
        cursor: pointer;
        color: red;
    }
`;
const Play = styled(Icon)`
    font-size: 34px;
    top: 10px;
    padding: 0;
    margin: 0;
    height: 25px;
`;
export default FavItem;
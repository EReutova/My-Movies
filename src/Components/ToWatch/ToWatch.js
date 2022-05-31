import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getToWatchItems } from "../../Redux/toWatchSlice";
import { AiOutlineClose } from 'react-icons/ai';
import FavItem from "./FavItem";
import Rating from "../Filter/Rating";
import Top from "../Filter/Top";
import { movies } from "../../Data/data";

const ToWatch = ({setShowToWatch}) => {
    const savedItems = useSelector(getToWatchItems);

    const favItems = useSelector(getToWatchItems);
    const [likedMovies, setLikedMovies] = useState(() => {
        let newArr = [];
        let arr = [];
        favItems.map((item) => {
            const movie = movies.filter((el) => {
                return el.id === item.movieID
            })
            if (movie) {
                arr.push(movie);
            }
            return movie;
        });
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i][0])
        }
        return newArr;
    });

	const genres = Rating(likedMovies, "genres");
	const actors = Rating(likedMovies, "actors");

    const topGenres = Top(genres, 5);
	const topActors = Top(actors, 5);

    const closeToWatch = () => {
        setShowToWatch(false);
    }
    return(
        <Wrapper>
            <Icon onClick={closeToWatch}><AiOutlineClose/></Icon>
            {
                savedItems &&
                savedItems.map((item) => {
                    return (
                        <FavItem item={item} key={Math.floor(Math.random() * 100000000000000)}/>
                    )
                })
            }
            {
                savedItems.length !== 0 &&
                <div>
                    <p>Я проанализировала выбранные вами фильмы и определила ваши любимые</p>
                    <p>жанры:&nbsp;</p>
                    <ul>
                    {
                        topGenres.map((item) => <li key={Math.floor(Math.random() * 100000000000000)}>{item}, </li>)
                    }
                    </ul>
                    <p>исполнители: &nbsp;</p>
                    <ul>
                    {
                        topActors.map((item) => <li key={Math.floor(Math.random() * 100000000000000)}>{item}, </li>)
                    }
                    </ul>
                    <p>Приятного просмотра!</p>
                </div>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    width: 450px;
    position: fixed;
    top: 10vh;
    right: 0;
    height: 86vh;
    padding: 20px 10px;
    padding-bottom: 10px;
    overflow-y: auto;
`;
const Icon = styled.button`
    width: 30px;
    height: 30px;
    font-size: 20px;
    background: transparent;
    border: none;
    padding: 0;
    color: white;
    position: fixed;
    right: 15px;
    top: 10vh;
    z-index: 100;
    &:hover{
        color: grey;
        cursor: pointer;
    }
`;

export default ToWatch;
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { getSelectedActor, filteredActor } from "../../Redux/actorsSlice";

const Actor = ({actor, setAllMovies}) => {
    const dispatch = useDispatch();
    const selectedActor = useSelector(getSelectedActor);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [selectedActor]);

    const setActor = () => {
        dispatch(filteredActor(actor));
        console.log(actor)
        setAllMovies(false);
    }
    
    return(
        <Wrapper>
            {
                selectedActor !== actor
                ? <Par key={actor} onClick={setActor}>{actor}</Par>
                : <SelectedPar key={actor} onClick={setActor}>{actor}</SelectedPar>
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
export default Actor;
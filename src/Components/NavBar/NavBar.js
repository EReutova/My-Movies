import styled from "styled-components";
import { useSelector } from "react-redux";
import { getToWatchItems } from "../../Redux/toWatchSlice";

const NavBar = ({showSideBar, setShowSideBar, setShowToWatch, showToWatch}) => {
    const toWatchItems = useSelector(getToWatchItems);

    const handleSideBar = () => {
        setShowSideBar(!showSideBar);
        setShowToWatch(false);
    }

    const handleToWatch = () => {
        setShowToWatch(!showToWatch);
        setShowSideBar(false);
    }

    return (
        <Wrapper>
            <Header onClick={handleSideBar}>Что сегодня посмотреть</Header>
            <Div>
                <Header onClick={handleToWatch}>
                    Буду смотреть &nbsp;
                    {
                        toWatchItems.length >= 1 &&
                        <Span>{toWatchItems.length}</Span>
                    }
                </Header>
            </Div>
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: black;
    color: white;
    height: 10vh;
    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
`;
const Div = styled.div`
    display: flex;
    justify-content: space-around;
    margin-right: 20px;
`;
const Header = styled.button`
    background: transparent;
    border: none;
    color: white;
    font-size: 24px;
    margin: 10px;
    padding: 10px 30px;
    position: relative;
    &:hover{
        color: grey;
        cursor: pointer;
    }
    &:focus{
        color: grey;
    }
`;
const Span = styled.span`
    border: 1px solid white;
    border-radius: 20px;
    width: 30px;
    height: 26px;
    text-align: center;
    position: absolute;
    font-size: 18px;
    padding-top: 5px;
    &:hover {
        color: white;
    }
`;
export default NavBar;
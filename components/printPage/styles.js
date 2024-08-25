import styled, { keyframes } from "styled-components";

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const grow = keyframes`
  0% {
    transform: scale(0);
    border-radius: 50%;
    opacity: 0;
  }
  100% {
    transform: scale(1);
    border-radius: 0;
    opacity: 1;
  }
}`

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
  color: #585858;
`;

const PrintWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const PageLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #2778a5;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;


const PrintPhoto = styled.div`
  width: calc(50% - 10px);
  min-height:150px;
  position:relative;

  img {
    max-width: 100%;
    transform-origin: center; 
  }
  .new{
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    animation:${grow} 1s forwards;
  }
`;

const Dragable = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: palevioletred;
  color: white;
  width: 70px;
  height: 70px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: solid 5px white;
  z-index:1000;
  display:none;
  animation: ${bounceIn} .5s ease ;
`;

export const styles = {
    Wrapper,
    PrintWrapper,
    Header,
    Title,
    PageLayout,
    PrintPhoto,
    Dragable
}
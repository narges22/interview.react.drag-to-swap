import Actions from "../actions";
import React, {  useRef, useEffect } from "react";
import {
  styles
} from './styles';

export default function PrintPage({ data }) {
  
  const {
    Wrapper,
    PrintWrapper,
    Header,
    Title,
    PageLayout,
    PrintPhoto,
    Dragable
  } = styles;

  const dragableRef = useRef(null);
  const imageRef = useRef({ first: null});


  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  }, []);

  const handleMouseDown = (e) => {
    if (e.target.tagName === 'IMG') {
    
      imageRef.current.first = e.target;
      if (dragableRef) {
        changeDragbleStyle(e.clientX,  e.clinetY);
        dragableRef?.current.style.display = "flex";
        dragableRef?.current.style.backgroundImage = `url('${ imageRef.current.first.src}')`;
      }
    }
  };

  const handleMouseMove = (e) => {
    if (dragableRef?.current?.style) {
      changeDragbleStyle(e.clientX, e.clientY);
    }
  };

  

  const changeDragbleStyle = (x, y) => {
    if (dragableRef?.current?.style) {
      dragableRef?.current.style.top = y + 10 + "px";
      dragableRef?.current.style.left = x + 10 + "px";
    }
  };

  const handleMouseUp = (e) => {
    if (e.target.src === imageRef.current.first.src) {
      dragableRef?.current.style.display = "none";
      return;
    }
    if (e.target.tagName === 'IMG') {
      createElement(e.target.parentElement, imageRef.current.first.src);
      imageRef.current.first.src = e.target.src;
    }
    dragableRef?.current.style.display = "none";
  };

  const createElement = (target, src) => {
    const oldImage = target.firstChild;
    const animoElement = document.createElement("img");  
    animoElement.src = src;
    animoElement.classList.add("new");
    target.appendChild(animoElement);
    if (oldImage) {
      setTimeout(() => {
        target.removeChild(oldImage);
      }, 1000);
    }
  };
  
  return (
    <>
      <Wrapper>
        <Dragable ref={dragableRef} />
        {Object.values(data).map((entry, i) => {
          return (
            <PrintWrapper key={i}>
              <Header>
                <Title>{entry.title}</Title>
                <Actions />
              </Header>
              <PageLayout>
                {entry.images.map((image) => {
                  return (
                    <PrintPhoto key={image}  >
                      <img src={image} alt="" draggable="false" />
                    </PrintPhoto>
                  );
                })}
              </PageLayout>
            </PrintWrapper>
          );
        })}
      </Wrapper>
    </>
  );
}

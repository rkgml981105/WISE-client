/* eslint-disable no-underscore-dangle */
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ServiceCard from './ServiceCard';

const PopularSection = () => {
    const { popularService } = useSelector((state) => state.service);

    const slider = useRef();
    const container = useRef();
    const [mainIndex, setMainIndex] = useState(0);
    const slideNext = () => {
        slider.current.style.transform = `translateX(-${(mainIndex + 1) * 288}px)`;
        setMainIndex(mainIndex + 1);
    };
    const slidePrev = () => {
        if (mainIndex > 0) {
            slider.current.style.transform = `translateX(-${(mainIndex - 1) * 288}px)`;
            setMainIndex(mainIndex - 1);
        }
    };

    return (
        <Wrapper>
            <Header>인기있는 어시스턴트</Header>
            <PrevBtn onClick={slidePrev}>&lang;</PrevBtn>
            <Container ref={container}>
                <Slider ref={slider}>
                    {popularService.map((ele) => (
                        <ServiceCard key={ele._id} service={ele} />
                    ))}
                </Slider>
            </Container>
            <NextBtn onClick={slideNext}>&rang;</NextBtn>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    height: 18rem;
    margin-bottom: 3rem;
    position: relative;
`;

const Header = styled.div`
    // border: 1px solid black;
    font-weight: bolder;
    font-size: 1.4rem;
    height: 2.5rem;
    margin-bottom: 1.5rem;
`;

const Container = styled.div`
    // border: 1px solid black;
    display: flex;
    position: relative;
    height: 14rem;
    overflow: hidden;
    box-sizing: border-box;
`;

const Slider = styled.div`
    position: absolute;
    white-space: nowrap;
    display: flex;
    height: 14rem;
    transition: all 0.3s ease-in-out;
`;

const PrevBtn = styled.div`
    position: absolute;
    top: 9rem;
    left: -2rem;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 5;
`;

const NextBtn = styled.div`
    position: absolute;
    top: 9rem;
    right: -2rem;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 5;
`;

export default PopularSection;

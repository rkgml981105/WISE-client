/* eslint-disable no-underscore-dangle */
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ServiceCard from './ServiceCard';
import { RootState } from '../reducers';
import { ShortService } from '../interfaces/data/service';

type TotalSectionProps = {
    title: string;
};

const TotalSection = ({ title }: TotalSectionProps) => {
    const { totalService, searchService } = useSelector((state: RootState) => state.service);

    return (
        <Wrapper>
            <Header>{title}</Header>
            <Row style={{ overflow: 'hidden' }}>
                {title === '검색 결과'
                    ? searchService.map((ele: ShortService) => (
                          <Col key={ele.id} xs={24} sm={12} md={8} lg={6} span={24}>
                              <ServiceCard service={ele} />
                          </Col>
                      ))
                    : totalService.map((ele: ShortService) => (
                          <Col key={ele.id} xs={24} sm={12} md={8} lg={6} span={24}>
                              <ServiceCard service={ele} />
                          </Col>
                      ))}
            </Row>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    h2 {
        font-weight: bolder;
    }
`;

const Header = styled.div`
    // border: 1px solid black;
    font-weight: bolder;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
`;

export default TotalSection;

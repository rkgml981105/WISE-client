/* eslint-disable react/require-default-props */
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { ShortService } from '../../interfaces/data/service';

type ServiceCard = {
    service: ShortService;
    searchQuery?: { date: string; location: string; page: number; time: string };
};

const ServiceCard = ({ service, searchQuery }: ServiceCard) => (
    <Link
        href={{
            pathname: `/service/detail/${service._id}`,
            query: searchQuery
                ? {
                      date: searchQuery.date,
                      time: searchQuery.time,
                  }
                : {},
        }}
    >
        <Container>
            {service.images === undefined ? (
                <ServiceImg src="/images/avatar_default.png" width={240} height={200} layout="responsive" />
            ) : (
                <ServiceImg
                    src={process.env.NEXT_PUBLIC_imageURL + service.images[0]}
                    width={240}
                    height={200}
                    layout="responsive"
                    alt="샘플이미지"
                />
            )}
            <div style={{ marginTop: '1rem' }}>
                <div>
                    <span style={{ fontWeight: 600, fontSize: '1rem' }}>{service.assistant.name}</span>{' '}
                    <span style={{ fontWeight: 200, fontSize: '0.9rem' }}>&nbsp;{service.location}</span>
                </div>
                <div>{service.greetings}</div>
                <div style={{ fontWeight: 700 }}>{service.wage}원 / 시간</div>
            </div>
        </Container>
    </Link>
);
const ServiceImg = styled(Image)<{ layout: string }>`
    background-color: cover;
    background-position: center center;
    object-fit: cover;
    overflow: hidden;
    border-radius: 4px;
`;

const Container = styled.div`
    height: 360px;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    margin-bottom: 2rem;
    cursor: pointer;

    @media screen and (${(props) => props.theme.tablet}) {
        height: 420px;
    }
`;

export default ServiceCard;

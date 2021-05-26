import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
// import PopularSection from '../components/PopularSection';
import TotalSection from '../components/TotalSection';
import { loadPopularServiceRequest, loadTotalServiceRequest } from '../reducers/service';
import wrapper from '../store/configureStore';
import { RootState } from '../reducers';

const Home = () => {
    const dispatch = useDispatch();

    const { totalService, totalServiceLoading, totalServiceCount } = useSelector((state: RootState) => state.service);
    const [page, setPage] = useState(2);

    useEffect(() => {
        function onScroll() {
            if (
                window.pageYOffset + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300
            ) {
                if (!totalServiceLoading && totalServiceCount > totalService.length) {
                    dispatch(loadTotalServiceRequest(page));
                    setPage((prev) => prev + 1);
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [totalServiceLoading, totalServiceCount, dispatch, page, totalService]);

    return (
        <Layout title="WISE | HOME">
            <Wrapper>
                <SearchBar />
                {/* <PopularSection /> */}
                <TotalSection title="전체 어시스턴트" />
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`
    // border: 1px solid black;
    padding: 3rem;
    width: 100vw;
    max-width: 1200px;
`;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    context.store.dispatch(loadPopularServiceRequest());
    context.store.dispatch(loadTotalServiceRequest(1));
    context.store.dispatch(END);
    await context.store.sagaTask?.toPromise();
});

export default Home;

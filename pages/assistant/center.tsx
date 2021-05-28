/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { SettingOutlined } from '@ant-design/icons';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadOrdersRequest } from '../../actions/user';
import OrderTable from '../../components/Assistant/OrderTable';
import PaymentDetails from '../../components/Assistant/PaymentDetails';
import { Order } from '../../interfaces/data/service';
import Layout from '../../layout/Layout';
import { RootState } from '../../reducers';

const dummyapplyOrders: Order[] = [
    {
        _id: '1',
        customer: {
            _id: '2',
            name: '박천사',
            mobile: '1111',
        },
        assistant: {
            _id: '3',
            name: '김천사',
            mobile: '1111',
        },
        service: {
            _id: '4',
            images: ['wise/1621842261940269.png'],
            location: '55',
        },
        pickup: '1',
        hospital: '1',
        content: '1',
        message: '1',
        date: '2020-05-05',
        time: '1',
        hours: 2,
        totalPayment: 1000,
        state: 'apply',
        isReviewed: false,
    },
];

const Center = () => {
    const dispatch = useDispatch();
    const { accessToken, me, applyOrdersA, acceptOrdersA, completeOrdersA } = useSelector(
        (state: RootState) => state.user,
    );
    const [tap, setTap] = useState(1);

    const onClickTap = (idx: number) => {
        setTap(idx);
    };

    useEffect(() => {
        if (me) {
            dispatch(loadOrdersRequest(accessToken, 'assistant', me._id));
        }
    }, [dispatch, me]);

    return (
        <Layout title="WISE | MYPAGE">
            <Wrapper>
                <NavTap>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>어시스턴트 센터</div>
                    <Nav>
                        <div onClick={() => onClickTap(1)}>수락 대기</div>
                        <div onClick={() => onClickTap(2)}>결제 대기</div>
                        <div onClick={() => onClickTap(3)}>매칭 완료</div>
                        <div onClick={() => onClickTap(4)}>결제 내역</div>
                    </Nav>
                    <UserInfo>
                        <div className="userName">{me?.name}</div>
                        <div className="userEmail">{me?.email}</div>
                        <div className="profile" onClick={() => onClickTap(5)}>
                            어시스턴트 수정&nbsp;&nbsp;
                            <SettingOutlined />
                        </div>
                    </UserInfo>
                </NavTap>
                <Tap>
                    {tap === 1 && <OrderTable title="수락 대기 중인 유저 목록" orders={applyOrdersA} />}
                    {tap === 2 && <OrderTable title="결제 대기 중인 유저 목록" orders={acceptOrdersA} />}
                    {tap === 3 && <OrderTable title="매칭 완료된 유저 목록" orders={completeOrdersA} />}
                    {tap === 4 && <PaymentDetails orders={completeOrdersA} />}
                    {/* {tap === 5 && <AssistantModify />} */}
                </Tap>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`
    // border: 1px solid black;
    // padding: 3rem;
    width: 100vw;
    height: 60vh;
    max-width: 1200px;
    display: flex;
`;

const NavTap = styled.div`
    // border: 1px solid black;
    width: 250px;
    padding: 3rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Tap = styled.div`
    // border: 1px solid black;
    padding: 3rem;
    flex-grow: 1;
`;

const UserInfo = styled.div`
    // border: 1px solid black;
    .userName {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .userEmail {
        color: #a1a1a1;
        font-size: 0.875rem;
        margin-bottom: 20px;
    }
    .profile {
        cursor: pointer;
    }
    svg {
        font-size: 14px;
        color: #707070;
    }
`;

const Nav = styled.div`
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    div {
        color: #707070;
        margin-bottom: 20px;
        cursor: pointer;
    }
`;

export default Center;

import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../reducers';
import Layout from '../../layout/Layout';
import SigninForm from '../../components/auth/SigninForm';
import { loadProfileRequest } from '../../actions/user';
import Loading from '../../components/Loading';
import { CoverImg, ModalTitle, ModalFooter, Modal } from '../../components/style/authStyle';
import { AuthGlobal } from '../../components/style/global';

const Signin = () => {
    const dispatch = useDispatch();
    const { me, islogin, logInLoading, loadProfileLoading } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (islogin) {
            dispatch(loadProfileRequest(localStorage.getItem('userId') as string));
        }
    }, [islogin, dispatch]);

    useEffect(() => {
        if (me) {
            if (me.service !== '') {
                Router.push('/home');
            } else {
                Router.push('/welcome');
            }
        }
    }, [me]);

    return (
        <>
            {logInLoading || loadProfileLoading ? (
                <Loading />
            ) : (
                <Layout title="WISE | SIGNIN">
                    <>
                        <AuthGlobal />
                        <CoverImg filter="true" />
                        <Modal>
                            <ModalTitle>로그인</ModalTitle>
                            <SigninForm />
                            <Link href="/user/signupAuth">
                                <ModalFooter>
                                    <button type="button">회원가입</button>
                                </ModalFooter>
                            </Link>
                        </Modal>
                    </>
                </Layout>
            )}
        </>
    );
};

export default Signin;

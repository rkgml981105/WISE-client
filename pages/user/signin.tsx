import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import SigninForm from '../../components/user/SigninForm';
import { loadMyInfo } from '../../reducers/user';
import { AuthGlobal, CoverImg, Modal, ModalTitle, ModalFooter } from '../../components/user/styles';
import { RootState } from '../../reducers';

const Signin = () => {
    const dispatch = useDispatch();
    const { me, islogin } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (islogin) {
            dispatch(loadMyInfo());
        }
    }, [islogin, dispatch]);

    useEffect(() => {
        if (me) {
            Router.replace('/welcome');
        }
    }, [me]);

    return (
        <Layout title="WISE | SIGNIN">
            <>
                <AuthGlobal />
                <CoverImg filter />
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
    );
};

export default Signin;

import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import styled from 'styled-components';
import nookies from 'nookies';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SendBird from 'sendbird';
import { loadNotificationsRequest } from '../actions/notifications';
import { loadOrderInfoRequest } from '../actions/order';
import { loadProfileRequest } from '../actions/user';
import Layout from '../layout/Layout';
import { RootState } from '../reducers';
import wrapper from '../store/configureStore';

const Chat = () => {
    const router = useRouter();
    const { me } = useSelector((state: RootState) => state.user);

    // Initialize SendBird instance to use APIs in your app.
    let sb = new SendBird({ appId: '6E5A3D86-B47E-4919-A528-6CE688034B5F' });

    // sendbird example

    // The USER_ID below should be unique to your Sendbird application.
    sb.connect(me._id, (user, error) => {
        if (error) {
            // Handle error.
            console.log('connection error!');
        }
        // The user is connected to Sendbird server.
    });

    sb.OpenChannel.createChannel((openChannel, error) => {
        if (error) {
            console.log('open channel error!');
        }

        console.log(openChannel);
        // An open channel is successfully created.
        // Through the "openChannel" parameter of the callback function,
        // you can get the open channel's data from the result object that Sendbird server has passed to the callback function.
    });

    // The CHANNEL_URL below can be retrieved using the openChannel.channelUrl.
    sb.OpenChannel.getChannel(CHANNEL_URL, (openChannel, error) => {
        if (error) {
            // Handle error.
        }

        // Call the instance method of the result object in the "openChannel" parameter of the callback function.
        openChannel.enter((response, error) => {
            if (error) {
                // Handle error.
            }

            // The current user successfully enters the open channel,
            // and can chat with other users in the channel by using APIs.
        });

        const params = new sb.UserMessageParams();
        params.message = TEXT_MESSAGE;
        params.data = DATA;
        params.customType = CUSTOM_TYPE;

        openChannel.sendUserMessage(params, (message, error) => {
            if (error) {
                // Handle error.
            }
            // The message is successfully sent to the channel.
            // The current user can receive messages from other users through the onMessageReceived() method of an event handler.
        });
    });

    useEffect(() => {
        if (!me) {
            router.push('/user/signin');
        }
    }, [router, me]);

    return (
        <Layout title="WISE | HOME">
            <Wrapper>
                <Title>
                    <h1>채팅</h1>
                </Title>
                <Body />
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 3rem;

    @media ${(props) => props.theme.mobile} {
        padding: 0;
        padding-bottom: 3rem;
    }
`;

const Body = styled.div`
    display: flex;

    @media ${(props) => props.theme.tablet} {
        flex-direction: column;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3rem;

    h1 {
        margin-bottom: 0;
    }

    @media ${(props) => props.theme.mobile} {
        font-size: 0.7rem;
    }
`;

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookies = nookies.get(context);
    if (cookies.userId && cookies.token) {
        context.store.dispatch(loadProfileRequest(cookies.userId));
        context.store.dispatch(loadNotificationsRequest(cookies.userId, cookies.token));
    } else {
        return {
            redirect: {
                permanent: false,
                destination: '/user/signin',
            },
        };
    }
    if (context.params?.id) {
        context.store.dispatch(loadOrderInfoRequest(context.params.id, cookies.token));
    }

    context.store.dispatch(END);
    await context.store.sagaTask?.toPromise();
});

export default Chat;

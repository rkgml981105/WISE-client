import React, { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { RootState } from '../reducers';
import useInput from '../hooks/useInput';
import { InputWrapper, Image, ProfileImagesWrapper, DeleteBtn, SubmitBtn } from './style';
import { changeProfileRequest } from '../actions/user';

const ProfileModify = () => {
    const dispatch = useDispatch();
    const { me, accessToken, changeProfileDone } = useSelector((state: RootState) => state.user);

    // 프로필 이미지
    const [image, setImage] = useState<File | null>(null);
    const imageInput = useRef<HTMLInputElement>(null);
    const imageUpload = useCallback(() => {
        if (!imageInput.current) return;
        imageInput.current.click();
    }, [imageInput]);
    const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setImage(e.target.files[0]);
    }, []);
    const removeImage = useCallback(() => setImage(null), []);

    // 이름
    const [name, onChangeName] = useInput(me.name);

    // 전화번호
    const [mobile, onChangeMobile] = useInput(me.mobile);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const data = new FormData();
            data.append('image', image as File);
            data.append('name', name);
            data.append('mobile', mobile);

            dispatch(changeProfileRequest(me._id, accessToken, data));
        },
        [me, accessToken, image, name, mobile, dispatch],
    );

    const [successMsg, setSuccessMsg] = useState(changeProfileDone);

    useEffect(() => {
        setSuccessMsg(changeProfileDone);
    }, [changeProfileDone]);

    useEffect(() => {
        setSuccessMsg('');
    }, []);

    return (
        <Wrapper>
            <Title>프로필 수정</Title>
            <ProfileForm onSubmit={onSubmit}>
                {me.image && <Avatar src={process.env.NEXT_PUBLIC_imageURL + me.image} alt="avatar" />}
                <InputWrapper>
                    <span>프로필 이미지</span>
                    <input type="file" accept="image/*" multiple hidden ref={imageInput} onChange={onChangeImages} />
                    <Button icon={<UploadOutlined />} onClick={imageUpload}>
                        Upload
                    </Button>
                </InputWrapper>
                <ProfileImagesWrapper>
                    {image && (
                        <>
                            <Image src={URL.createObjectURL(image)} alt="profile" />
                            <DeleteBtn type="button" onClick={removeImage}>
                                <CloseOutlined />
                            </DeleteBtn>
                        </>
                    )}
                </ProfileImagesWrapper>
                <InputWrapper>
                    <span>이름</span>
                    <input className="shortInput" onChange={onChangeName} placeholder={me.name} value={name} />
                </InputWrapper>
                <InputWrapper>
                    <span>전화번호</span>
                    <input className="shortInput" onChange={onChangeMobile} placeholder={me.mobile} value={mobile} />
                </InputWrapper>
                <SubmitBtn type="submit" className="submitbtn">
                    프로필 수정
                </SubmitBtn>
                {successMsg && '프로필이 변경되었습니다.'}
            </ProfileForm>
        </Wrapper>
    );
};

const Avatar = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #d2d2d2;
    margin-right: 5px;
    margin-bottom: 3rem;
`;

const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
`;

const Wrapper = styled.div`
    // border: 1px solid black;
    max-width: 820px;
    position: relative;
`;

const Title = styled.div`
    // border: 1px solid black;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2rem;
`;
export default ProfileModify;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";
import postsApi from "../api/post";
import { postSelected } from "../redux/modules/userPostSlice";

//포스트 하나의 구성
const FrameWrapper = styled.div`
    display: grid;
    border: 1px red solid;
    aspect-ratio: 262 / 270;
    grid-template-rows: 2fr 1fr;
    border-radius: 15px;
`;
const TitleBox = styled.div`
    border: 1px red solid;
    color: #414c49;
    font-size: 21px;
    font-weight: bold;
    margin: 1rem 1rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;

    ${media.lessThan('medium')`
        margin: 0.5rem 0.5rem 0;
        font-size: 18px;
    `}
`;
const UserNameBox = styled.div`
    border: 1px red solid;
    text-align: right;
    margin: 0 1rem 1rem;
    align-self: center;

    ${media.lessThan('medium')`
        margin: 0 0.5rem 0.5rem;
    `}
`;
const PostFrame = (props) => {
    const { userId, id, title } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');

    //각 요약된 포스트 클릭시 해당포스트 상태 저장 및 상세포스트창으로 이동
    const handleUserPostClick = async(event) => {
        const resPost = await postsApi.getPostById(event.target.id);
        const resUser = await postsApi.getUserInfo(resPost.data.userId);

        dispatch(postSelected({
            'postId': resPost.data.postId,
            'title': resPost.data.title,
            'body': resPost.data.body,
            'userInfo': resUser.data,
        }));
        navigate(`/posts/:${id}`);

    };
    useState(() => {

        const getUserName = async() => {
            await postsApi.getUserInfo(userId)
                .then((result) => {
                    setName(result.data.username)
                })
        };
        getUserName();

    }, []);

    return(
        <FrameWrapper id={id} onClick={handleUserPostClick}>
            <TitleBox id={id} onClick={handleUserPostClick}>
                {title}
            </TitleBox>
            <UserNameBox>
                {name}
            </UserNameBox>
        </FrameWrapper>
    )
}

export default PostFrame;
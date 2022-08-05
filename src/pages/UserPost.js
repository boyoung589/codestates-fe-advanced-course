import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import media from "styled-media-query";
import commentsApi from "../api/comments";
import { Comment } from "../components/Comment";

const UserPostWrapper = styled.div`
    height: 100%;
    margin: 2rem;
    display: flex;
    flex-direction: row;

    ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
        margin: 0.5rem 0.5rem 0;
        font-size: 18px;
    `}
`;
const PostDiv = styled.div`
    padding: 3rem;
    background-color: white;
    border-radius: 15px;
    box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.25);
`;
const CommentDiv = styled.div``;
const PostTitle = styled.h1`
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
`;
const PostUser = styled.h4`
    text-align: right;
    opacity: 60%;
`;
const PostEmail = styled.PostUser`
    ${media.lessThan('medium')`
        display: none;
    `}
`;
const PostBody = styled.h3``;

const UserPost = () => {
    const selected = useSelector((state) => state.userPost.postInfo)
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        const getComment = async(id) => {
            await commentsApi.getAllCommentOnPost(id)
                .then((result) => {
                    setComments(result.data) 
                })
        }
        getComment(selected.postId);
    },[selected.postId])
    return(
        <UserPostWrapper>
            <PostDiv>
                <PostTitle>{selected.title}</PostTitle>
                <PostUser >{selected.userInfo.username}</PostUser>
                <PostEmail >{selected.userInfo.email}</PostEmail>
                <PostBody>{selected.body}</PostBody>
                <PostUser >댓글 수 {comments.length}</PostUser>
            </PostDiv>
            <CommentDiv>
                {
                    comments.length === 0 ? '댓글이 없습니다' :
                    comments.map((el) => (
                        <Comment 
                            {...el}
                            key={el.id}
                        />
                    ))
                }
            </CommentDiv>
        </UserPostWrapper>
    )
}
export default UserPost;
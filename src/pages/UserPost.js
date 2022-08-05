import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const UserPostWrapper = styled.div``;

const UserPost = () => {
    const selected = useSelector((state) => state.userPost.postInfo)
    console.log('잘 저장됐니?', selected)
    return(
        <UserPostWrapper>
            post
        </UserPostWrapper>
    )
}
export default UserPost;
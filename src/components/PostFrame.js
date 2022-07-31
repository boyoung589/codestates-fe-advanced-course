import React from "react";
import styled from "styled-components";

//포스트 하나의 구성
const FrameWrapper = styled.div`
    display: grid;
    border: 1px red solid;
`;
const TitleBox = styled.div`
    border: 1px red solid;
`;
const UserNameBox = styled.div`
    border: 1px red solid;
`;
const PostFrame = () => {
    return(
        <FrameWrapper>
            frame
            <TitleBox>
                title
            </TitleBox>
            <UserNameBox>
                username
            </UserNameBox>
        </FrameWrapper>
    )
}

export default PostFrame;
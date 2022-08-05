import React from 'react'
import styled from 'styled-components';
import media from 'styled-media-query';

const CommentWrapper = styled.div`
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 15px;
    display: grid;
    gap: 0.5rem;
    background-color: white;
    box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.25);
`;
const CommentBody = styled.div`
    font-weight: bold;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
`;
const CommentUser = styled.div`
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    font-size: 14px;
`;
const CommentUserE = styled.div`
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    font-size: 14px;
`;

export const Comment = (props) => {
    const { body, email, name, } = props
  return (
    <CommentWrapper>
        <CommentBody>{body}</CommentBody>
        <hr/>
        <CommentUser>{name}</CommentUser>
        <CommentUserE>{email}</CommentUserE>
    </CommentWrapper>
  )
}

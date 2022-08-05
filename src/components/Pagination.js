import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const ButtonDiv = styled.div`
    border: 1px red solid;
    display: flex;
    margin: 2rem 10rem;
    flex-direction: row;
    justify-content: space-around;
    ${media.lessThan('medium')`
        margin: 2rem 0;
    `}
`;
const Button = styled.button``;

export const Pagination = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i < Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <ButtonDiv>
        {pageNumbers.map(number => (
            <Button onClick={() => paginate(number)}  >
                {number}
            </Button>
        ))}
    </ButtonDiv>
  )
}

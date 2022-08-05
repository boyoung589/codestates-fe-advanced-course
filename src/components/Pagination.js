import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
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
            <ul key={number} >
                <Button onClick={() => paginate(number)}  >
                    {number}
                </Button>
            </ul>
        ))}
    </ButtonDiv>
  )
}

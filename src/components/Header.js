import React from "react";
import styled from "styled-components";
import {IoIosBookmark} from 'react-icons/io';

const StyledHeader = styled.header`
    width: 100%;
    background-color: white;
    color: #002999;
    font-weight: bolder;
    font-size: 2.7em;
    text-align: center;
    border-bottom: 1px solid #DCDCE0;
`;
// const HeaderWrapper = styled.div`
//     top: 0;
//     width: 100%;
//     background-color: white;
//     text-align: center;
// `;
// const StyledHeader = styled.h1`
//     text-align: center;
//     color: #002999;
// `;


const Header = () => {
    return (
        //<HeaderWrapper>
            <StyledHeader>
                <IoIosBookmark />
                The Posts
            </StyledHeader>
        //</HeaderWrapper>
    )
};

export default Header;
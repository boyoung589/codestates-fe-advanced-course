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
`;

const Header = () => {
    return (
            <StyledHeader>
                <IoIosBookmark />
                The Posts
            </StyledHeader>
    )
};

export default Header;
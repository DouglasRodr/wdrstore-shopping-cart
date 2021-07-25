import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background-color: #D80039;
    color: #fff;
    width: 100%;
    height: 56px;
    line-height: 56px;
    display: block;
    position:fixed;
    top:0;
    z-index: 1;

    @media only screen and (min-width: 601px) {
        height: 64px;
        line-height: 64px;
    }
`;

export const LogoLink = styled(Link)`
    position: absolute;
    color: #fff;
    display: inline-block;
    font-size: 2.1rem;
    padding: 0;
    text-decoration: none;

    img {
        height: 45px;
        margin-bottom: 10px;
    
        @media only screen and (min-width: 601px) {
            height: 55px;
        }
    }

    span {
        vertical-align: center
    }
`;

export const MenuRight = styled.ul`
    float: right;
    margin: 0;

    li {
        -webkit-transition: background-color .3s;
        transition: background-color .3s;
        float: left;
        padding: 0;
    }
    
    &:not(.browser-default) > li {
        list-style-type: none;
    }

`;

export const RightLink = styled(Link)`
    transition: background-color .3s;
    font-size: 1rem;
    color: #fff;
    display: flex;
    padding: 0 15px;
    text-decoration: none;

    svg {
        margin-top: 20px;

        @media only screen and (min-width: 601px) {
            margin-top: 24px;
        }
    }

    &:hover {
        color: #fff;
        background-color: rgba(0,0,0,0.1);
    }
`;
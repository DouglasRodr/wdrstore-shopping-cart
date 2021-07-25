import styled from "styled-components";

export const ProductGrid = styled.div`
    background-color: #fff;
    border-radius: 4px;
    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ProductCard = styled.div`
    display: grid;
    text-align: center;
    height: auto;
    background: #fff;
    border-radius: 4px;
    padding: 5px;
    margin: 5px;
    width: 40%;

    @media only screen and (min-width: 750px) {
        width: 25%;
    }

    @media only screen and (min-width: 960px) {
        width: 22%;
    }

    .img-container {
        flex: 0 0 auto;
        width: 100%;
        display: block;
        height: auto;

        img {
            width: 100%;
            height: auto;
            vertical-align: middle;
        }

    }

    .description-container {
        height: 6em;
        overflow: hidden;

        @media only screen and (min-width: 960px) {
            height: 5em;
        }

        h4 {
            font-size: 16px;
        }
    }

    .price {
        margin: 0;
        color: #D80039;
        font-size: 16px;
        font-weight: 500;
        display: block;

        @media only screen and (min-width: 600px) {
            font-size: 20px;
        }
    }

    .stock-unavailable {
        margin 15px 0;
        font-size: 18px;  
    }

    .add-cart-button {
        display: block;
        position: relative;
        text-align: center;
        cursor: pointer;
        margin: 10px 0;

        transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #fff;
        background-color: #D80039;
        padding: 6px;
        border: none;
        font-weight: bold;
        font-size: 16px;
        font-weight: 700;

        &:hover {
            background-color: #9d0029;
        }
    }

    &:hover {
        margin: 4px;
        border: 1px solid #D80039;
    }
`;

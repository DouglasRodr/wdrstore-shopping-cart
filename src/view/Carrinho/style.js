import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ProductCart = styled.div`
    border-radius: 4px;
    margin: 4px;
    border: 1px solid #D80039;

    .empty-cart {
        margin: 40px 0;
        text-align: center;
    }

    .cart-list {
        padding-left: 10px;

        @media only screen and (min-width: 750px) {
            padding-left: 40px;
        }

        .cart-item {
            display: flex;

            .img-container {
                flex: 0 0 auto;
                display: flex;
                align-items: center;

                img {
                    width: 60px;
                    margin-top: 15px;
                    margin-right: 15px;

                    @media only screen and (min-width: 750px) {
                        width: 80px;
                        margin-right: 25px;
                    }

                }
            }
            
            .description-container {

                .title {
                    margin-top: 10px;
                    margin-bottom: 0px;
                    font-size: 16px;

                    @media only screen and (min-width: 750px) {
                        margin-top: 20px;
                    }
                }

                .total {
                    margin-top: 5px;
                    margin-bottom: 10px;
                    font-size: 16px;

                    @media only screen and (min-width: 750px) {
                        margin-top: 10px;
                    }
                }

                .quantity {
                    font-weight: 500;
                    margin-top: 5px;
                    font-size: 10px;
                }
            }

            .actions-container {
                margin-left: auto; 
                margin-right: 0;
                display: flex;
                align-items: center;
                padding-right: 10px;
                
                @media only screen and (min-width: 750px) {
                    padding-right: 20px;
                }

                .remove-cart-button {
                    display: flex;
                    align-items: center;
                    position: relative;
                    text-align: center;
                    cursor: pointer;
            
                    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                    color: #fff;
                    background-color: #D80039;
                    padding: 6px;
                    border: none;
                    font-size: 12px;
                    font-weight: 500;
            
                    &:hover {
                        background-color: #9d0029;
                    }
                }

            }

        }

    }
`;

export const ReturnLink = styled(Link)`
    color: #D80039;
    text-decoration: none;

    svg {
        margin-top: 20px;

        @media only screen and (min-width: 601px) {
            margin-top: 24px;
        }
    }

    padding: 8px 24px;
    font-size: 18px;
    display: inline-block;
    transition: .5s ease;
    position: relative;

    &:after{
        content: '';
        display: block;

        position: absolute;
        top: 100%;
        left: 0;

        width: 0%;
        height: 2px;

        transform: translate(20%, -50%);
        transition: .5s ease ;

        background-color: #D80039;
    }

    &:hover{
        color: #D80039;
        &:after{
            width: 70%;
        }
    }

`;

export const CheckoutContainer = styled.div`
    float: right;
    margin-bottom: 100px;
`;

export const CheckoutLink = styled(Link)`
    align-items: center;
    text-align: center;
    cursor: pointer;
    text-decoration: none;

    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #D80039;
    padding: 6px;
    border: none;
    font-size: 14px;
    font-weight: 500;

    &:hover {
        color: #fff;
        background-color: #9d0029;
    }
`;

export const TotalContainer = styled.div`
    text-align: right;
    
    h1 {
        font-size: 24px;
    }
`;
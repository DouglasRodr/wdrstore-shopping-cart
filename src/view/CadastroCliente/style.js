import styled from "styled-components";

export const ClientForm = styled.div`
    border-radius: 4px;
    margin: 4px;
    border: 1px solid #D80039;
    padding: 20px;

    .form-footer {
        text-align: center
    }

    button {
        margin-left: 10px;
        margin-right: 10px;
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

`;
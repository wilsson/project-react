import styled from 'styled-components';
import mq from '../../utils/mq';

export const Wrapper = styled.div`
    border: 1px solid black;
    width: 100%;
`;

export const Button = styled.button`
    background-color: #ccc;
    display: block;
    padding: 8px 15px;
    ${(props) => props.primary && `
        background-color: #4b4bc0;
        color: white;
    `}
    ${(props) => props.error && `
        background-color: red;
        color: white;
    `}
    ${mq.mobile`
        font-size: 14px;
        font-weight: bold;
        color: purple;
    `}
    ${mq.tablet`
        font-size: 20px;
        font-weight: bold;
        color: green;
    `}
    ${mq.desktop`
        font-size: 20px;
        font-weight: bold;
        color: red;
    `}
`;
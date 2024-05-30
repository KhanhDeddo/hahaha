import { Row } from "antd";
import styled from "styled-components";

export const RowHeader = styled(Row)`
    padding: 10px 60px;
    background-color: rgb(56, 148, 255);
    align-items: center; 
    gap : 16px
    flex-wrap: nowrap;
`;
export const TextHeader = styled.span`
    font-size:30px;
    color:#fff;
    font-weight:bold;
    text-align:left;
`;
export const AccountHeader = styled.div`
    display: flex;
    align-items: center;
    color:#fff;
    gap:10px;
    font-size:14px;
`;
export const CartHeader = styled.div`
    align-items: center;
    color:#fff;
    gap:10px;
    font-size:14px;
`;
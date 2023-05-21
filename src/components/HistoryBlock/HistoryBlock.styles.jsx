import styled from "styled-components";

export const HistoryLayout=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 498px;
    padding: 16px 16px;
    background-color: ${(props) => props.theme.colors.grey4};
    color: ${(props) => props.theme.colors.black};
`;

export const HistoryTitle=styled.div`
    font-size: 16px;
    font-weight: bold;
`;

export const HistoryTime=styled.div`
    font-size: 16px;
    color:${(props) => props.theme.colors.grey1};
`;


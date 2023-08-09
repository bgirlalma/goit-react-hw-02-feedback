import styled from 'styled-components';

export const ButtonFeedback = styled.button`
padding: 10px 40px;
border-radius: 10px;
border: none;
margin-right: 10px;

font-family: Cantarell;
font-weight: normal;
font-size: 20px;
background-color: rgb(87,244,202);
cursor: pointer;
box-shadow: 0px 6px 21px 2px rgba(226,13,69,0.75);
-webkit-box-shadow: 0px 6px 21px 2px rgba(226,13,69,0.75);
-moz-box-shadow: 0px 6px 21px 2px rgba(226,13,69,0.75);


&:hover{
    background-color: rgb(62,155,234);
    box-shadow: 11px 8px 17px -3px rgba(137,137,239,0.75);
-webkit-box-shadow: 11px 8px 17px -3px rgba(137,137,239,0.75);
-moz-box-shadow: 11px 8px 17px -3px rgba(137,137,239,0.75);
}

`;

export const LastChild = styled.button`
padding: 10px 40px;
border-radius: 10px;
border: none;
margin-right: 0;

font-family: Cantarell;
font-weight: normal;
font-size: 20px;
box-shadow: 3px 3px 17px 5px rgba(211,29,29,0.75);
-webkit-box-shadow: 3px 3px 17px 5px rgba(211,29,29,0.75);
-moz-box-shadow: 3px 3px 17px 5px rgba(211,29,29,0.75);
background-color: rgb(87,244,202);
`;

export const Title = styled.h2`
font-family: Cantarell;
font-size: 30px;
color: red;

margin-bottom: 10px;
`;



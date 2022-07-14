import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten, size } from 'polished';


const colorStyle = css`
  /* 색상 */
  ${({ theme, color }) => {
    const selected = theme[color];
    return css`
        background: ${selected};
        &:hover {
        background: ${lighten(0.1, selected)};
        }
        &:active {
        background: ${darken(0.1, selected)};
        }
        ${props => 
            props.outline &&
            css`
                color: ${selected};
                background: none;
                /* border: 1px solid ${selected}; */
                &:hover {
                    background: ${selected};
                    color: white;
                }           
            `}
            ${props => 
            props.disabled &&
            css`
                color: ${props => props.theme.gray3};
                background: none;
                border: 1px solid ${props => props.theme.gray3};
                /* :disabled            */
            `}
        
    `;
  }}
`;


const StyledButton = styled.button`
    /* 공통스타일 */
    display: flex;
        align-items: center;
        justify-content: center;
    outline: none;
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    font-weight: 500;
    font-size: 12px;

    /* 색상 */
    ${colorStyle}

    /* 사이즈 */

    /* 상세보기 매칭종료 버튼 */
    ${props =>
    props.size === 'XXlarge' &&
    css`
    width: 280px;
    height: 40px;
    p {
            width: inherit;
            font-weight: 500;
            font-size: 14px;
        }
    `}
    ${props =>
    props.size === 'Xlarge' &&
    css`
    width: 86px;
    height: 32px;
    p {
            width: inherit;
            font-weight: 500;
            font-size: 12px;
        }
    `}

    /* 작성페이지 maching/private */
    ${props =>
    props.size === 'large' &&
    css`
        width: 90px;
        height: 24px;
        p {
            width: inherit;
            font-weight: 500;
            font-size: 14px;
        }
    `}
    
    /* 검색페이지,알림페이지 버튼 */
  ${props =>
    props.size === 'medium' &&
    css`
        width: 80px;
        height: 28px;
        p {
            width: inherit;
            font-weight: 500;
            font-size: 12px;
        }
    `}
    /* create부분 */
    ${props =>
      props.size === 'small' &&
      css`
        width: 56px;
        height: 24px;
        p {
            width: inherit;
            font-weight: 500;
            font-size: 14px;
        }
      `}

`;

function Button({ children,color,size,outline,disabled,...rest }) {
    return <StyledButton 
    color={color} 
    size={size} 
    outline={outline}
    disabled = {disabled}
    {...rest}
    >
      <p>{children}</p>
      </StyledButton>;
  }
  
  Button.defaultProps = {
    color: "gray3",
    size: "medium"
  };
  
  export default Button;
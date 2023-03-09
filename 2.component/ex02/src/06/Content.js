import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    color: ${(props) => props.color ? props.color : null}
    fotn-size: 20px;
    font-weight: bold;
`;

/**
 * 
 * Component Composition (컴포넌트 합성)
 * 
 */
function Content({children, color}) {
    return (
        <StyledP color={color}>
            {children}
        </StyledP>
    );
}

export default Content;
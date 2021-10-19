import React from 'react';
import {styled} from "baseui";
import { Display1} from 'baseui/typography';

interface BoxProps  {
    name: string,
    price: number,
}

const SBox = styled('div', ({$theme}) => ({
    ...$theme.borders.border500,
    padding: $theme.sizing.scale1000
}))

const Box: React.FC<BoxProps> = ({name, price}) => {
    return (
        <SBox>
            <Display1>{name}</Display1>
            <Display1>{price}</Display1>
        </SBox>
    );
};

export default Box;
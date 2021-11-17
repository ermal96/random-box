import React from 'react';
import {styled} from "baseui";
import { Display1, Display3} from 'baseui/typography';
import { Button, SIZE } from "baseui/button";
interface BoxProps  {
    name: string,
    price: number,
    addToCart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => void,
}

const SBox = styled('div', ({$theme}) => ({
    ...$theme.borders.border500,
    padding: $theme.sizing.scale1000
}))

const Box: React.FC<BoxProps> = ({name, price, addToCart}) => {
    return (
        <SBox>
            <Display1>{name}</Display1>
            <Display3>{price} $</Display3>
            <Button onClick={addToCart} size={SIZE.compact}>
                Add To Cart
            </Button>
        </SBox>
    );
};

export default Box;
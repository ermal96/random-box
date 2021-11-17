import React from 'react';
import { styled } from "baseui";
import { Display2, Paragraph3 } from 'baseui/typography';
import { Button, SIZE, KIND } from "baseui/button";
import { Tag, VARIANT } from 'baseui/tag';
import {Plus, CheckIndeterminate} from "baseui/icon";

export interface ProductProps  {
    id: number,
    name: string,
    price: number,
    items: number,
    description: string,
    addToCart?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => void,
}

const UICard = styled('div', ({$theme}) => ({
    ...$theme.borders.border500,
    padding: $theme.sizing.scale1000,
    width: '400px',
    height: '350px'
}))

const Card: React.FC<ProductProps> = ({name, price, description, items, addToCart}) => {
    return (
        <UICard>
            <Tag closeable={false} variant={VARIANT.solid} >{items}</Tag>
            <Display2 marginBottom="scale500">{name}</Display2>
            <Tag closeable={false}>Tech</Tag>
            <Tag closeable={false} variant={VARIANT.solid} >{price} $</Tag>

            <Paragraph3>{description}</Paragraph3>
            
            <Button onClick={addToCart} size={SIZE.compact}>
              Add to cart
            </Button>
        </UICard>
    );
};

export default Card;
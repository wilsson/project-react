import * as React from 'react';
import { Wrapper, Button } from './styled';
import * as p from 'prop-types';

interface Props {
    name: string;
}

export const Avatar: React.FC<Props> = ({
    name,
}) => (
    <Wrapper>
        {name}
        <Button>click me</Button>
        <Button primary onClick={() => {
            console.log('click primary');
        }}>click me</Button>
        <Button error>click me</Button>
    </Wrapper>
)

Avatar.propTypes = {
    name: p.string
};
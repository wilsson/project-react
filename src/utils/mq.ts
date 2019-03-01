import { css } from 'styled-components';
const media = {
    DESKTOP: '1024px',
    TABLET: '750px',
    MOBILE: '320px'
};

export const mq = (media) => {
    const mobile = (styles) => {
        return css`
            @media (min-width: ${media.MOBILE}) {
                ${styles}
            }
        `;
    };
    const tablet = (styles) => {
        return css`
            @media (min-width: ${media.TABLET}) {
                ${styles}
            }
        `;
    };
    const desktop = (styles) => {
        return css`
            @media (min-width: ${media.DESKTOP}) {
                ${styles}
            }
        `;
    };
    return {
        mobile,
        tablet,
        desktop
    }
}

export default mq(media)
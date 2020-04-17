import { text, boolean, select } from '@storybook/addon-knobs';

export default {
    title: 'Button/Default',
    includeStories: [], // or don't load this file at all
};

export const defaultButton = () => {
    const sizes = {
        Medium: 'medium',
        Large: 'large'
    }

    const flavours = {
        Neutral: 'neutral',
        Primary: 'primary',
        Destructive: 'destructive'
    }

    const size = select('Size', sizes, 'medium');
    const type = select('Type', flavours, 'neutral');
    const button = document.createElement('button');
    
    button.innerText = text('Label', 'Click Me! ');
    button.classList.add(`button-${type}`, size);
    button.disabled = boolean('Disabled', false);
    
    return button;
}
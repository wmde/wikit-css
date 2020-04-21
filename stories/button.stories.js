import { text, boolean, select } from '@storybook/addon-knobs';

export default {
    title: 'Button',
    includeStories: [], // don't load this file at all, workaround to get knobs to work
};

// The button's stories are defined in JS in order to incorporate knobs
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
    
    button.innerText = text('Label', 'Click me');
    button.classList.add(`button-${type}`, size);
    button.disabled = boolean('Disabled', false);
    
    return button;
}

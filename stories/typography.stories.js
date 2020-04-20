import { text } from '@storybook/addon-knobs';

export default {
    title: 'Typography',
    includeStories: [], // or don't load this file at all
};

export const headings = () => {
    const container = document.createElement('div');
    const content = text('Label', 'The quick brown fox...');

    for(let i = 1; i <= 6; i++){
        const heading = document.createElement(`h${i}`);
        heading.innerText = `<h${i}> ${content}`;
        container.appendChild(heading);
    }

    return container;
}
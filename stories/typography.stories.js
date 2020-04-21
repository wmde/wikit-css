import { text } from '@storybook/addon-knobs';

export default {
    title: 'Typography',
    includeStories: [], // don't load this file at all, workaround to get knobs to work
};

// The headings are presented as a story due to storybook docs' limitations with applying global styles (this way they are added as an iframe to the docs page :big_frown:). Ideally these will actually be generated directly from a tokens file, perhaps in json/flat format.
export const headings = () => {
    const container = document.createElement('div');
    const content = text('Text', 'The quick brown fox...');

    for(let i = 1; i <= 6; i++){
        const heading = document.createElement(`h${i}`);
        heading.innerText = `<h${i}> ${content}`;
        container.appendChild(heading);
    }

    return container;
}
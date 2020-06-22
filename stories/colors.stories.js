import * as tokens from '../dist/tokens/index.js';
const colors = Object.keys(tokens).filter(token => token.includes('Color'));
const colorArray = colors.map(color => { return { name: color, hex: tokens[color] } });

export default {
    title: 'Colors',
    includeStories: [],
};
export const defaultColors = () => {
    const wrapper = document.createElement('div');
    colorArray.forEach(colorObject => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerHTML = `${colorObject.name} : ${colorObject.hex}`
        div.append(p)
        const colorSquare = document.createElement('div');
        colorSquare.style.backgroundColor = colorObject.hex;
        colorSquare.innerHTML = '&nbsp;';
        colorSquare.style.height = '50px';
        div.append(colorSquare);
        wrapper.append(div);
    });
    return wrapper;
}
/* export const defaultColors = () => ({
    data () {
      return {
        colors: colorObject
      }
    },
    template: `
        <div class="wrapper">
            <div v-for="(value, key) in colors" class="">
                <p>{{ key + ': ' + value }}</p>
                <div class="" :style="'background:' + value + ';'">&nbsp;</div>
            </div>
        </div>
    `
  }); */
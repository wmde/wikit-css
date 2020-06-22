import * as tokens from '../dist/tokens/index.js';

const colorSquare = ( startsWithString ) => {
    const colors = Object.keys(tokens).filter(token => token.startsWith( startsWithString ));
    const colorArray = colors.map(color => { return { name: color, hex: tokens[color] } });
    const wrapper = document.createElement('div');
    colorArray.forEach(colorObject => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerHTML = `${colorObject.name} : ${colorObject.hex}`
        div.append(p)
        const colorSquare = document.createElement('div');
        colorSquare.style.backgroundColor = colorObject.hex;
        colorSquare.innerHTML = '&nbsp;';
        colorSquare.style.height = '80px';
        colorSquare.style.width = '80%';
        // bottom only shadow '0 8px 6px -6px black'
        colorSquare.style.boxShadow ='5px 5px 5px #666';
        colorSquare.style.borderRadius = '4px';
        div.append(colorSquare);
        wrapper.append(div);
    });
    return wrapper;
}

export default {
    title: 'Colors',
    includeStories: [],
};

export const wmuiColorBase = () => {
    return colorSquare( 'WmuiColorBase' );
}

export const wmuiColorAccent = () => {
    return colorSquare( 'WmuiColorAccent' );
}

export const wmuiColorUtility = () => {
    return colorSquare( 'ColorUtility' );

}

export const backgroundColors = () => {
    return colorSquare( 'BackgroundColor' );
}

export const borderColors = () => {
    return colorSquare( 'BorderColor' );
}

/* Vue component
    export const defaultColors = () => ({
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
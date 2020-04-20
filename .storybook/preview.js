import './preview.css';
import '../src/main.less';

import { addDecorator } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';

addDecorator(withHTML);
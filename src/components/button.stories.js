import React from 'react';
import classnames from 'classnames'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


storiesOf('button', module)
  .add('primary', () => <button className={classnames('button', 'is-primary')}>button</button>)
  .add('loading', () => <button className={classnames('button', {'is-primary': true})}>loading..</button>)
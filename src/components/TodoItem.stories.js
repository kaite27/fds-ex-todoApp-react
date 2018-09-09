import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TodoItem from './TodoItem'

const handler = action('Done button has been clicked')
storiesOf('TodoItem', module)
  .add('empty', () => <TodoItem id={1} onComplete={handler}/>)
  .add('case: has body', () => <TodoItem body="Test"/>)
  .add('완료된 경우', () => <TodoItem body="Done" complete />)

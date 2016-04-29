import React from 'react';

export default class Layout extends React.Component {
  render() {
    const menu = ['/', '/projects', '/code'];

    return <div>
      <ul>
        {
          menu.map(item => {
            return <li key={item}><a href={item}>{item}</a></li>
          })
        }
      </ul>

      <div>{this.props.children}</div>
    </div>
  }
};
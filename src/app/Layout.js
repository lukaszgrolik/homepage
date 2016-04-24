import React from 'react';

export default class Layout extends React.Component {
  render() {
    const menu = ['/', '/projects', '/code'];

    return <html>
      <head>
        <title>Łukasz Grolik</title>
      </head>

      <body>
        <ul>
          {
            menu.map(item => {
              return <li key={item}><a href={item}>{item}</a></li>
            })
          }
        </ul>

        {this.props.children}
      </body>
    </html>
  }
};
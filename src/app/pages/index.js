import React from 'react';
// import Layout from '../Layout';

export default class HomePage extends React.Component {
  render() {
    const offer = [
      {
        name: 'szybkie strony-wizytówki',
      },
      {
        name: 'funkcjonalne serwisy z panelem administratora',
        desc: 'z obsługą bloga czy strony produktu',
      },
      {
        name: 'unikatowe aplikacje webowe',
        desc: 'dostosowane do indywidualnych wymagań klienta',
      },
    ];
    const feats = [
      {
        name: 'Responsive Web Design',
        desc: 'strona jest estetyczna i funkcjonalna zarówno na ekranie monitora, jak i na tablecie czy smartfonie',
      },
      {
        name: 'SEO',
        desc: 'strona dobrze współpracuje z wyszukiwarkami internetowymi',
      },
    ];
    const projects = [
      {
        name: 'Wizytówki - strony statyczne'
      },
      {
        name: 'Serwisy',
      },
      {
        name: 'Aplikacje webowe'
      },
      {
        name: 'Inne'
      },
    ];

    return <div>
      <div className="Header">

      </div>

      <div className="Offer">
        <div className="Offer_contents">
          <h2>Tworzenie stron internetowych</h2>

          <ul>
            {
              offer.map(item => {
                return <li key={item.name}>{item.name}</li>
              })
            }
          </ul>
        </div>
      </div>

      <div className="Feats">
        <div className="Feats_contents">
          <ul>
            {
              feats.map(feat => {
                return <li key={feat.name}>{feat.name}</li>
              })
            }
          </ul>
        </div>
      </div>

      <div className="Portfolio">
        <div>
          <ul>
            {
              projects.map(project => {
                return <li key={project.name}>{project.name}</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  }
};
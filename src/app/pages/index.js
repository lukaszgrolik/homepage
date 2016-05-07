import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
// import Layout from '../Layout';

export default class HomePage extends React.Component {
  render() {
    const offer = [
      {
        name: 'Szybkie i proste strony-wizytówki',
        desc: 'Najlepsze dla małych firm',
        icon: 'bolt',
        color: 'orange'
      },
      {
        name: 'Funkcjonalne serwisy z panelem administratora',
        desc: 'Z obsługą bloga czy strony produktu',
        icon: 'users',
        color: 'dodgerblue'
      },
      {
        name: 'Unikatowe aplikacje webowe',
        desc: 'Dostosowane do indywidualnych wymagań klienta',
        icon: 'diamond',
        color: 'tomato'
      },
    ];
    const feats = [
      {
        name: 'Responsive Web Design',
        desc: 'Strona jest estetyczna i funkcjonalna zarówno na ekranie monitora, jak i na tablecie czy smartfonie',
      },
      {
        name: 'SEO',
        desc: 'Strona dobrze współpracuje z wyszukiwarkami internetowymi',
      },
      {
        name: 'Estetyczny design i przyjazny UX',
        desc: '',
      },
      {
        name: 'Płynny interfejs i wydajna technologia serwerowa',
        desc: 'React i NodeJS',
      },
      {
        name: 'Zwinny development',
        desc: '',
      },
    ];
    const projects = [
      // {
      //   name: 'Wizytówki - strony statyczne'
      // },
      // {
      //   name: 'Serwisy',
      // },
      // {
      //   name: 'Aplikacje webowe'
      // },
      // {
      //   name: 'Inne'
      // },
      // {
      //   name: 'Food Calc',
      //   desc: 'Calculate nutritional value and cost of your meals',
      //   img: 'food-calc-1.png',
      //   url: 'https://food-calc.meteor.com',
      // },
      {
        name: 'Styleo Admin Theme',
        desc: 'Darmowy szablon panelu admina dla Bootstrapa',
        img: 'styleo-admin-theme-1.png',
        url: 'http://lukaszgrolik.github.io/styleo-admin-theme'
      },
      {
        name: 'GitHub Repos Stats',
        desc: 'Porównywarka repozytoriów GitHub',
        img: 'github-repos-stats-1.png',
        url: 'http://lukaszgrolik.github.io/repos-stats',
      },
      {
        name: 'Duolingo Tree Progress Bookmarklet',
        desc: 'Interaktywna zakładka dla użytkowników duolingo.com',
        img: 'duolingo-tree-progress-bookmarklet-1.png',
        url: 'http://lukaszgrolik.github.io/duolingo-tree-progress-bookmarklet'
      },
    ];

    return <div>
      {/*<div className="Header">
        <div className="Header_logoWrapper">
          <img src="images/logo-white.png" alt="" className="Header_logo" />
        </div>

        <div className="Header_squaresContainer">
          <ul className="Header_squaresList">
            {
              _.times((200), i => {
                return <li key={i}>
                  <div className="Header_square"></div>
                </li>
              })
            }
          </ul>
        </div>
      </div>*/}

      <div className="Offer">
        <div className="Offer_contents">
          <h1 className="Offer_mainHeading">Łukasz Grolik</h1>
          <h2 className="Offer_subHeading">Tworzenie stron internetowych</h2>

          <ul className="Offer_offerList">
            {
              offer.map(item => {
                return <li key={item.name}>
                  <div className="Offer_offerBlock">
                    <div className="Offer_offerBlockContent">
                      <div className="Offer_offerBlockIconWrapper" style={{color: item.color}}>
                        <span className={classNames(['fa', `fa-${item.icon}`])}></span>
                      </div>

                      <div>
                        <span>{item.name}</span>
                      </div>
                    </div>

                    <div className="Offer_offerBlockDescWrapper">
                      <span>{item.desc}</span>
                    </div>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>

      {/*<div className="Feats">
        <div className="Feats_contents">
          <ul>
            {
              feats.map(feat => {
                return <li key={feat.name}>{feat.name}</li>
              })
            }
          </ul>
        </div>
      </div>*/}

      <div className="Contact">
        <div className="Contact_contents">
          <h2 className="Contact_heading">Kontakt</h2>

          <p className="Contact_text">Pisz na <span className="Contact_emailText">lukasz@grolik.pl</span></p>
        </div>
      </div>

      <div className="Portfolio">
        <div className="Portfolio_content">
          <h2 className="Portfolio_heading">Portfolio</h2>
          {/*<ul>
            {
              projects.map(project => {
                return <li key={project.name}>{project.name}</li>
              })
            }
          </ul>*/}
          <ul className="Portfolio_projectsList">
            {
              projects.map(project => {
                return <li key={project.img}>
                  <a href={project.url} target="_blank" className="Portfolio_projectBlock">
                    <div>
                      <img src={`images/projects/${project.img}`} alt="" />
                    </div>

                    <div>
                      <div className="Portfolio_projectBlockNameWrapper">
                        <span>{project.name}</span>
                      </div>

                      <div className="Portfolio_projectBlockDescWrapper">
                        <span>{project.desc}</span>
                      </div>

                      {
                        project.url &&
                        <div className="Portfolio_projectBlockUrlWrapper">
                          <span className="Portfolio_projectBlockUrl">{project.url.replace(/https?:\/\//, '')}</span>
                        </div>
                      }
                    </div>
                  </a>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  }
};
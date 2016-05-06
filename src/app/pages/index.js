import React from 'react';
import classNames from 'classnames';
// import Layout from '../Layout';

export default class HomePage extends React.Component {
  render() {
    const offer = [
      {
        name: 'Szybkie i proste strony-wizytówki',
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
        desc: 'strona jest estetyczna i funkcjonalna zarówno na ekranie monitora, jak i na tablecie czy smartfonie',
      },
      {
        name: 'SEO',
        desc: 'strona dobrze współpracuje z wyszukiwarkami internetowymi',
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
      {
        name: 'Duolingo Tree Progress Bookmarklet',
        desc: 'A little more info about your language learning progress',
        img: 'duolingo-tree-progress-bookmarklet-1.png',
        url: 'http://lukaszgrolik.github.io/duolingo-tree-progress-bookmarklet'
      },
      {
        name: 'Food Calc',
        desc: 'Calculate nutritional value and cost of your meals',
        img: 'food-calc-1.png',
        url: 'https://food-calc.meteor.com',
      },
      {
        name: 'Styleo Admin Theme',
        desc: 'Free Bootstrap Admin Theme',
        img: 'styleo-admin-theme-1.png',
        url: 'http://lukaszgrolik.github.io/styleo-admin-theme'
      },
      {
        name: 'GitHub Repos Stats',
        desc: 'Compare GitHub repositories',
        img: 'github-repos-stats-1.png',
        url: 'http://lukaszgrolik.github.io/repos-stats',
      },
    ];

    return <div>
      <div className="Header">
        <img src="images/logo-white.png" alt="" className="Header_logo" />
      </div>

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
                  <div className="Portfolio_projectBlock">
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
                          <a href={project.url}>{project.url.replace(/https?:\/\//, '')}</a>
                        </div>
                      }
                    </div>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  }
};
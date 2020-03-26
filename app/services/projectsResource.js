export default class ProjectsResource {

  getProjects(){
    let projects = [
      {
        client: 'Volt Europa',
        url: 'volt_europa',
        date: '2020-01-10',
        name: 'Front-end lead - Volt Europa ',
        img: 'img/volt-europa.svg',
        address: 'https://volteuropa.org',
        techniques: [ 'Nuxt','JS','SCSS'],
        text: `In de aanloop naar de Europese parlementsverkiezingen van 2019 heb ik een nieuw designsysteem gebouwd voor de verschillende websites van Volt.
        Daarna nam ik de rol aan van front-end lead waarin ik (mede) verwantwoordelijk was voor technische keuzes en advies binnen front-end projecten van Volt.`,
        type: 'Website'
      },
      {
        client: 'Summer School Utrecht',
        url: 'utrechtsummerschool',
        date: '2019-12-02',
        name: 'Ontwikkeling platform',
        img: 'img/uss_logo.svg',
        address: 'https://utrechtsummerschool.nl',
        techniques: [ 'PHP', 'Symfony', 'Webpack','JS','SCSS'],
        text: 'Summer School Utrecht is een samenwerking van Universiteit Utrecht, Hogeschool Utrecht en de Hogere School voor de Kunsten Utrecht. Tijdens de zomermaanden bieden zij gezamenlijk cursussen aan voor (uitwisselings)studenten en professionals. Wij verzorgen de doorontwikkeling van het platform van Summer School Utrecht dat er voor zorgt dat studenten zich kunnen inschrijven, docenten een overzicht hebben van de vakken die zij geven en de administratie inschrijvingen en betalingen kan verwerken.',
        type: 'Platform'
      },
      {
        client: 'Gemeente Amsterdam',
        url: 'gemeente_amsterdam',
        date: '2020-01-31',
        name: 'Full Stack Developer - Kies je kraam ',
        img: 'img/gemeente-amsterdam.svg',
        address: 'https://www.amsterdam.nl/ondernemen/markt-straathandel/digitaal-indelen/',
        techniques: [ 'Typescript', 'NodeJS', 'React','JS','SCSS','Postgres'],
        partners: [
          {
            "name":"TiltShift",
            "url":"http://www.tiltshift.nl"
          }
        ],
        text: `In opdracht van <a target="_blank" href="http://www.tiltshift.nl/">TiltShift</a> bouwde ik mee aan een webapp voor de markten in Amsterdam.
        Dagelijks tekenden in Amsterdam marktmeesters de plattegrond van elke markt in en kreeg iedereen met de hand een plekje toegewezen.
        Vanwege organisatorische en logistieke redenen was er vraag naar een digitale oplossing voor het indelen van de markt.
        In dit traject bouwden we aan een versie applicatie die kon proefdraaien in Amsterdam west op Plein 40 - 45.<br><br>
        Ik was als full stack developer verantwoordelijk voor ontwikkeling aan zowel de front-end als de back-end. Als voertaal gebruikten we Typescript en als database Postgres.
        Terwijl <a target="_blank" href="https://github.com/tjoekbezoer">Daan</a> de berekening schreef voor de indeling, zorgde ik ervoor dat het dashboard en alle andere plekken met gebruikersinteractie werden uitgewerkt.`,
        type: 'Webapp'
      },
      {
        client: 'Cello Festival Zutphen',
        url: 'cellofestivalzutphen',
        date: '2019-02-09',
        name: 'Ontwikkeling website',
        img: 'img/cfz_logo.svg',
        address: 'https://cellofestivalzutphen.nl',
        techniques: [ 'Nuxt', 'VueJS', 'Wordpress','JS','SCSS'],
        text: 'Om Cello Festival Zutphen de uitstraling te geven die het verdient ontwikkelde ik samen met <a target="_blank" href="http://www.launderette.nl/">Laundrette</a> een nieuwe website. De website is vormgegeven met de nadruk op typgrafie en geometrie. Hierdoor kon de nadruk op de boodschap blijven liggen en vertelt het product een aantrekkelijk verhaal.',
        type: 'Website'
      },
      {
        client: 'CrossOver',
        url: 'crossover',
        date: '2017-03-02',
        name: 'Ontwikkeling web-app',
        img: 'img/crossover.png',
        techniques: [ 'Angular', 'SCSS', 'Node','Express','MongoDB'],
        text: 'Voor Project CrossOver bouwden we een app om procesveranderingen per afdeling inzichtelijk te maken.',
        type: 'Webapp en backend',
        screenshots: [{
          url: 'img/crossover/login.png',
          file: 'login.png',
          direction: 'portrait'
        },{
          url: 'img/crossover/home.png',
          file: 'home.png',
          direction: 'portrait'
        },{
          url: 'img/crossover/archief.png',
          file: 'archief.png',
          direction: 'portrait'
        },{
          url: 'img/crossover/bericht.png',
          file: 'bericht.png',
          direction: 'portrait'
        },{
          url: 'img/crossover/labels.png',
          file: 'labels.png',
          direction: 'portrait'
        }]
      },
      {
        client: 'Groenlinks',
        url: 'glapp',
        date: '2019-12-05',
        name: 'Ontwikkeling web-app',
        img: 'img/groenlinks.png',
        address: 'https://glapp.nl',
        techniques: [ 'Angular', 'SCSS' ],
        text: 'Voor GroenLinks bouwden we een web-app om deur tot deur campaigning efficiënter te maken.',
        type: 'Webapp',
        screenshots: [{
          url: 'img/glapp/login.png',
          file: 'login.png',
          direction: 'portrait'
        },{
          url: 'img/glapp/home.png',
          file: 'home.png',
          direction: 'portrait'
        },{
          url: 'img/glapp/zoeken.png',
          file: 'zoeken.png',
          direction: 'portrait'
        },{
          url: 'img/glapp/postcode.png',
          file: 'postcode.png',
          direction: 'portrait'
        },{
          url: 'img/glapp/straat.png',
          file: 'straat.png',
          direction: 'portrait'
        },{
          url: 'img/glapp/interview.png',
          file: 'interview.png',
          direction: 'portrait'
        },{
          url: 'img/glapp/over.png',
          file: 'over.png',
          direction: 'portrait'
        }]
      },
      {
        client: 'De Lichtmeester',
        url: 'delichtmeester',
        date: '2017-07-05',
        name: 'Ontwikkeling website',
        img: 'img/delichtmeester.svg',
        address: 'http://delichtmeester.nl/content',
        techniques: [ 'Wordpress', 'SCSS', 'Webpack' ],
        text: 'Voor De Lichtmeester bouwden we een nieuwe showcase website om te laten zien wat voor mooie dingen Ton Westerik allemaal doet.',
        type: 'Wordpress website',
        screenshots: [{
          url: 'img/delichtmeester/home1.png',
          file: 'home1.png',
          direction: 'landscape'
        },{
          url: 'img/delichtmeester/lichtadvies.png',
          file: 'lichtadvies.png',
          direction: 'landscape'
        },{
          url: 'img/delichtmeester/navigation.png',
          file: 'navigation.png',
          direction: 'landscape'
        },{
          url: 'img/delichtmeester/projecten.png',
          file: 'projecten.png',
          direction: 'landscape'
        },{
          url: 'img/delichtmeester/contact.png',
          file: 'contact.png',
          direction: 'landscape'
        }]
      },

      {
        client: 'Sensire',
        url: 'sensire',
        date: '2019-11-05',
        name: 'Ontwikkeling website',
        img: 'img/sensire.svg',
        address: 'http://sensire.nl',
        techniques: [ 'Wordpress', 'SCSS', 'Node' ],
        text: 'Sensire had een nieuwe frisse website nodig. Daarom ontwikkelden we samen met de jongens van <a target="_blank" href="http://www.launderette.nl/">Laundrette</a> een nieuwe beeldtaal om invulling te geven aan het verhaal van Sensire. Door een iteratief proces aan te houden konden we bijsturen waar nodig waren we allemaal trots op het resultaat.' ,
        type: 'Website',
        screenshots: [{
          url: 'img/sensire/2.png',
          file: '2.png',
          direction: 'landscape'
        },{
          url: 'img/sensire/1.png',
          file: '1.png',
          direction: 'landscape'
        },{
          url: 'img/sensire/3.png',
          file: '3.png',
          direction: 'landscape'
        },{
          url: 'img/sensire/4.png',
          file: '4.png',
          direction: 'landscape'
        },{
          url: 'img/sensire/5.png',
          file: '5.png',
          direction: 'landscape'
        }]
      },
    ]
    return projects
  }

  getProject(url){
    var projects = this.getProjects()
    var project = projects.find(project => project.url === url)
    return project
  }

}

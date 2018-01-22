export default class ProjectsResource {

  getProjects(){
    let projects = [
      {
        client: 'CrossOver',
        url: 'crossover',
        name: 'CrossOver App',
        img: 'img/crossover.png',
        techniques: [ 'Angular', 'SCSS', 'Node','Express','MongoDB'],
        text: 'Voor Project CrossOver bouwden we een app om procesveranderingen per afdeling inzichtelijk te maken.',
        type: 'Webapp front-end en back-end',
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
        name: 'Glapp',
        img: 'img/groenlinks.png',
        address: 'https://glapp.nl',
        techniques: [ 'Angular', 'SCSS' ],
        text: 'Voor GroenLinks bouwden we een web-app om deur tot deur campaigning efficiënter te maken.',
        type: 'Web app front-end',
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
        name: 'De Lichtmeester',
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

      }
    ]
    return projects
  }

  getProject(url){
    var projects = this.getProjects()
    var project = projects.find(project => project.url === url)
    return project
  }

}

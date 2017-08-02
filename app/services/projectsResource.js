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
          file: 'login.png',
          direction: 'portrait'
        },{
          file: 'home.png',
          direction: 'portrait'
        },{
          file: 'archief.png',
          direction: 'portrait'
        },{
          file: 'bericht.png',
          direction: 'portrait'
        },{
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
        text: 'Voor GroenLinks bouwden we een app om deur tot deur campaigning mogelijk te maken.',
        type: 'Webapp front-end',
        screenshots: [{
          file: 'login.png',
          direction: 'portrait'
        },{
          file: 'home.png',
          direction: 'portrait'
        },{
          file: 'zoeken.png',
          direction: 'portrait'
        },{
          file: 'postcode.png',
          direction: 'portrait'
        },{
          file: 'straat.png',
          direction: 'portrait'
        },{
          file: 'interview.png',
          direction: 'portrait'
        },{
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
          file: 'home1.png',
          direction: 'landscape'
        },{
          file: 'lichtadvies.png',
          direction: 'landscape'
        },{
          file: 'navigation.png',
          direction: 'landscape'
        },{
          file: 'projecten.png',
          direction: 'landscape'
        },{
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

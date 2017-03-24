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
        screenshots: [ 'login.png', 'home.png', 'archief.png', 'labels.png', 'bericht.png' ]
      },
      {
        client: 'Groenlinks',
        url: 'glapp',
        name: 'Glapp',
        img: 'img/groenlinks.png',
        techniques: [ 'Angular', 'SCSS' ],
        text: 'Voor GroenLinks bouwden we een app om deur tot deur campaigning mogelijk te maken.',
        type: 'Webapp front-end',
        screenshots: [
          'home.png',
          'interview.png',
          'loading.png',
          'login.png',
          'over.png',
          'postcode.png',
          'straat.png',
          'zoeken.png'
        ]
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

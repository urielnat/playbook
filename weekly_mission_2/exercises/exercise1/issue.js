const issue={
    tittle: 'example',
    repositoryNameAssociated: 'Nodejs',
    status:'open',
    numberOfComments:0,
    labels:'test',
    author:'Uriel',
    dateCreated: Date(),
    lastUpdate: Date(),
    getTittleAndAuthor: function(){
        return `This issue ${this.tittle} was created by ${this.author}`
    },
    getGeneralInfo: function(){
      return `The issue ${this.tittle} was created at ${this.dateCreated}  by ${this.author} and its status is ${this.status}`
      
    }



}

console.log("Nombre del issue:" + issue.tittle)
console.log("Titulo y autor: " + issue.getTittleAndAuthor())
console.log(issue.getGeneralInfo())
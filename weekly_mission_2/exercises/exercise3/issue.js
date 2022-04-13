class issue{

    constructor(tittle, repositoryNameAssociated, status, numberOfComment, labels, author, dateCreated,
      lastUpdate){

      this.tittle = tittle
      this.repositoryNameAssociated = repositoryNameAssociated
      this.status = status
      this.numberOfComment = numberOfComment
      this.labels = labels
      this.author = author
      this.dateCreated = dateCreated
      this.lastUpdate = lastUpdate
    }
    getTittleAndAuthor(){
        return `This issue ${this.tittle} was created by ${this.author}`
    }
    getGeneralInfo(){
      return `The issue ${this.tittle} was created at ${this.dateCreated}  by ${this.author} and its status is ${this.status}`
      
    }



}
const obj = new issue('test','nodeJs','open',10,'test','UrielHdz', new Date, new Date)
console.log("Nombre del obj:" + obj.tittle)
console.log("Titulo y autor: " + obj.getTittleAndAuthor())
console.log(obj.getGeneralInfo())
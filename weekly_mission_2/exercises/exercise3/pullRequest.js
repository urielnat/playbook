class pullRequest{
    

    constructor(tittle,branchName, dateCreated,status, repositoryNameAssociated){
      this.tittle = tittle
      this.branchName = branchName
      this.dateCreated = dateCreated
      this.status = status
      this.repositoryNameAssociated = repositoryNameAssociated
    }

    getStatus(){
      return `The pull request have the status: ${this.status}`
    }
    getTittleAndAuthor(){
        return `This pull request ${this.tittle} was created in the repository ${this.repositoryNameAssociated}`
    }
      



}
const pull = new pullRequest('test','master',new Date(),'open','NodeJs')
console.log("Nombre del pull requst: " + pull.tittle)
console.log("Titulo y repo: " + pull.getTittleAndAuthor())
console.log(pull.getStatus())
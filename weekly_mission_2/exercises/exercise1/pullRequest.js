const pullRequest={
    tittle: 'example',
    branchName: 'master',
    dateCreated: Date(),
    status:'open',
    repositoryNameAssociated: 'Nodejs',
    getStatus: function(){
      return `The pull request have the status: ${this.status}`
    },
    getTittleAndAuthor: function(){
        return `This pull request ${this.tittle} was created in the repository ${this.repositoryNameAssociated}`
      }
      



}

console.log("Nombre del pull requst: " + pullRequest.tittle)
console.log("Titulo y repo: " + pullRequest.getTittleAndAuthor())
console.log(pullRequest.getStatus())
export default function basicOps(taskList,currStatus){

      if(currStatus== "active" || currStatus=="completed"){
      const updatedList = taskList.filter((task)=>task.status==currStatus)
        return updatedList;
    }
    else{
      
      return taskList;
    }

}
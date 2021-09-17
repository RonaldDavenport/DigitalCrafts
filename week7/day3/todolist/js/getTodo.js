

const submitButton = document.querySelector("button");
const deleteButton = document.querySelector(".Delete")
const viewButton = document.querySelector(".View")
const updateButton = document.querySelector(".Update")


const createTask = async (e) => {
  e.preventDefault()
    const url = "http://localhost:3002/createTask";
    console.log(url)
    const task = document.querySelector(".task").value;
    console.log(task)
    
    const userData = {
      task
    };
  
    const createUser = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      
    });
  };
  
  
const deleteTask = async (e) => {
    e.preventDefault()
    const idInput = document.querySelector(".id").value;
      const url = `http://localhost:3002/deleteTask/${idInput}`;
      console.log(url)
      
    
      console.log(idInput)
      
      const taskDelete = {
        idInput
      };
    
      const deleteTask = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      
      });
    };
    
const updateTask = async (e) => {
      e.preventDefault()
      const idInput = document.querySelector(".id").value;
      const update = document.querySelector(".taskToUpdate").value;
        const url = `http://localhost:3002/updateTask/${idInput}`;
        console.log(url)
        console.log(idInput)
        
    const taskUpdate = {
          task:update
          
        };
      
   const updateTask = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(taskUpdate),
        });
      };



    

submitButton.addEventListener("click",(e) => {
createTask(e);
});
deleteButton.addEventListener("click",(e)=>{
  deleteTask(e);
})
updateButton.addEventListener("click",(e)=>{
  updateTask(e);
})



Opening_Menu = ("Hello, Welcome to Your Personalized To-Do List\n\n\nPlease follow the below instructions to start your customization\n==========================\n Press the '1' key to add a task to your To-Do list\n Press the '2' key to delete a previously added task from your To-Do list\n Press the '3' key to view all task previously added to your To-Do list\n Press the 'Q' key to end your program\n")

keypressed = ""
YourToDoList = []


 
 
while (keypressed) != "q" :
    keypressed = input(Opening_Menu)
    
    if keypressed == "1":
     print("Add a task\n==========================")
     task = input("Enter a task to be added.")
     priority = input("Choose a priority. Either High, Medium, Or Low.")
     task_index = len(YourToDoList)+1
     actualtask = str(task_index) + "      " +task + "     "+ priority 
     YourToDoList.append(actualtask) 
     print("Task added to To-Do list :") 
     
    
    if keypressed == "2":
      print("All your task\n ==========================","\n" + YourToDoList)
      index_deletion = int(input("Which task would you like to delete? Please choose the numerical value associated with the task."))
      print("The selected task has been deleted. Press 3 to review your remaining tasks.", YourToDoList)
      del (YourToDoList[index_deletion])
      
    if keypressed == "3":
       print("Task Viewer\n ==========================")   
       print("All task", YourToDoList)
        
    elif keypressed == "q" :
        print("Thank you, Have a good day")   
     
     
    
    

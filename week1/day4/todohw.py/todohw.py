


mainmenu = ("\nPlease press 1 to add a task.\n Please press 2 to delete a task.\n Please press 3 to view a task\n Press q to exit the program\n\n ")
task = ""



YourToDolist = []



while (task) != "q":
  task = input(mainmenu)

  if task == "1":   
    title = input("Please add a task:")
    priority = input ("How high of a priority is this task:")
    taskNumber = len(YourToDolist) + 1
    task_ = str(taskNumber) + title + "  " + priority
    YourToDolist.append(task_)
    print("Task added succesfully. Press 3 to view")
    
  if task == "2":
    print("Task", YourToDolist)
    number_delete = int(input("Which do you want to delete?" )) 
    print("Your wish is my command, your task has now been deleted\n Press 3 to view all remaining tasks.", (YourToDolist) )
    del YourToDolist[number_delete]
  if task == "3":
    print("All task\n", YourToDolist)

  elif task == 'q':
    print ("Thanks for using my todo list, Have a Great Day!!") 
  




     
         
               
     
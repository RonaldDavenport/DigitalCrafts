
#  You need to ask the user for the input.
# A user should be able to create a shopping list. A shopping list consists of a title and address. Example = Fiesta, Walmart, Sams Club, Cosco, Randalls etc
# A user should be able to add multiple shoppings lists
# Give user an option to display the list
# A user should be able to add a grocery items to a particular shopping list. A grocery item consists of a title, price, quantity.
list_stores = []
all_list=[]


App_Opening=("Grocery To-Do App\n Create your shopping list\n Press 1 to create a list\n Press 2 to add to list\n Press 3 to display your list\n")
class shoppingList:
    def __init__(self,title,):
       self.title = title
       self.shopper_list = []  
   
        
        
       
class add_items:   
    def __init__ (self,item,price,quantity):
     self.item = item
     self.price = price
     self.quantity = quantity
     
        


user1_input = ""   
while user1_input != "q":
    user1_input=input(App_Opening)

    if user1_input == "1":
        print("Start your list\n\n")
        storename = input("Enter store name")
        store = shoppingList(storename)
        print("\n List has been created:\n" )
        list_stores.append(store)
        all_list.append(list_stores)
       
        
    if user1_input == "2":
       title= print("Enter your item of choice")
       list2=shoppingList(title)
       name = input("Enter your item")
       price = input("Price of your item")
       quantity=input("Quantity of your item")
       list3=add_items(name,price,quantity)
       list2.shopper_list.append(list3)
        
        
        

    if user1_input == "3":
     for alllist in all_list:
         for items in list2.shopper_list:
          print (list3.item)
          print(list3.price)
          print (list3.quantity)
             

          
       
       
        
        
        
          
           
           
       
    
    
        
        
        




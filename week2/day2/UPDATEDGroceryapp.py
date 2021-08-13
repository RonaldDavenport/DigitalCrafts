

#  You need to ask the user for the input.
# A user should be able to create a shopping list. A shopping list consists of a title and address. Example = Fiesta, Walmart, Sams Club, Cosco, Randalls etc
# A user should be able to add multiple shoppings lists
# Give user an option to display the list
# A user should be able to add a grocery items to a particular shopping list. A grocery item consists of a title, price, quantity.



list_of_stores = []
all_list = []
user_input = ""

def menu():
    print("Welcome to your personalized grocery list")
    print("Press 1 to start a new list.\nPress 2 to add to a list.\nPress 3 to view a list.\nPress q to quit application")

    
    
class store_useritems:
    def  __init__ (self):
        self.storeitems = []



class list_creation:
    def __init__(self,storename):
        self.storename = storename


class item_creation:
    def __init__(self,name_item,price_item,quantity_item):
        self.name_item = name_item
        self.price_item = price_item
        self.quantity_item = price_item



while user_input != "q":
    user_input = input(menu()) 
    if user_input == "1":
        print ("Start Your List!")
        store_index = len(list_of_stores)+1
        storename = input("What store will you be attending?: ")
        store_list = list_creation(storename)
        real_store= str(store_index) + " " + storename
        list_of_stores.append(real_store)
        all_list.append(real_store)
        for stores in list_of_stores:
         print (list_of_stores)

    if user_input == "2":
        items_for_list = store_useritems()
        print("Lets add items to your list")
        print(list_of_stores)
        name_of_item = input("Item Name: ")
        price_of_item = input("Item Price: ")
        quantity_of_item = input("Item Quantity: ")
        itemcreation = item_creation(name_of_item, price_of_item,quantity_of_item)
        real_item = itemcreation.name_item + "  " + itemcreation.price_item + "  "+ itemcreation.quantity_item
        items_for_list.storeitems.append(real_item)
        all_list.append(items_for_list.storeitems)


    if user_input == "3":
        for thelist in all_list:
         print(thelist)
         

        
        
        

    


              





        



   




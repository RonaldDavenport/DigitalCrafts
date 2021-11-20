




class hero():
    def __init__(self,name,health,attack):
        self.name=name
        self.health=health
        self.attack=attack
    def takeDamage(self,health):
        self.health -= health   

    
    
    
    
    
    
class villain():
    def __init__(self,name,health,attack):
        self.name=name
        self.health=health
        self.attack=attack
    
    
    def takeDamage(self,health):
        self.health -= health    


player1input= ""
def menu():
 print("\nYou have been allocated 100 health and 50 shield. Be wise with your choices.")
 print("\nYour Opponent:\n1\nDenos:\nMain ability is Super Strength\nHealth: 200 " )
 print("\n\n Prepare for battle\n")

 
userinput = input("Welcome to Hero Vs Villain : THE GAME\n\n Lets get started by creating your hero.\n\n Press 1 to begin:\n\n\n ") 
if userinput== "1":
 nameHero = input("Enter a name for your hero: ")
 attackHero = input("Select a weapon for your hero. Gun, Sword, Telepathy: ")   



 
      
else: 
    print("stop.read.......now try again")   

#  

 


 

 
 

 



user_hero=hero(nameHero,150,attackHero)
userVillain =villain("Denos",200,"Super Strength") 
           

while userVillain.health != 0:
    
    hero_damage=user_hero.takeDamage
    villain_damage=userVillain.takeDamage
    if user_hero.health == 0:
       
        break
    

    
    print("\n\nYour Hero:" + "  " + (user_hero.name))
    print("Your Health:" + "  " + str(user_hero.health))
    print("Your Weapon:" + "  " + (attackHero))
    player1input=input("\nYou are approached by a large 10'8, 850 pound creature. You've seen him on the news and social media terrorizing the entire planet.\nYou now have the chance to show you are that great hero you have been training for years to become. What is your first move?\n\n a. Run away like a coward and try to find safety\n\n b. Wait for his attack, Dodge, Hit him with your own\n\n c. ATTACK!!\n\nPress q to quit ")
    
    if player1input == "a":
      hero_damage(75)
      print("Your Hero:" + "  " + (user_hero.name))
      print("Your Health:" + "  " + str(user_hero.health)) 
      print("Your Weapon:" + "  " + (attackHero))
      print("\nVillain:" + " " + (userVillain.name))
      print("Villain Health:"+ " " + str(userVillain.health)) 
      a_input=input("Ouch!!!, As you were running he reached out and flicked you 100 feet backwards and you lost 75 health!! Whats your next move?\n\n a. Play Dead\n\n b. ATTACK!!\n\n c. Run again...?\n\n\nPress q to quit")
      
      if a_input == "a":
        hero_damage(75)
        print("Your Hero:" + "  " + (user_hero.name))
        print("Your Health:" + "  " + str(user_hero.health))
        print("Your Weapon:" + "  " + (attackHero))
        print("\nBy picking probably the worst option on the screen, you were stomped out. You lost the rest of your health, and died.\n\n")
        print("try again")
      elif a_input == "b":
        villain_damage(200)
        print("Your Hero:" + "  " + (user_hero.name))
        print("Your Health:" + "  " + str(user_hero.health)) 
        print("Your Weapon:" + "  " + (attackHero))
        print("\n\nVillain:" + " " + (userVillain.name))
        print("Villain Health:"+ " " + str(userVillain.health)) 
        print("\nWow!, You caught him off guard with your attack did 200 damage!!!\n\n YOU WIN!!!!!")    
      elif a_input == "c":
        hero_damage(75)
        print("Your Hero:" + "  " + (user_hero.name))
        print("Your Health:" + "  " + str(user_hero.health)) 
        print("Your Weapon:" + "  " + (attackHero))
        print("\n\nVillain:" + " " + (userVillain.name))
        print("Villain Health:"+ " " + str(userVillain.health)) 
        print("Oh no!, You made the same mistake as before and recieved the same result.\n\n You DIED!!!")  
       
    elif player1input =="b":
      villain_damage(50)
      print("Your Hero:" + "  " + (user_hero.name))
      print("Your Health:" + "  " + str(user_hero.health)) 
      print("Your Weapon:" + "  " + (attackHero))
      print("\n\nVillain:" + " " + (userVillain.name))
      print("Villain Health:"+ " " + str(userVillain.health))          
      b_input=input("You dodged his powerful right hand and hit him for 50 damage!! Whats your next move\n\n a. Attack again while he is stunned\n\n b. Make a run for it while he stunned\n\n c. Attempt a counter-attack again\n\n\nPress q to quit")
      if b_input == "a":
          villain_damage(150)
          print("Your Hero:" + "  " + (user_hero.name))
          print("Your Health:" + "  " + str(user_hero.health)) 
          print("Your Weapon:" + "  " + (attackHero))
          print("\n\nVillain:" + " " + (userVillain.name))
          print("Villain Health:"+ " " + str(userVillain.health)) 
          print("\n\nYour attack worked and you hit him again for 150 damage.\n\n YOU WIN!!!!")
      elif b_input == "b":
          hero_damage(150)
          print("Your Hero:" + "  " + (user_hero.name))
          print("Your Health:" + "  " + str(user_hero.health)) 
          print("Your Weapon:" + "  " + (attackHero))
          print("\n\nVillain:" + " " + (userVillain.name))
          print("Villain Health:"+ " " + str(userVillain.health)) 
         
          print("\n\nOh no!!, You were running and you tripped on a rock. He procceded to curb stomp you and did 150 damage.\n\n YOU DIED!!!")
           
      elif b_input == "c":
          villain_damage(150)
          print("Your Hero:" + "  " + (user_hero.name))
          print("Your Health:" + "  " + str(user_hero.health)) 
          print("Your Weapon:" + "  " + (attackHero))
          print("\n\nVillain:" + " " + (userVillain.name))
          print("Villain Health:"+ " " + str(userVillain.health)) 
         
          print("\n\nYour counter worked again!!, He threw a sloppy punch at you and you managed to dodge and hit him for 150 damage.\n\n YOU WIN!!!!")
        
    elif player1input == "c": 
      hero_damage(90)
      print("\n\nYour Hero:" + "  " + (user_hero.name))
      print("Your Health:" + "  " + str(user_hero.health)) 
      print("Your Weapon:" + "  " + (attackHero))
      print("\nVillain:" + " " + (userVillain.name))
      print("Villain Health:"+ " " + str(userVillain.health)) 
         
      c_input=input("You launched an attack but you were dodged and body slammed and took 90 damage!!!! Whats your next move?\n\n a. Attempt another attack\n\n b. Make a run for it\n\n c. Attempt a counter attack\n\n\n Press q to quit ")
      if c_input == "a":
          hero_damage(60)
          print("Your Hero:" + "  " + (user_hero.name))
          print("Your Health:" + "  " + str(user_hero.health)) 
          print("Your Weapon:" + "  " + (attackHero))
          print("\n\nVillain:" + " " + (userVillain.name))
          print("Villain Health:"+ " " + str(userVillain.health)) 
         
          print("\n\nOh no, Your attempt was dodged and you were hit for 60 damage!!!\n\nYOU DIED!!!")
      elif c_input == "b":
          hero_damage(60)
          print("Your Hero:" + "  " + (user_hero.name))
          print("Your Health:" + "  " + str(user_hero.health)) 
          print("Your Weapon:" + "  " + (attackHero))
          print("\n\nVillain:" + " " + (userVillain.name))
          print("Villain Health:"+ " " + str(userVillain.health)) 
         
          print("\n\nOh no, You were caught and super kicked 200 feet and you took 60 damage!!!!\n\nYOU DIED!!")  
      elif c_input == "c":
          villain_damage(200)
          print("Your Hero:" + "  " + (user_hero.name))
          print("Your Health:" + "  " + str(user_hero.health)) 
          print("Your Weapon:" + "  " + (attackHero))
          print("\n\nVillain:" + " " + (userVillain.name))
          print("Villain Health:"+ " " + str(userVillain.health)) 
         
          print("\n\nWow, you dodged his attack and hit him for 200 damage!\n\n YOU WIN!!!!!")  
      

    elif player1input == "Q" :
        break     
    elif userVillain.health >= 0:
        break
    
        
      
        
    
   
    









      

 





    
 

        


    


    
      




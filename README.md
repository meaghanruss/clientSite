# Welcome
This is a general overview of how the application works and what needs to be done by the user to set up the system.

The folders in this GitHub repository include the 'Understanding You' folder and src folder. The 'Understanding You' folder would be located in the clients folder and contains an example of the working application as 'client.exe' and there are a few folders that will be located in the 'Understanding You' folder. The src folder contains the source code used to create the application.

# Setting the Images
Before we open the application, there should be a folder called 'Images' in your 'Understanding You' folder, this folder will contain the images you wish to display in the application. To make it easy, the images need to be labelled according to their cooresponding part: the image for the Vision component will be named 'vision.jpg', for the Wealth Wheel the image will named 'wheel.jpg', for the client's name component the image will be named 'client.jpg', and the image for the Portfolio Review component will be named 'portfolio.jpg'. For the bottom banner that contains the name of the bank and the teams name, the images for that are named 'bank.png' and 'team.png' respectively. 

__*It's important to note that the images in the image folder need to be the exact name and format as stated above. Meaning the client, portfolio, vision, and wheel images must be jpg format, and the bank and team images must be png format.*__

# Starting the Application
To start the application, go into your 'Understanding You' folder and run then client.exe application as an administrator, the name of the executable file can be changed to anything of your choosing but the base name is client.exe.

Once the application is running, the following screen will be shown:
![image](https://user-images.githubusercontent.com/127133975/236402651-bab4db8c-b239-4be6-95d1-e73124029d39.png)

Located at the top of the page is where the font will be chosen. There are multiple different styles to choose from and the sample paragraph below shows the new font each time it's changed. This does reload the page with each time it's changed so the client name will have to be entered after the font is chosen and before saving, or reentered everytime the font is changed before saving. 

Once the font is chosen, then the client name needs to be filled out in the input box below. The client name will remain whatever is typed into the box, so double check for spelling mistakes before saving.

Lastly, set a file path for the 'Understanding You' folder contained in the client folder. This will allow the application to retrieve the Images used for the client, and allow the application to access the folders needed to open up files. Afterwards the save button is pressed and the data is saved in the localStorage of the system. This allows the client's name and font style to be reloaded each time the application is started without having to re-input the name or font.

After save is clicked, the client's page will appear like the image below:
![image](https://user-images.githubusercontent.com/127133975/235861471-83ae2d62-4dff-4336-beea-646b0395fc7b.png)


# Accessing Files
There are three clickable areas of the application:
  1. The 'Understanding You' label located above the client name
  2. The Portfolio Review box
  3. The Vision box

Each one brings you to a different file or folder. The 'Understanding You' click will bring open the 'Understanding You' folder for the client, the Portfolio review will open the 'Current.docx' click in the Portfolio Review folder, and lastly the Vision click will open the 'Current.docx' in the Vision folder.

To close the application, just close it like you would any other applicaiton.

# Reusing the application
To reuse the application, make sure to keep a master copy of the application before any data is saved into it. Once the data is saved, the application cannot be changed.

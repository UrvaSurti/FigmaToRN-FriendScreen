# FigmaToRN-FriendScreen
React-Native Frontend Project based on the Figma File provide
React-Native App Template 
A mobile application built using react-native.
		OR
A Figma file converted into a working react-native application screen.(Considering your application is setup with react-native (version synced as per the file) installed and emulator and gradles synced). Find the Code in master branch of the repository.

![Alt text](https://github.com/UrvaSurti/FigmaToRN-FriendScreen/blob/main/screenshots.png)

# Setup Instructions (if you system is not configured for react-native project)
Install nodejs Linke :- https://nodejs.org/en

Install android Studio :- https://developer.android.com/studio
	set ANDROID_HOME variable 
	steps 1. open Advance system setting
	      2. Environment variable  
	      3. Inside user variables create new and name that variable name as "ANDROID_HOME" and in variable value paste the path of android sdk (similar to C:\Users\"usersname"\AppData\Local\Android\Sdk)  
	      4. After setup variable open android studio and create virual device follow the link to create a virtual device emulator https://developer.android.com/studio/run/managing-avds

Install Java (preferable jdk 11) (Note this project wont work on java jdk19 as its not the most stable version)
Similar to the above steps set JAVA_HOME path where in 3rd step 
		1. Similar to above
		2. Similar to above		
		3. Variable name "JAVA_HOME" and variable value pdth of jdk11 (should be similar to this C:\Program Files\Java\jdk-11)	
		4. In system variable set variable path click edit and set paste the similar path as above with bin (similar to this C:\Program Files\Java\jdk-11\bin)

All set now follow the following steps given below 

# Clone the example app repo
git clone https://github.com/UrvaSurti/FigmaToRN-FriendScreen.git
cd FigmaToRN-FriendScreen ( navigate to the react-native folder mine is FigmaToRN-FriendScreen)

# Install npm dependencies
npm install --legacy-peer-deps
	
# Start Metro open a new terminal 
(Note you have to inside react-native project (ie cd TestProject))
code . (Optional if you want to navigate your screen to open the project in vscode)  
npx react-native start

# To Run the project on Emulator
(You can run this in the terminal inside vscode note have to be inside react project). 
npm run android

1. appium was printing error adb devices ... exited with code 1.  
The issue seemed to be one of having a space in ANDRIOD_SDK_HOME / ANDROID_HOME environment variables (android sdk install path)  
So I uninstalled android ask from C:\Program Files (x86)\Android\sdk and installed it to a location without space in path  
2. appium was printing error [ADB] Error: Error getting device platform version. Original error: Error executing adbExec. Original error: 'Command 'C\:\\Users\\sendh\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe -P 5037 -s 613fea29 shell getprop ro.build.version.release' exited with code 1'; Stderr: 'error: device unauthorized.  
https://stackoverflow.com/a/43984410 seems to work
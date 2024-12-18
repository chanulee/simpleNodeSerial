# simpleNodeSerial
client (index.html + other js) --> server.js --> Arduino (test.ino)  
This test code is set on Arduino uno R3.  
Based on the button pressed on the client (port 3000), Builtin LED of Arduino Uno blinks.  

## Initial set up / dependencies
Make sure that npm and nodeJS are installed on the device.

```
npm init -y
```

```
npm install express serialport
```

## How to use

1. Upload the arduino code
2. Close the serial monitor
3. Initiate server
```
node server.js
```
4. http://localhost:3000

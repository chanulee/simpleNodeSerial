void setup() {
  // Start serial communication
  Serial.begin(9600);
  
  // Set up built-in LED pin as output
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // Check if data is available to read
  if (Serial.available() > 0) {
    // Read the incoming byte
    char received = Serial.read();
    
    // Convert char to int
    int number = received - '0';
    
    // Validate the received number (1-5)
    if (number >= 1 && number <= 5) {
      // Blink LED according to the number received
      for (int i = 0; i < number; i++) {
        digitalWrite(LED_BUILTIN, HIGH);
        delay(500);  // On for 500ms
        digitalWrite(LED_BUILTIN, LOW);
        delay(500);  // Off for 500ms
      }
      // Additional delay between sequences
      delay(1000);
    }
  }
}
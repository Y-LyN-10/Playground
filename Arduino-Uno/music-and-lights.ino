/* 
This basic example turns the built in LED on for one second,
then off for one second, repeatedly.
*/

// Pin 13 has a LED connected so we give it a name:
int led = 13;

int greenLed1 = 10; 
int redLed1 = 8;
int yellowLed1 = 4;
int yellowLed2 = 3;
int redLed2 = 7;
int greenLed2 = 5;

int potPin = 5;    // select the input pin for the potentiometer
int ledPin = led;  // select the pin for the LED
int val = 0;       // variable to store the value coming from the sensor

int buttonState = 0;

// the setup routine runs once when you press reset:
void setup()
{
	// initialize the digital pin as an output.
	pinMode(led, OUTPUT);
	
	// Led lights
	pinMode(greenLed1, OUTPUT);
	pinMode(redLed1, OUTPUT);
	pinMode(yellowLed1, OUTPUT);
	pinMode(greenLed2, OUTPUT);
	pinMode(redLed2, OUTPUT);
	pinMode(yellowLed2, OUTPUT);
	
	// Button
	pinMode(2, INPUT);
}

// the loop routine runs over and over again forever:
void loop()
{
	buttonState = digitalRead(2);
	val = analogRead(potPin);    // read the value from the sensor
	
	if(buttonState == 1)
	{
		//Set the LED pin to HIGH. This gives power to the LED and turns it on
		digitalWrite(greenLed1, HIGH);
		delay(val);
		
		digitalWrite(greenLed1, LOW);
		digitalWrite(redLed1, HIGH);
		delay(val);
				
		digitalWrite(redLed1, LOW);
		digitalWrite(yellowLed1, HIGH);
		delay(val);	
				
		digitalWrite(yellowLed1, LOW);
		digitalWrite(yellowLed2, HIGH);
		delay(val);	
			
		digitalWrite(yellowLed2, LOW);
		digitalWrite(redLed2, HIGH);
		delay(val);
			
		digitalWrite(redLed2, LOW);
		digitalWrite(greenLed2, HIGH);
		delay(val);
			
		digitalWrite(greenLed2, LOW);
	}
}
//Define musical notes (*0.0000001)
#define tone_C 1911
#define tone_C1 1804
#define tone_D 1703
#define tone_Eb 1607
#define tone_E 1517
#define tone_F 1432
#define tone_F1 1352
#define tone_G 1276
#define tone_Ab 1204
#define tone_A 1136
#define tone_Bb 1073
#define tone_B 1012
#define tone_c 955
#define tone_c1 902
#define tone_d 851
#define tone_eb 803
#define tone_e 758
#define tone_f 716
#define tone_f1 676
#define tone_g 638
#define tone_ab 602
#define tone_a 568
#define tone_bb 536
#define tone_b 506
 
#define tone_p 0  //pause

// Led lights
const int greenLed1 = 10; 
const int redLed1 = 8;
const int yellowLed1 = 4;
const int yellowLed2 = 3;
const int redLed2 = 7;
const int greenLed2 = 5;

// Potentiometre
int potPin = 5;    // select the input pin for the potentiometer
int val = 0;       // variable to store the value coming from the sensor

const int speaker = 6; // speaker port

long vel = 20000; // velocity

// Button - to play only when it's pressed on
int buttonState = 0;

// the setup routine runs once when you press reset:
void setup()
{
	// Button
	pinMode(2, INPUT);
	
	// Led lights
	pinMode(greenLed1, OUTPUT);
	pinMode(redLed1, OUTPUT);
	pinMode(yellowLed1, OUTPUT);
	pinMode(greenLed2, OUTPUT);
	pinMode(redLed2, OUTPUT);
	pinMode(yellowLed2, OUTPUT);
	
	// Speaker
	pinMode(speaker, OUTPUT);
}

// Seems like some electric guitar solo...
int LTS_m[] = {tone_Bb, tone_G, tone_G, tone_Bb, tone_G, tone_G, tone_Bb, tone_G, tone_G, tone_Bb, tone_G, tone_G, tone_Bb, tone_G, tone_C, tone_G, tone_Bb, tone_G, tone_G, tone_Bb, tone_G, tone_G, tone_Bb, tone_G, tone_G, tone_Bb, tone_G, tone_G, tone_Bb, tone_G, tone_F, tone_D, tone_F, tone_D, tone_G, tone_F, tone_D, tone_C, tone_Bb, tone_G, tone_Bb, tone_C, tone_C1, tone_C, tone_Bb, tone_F, tone_D, tone_Bb, tone_G, tone_F, tone_D, tone_C, tone_Bb, tone_D, tone_C, tone_Bb, tone_G} ;
int LTS_r[] = {4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4};

// Smoooooooke on the waaater! \m/
int smoke_m[] = {tone_E, tone_G, tone_A, tone_E, tone_G, tone_Bb, tone_A, tone_E, tone_G, tone_A, tone_G, tone_E};
int smoke_r[] = {12, 12, 18, 12, 12, 6, 18, 12, 12, 18, 12, 24};

// mario
int mario_m[] = {tone_e, tone_e, tone_e, tone_c, tone_e, tone_g, tone_G, tone_c, tone_G, tone_E, tone_A, tone_B, tone_Bb, tone_A, tone_G, tone_e, tone_g, tone_a, tone_f, tone_g, tone_e, tone_c, tone_d, tone_B, tone_c};
int mario_r[] = {6, 12, 12, 6, 12, 24, 24, 18, 18, 18, 12, 12, 6, 12, 8, 8, 8, 12, 6, 12, 12, 6, 6, 6, 12};

// the loop routine runs over and over again forever:
void loop()
{
	val = analogRead(potPin);
	
	if(val < 512){
		digitalWrite(redLed2, HIGH);
	} 
	if(val > 511)
	{
		digitalWrite(redLed2, LOW);
	}
	
	int play_song_m[] = {tone_E, tone_G, tone_A, tone_E, tone_G, tone_Bb, tone_A, tone_E, tone_G, tone_A, tone_G, tone_E};;
	int play_song_r[] = {12, 12, 18, 12, 12, 6, 18, 12, 12, 18, 12, 24};;
	
	for (int i=0; i<42; i++) 
	{
		int tom = play_song_m[i];
	    int tempo = play_song_r[i];
		 
	    long tvalue = tempo * vel;
		 
	    tocar(tom, tvalue);
		 
		delay(50); //pause between notes!
	}
	 
	delay(1000);
}

void tocar(int tom, long tempo_value) 
{
    long tempo_gasto = 0;
    
    while (tempo_gasto < tempo_value) 
    {
    	buttonState = digitalRead(2);
    	
   		if(buttonState == 1)
   		{
			onOffLeds(tom, HIGH);
   			
   			digitalWrite(speaker, HIGH);
	        delayMicroseconds(tom / 2);

	        digitalWrite(speaker, LOW);
	        delayMicroseconds(tom/2);
	 
	        tempo_gasto += tom;
	        
			onOffLeds(tom, LOW);
   		}
    }
}

void onOffLeds(int tom, boolean to)
{
	if(tom == tone_G)
   	{
   		digitalWrite(greenLed1, to);
   	} 
   	else if(tom == tone_E)
   	{
   		digitalWrite(redLed1, to);
   	} 
   	else if(tom == tone_A)
   	{
   		digitalWrite(yellowLed1, to);
   	}
   	else if(tom == tone_Bb)
   	{
   		digitalWrite(greenLed2, to);
   	}
   	else
   	{
   		digitalWrite(yellowLed2, to);
   	}
}

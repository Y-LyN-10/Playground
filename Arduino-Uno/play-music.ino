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

const int speaker = 6; // speaker port
long vel = 20000; // velocity

// Button - to play only when it's pressed on
int buttonState = 0;

// the setup routine runs once when you press reset:
void setup()
{
	// Button
	pinMode(2, INPUT);
	
	// Speaker
	pinMode(speaker, OUTPUT);
}

// Song
int peergynt_m[] = {tone_G, tone_E, tone_D, tone_C, tone_D, tone_E, tone_G, tone_E, tone_D, tone_C, tone_D, tone_E, tone_D, tone_E,tone_G, tone_E, tone_G, tone_A, tone_E, tone_A, tone_G, tone_E, tone_D, tone_C};
int peergynt_r[] = {8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 16};

// the loop routine runs over and over again forever:
void loop()
{
	for (int i=0; i<42; i++) 
	{
		int tom = peergynt_m[i];
	    int tempo = peergynt_r[i];
		 
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
   		if(buttonState == 1){
   			digitalWrite(speaker, HIGH);
	        delayMicroseconds(tom / 2);
	 
	        digitalWrite(speaker, LOW);
	        delayMicroseconds(tom/2);
	 
	        tempo_gasto += tom;
   		}
    }
}
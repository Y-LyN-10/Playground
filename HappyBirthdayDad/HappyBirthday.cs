namespace RaichosNightmare
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Media;
    using System.Speech.Synthesis;
    using System.Threading;
    using System.Text;

    public class HappyBirthday
    {
        public static void Main()
        {
            Console.OutputEncoding = Encoding.GetEncoding("UTF-8");
            Console.CursorVisible = false;
            ConsoleColor originalColor = Console.ForegroundColor;
            Console.CursorLeft = 0;
            Console.WindowHeight = 50;
            Console.WindowWidth = 115;

            StreamReader screen = new StreamReader(@"..\..\media\Screen.txt");
            try
            {
                using (screen)
                {
                    List<string> startScreen = new List<string>();
                    string reader = screen.ReadLine();
                    while (reader != null)
                    {
                        startScreen.Add(reader);
                        reader = screen.ReadLine();
                    }

                    //TODO someday:
                    //http://stackoverflow.com/questions/5805774/how-to-generate-random-color-names-in-c-sharp
                    //Use Enum.GetValue to retrieve the values of the KnownColor enumeration and get a random value.

                    Console.WriteLine("\n");

                    Console.ForegroundColor = ConsoleColor.Green;
                    for (int i = 8; i < 12; i++)
                    {
                        Console.WriteLine(startScreen[i]);
                    }

                    Console.ForegroundColor = ConsoleColor.Magenta;
                    for (int i = 0; i < 8; i++)
                    {
                        Console.WriteLine(startScreen[i]);
                    }

                    Console.ForegroundColor = ConsoleColor.Green;
                    for (int i = 8; i < 12; i++)
                    {
                        Console.WriteLine(startScreen[i]);
                    }

                    Console.WriteLine("\n");
                    SpeechSynthesizer synth = new SpeechSynthesizer();
                    synth.SetOutputToDefaultAudioDevice();
                    synth.Speak("happy      birthday      dad");

                    SoundPlayer simpleSound = new SoundPlayer(@"..\..\media\HappyBirthdayBeeps.wav");
                    simpleSound.Play();

                    Thread.Sleep(300);

                    ////poem
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    for (int i = 14; i < 32; i++)
                    {
                        Console.WriteLine(startScreen[i]);
                        if (i < 25)
                        {
                            Thread.Sleep(600);
                        }
                        else
                        {
                        }
                    }

                    Thread.Sleep(3500);
                    Console.Clear();
                    Console.WriteLine("\n");

                    Console.ForegroundColor = ConsoleColor.Green;
                    for (int i = 8; i < 12; i++)
                    {
                        Console.WriteLine(startScreen[i]);
                    }

                    Console.ForegroundColor = ConsoleColor.Magenta;
                    for (int i = 0; i < 8; i++)
                    {
                        Console.WriteLine(startScreen[i]);
                    }

                    Console.ForegroundColor = ConsoleColor.Green;
                    for (int i = 8; i < 12; i++)
                    {
                        Console.WriteLine(startScreen[i]);
                    }

                    Console.ForegroundColor = ConsoleColor.Yellow;
                    for (int i = 32; i < 70; i++)
                    {
                        Console.WriteLine(startScreen[i]);
                    }

                    Thread.Sleep(8000);
                    for (int i = 72; i < 122; i++)
                    {
                        Thread.Sleep(100);
                        Console.WriteLine(startScreen[i]);
                        Console.ForegroundColor = ConsoleColor.Green;
                    }
                }
            }
            catch (FileNotFoundException)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Can't not find the loading screen file!");
            }
            catch (DirectoryNotFoundException)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("The path to the loading screen file is incorrect!");
            }
            catch (IOException)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Error with the loading screen file!");
            }
        }
    }
}

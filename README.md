# Dynamic Traffic Monitoring System

We propose a technique that can be used for traffic control using image processing. Traffic density
of lanes is calculated using image processing which is done of images of lanes that are captured
using digital camera. According to the traffic densities on all roads, our model will allocate smartly
the time period of green light for each road. We have chosen image processing for calculation of
traffic density as cameras are very much cheaper than other devises such as sensors.

### Requirements

- Raspberry Pi
- Web Camera
- GSM Module
- Thingspeak Account

### Dependencies

- Python 3.4+
- OpenCV 3.2.0 compiled with Python3 support
- RaspberryPi GPIO Libraries for Python

Tested on Raspbian Jessie.

### Setting up the data visualization

1. Log onto your ThingSpeak account.
2. Create a channel.
3. Get the API write key for the channel.
4. Paste the value in `sample.py`
5. Add the `analysis.m` file to the channel.
6. Once the script is running on the Pi (directions below) the data can be seen on the ThingSpeak dashboard.

### Running the project

To run the script, 
1. `ssh` onto a Raspberry Pi and clone the repository.
2. Run `python3 sample.py`

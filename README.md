# Dynamic Traffic Monitoring System

The system uses image processing to control traffic. Traffic density of lanes is calculated using image processing which is done using images of lanes that are captured using a camera and compared to reference images of lanes with no traffic. According to the traffic densities on all roads, our model will allocate intelligently the time period of green light for each road. We have chosen image processing for calculation of traffic density as cameras are readily available infrastructure on road intersections.

## Requirements

- Raspberry Pi Model 3
- Web Camera
- GSM Module
- Thingspeak Account

### Dependencies

- Python 3.4+
- OpenCV 3.2.0 compiled with Python3 support
- RaspberryPi GPIO Libraries for Python
- node.js (>= 6.0)
- MySQL
- Raspbian Jessie (or equivalent)

### Setting up the data visualization

1. Log into your ThingSpeak account.
2. Create a channel.
3. Get the API write key for the channel.
4. Paste the value in `sample.py`
5. Add the `analysis.m` file to the channel.
6. Once the script is running on the Pi (directions below) the data can be seen on the ThingSpeak dashboard.

### Running the script

To run the script,

1. `ssh` onto a Raspberry Pi and paste the contents of the `raspi-scripts` folder onto the Raspberry Pi.
2. Run `python3 sample.py`

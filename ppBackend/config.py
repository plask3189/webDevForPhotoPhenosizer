# config.py creates a config.ini file
# https://tutswiki.com/read-write-config-files-in-python/

from configparser import ConfigParser

#Get the configparser object
config_object = ConfigParser()

config_object["THRESHOLD"] = {
    # configforcolortoturntowhite is the value of the pixel RGB color that will be turned to white during thresholding. The default is 200 which is light grey
    "configforcolortoturntowhite" : '200'
}
#Write the above sections to config.ini file
with open('config.ini', 'w') as conf:
    config_object.write(conf)

from random import random
import random


def getRandomStyle() :
    with open('styles.txt') as f:
        lines = [line.rstrip('\n') for line in f]
    #print(lines)
    #print("Unmesh" + random.choice(lines))
    return random.choice(lines)

    


def writeStyleToFile(style) :
    f = open("currentStyle.txt", "w")
    f.write(style)
    f.close()

def readStyleFromFile() :
    with open('currentStyle.txt') as f:
        lines = [line.rstrip('\n') for line in f]
    print(lines[0])
    return lines[0]






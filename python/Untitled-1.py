import random

def readfile():
  wordfile = open("wordlist.1000thisone.txt", "r")
  words = wordfile.read()
  words = words.split("\n")
  wordfile.close()
  return words



def getword(short, long):
  length = random.randint(short, long)
  words = readfile()
  theword = random.choice(words)
  while len(theword) != length:
    theword = random.choice(words)
  return theword

low = 4
high = 10
secretword = getword( low, high)
print (secretword)


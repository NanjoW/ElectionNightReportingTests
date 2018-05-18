filename = "../cfiles/cfile_ballot.txt"

import os
script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
abs_file_path = os.path.join(script_dir, filename)

f = open(abs_file_path, "r")
data =  f.read()

part = data.replace('[','').replace(']','').split('\n')
people = []

for stuff in part:
    #print (stuff)
    details = stuff.split('|')
    people.append(details[-2])
print(people)

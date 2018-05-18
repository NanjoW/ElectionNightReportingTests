# filename = "../cfiles/cfile_assembly.txt"
# num = 80
filename = "../cfiles/cfile_senate.txt"
num = 40
# filename = "../cfiles/cfile_hrep.txt"
# num = 53
# filename = "../cfiles/cfile_boe.txt"
# num = 4

import os
script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
abs_file_path = os.path.join(script_dir, filename)

f = open(abs_file_path, "r")
data =  f.read()

part = data.replace('[','').replace(']','').split('\n')
people = [[] for i in range(num)]

for stuff in part:
    #print (stuff)
    details = stuff.split('|')
    people[int(details[3][7] if (details[3][6] == '0') else details[3][6:-4])-1].append(details[-1])
print(people)
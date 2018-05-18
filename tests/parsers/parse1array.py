# filename = "../cfiles/cfile_gov.txt"
# filename = "../cfiles/cfile_lutgov.txt"
# filename = "../cfiles/cfile_sos.txt"
# filename = "../cfiles/cfile_ctrl.txt"
# filename = "../cfiles/cfile_treasurer.txt"
# filename = "../cfiles/cfile_ag.txt"
# filename = "../cfiles/cfile_ic.txt"
# filename = "../cfiles/cfile_sopi.txt"
filename = "cfile_us_senate.txt"

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
    people.append(details[-1])
print(people)
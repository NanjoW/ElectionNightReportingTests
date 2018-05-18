import json
import os
import codecs
data = {}

filename = "../cfiles/supercfile.txt"
script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
abs_file_path = os.path.join(script_dir, filename)
f = open(abs_file_path, "r")
filedata =  f.read()

parts = filedata.replace('[','').replace(']','').split('\n')

for part in parts:
    sections = part.split("|")
    if (int(sections[3][6:-4])):
        # District Races
        if sections[3][:2] in data:
            if sections[3][6:-4] in data[sections[3][:2]]:
                data[sections[3][:2]][sections[3][6:-4]].append(sections[-1])
            else:
                people = []
                people.append(sections[-1])
                data[sections[3][:2]][sections[3][6:-4]] = people
        else:
            data[sections[3][:2]] = {}
            people = []
            people.append(sections[-1])
            data[sections[3][:2]][sections[3][6:-4]] = people
    else:
        # State Races and ballots. Ballots are "19"
        if sections[3][:2] in data:
            data[sections[3][:2]].append(sections[-2] if (int(sections[3][:2]) == 19) else sections[-1])
        else:
            people = []
            people.append(sections[-2] if (int(sections[3][:2]) == 19) else sections[-1])
            data[sections[3][:2]] = people

filename = "../data/data.json"
script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
abs_file_path = os.path.join(script_dir, filename)
file_object = codecs.open(abs_file_path, "w", "utf-8")
file_object.write(json.dumps(data, ensure_ascii=False))
file_object.close()
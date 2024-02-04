import json, sys

with open(sys.argv[1], "r") as file:
  prettier = json.loads(''.join(file.readlines()))
  print(prettier.dumps(indent=2))
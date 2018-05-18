# Election Night Reporting Application
Application for Election Night Reporting.

## Maps
 - Maps use SVG map to generate the map. The Paths are partitioned by county and you can interact with them via Javascript and JQuery. 
 - Typically Use jQuery to get the paths and then itterate through them and apply functions using Javascript. 
 - Maps use JSON to Map JS functions to generate the tables and set them. 
 - [ES7 Async/Await](https://javascript.info/async-await) is used to fetch the JSON from the API. 

## Player
 - Player uses JSON to generate tables. 
 - [ES7 Async/Await](https://javascript.info/async-await) is used to fetch the JSON from the API. 
 - Functions that generate the tables are JSON2Table & JSON2PropTable Functions. 
 - These are mainly just writing to the DOM and clearing previous HTML and generating new values using JSON from the API endpoint.
 - Styling is done with in-house css rules. 

## Testing
[![TestCafe](https://camo.githubusercontent.com/4768a232f5673b75a50c1ce8d6a46deb27563a79/68747470733a2f2f7261772e6769746875622e636f6d2f446576457870726573732f74657374636166652f6d61737465722f6d656469612f6c6f676f2e706e67)](https://testcafe.devexpress.com/)
 - Python script to parse C-message files and drop them into a JSON file. 
 - Change filelocation in parese file and run:
```sh
python parsercomplete.py
```
 - Testing is done via TestCafe Framework written in Javascript
 - After parsing the JSON to file you should be able to run test. 

### Installation

TestCafe requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and run the tests.

```sh
$ cd vote-www
$ npm install -g testcafe
$ npm install utf8
$ testcafe "chrome" tests/
```
There are multiple ways you can run the tests. on different browsers and on multiple cores.
The -e flag ignores many javscript errors that might arise in a debugging enviroment. 
```sh
$ testcafe "chrome" tests/
$ testcafe "edge" tests/
$ testcafe -c 8 "chrome:headless" tests/ -e 
```

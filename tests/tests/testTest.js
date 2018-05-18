const jsonData = require('../data/data.json');
const utf8 = require('utf8');
import Page from '../models/returns-page-model';
import { Selector } from 'testcafe';

fixture `Fixture for Tests`;
const races = {
    "01":"President",
    "02":"Governor",
    "03":"Lieutenant Governor",
    "04":"Secretary of State",
    "05":"Controller",
    "06":"Treasurer",
    "07":"Attorney General",
    "08":"Insurance Commissioner",
    "09":"Board of Equalization",
    "10":"U.S. Senate",
    "11":"U.S. House of Representatives",
    "12":"State Senate",
    "13":"State Assembly",
    "14":"",
    "15":"",
    "16":"Superintendent of Public Instruction",
    "17":"",
    "18":"",
    "19":"Ballot Measures"
}
// Set which enviroment to test
const env = 'http://localhost:8000/'

for(var attributename in jsonData){ //This pulls all the keys for every key:value pair in the object
    let raceindex = attributename; 
    let title = races[raceindex]; 
    if (typeof jsonData[raceindex][0]  === 'string' || jsonData[raceindex][0] instanceof String){
        // THESE ARE THE STATEWIDE RACES **** COMPLETED ****
        const sitepage = `${env}returns/${title.toLowerCase().replace(new RegExp("[.]", 'g'), '').replace(new RegExp(' ', 'g'), '-')}`; //Get the page to test with
        test.page(sitepage) //set-up test
        (`Test for ${title}`, async t => { //test begins here. This is Async so variables used need to be scoped.
            const page = new Page(); //Page Model instance
            await t //This is interaction with page elements. Also Async so requires await
                .expect(page.title.textContent).contains(`${title} - Statewide Results`);
            for(let i = 0; i < jsonData[raceindex].length; i++) { //This should be people's Names.
                if (title == "Ballot Measures")
                    await t.expect(page.propTable.child('*').withText(jsonData[raceindex][i]).exists).ok();
                else
                    await t.expect(page.table.child('*').withText(jsonData[raceindex][i]).exists).ok();
            }
            if (title == "Ballot Measures"){
                const countyList = await page.countyResults.find("a");
                for (let j = 1; j < await countyList.count; j++){
                    var curCounty = await countyList.nth(j).textContent;
                    await t
                        .click(countyList.nth(j))
                        .expect(Selector("h1").textContent).contains(`${title} - ${curCounty} County Results`)
                        .navigateTo(sitepage);
                }
            }
        });
    }
    else {
        // THESE ARE THE DISTRICT RACES *****COMPLETED*****
        for (var attributename in jsonData[raceindex]){
            const distTitle = title == "U.S. House of Representatives" ? "us-rep" : title;
            const racetitle = races[raceindex] == "Board of Equalization" ? "Board of Equalization Member" : races[raceindex];
            const district = parseInt(attributename);
            const people = jsonData[raceindex][attributename];
            const sitepage = `${env}returns/${distTitle.toLowerCase().replace(new RegExp("[.]", 'g'), '').replace(new RegExp(' ', 'g'), '-')}/district/${district}`;
            // console.log(sitepage);
            test.page(sitepage)
            (`Test for ${races[raceindex]} District ${district}`, async t => {
                const page = new Page();
                await t
                    .expect(page.title.textContent).contains(`${racetitle} District ${district}`);
                for(let j = 0; j < people.length; j++) {
                    await t.expect(page.table.child('*').withText(utf8.decode(people[j])).exists).ok();
                }
                const countyList = await page.countyResults.find("a");
                for (let j = 1; j < await countyList.count; j++){
                    var curCounty = await countyList.nth(j).textContent;
                    await t
                        .click(countyList.nth(j))
                        .expect(Selector("h1").textContent).contains(`${racetitle} District ${district} - ${curCounty} County Results`)
                        .navigateTo(sitepage);
                }
            });
        }
    }
} 
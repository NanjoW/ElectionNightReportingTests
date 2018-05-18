import Page from '../models/returns-page-model';
import { Selector } from 'testcafe';

fixture `Fixture for Statewide Tests`;
//const env = 'http://votedev01/'
const env = 'http://vote-test.sos.ca.gov/'
//const env = 'http://localhost:8000/'

//GOVERNOR TEST
const govPeople = ['Akinyemi Agbede', 'Delaine Eastin', 'Albert Caesar Mezzetti', 'Thomas Jefferson Cares', 'Klement Tinaj', 'J. Bribiesca', 'John Chiang', 'Gavin Newsom', 'Michael Shellenberger', 'Antonio Villaraigosa', 'Amanda Renteria', 'Robert Davidson Griffis', 'Yvonne Girard', 'Robert C. Newman, II', 'John H. Cox', 'Peter Y Liu', 'Travis Allen', 'Christopher N. Carlson', 'Josh Jones', 'Nickolas Wildstar', 'Zoltan Istvan', 'Gloria Estela La Riva', 'Desmond Silveira', 'Jeffrey Edward Taylor', 'Johnny Wattenburg', 'Shubham Goel', 'Hakan "Hawk" Mikado'];
const governor = `${env}returns/governor`;
test.page(governor)
(`Test for Governor`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`Governor - Statewide Results`);
    for(let i = 0; i < govPeople.length; i++) {
        //console.log(govPeople[i])
        await t.expect(page.table.child('*').withText(govPeople[i]).exists).ok();
    }
    const countyList = await page.countyResults.find("a");
    for (let j = 1; j < await countyList.count; j++){
        var curCounty = await countyList.nth(j).textContent;
        await t
            .click(countyList.nth(j))
            .expect(Selector("h1").textContent).contains(`Governor - ${curCounty} County Results`)
            .navigateTo(governor);
    }
});

//LIEUTENANT GOVERNOR TEST
const lutGovPeople = ['Cameron Gharabiklou', 'Ed Hernandez', 'Eleni Kounalakis', 'Jeff Bleich', 'David R. Hernandez', 'Cole Harris', 'David Fennell', 'Lydia Ortega', 'Tim Ferreira', 'Gayle McLaughlin', 'Danny Thomas'];
const lutGovernor = `${env}returns/lieutenant-governor`;
test.page(lutGovernor)
(`Test for Lieutenant Governor`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`Lieutenant Governor - Statewide Results`);
    for(let i = 0; i < lutGovPeople.length; i++) {
        //console.log(lutGovPeople[i])
        await t.expect(page.table.child('*').withText(lutGovPeople[i]).exists).ok();
    }
    const countyList = await page.countyResults.find("a");
    for (let j = 1; j < await countyList.count; j++){
        var curCounty = await countyList.nth(j).textContent;
        await t
            .click(countyList.nth(j))
            .expect(Selector("h1").textContent).contains(`Lieutenant Governor - ${curCounty} County Results`)
            .navigateTo(lutGovernor);
    }
});

//SECRETARY OF STATE TEST
const sosPeople = ['Alex Padilla', 'Ruben Major', 'Mark P. Meuser', 'Raul Rodriguez Jr', 'Michael Feinstein', 'Erik Rydberg', 'Gail K. Lightfoot', 'C. T. Weber'];
const sos = `${env}returns/secretary-of-state`;
test.page(sos)
(`Test for Secretary of State`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`Secretary of State - Statewide Results`);
    for(let i = 0; i < sosPeople.length; i++) {
        //console.log(sosPeople[i])
        await t.expect(page.table.child('*').withText(sosPeople[i]).exists).ok();
    }
    const countyList = await page.countyResults.find("a");
    for (let j = 1; j < await countyList.count; j++){
        var curCounty = await countyList.nth(j).textContent;
        await t
            .click(countyList.nth(j))
            .expect(Selector("h1").textContent).contains(`Secretary of State - ${curCounty} County Results`)
            .navigateTo(sos);
    }
});

//CONTROLLER TEST
const ctrlPeople = ['Betty T. Yee', 'Konstantinos Roditis', 'Mary Lou Finley'];
const ctrl = `${env}returns/controller`;
test.page(ctrl)
(`Test for Controller`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`Controller - Statewide Results`);
    for(let i = 0; i < ctrlPeople.length; i++) {
        //console.log(ctrlPeople[i])
        await t.expect(page.table.child('*').withText(ctrlPeople[i]).exists).ok();
    }
    const countyList = await page.countyResults.find("a");
    for (let j = 1; j < await countyList.count; j++){
        var curCounty = await countyList.nth(j).textContent;
        await t
            .click(countyList.nth(j))
            .expect(Selector("h1").textContent).contains(`Controller - ${curCounty} County Results`)
            .navigateTo(ctrl);
    }
});

//TREASURER TEST
const treasurerPeople = ['Fiona Ma', 'Vivek Viswanathan', 'Jack M. Guerrero', 'Greg Conlon', 'Kevin Akin'];
const treasurer = `${env}returns/treasurer`;
test.page(treasurer)
(`Test for Treasurer`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`Treasurer - Statewide Results`);
    for(let i = 0; i < treasurerPeople.length; i++) {
        //console.log(treasurerPeople[i])
        await t.expect(page.table.child('*').withText(treasurerPeople[i]).exists).ok();
    }
    const countyList = await page.countyResults.find("a");
    for (let j = 1; j < await countyList.count; j++){
        var curCounty = await countyList.nth(j).textContent;
        await t
            .click(countyList.nth(j))
            .expect(Selector("h1").textContent).contains(`Treasurer - ${curCounty} County Results`)
            .navigateTo(treasurer);
    }
});

//ATTORNEY GENERAL TEST
const agPeople = ['Dave Jones', 'Xavier Becerra', 'Steven C Bailey', 'Eric Early'];
const ag = `${env}returns/attorney-general`;
test.page(ag)
(`Test for Attorney General`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`Attorney General - Statewide Results`);
    for(let i = 0; i < agPeople.length; i++) {
        //console.log(agPeople[i])
        await t.expect(page.table.child('*').withText(agPeople[i]).exists).ok();
    }
    const countyList = await page.countyResults.find("a");
    for (let j = 1; j < await countyList.count; j++){
        var curCounty = await countyList.nth(j).textContent;
        await t
            .click(countyList.nth(j))
            .expect(Selector("h1").textContent).contains(`Attorney General - ${curCounty} County Results`)
            .navigateTo(ag);
    }
});

//INSURANCE COMMISSIONER TEST
const icPeople = ['Ricardo Lara', 'Asif Mahmood', 'Nathalie Hrizi', 'Steve Poizner'];
const ic = `${env}returns/insurance-commissioner`;
test.page(ic)
(`Test for Insurance Commissioner`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`Insurance Commissioner - Statewide Results`);
    for(let i = 0; i < icPeople.length; i++) {
        //console.log(icPeople[i])
        await t.expect(page.table.child('*').withText(icPeople[i]).exists).ok();
    }
    const countyList = await page.countyResults.find("a");
    for (let j = 1; j < await countyList.count; j++){
        var curCounty = await countyList.nth(j).textContent;
        await t
            .click(countyList.nth(j))
            .expect(Selector("h1").textContent).contains(`Insurance Commissioner - ${curCounty} County Results`)
            .navigateTo(ic);
    }
});

//SUPERINTENDENT OF PUBLIC INSTUCTION TEST
const sopiPeople = ['Marshall Tuck', 'Steven Ireland', 'Lily (Espinoza) Ploski', 'Tony K. Thurmond'];
const sopi = `${env}returns/superintendent-of-public-instruction`;
test.page(sopi)
(`Test for Superintendent of Public Instruction`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`Superintendent of Public Instruction - Statewide Results`);
    for(let i = 0; i < sopiPeople.length; i++) {
        //console.log(sopiPeople[i])
        await t.expect(page.table.child('*').withText(sopiPeople[i]).exists).ok();
    }
    const countyList = await page.countyResults.find("a");
    for (let j = 1; j < await countyList.count; j++){
        var curCounty = await countyList.nth(j).textContent;
        await t
            .click(countyList.nth(j))
            .expect(Selector("h1").textContent).contains(`Superintendent of Public Instruction - ${curCounty} County Results`)
            .navigateTo(sopi);
    }
});

//US SENATE TEST
const usSenatePeople = ['Herbert G. Peters', 'David Hildebrand', 'Donnie O. Turner', 'Alison Hartson', 'Gerald Plummer', 'Adrienne Nicole Edwards', 'Kevin De Leon', 'Dianne Feinstein', 'Douglas Howard Pierce', 'Pat Harris', 'Jerry Joseph Laws', 'Erin Cruz', 'John "Jack" Crew', 'Mario Nabliba', 'Kevin Mottus', 'Patrick Little', 'Paul A Taylor', 'Roque "Rocky" De La Fuente', 'Arun K. Bhumitra', 'Tom Palzer', 'James P Bradley', 'Derrick Michael Reid', 'John Thompson Parker', 'Don J. Grundmann', 'Tim Gildersleeve', 'Jason M. Hanania', 'Lee Olson', 'Michael Fahmy Girgis', 'Ling Ling Shi', 'David Moore', 'Rash Bihari Ghosh', 'Colleen Shea Fernald'];
const usSenate = `${env}returns/us-senate`;
test.page(usSenate)
(`Test for U.S. Senate`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`U.S. Senate - Statewide Results`);
    for(let i = 0; i < usSenatePeople.length; i++) {
        //console.log(usSenatePeople[i])
        await t.expect(page.table.child('*').withText(usSenatePeople[i]).exists).ok();
    }
    const countyList = await page.countyResults.find("a");
    for (let j = 1; j < await countyList.count; j++){
        var curCounty = await countyList.nth(j).textContent;
        await t
            .click(countyList.nth(j))
            .expect(Selector("h1").textContent).contains(`U.S. Senate - ${curCounty} County Results`)
            .navigateTo(usSenate);
    }
});

//BALLOT MEASURES TEST
const ballots = ['Natural Resources Bond', 'Transportation Revenue: Restrictions and Limits', 'Greenhouse Gas Reduction Reserve Fund', 'Ballot Measures: Effective Date', 'Property Tax: New Construction: Rain-Capture'];
const ballotsPage = `${env}returns/ballot-measures`;
test.page(ballotsPage)
(`Test for Ballot Measures`, async t => {
    const page = new Page();
    await t
        .expect(page.title.textContent).contains(`State Ballot Measures - Statewide Results`);
    for(let i = 0; i < ballots.length; i++) {
        //console.log(ballots[i])
        await t.expect(Selector(".propTblCounty").child('*').withText(ballots[i]).exists).ok();
    }
});
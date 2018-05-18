import Page from '../models/returns-page-model';
import { Selector } from 'testcafe';

fixture `Fixture for State Tests`;
//const env = 'http://votedev01/'
const env = 'http://vote-test.sos.ca.gov/'
//const env = 'http://localhost:8000/'

//STATE ASSEMBLY TESTS
const ass = 80;
const assemblyPeople = [['Peter Van Peborgh', 'Caleen Sisk', 'Brian Dahle', 'Jenny O Connell-Nowain'], ['Jim Wood', 'Matt Heath'], ['Sonia Aery', 'James Gallagher'], ['Cecilia Aguiar-Curry'], ['Carla J. Neal', 'Frank Bigelow'], ['Jacalyn "Jackie" Smith', 'Kevin Kiley'], ['Kevin McCarty'], ['Ken Cooley', 'Melinda Avey', 'Janice Marlae Bonser', 'Lawrence Ray Murray'], ['Harry He', 'Jim Cooper', 'Mario Garcia'], ['Dan Monte', 'Marc Levine'], ['Jim Frazier', 'Diane Stewart', 'Lisa Romero'], ['Robert D. Chase', 'Heath Flora'], ['Susan Talamantes Eggman', 'Carlos Villapudua', 'Antonio M. Garcia'], ['Tim Grayson', 'Aasim Yahya'], ['Buffy Wicks', 'Rochelle Pardue-Okimoto', 'Cheryl Sudduth', 'Owen Poindexter', 'Judy Appel', 'Sergey Vikramsingh Piterman', 'Ben Bartlett', 'Raquella Thaman', 'Dan Kalb', 'Jovanka Beckles', 'Andy Katz', 'Pranav Jandhyala'], ['Rebecca Bauer-Kahan', 'Catharine Baker'], ['Alejandro Fernandez', 'David Chiu'], ['Rob Bonta', 'Stephen Slauson'], ['Phil Ting', 'Keith Bogdon', 'David Ernst'], ['Bill Quirk'], ['Adam C. Gray'], ['Kevin Mullin', 'Christina Laskowski', 'Bridget Duffy'], ['Aileen Rizo', 'Jim Patterson'], ['Marc Berman', 'Alex Glew', 'Bob Goodwyn'], ['Kansen Chu', 'Carmen Montano', 'Bob Brunton', 'Robert Imhoff'], ['Jose Sigala', 'Devon Mathis', 'Warren Gubler', 'Jack Lavers'], ['Ash Kalra'], ['Evan Low', 'Michael L. Snyder'], ['Mark Stone', 'Vicki L. Nohrden'], ['Trina Coffman-Gomez', 'Robert Rivas', 'Peter Leroe-Muñoz', 'Bill Lipe', 'Neil G. Kitchens'], ['Joaquin Arambula', 'Lupe Espinoza'], ['Rudy Salas', 'Justin Mendes'], ['Socorro Cisneros', 'Scott Markovich', 'Jay Obernolte'], ['Nick Nicita', 'Vince Fong'], ['Bill Ostrander', 'Jordan Cunningham'], ['Steve Fox', 'Tom Lackey'], ['S. Monique Limón', 'David L. Norrdin', 'Sofia Collin'], ['Christy Smith', 'Dante Acosta'], ['Luz Maria Rivas', 'Antonio Sanchez', 'Patrea Patrick', 'Patty Lopez', 'Bonnie Corwin', 'Ricardo Antonio Benitez'], ['Libbern Gwen Cook', 'James C. Ramos', 'Henry Gomez Nickel'], ['Chris Holden', 'Kenneth (Kenny) Rotter', 'Alan S. Reynolds'], ['DeniAntionette Mazingo', 'Gary Jeandron', 'Andrew F. Kotyuk', 'Chad Mayes', 'Carol A. Bouldin'], ['Laura Friedman'], ['Robert Zelinsky', 'Jacqui Irwin', 'Ronda Baldwin-Kennedy'], ['Daniel Brin', 'Ray Bishop', 'Tricia Robbins Kasson', 'Ankur Patel', 'Jesse Gabriel', 'Jeff Bornstein', 'Justin M. Clark'], ['Adrin Nazarian', 'Roxanne Beckford Hoge'], ['Eloise Reyes'], ['Blanca E. Rubio'], ['Ed Chau', 'Burton Brink'], ['Richard Bloom'], ['Wendy Carrillo'], ['Frank C. Guzman', 'Freddie Rodriguez', 'Toni Holle', 'Ben W. Gibbins'], ['Miguel Santiago', 'Kevin Hee Young Jang', 'Rae Elisabeth Henry', 'Michael A. Lewis'], ['Breon Dupree Hollie', 'Tepring Michelle Piquado', 'Sydney K. Kamlager', 'Steve Dunwoody', 'Lamar Lyons', 'Glen Ratcliff'], ['Gregg D. Fritchle', 'Melissa Fazli', 'Phillip Chen', 'James G. Gerbus', 'Scott Lebda'], ['Eduardo Garcia', 'Jonathan Reiss', 'Jeff Gonzalez'], ['Blake Sullivan Carter', 'Justin Joshua Valero', 'Ian C. Calderon', 'Jessica Martinez', 'Oscar J. Llamas'], ['Cristina Garcia', 'Miguel Angel Alvarado', 'John Paul Drayer', 'Ivan Altamirano', 'Karla V. Salazar', 'Pedro Aceituno', 'Friné (Lore) Medrano', 'Mike Simpfenderfer'], ['Reggie Jones-Sawyer', 'Leslie Hagan-Morgan'], ['Sabrina Cervantes', 'Bill Essayli'], ['Jose Medina'], ['Autumn Burke', 'Al L. Hernandez'], ['Anthony Rendon', 'Maria D. Estrada', 'Adam Joshua Miller'], ['Mike A. Gipson'], ['Sharon Quirk-Silva', 'Alexandria "Alex" Coronado'], ['Al Muratsuchi', 'Caney Arnold', 'Frank A. Scotto'], ['Michelle Singleton', 'Melissa Melendez'], ['Michelle Duman', 'Steven S. Choi'], ['Tom Daly'], ['Elliot Ruben Gonzales', "Patrick O'Donnell", 'Rachel Alexandra Bruhnke', 'Honor "Mimi" Robson'], ['James Elia', 'Randy Voepel', 'Larry A. Wilske'], ['Josh Lowenthal', 'Greg Haskin', 'Long Pham', 'Tyler Diep', 'Richard Laird'], ['Scott Rhinehart', 'William (Bill) Brough', 'Ed Sachs'], ['Cottie Petrie-Norris', 'Ryan Ta', 'Karina Onofre', 'Katherine Daigle', 'Matthew Harper'], ['Alan Geraci', 'Marie Waldron'], ['Elizabeth Warren', 'Tasha Boerner Horvath', 'Philip "Phil" Graham', 'Jerome Stocks', 'Thomas E. Krouse', 'Brian Wimmer', 'Amanda Rigby', 'Maureen "Mo" Muir'], ['Sunday Gover', 'Brian Maienschein'], ['Todd Gloria', 'Maggie J. Campbell'], ['Shirley N. Weber', 'John Moore'], ['Lorena Gonzalez Fletcher', 'Lincoln Pickard']];
for(let i = 0; i < ass; i++) {
    const assembly = `${env}returns/state-assembly/district/${i+1}`;
    test.page(assembly)
    (`Test for State Assembly District ${i+1}`, async t => {
        const page = new Page();
        await t
            .expect(page.title.textContent).contains(`State Assembly District ${i+1}`);
        for(let j = 0; j < assemblyPeople[i].length; j++) {
            // console.log(people[i][j])
            await t.expect(page.table.child('*').withText(assemblyPeople[i][j]).exists).ok();
        }
        const countyList = await page.countyResults.find("a");
        for (let j = 1; j < await countyList.count; j++){
            var curCounty = await countyList.nth(j).textContent;
            await t
                .click(countyList.nth(j))
                .expect(Selector("h1").textContent).contains(`State Assembly District ${i+1} - ${curCounty} County Results`)
                .navigateTo(assembly);
        }
    });
}

//STATE SENATE
const odd = false;
const sen = 40;
const senatePeople = [[], ['Mike McGuire', 'Veronica "Roni" Jacobi'], [], ['Michael "Mike" Worley', 'Phillip Kim', 'James Nielsen'], [], ['Jacob Mason', 'Richard Pan', 'Janine DeRose', 'Eric Frame'], [], ['Tom Pratt', 'Paulina Miranda', 'Andreas Borgeas', 'Mark Belden'], [], ['Bob Wieckowski', 'Victor G. San Vicente', 'Ali Sarsak'], [], ['Daniel Parra', 'Anna Caballero', 'Johnny Tacherra', 'Rob Poythress'], [], ['Melissa Hurtado', 'Abigail Solis', 'Ruben Macareno', 'Andy Vidak'], [], ['Ruth Musser-Lopez', 'Shannon Grove', 'Gregory Tatum'], [], ['Bob Hertzberg', 'Roger James Sayegh', 'Brandon Saario', 'Rudy Melendez'], [], ['Paul Vincent Avila', 'Connie Leyva', 'Matthew Munson'], [], ['Ruben Sierra', 'Monica Garcia', 'Mike Eng', 'Susan Rubio'], [], ['Maria Elena Durazo', 'Peter Choi'], [], ['Ben Allen', 'Mark Matthew Herd', 'Baron Bruno'], [], ['Joy Silver', 'Anna Nevenic', 'Jeff Stone'], [], ['Holly J. Mitchell'], [], ['Tony Mendoza', 'Vivian Romero', 'Vicky Santana', 'Bob J. Archuleta', 'Vanessa Delgado', 'Ali S. Taj', 'Rudy Bermudez', 'David Castellanos', 'Ion Sarega', 'Rita Topalian'], [], ['Jestin L. Samson', 'Tom Umberg', 'Akash A. Hawkins', 'Janet Nguyen'], [], ['Marggie Castellano', "Patricia C. 'Pat' Bates"], [], ['Jeff Griffith', 'Brian W. Jones', 'Antonio Salguero'], [], ['Ben Hueso', 'Luis R. Vargas']];

for(let i = odd ? 0 : 1; i < sen; i+=2){
    const senate = `${env}returns/state-senate/district/${i+1}`
    test.page(senate)
    (`Test for State Senate District ${i+1}`, async t =>{
        const page = new Page();
        await t
            .expect(page.title.textContent).contains(`State Senate District ${i+1}`);
        for(let j = 0; j < senatePeople[i].length; j++) {
            // console.log(senatePeople[i][j])
            await t.expect(page.table.child('*').withText(senatePeople[i][j]).exists).ok();
        }
        const countyList = await page.countyResults.find("a");
        for (let j = 1; j < await countyList.count; j++){
            var curCounty = await countyList.nth(j).textContent;
            await t
                .click(countyList.nth(j))
                .expect(Selector("h1").textContent).contains(`State Senate District ${i+1} - ${curCounty} County Results`)
                .navigateTo(senate);
        }
    });
}

//STATE HOUSE
const house = 53;
const housePeople = [['David Peterson', 'Audrey Denney', 'Jessica Jones Holcombe', 'Marty Walters', 'Doug La Malfa', 'Gregory Edward Cheadle', 'Lewis Elbinger'], ['Jared Huffman', 'Andy Caffrey', 'Dale K. Mensing'], ['John Garamendi', 'Kevin Puett', 'Charlie Schaupp'], ['Regina Bateson', 'Roza Calderon', 'Jessica Morse', 'Robert Lawton', 'Tom McClintock', 'Mitchell White'], ['Mike Thompson', 'Jason Kishineff', 'Nils Palsson', 'Anthony Mills'], ['Doris Matsui', 'Jrmar Jefferson'], ['Ami Bera', 'Yona Barash', 'Andrew Grant', 'Robert Christian "Chris" Richardson', 'Reginald H. Claytor'], ['Ronald J. ODonnell', 'Rita Ramirez', 'Marjorie "Marge" Doyle', 'Paul Cook', 'Tim Donnelly'], ['Jerry McNerney', 'Marla Livengood', 'Mike A. Tsarnas'], ['Virginia Madueño', 'Michael J. "Mike" Barkley', 'Sue Zwahlen', 'Josh Harder', 'Dotty Nygard', 'Michael Eggman', 'Jeff Denham', 'Ted D. Howze'], ['Mark DeSaulnier', 'Dennis Lytton', 'John Fitzgerald', 'Chris Wood'], ['Stephen Jaffe', 'Ryan A. Khojasteh', 'Nancy Pelosi', 'Shahid Buttar', 'Lisa Remmer', 'Barry Hermanson', 'Michael Goldstein'], ['Barbara Lee'], ['Jackie Speier', 'Cristina Osmeña'], ['Eric Swalwell', 'Rudy L. Peters Jr.', 'Brendan St. John'], ['Jim Costa', 'Elizabeth Heng'], ['Ro Khanna', 'Khanh Tran', 'Stephen Forbes', 'Ron Cohen', 'Kennita Watson'], ['Anna G. Eshoo', 'Christine Russell', 'John Karl Fredrich'], ['Zoe Lofgren'], ['Douglas Deitch', 'Jimmy Panetta', 'Ronald Paul Kabat'], ['TJ Cox', 'David G. Valadao'], ['Andrew Janz', 'Ricardo "Rico" Franco', 'Bobby Bliatout', 'Devin G. Nunes', 'Bill Merryman', 'Brian T. Carroll'], ['Wendy Reed', 'Tatiana Matta', 'Kurtis Wilson', 'Mary Helen Barro', 'Kevin McCarthy', 'James Davis'], ['Salud Carbajal', 'Michael Erin Woody', 'Justin Fareed'], ['Bryan Caforio', 'Katie Hill', 'Mary Pallant', 'Jess Pelaez Phoenix', 'Steve Knight'], ['Julia Brownley', 'John Nelson', 'Jeffrey D. Burum', 'Antonio Sabato, Jr.'], ['Bryan Witt', 'Judy Chu'], ['Adam B. Schiff', 'Sal Genovese', 'Johnny J. Nalbandian'], ['Tony Cardenas', 'Joseph "Joe" Shammas', 'Benito Benny Bernal', 'Angelica Maria Dueñas', 'Juan Rey'], ['Brad Sherman', 'Raji Rab', 'Jon Pelzer', 'Mark S. Reed'], ['Pete Aguilar', 'Kaisar Ahmed', 'Sean Flynn'], ['Grace Flores Napolitano'], ['Ted W. Lieu', 'Emory P. Rodgers', 'Kenneth Weston Wright'], ['Jimmy Gomez', 'Kenneth Mejia', 'Angela Elise McArdle'], ['Norma J. Torres', 'Joe Baca', 'Christian Leonel Valiente'], ['Raul Ruiz', 'Stephan J. Wolkowicz', 'Robert Bentley', 'Douglas Hassett', 'Kimberlin Brown Pelzer', 'Dan Ball'], ['Karen Bass', 'Ron J. Bassilian'], ['Linda T. Sánchez', 'Ryan Downing'], ['Suzi Park Leggett', 'Herbert H. Lee', 'Sam Jammal', 'Mai Khanh Tran', 'Andy Thorburn', 'Gil Cisneros', 'John J. Cullum', 'Young Kim', 'Andrew Sarega', 'Shawn Nelson', 'Steven C. Vargas', 'Bob Huff', 'Phil Liberatore', 'Sophia J. Alexander', 'Ted M. Alemayhu', 'Karen Lee Schatzle', 'Steve Cox'], ['Lucille Roybal-Allard', 'Rodolfo Cortes Barragan'], ['Mark Takano', 'Aja Smith'], ['Norman Quintero', 'Julia C Peacock', 'Ken Calvert', 'Matt Woody'], ['Maxine Waters', 'Frank T. DeMartini', 'Edwin P. Duterte', 'Omar Navarro', 'Miguel Angel Zuniga'], ['Nanette Diaz Barragán', 'Aja L. Brown', 'Jazmina Saavedra', 'Stacey Dash'], ['Dave Min', 'Kia Hamadanchy', 'Katie Porter', 'Brian Forde', 'Mimi Walters', 'John Graham'], ['Lou Correa', 'Russell Rene Lambert', 'Ed Rushman', 'Will Johnson'], ['Alan Lowenthal', 'David Michael Clifford', 'John Briscoe'], ['Hans Keirstead', 'Tony Zarkades', 'Omar A. Siddiqui', 'Michael Kotick', 'Deanie Schaarsmith', 'Rachel Payne', 'Harley Rouda', 'Laura Oatman', 'Dana Rohrabacher', 'Stelian Onufrei', 'John Gabbard', 'Paul Martin', 'Shastina Sandman', 'Scott Baugh', 'Brandon Reiser', 'Kevin Kensinger'], ['Mike Levin', 'Paul G. Kerr', 'Sara Jacobs', 'Doug Applegate', 'Brian Maryott', 'Craig A. Nordal', 'Joshua Schoonover', 'Diane L. Harkey', 'David Medway', 'Mike Schmitt', 'Kristin Gaspar', 'Rocky J. Chávez', 'Danielle St. John', 'Joshua L. Hancock', 'Jordan P. Mills', 'Robert Pendleton'], ['Ammar Campa-Najjar', 'Josh Butner', 'Patrick Malloy', 'Duncan Hunter', 'S. "Shamus" Sayed', 'Bill Wells', 'Richard Kahle'], ['Juan Vargas', 'John R. Renison Jr.', 'Louis A. Fuentes', 'Juan M. Hidalgo Jr.', 'Juan Carlos "Charlie" Mercado', 'Kevin Mitchell'], ['Scott Peters', 'Jeffrey Cullen', 'Danny Casara', 'John Horst', 'James Veltmeyer', 'Michael Allman', 'Omar Qudrat'], ['Susan A. Davis', 'Matt Mendoza', 'Brett A. Goda', 'Morgan Murtaugh', 'Shawn Gino Kane', 'Bryan Kim']];

for(let i = 0; i < house; i++) {
    const hrep = `${env}returns/us-rep/district/${i+1}`;
    test.page(hrep)
    (`Test for U.S. House of Representatives District ${i+1}`, async t => {
        const page = new Page();
        await t
            .expect(page.title.textContent).contains(`U.S. House of Representatives District ${i+1}`);
        for(let j = 0; j < housePeople[i].length; j++) {
            // console.log(housePeople[i][j])
            await t.expect(page.table.child('*').withText(housePeople[i][j]).exists).ok();
        }
        const countyList = await page.countyResults.find("a");
        for (let j = 1; j < await countyList.count; j++){
            var curCounty = await countyList.nth(j).textContent;
            await t
                .click(countyList.nth(j))
                .expect(Selector("h1").textContent).contains(`U.S. House of Representatives District ${i+1} - ${curCounty} County Results`)
                .navigateTo(hrep);
        }
    });
}

//STATE BOARD OF EQUALIZATION
const board = 4;
const boardPeople = [['Tom Hallinan', 'David Evans', 'Ted Gaines', 'Connie Conway'], ['Cathleen Galgiani', 'Malia Cohen', 'Barry Chang', 'Mark Burns'], ['Cheryl C. Turner', 'Nancy Pearlman', 'Scott Svonkin', 'Doug Kriegel', 'Ben Pak', 'Tony Vazquez', 'G. Rick Marshall', 'Micheál "Me-Haul" O\'Leary'], ['Ken Lopez-Maddox', 'David Dodson', 'Mike Schaefer', 'John F. Kelly', 'Joel Anderson', 'Nader F. Shahatit', 'Jim Stieringer']];
for(let i = 0; i < board; i++) {
    const hrep = `${env}returns/board-of-equalization/district/${i+1}`;
    test.page(hrep)
    (`Test for Board of Equalization Member District ${i+1}`, async t => {
        const page = new Page();
        await t
            .expect(page.title.textContent).contains(`Board of Equalization Member District ${i+1}`);
        for(let j = 0; j < boardPeople[i].length; j++) {
            // console.log(boardPeople[i][j])
            await t.expect(page.table.child('*').withText(boardPeople[i][j]).exists).ok();
        }
        const countyList = await page.countyResults.find("a");
        for (let j = 1; j < await countyList.count; j++){
            var curCounty = await countyList.nth(j).textContent;
            await t
                .click(countyList.nth(j))
                .expect(Selector("h1").textContent).contains(`Board of Equalization Member District ${i+1} - ${curCounty} County Results`)
                .navigateTo(hrep);
        }
    });
}
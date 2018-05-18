import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.title                 = Selector('h1');
        this.table                 = Selector('.stateCountyCandResultsTbl');
        this.propTable             = Selector('.propTblCounty');
        this.countyResults         = Selector('.findDistrict');
    }
}
export class DieSta extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "sta";

    /** @override */
    get total(){
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
			"1": '',
            "2": '<img src="modules/sta-dice-roller/img/badge.jpeg" />',
            "3": '<img src="modules/sta-dice-roller/img/badge.jpeg" />',
            "4": '<img src="modules/sta-dice-roller/img/doublehit.jpeg" />',
			"5": '<img src="modules/sta-dice-roller/img/hit.jpeg" />',			
            "6": ''
        }[result.result];
    }
}
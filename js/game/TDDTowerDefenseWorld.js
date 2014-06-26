TDDTowerDefenseWorld.prototype = new World();
TDDTowerDefenseWorld.prototype.constructor = TDDTowerDefenseWorld;

function TDDTowerDefenseWorld() {

    World.call(this);

    this.foes = [];

};

TDDTowerDefenseWorld.prototype.addFoe = function (foe) {

    this.foes.push(foe);
    return this;

};

TDDTowerDefenseWorld.prototype.removeFoe = function (foe) {

    var foeIndex = this.foes.indexOf(foe);

    if(foeIndex != -1) {
        this.foes.splice(foeIndex, 1);
    }

    return this;

};

TDDTowerDefenseWorld.prototype.getFoes = function () {

    return this.foes;

};
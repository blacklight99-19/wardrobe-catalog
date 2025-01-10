//OBJECT CONSTRUCTORS
class wardrobe {
    constructor(name, color, type, wtw) {
        this._name = name;
        this._color = color;
        this._type = type;
        this._whereToWhere = wtw;
        this._combinationNum = 0;
        this._combinationArr = [];
    }
    incrementCombo() {
        this._combinationNum++;
    }
}

class top extends wardrobe {
    constructor(name, color, wtw) {
        super(name, color, 'Top', wtw);
    }
}

class pant extends wardrobe {
    constructor(name, color, wtw) {
        super(name, color, 'Pant', wtw);
    }
}

class skirt {
    constructor(name, color, wtw) {
        this._name = name;
        this._color = color;
        this._type = 'Skirt';
        this._whereToWhere = wtw;
    }
}

//GLOBAL VARIABLES DELACRED
export const arrTops = [];
export const arrPants = [];
export const arrSkirts = [];

//ADDING DATA
const addTops = () => {
    const top1 = new top('Stripped Full Sleeve', 'Green & White', 'Casual');
    const top2 = new top(`Aj's Aunty Top`, 'Red', 'Kinda Fancy Casual');
    const top3 = new top('Collar Necked Crop', 'Light Blue', 'Casual & Fancy');
    const top4 = new top('Holy Sweatshirt', 'White and Black', 'Casual and Cold');
    const top5 = new top('Black Thick Cropped', 'Black', 'Casual and Cold');
    const top6 = new top('Black Off Shoulder', 'Black', 'Fancy');
    const top7 = new top('Unworn Black Top', 'Black', 'Casual');
    const top8 = new top(`Nakshi's Top`, 'Dark Green', 'Casual and Hot');
    const top9 = new top('Churidar Black', 'Black', 'Traditional');
    const top10 = new top(`Amma's Coord`, 'Black and Orange', 'Casual and Hot');
    const top11 = new top('Pondi Shirt', 'White and Blue', 'Gypsy');
    const top12 = new top('Crochet Blue Cropped', 'Blue', 'Fancy Casual');
    const top13 = new top('Jeans Corset', 'Blue', 'Casual');
    const top14 = new top('White See Through', 'White', 'Casual and Cold');
    const top15 = new top('White Seashells', 'White', 'Casual and Hot');
    const top16 = new top('White Dragon', 'White', 'Casual');
    const top17 = new top('Red Savana', 'Red', 'Casual and Cold');
    const top18 = new top('Black Version Savana', 'Black', 'Casual and Cold');
    arrTops.push(top1, top2, top3, top4, top5, top6, top7, top8, top9, top10, top11, top12, top13, top14, top15, top16, top17, top18);
}; addTops();

const addPants = () => {
    const pant1 = new pant('Grey Jeans', 'Grey', 'Kinda Formal');
    const pant2 = new pant('Stringy Cargos', 'Green', 'Casual');
    const pant3 = new pant('White Bootleg', 'White', 'Casual & Formal');
    const pant4 = new pant('Jorts', 'White', 'Casual');
    const pant5 = new pant('Thai Skirt', 'Green', 'Casual');
    const pant6 = new pant('Black Flowery', 'Black and Pink', 'Casual & Traditional');
    const pant7 = new pant('Grey Cargos', 'Grey', 'Casual');
    const pant8 = new pant('Soft Grey Cargo', 'Light Grey', 'Casual');
    const pant9 = new pant('Jeans', 'Blue', 'Casual');
    arrPants.push(pant1, pant2, pant3, pant4, pant5, pant6, pant7, pant8, pant9);
}; addPants();

const addSkirt = () => {
    const skirt1 = new skirt('Zebra', 'Dull Yellow and Grey', 'Casual / Gypsy');
    const skirt2 = new skirt('Black Party Wear', 'Black w/patterns', 'Fancy');
    const skirt3 = new skirt('Black Jumpsuit', 'Black', 'Formal');
    arrSkirts.push(skirt1, skirt2, skirt3);
}; addSkirt();

//COMBINATIONS
const combinations = [
    {pant: arrPants[0], top: arrTops[0]},
    {pant: arrPants[0], top: arrTops[2]},
    {pant: arrPants[0], top: arrTops[4]},
    {pant: arrPants[0], top: arrTops[5]},
    {pant: arrPants[0], top: arrTops[6]},
    {pant: arrPants[0], top: arrTops[7]},
    {pant: arrPants[0], top: arrTops[9]},
    {pant: arrPants[0], top: arrTops[11]},
    {pant: arrPants[0], top: arrTops[13]},
    {pant: arrPants[0], top: arrTops[14]},
    {pant: arrPants[0], top: arrTops[16]},
    {pant: arrPants[0], top: arrTops[17]},
    {pant: arrPants[1], top: arrTops[0]},
    {pant: arrPants[1], top: arrTops[2]},
    {pant: arrPants[1], top: arrTops[4]},
    {pant: arrPants[1], top: arrTops[6]},
    {pant: arrPants[1], top: arrTops[11]},
    {pant: arrPants[1], top: arrTops[12]},
    {pant: arrPants[1], top: arrTops[15]},
    {pant: arrPants[1], top: arrTops[16]},
    {pant: arrPants[1], top: arrTops[17]},
    {pant: arrPants[2], top: arrTops[1]},
    {pant: arrPants[2], top: arrTops[2]},
    {pant: arrPants[2], top: arrTops[5]},
    {pant: arrPants[2], top: arrTops[11]},
    {pant: arrPants[2], top: arrTops[16]},
    {pant: arrPants[2], top: arrTops[17]},
    {pant: arrPants[3], top: arrTops[10]},
    {pant: arrPants[4], top: arrTops[0]},
    {pant: arrPants[4], top: arrTops[16]},
    {pant: arrPants[4], top: arrTops[17]},
    {pant: arrPants[5], top: arrTops[16]},
    {pant: arrPants[6], top: arrTops[0]},
    {pant: arrPants[6], top: arrTops[1]},
    {pant: arrPants[6], top: arrTops[2]},
    {pant: arrPants[6], top: arrTops[3]},
    {pant: arrPants[6], top: arrTops[4]},
    {pant: arrPants[6], top: arrTops[10]},
    {pant: arrPants[6], top: arrTops[11]},
    {pant: arrPants[6], top: arrTops[12]},
    {pant: arrPants[6], top: arrTops[13]},
    {pant: arrPants[6], top: arrTops[14]},
    {pant: arrPants[6], top: arrTops[16]},
    {pant: arrPants[6], top: arrTops[17]},
    {pant: arrPants[7], top: arrTops[2]},
    {pant: arrPants[7], top: arrTops[4]},
    {pant: arrPants[7], top: arrTops[10]},
    {pant: arrPants[7], top: arrTops[11]},
    {pant: arrPants[7], top: arrTops[12]},
    {pant: arrPants[7], top: arrTops[14]},
    {pant: arrPants[7], top: arrTops[15]},
    {pant: arrPants[7], top: arrTops[16]},
    {pant: arrPants[7], top: arrTops[17]},
    {pant: arrPants[8], top: arrTops[5]},
    {pant: arrPants[8], top: arrTops[7]},
    {pant: arrPants[8], top: arrTops[8]},
    {pant: arrPants[8], top: arrTops[9]},
    {pant: arrPants[8], top: arrTops[13]},
    {pant: arrPants[8], top: arrTops[14]},
    {pant: arrPants[8], top: arrTops[15]},
    {pant: arrPants[8], top: arrTops[16]},
    {pant: arrPants[8], top: arrTops[17]}
];

//INCREMENT COMBOS
combinations.forEach(({ pant, top }) => {
    pant.incrementCombo();
    top.incrementCombo();
});

// ADD UNIQUE COMBINATIONS
combinations.forEach(({ pant, top }) => {
    if (!top._combinationArr.includes(pant._name)) {
        top._combinationArr.push(pant._name);
    }

    if (!pant._combinationArr.includes(top._name)) {
        pant._combinationArr.push(top._name);
    }
});
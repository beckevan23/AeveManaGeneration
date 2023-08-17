let startingMana = prompt ("How much mana do you currently have in your mana pool?");
let startingStormCount = prompt ("What is your current Storm count?");
let startingAeves = prompt ("How many Aeves do you currently have?");
let tax = prompt ("How many times have you cast Aeve from the Command Zone?");
let casts = prompt ("How many times would you like to cast Aeve using Food Chain?");
let mana = 0;
let cost = 0;
let castCount = 1;
let currentAeves = 0;

function AeveCalc() {
    mana = Number(startingMana);
    cost = (5 + (tax * 2));
        console.log("Starting mana = " + mana);
        console.log("Starting Aeves = " + startingAeves);
        console.log("Storm Count = " + startingStormCount);
        console.log("Starting cost = " + cost);
    for (i = 0; i <= 1; i++) {
        if (i <= 0) {
            console.log("Cast number " + castCount + ". Mana gained from sacrifice = " + (6 * startingAeves));
            mana += (6 * startingAeves);
            console.log("Cast number " + castCount + ". TOTAL mana after sac = " + mana);
            mana = mana - cost;
            console.log("Cast number " + castCount + ". Cost = " + cost);
            cost += 2;
            console.log("Cast number " + castCount + ". Net mana = " + mana);
            castCount++;
            startingStormCount++;
        } else {
            for (i=Number(startingStormCount); i<=Number(casts - 2) + Number(startingStormCount); i++) {
                    console.log("Cast number " + castCount + ". Mana gained from sacrifice = " + (6 * i));
                    mana += (6 * i);
                    console.log("Cast number " + castCount + ". TOTAL mana after sac = " + mana);
                    mana = mana - cost;
                    console.log("Cast number " + castCount + ". Cost = " + cost);
                    cost += 2;
                    console.log("Cast number " + castCount + ". Net mana = " + mana);
                    castCount++;
            }
        }
    }
    //return mana;
}
//prompt(casts);
//startingStormCount;
//startingAeves;
//alert(AeveCalc());
AeveCalc();
alert("Your resulting mana to spend on creature spells is: " + mana + " green mana!");

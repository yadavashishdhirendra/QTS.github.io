function showAll() {
    var allSecton = document.getElementById('all_sections');
    var legalSection = document.getElementById('legal_section');
    var scientificSection = document.getElementById('scientific_section');
    var financialSection = document.getElementById('financial_section');
    var creativeSection = document.getElementById('creative_section');
    var bgOne = document.getElementById('div1');
    if (allSecton.style.display === 'none') {
        allSecton.style.display = 'block';
        bgOne.backgroundColor = 'red';
        legalSection.style.display = 'none';
        scientificSection.style.display = 'none';
        financialSection.style.display = 'none';
        creativeSection.style.display = 'none';
    }
    else {
        // do something
    }
}


function ShowLegal() {
    var allSecton = document.getElementById('all_sections');
    var legalSection = document.getElementById('legal_section');
    var scientificSection = document.getElementById('scientific_section');
    var financialSection = document.getElementById('financial_section');
    var creativeSection = document.getElementById('creative_section');
    if (legalSection.style.display === 'none') {
        legalSection.style.display = 'block';
        allSecton.style.display = 'none';
        scientificSection.style.display = 'none';
        financialSection.style.display = 'none';
        creativeSection.style.display = 'none';
    }
    else {
        // do something
    }
}

function showScientific() {
    var allSecton = document.getElementById('all_sections');
    var legalSection = document.getElementById('legal_section');
    var scientificSection = document.getElementById('scientific_section');
    var financialSection = document.getElementById('financial_section');
    var creativeSection = document.getElementById('creative_section');
    if (scientificSection.style.display === 'none') {
        scientificSection.style.display = 'block';
        legalSection.style.display = 'none';
        allSecton.style.display = 'none';
        financialSection.style.display = 'none';
        creativeSection.style.display = 'none';
    }
    else {
        // do something
    }
}

function showFinancial() {
    var allSecton = document.getElementById('all_sections');
    var legalSection = document.getElementById('legal_section');
    var scientificSection = document.getElementById('scientific_section');
    var financialSection = document.getElementById('financial_section');
    var creativeSection = document.getElementById('creative_section');
    if (financialSection.style.display === 'none') {
        financialSection.style.display = 'block';
        allSecton.style.display = 'none';
        legalSection.style.display = 'none';
        scientificSection.style.display = 'none';
        creativeSection.style.display = 'none';
    }
    else {
        // do something
    }
}

function showCreative() {
    var allSecton = document.getElementById('all_sections');
    var legalSection = document.getElementById('legal_section');
    var scientificSection = document.getElementById('scientific_section');
    var financialSection = document.getElementById('financial_section');
    var creativeSection = document.getElementById('creative_section');
    if (creativeSection.style.display === 'none') {
        creativeSection.style.display = 'block';
        financialSection.style.display = 'none';
        allSecton.style.display = 'none';
        legalSection.style.display = 'none';
        scientificSection.style.display = 'none';
    }
    else {
        // do something
    }
}

// Mobile filter dropdown
document.getElementById('select-option').addEventListener('change', function () {
    var allDivs = this.value == 0 ? 'block' : 'none';
    var Legal = this.value == 1 ? 'block' : 'none';
    var scientific = this.value == 2 ? 'block' : 'none';
    var Financial = this.value == 3 ? 'block' : 'none';
    var Creative = this.value == 4 ? 'block' : 'none';
    document.getElementById('All').style.display = allDivs;
    document.getElementById('Legal_hide').style.display = Legal;
    document.getElementById('scientific_hide').style.display = scientific;
    document.getElementById('Financial_hide').style.display = Financial;
    document.getElementById('Creative_hide').style.display = Creative;
});
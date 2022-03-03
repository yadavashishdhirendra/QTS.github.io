function legalShow() {
    var legalList = document.getElementById('Legal_listing');
    var staffingList = document.getElementById('staffing_listing');
    var scientificList = document.getElementById('scientific_listing');
    var financialList = document.getElementById('financial_listing');
    var creativeList = document.getElementById('creative_listing');
    if (legalList.style.display === 'none') {
        legalList.style.display = 'block';
        staffingList.style.display = 'none';
        scientificList.style.display = 'none';
        financialList.style.display = 'none';
        creativeList.style.display = 'none';
    }
}

function staffingShow() {
    var legalList = document.getElementById('Legal_listing');
    var staffingList = document.getElementById('staffing_listing');
    var scientificList = document.getElementById('scientific_listing');
    var financialList = document.getElementById('financial_listing');
    var creativeList = document.getElementById('creative_listing');
    if (staffingList.style.display === 'none') {
        staffingList.style.display = 'block';
        legalList.style.display = 'none';
        scientificList.style.display = 'none';
        financialList.style.display = 'none';
        creativeList.style.display = 'none';
    }
}

function scientificShow() {
    var legalList = document.getElementById('Legal_listing');
    var staffingList = document.getElementById('staffing_listing');
    var scientificList = document.getElementById('scientific_listing');
    var financialList = document.getElementById('financial_listing');
    var creativeList = document.getElementById('creative_listing');
    if (scientificList.style.display === 'none') {
        scientificList.style.display = 'block';
        staffingList.style.display = 'none';
        legalList.style.display = 'none';
        financialList.style.display = 'none';
        creativeList.style.display = 'none';
    }
}

function financialsShow() {
    var legalList = document.getElementById('Legal_listing');
    var staffingList = document.getElementById('staffing_listing');
    var scientificList = document.getElementById('scientific_listing');
    var financialList = document.getElementById('financial_listing');
    var creativeList = document.getElementById('creative_listing');
    if (financialList.style.display === 'none') {
        financialList.style.display = 'block';
        scientificList.style.display = 'none';
        staffingList.style.display = 'none';
        legalList.style.display = 'none';
        creativeList.style.display = 'none';
    }
}

function creativeShow() {
    var creativeList = document.getElementById('creative_listing');
    var legalList = document.getElementById('Legal_listing');
    var staffingList = document.getElementById('staffing_listing');
    var scientificList = document.getElementById('scientific_listing');
    var financialList = document.getElementById('financial_listing');
    if (creativeList.style.display === 'none') {
        creativeList.style.display = 'block';
        financialList.style.display = 'none';
        scientificList.style.display = 'none';
        staffingList.style.display = 'none';
        legalList.style.display = 'none';
    }
}


// Mobile filter dropdown
document.getElementById('select-option-1').addEventListener('change', function () {
    var allDivs = this.value == 0 ? 'block' : 'none';
    var Legal = this.value == 1 ? 'block' : 'none';
    var scientific = this.value == 2 ? 'block' : 'none';
    var Financial = this.value == 3 ? 'block' : 'none';
    var Creative = this.value == 4 ? 'block' : 'none';
    document.getElementById('Legal_listing_mob').style.display = allDivs;
    document.getElementById('staffing_listing_mob').style.display = Legal;
    document.getElementById('scientific_listing_mob').style.display = scientific;
    document.getElementById('financial_listing_mob').style.display = Financial;
    document.getElementById('creative_listing_mob').style.display = Creative;
});

function filterJobs() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("Search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("showMobile");
    cards = cardContainer.getElementsByClassName("card-sm-2");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

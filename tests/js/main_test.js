Feature('User Management');

// Scenario('test something', (I) => {

// });

Scenario('Choosing a market type and then seraching for an asset type...', (I, loginPage, searchAssetPage) => {
    loginPage.login('client@client.com', 'client');
    searchAssetPage.startSearch(["Generic Military Personnel Market", "Intelligence Operatives"]);
    searchAssetPage.sendRFQ([{
        contractType: "Armed Engagement Contract",
        location: "Kottayam",
        startDate: {
            day: 8,
            month: "July",
            year: 2018
        },
        jobDescription: "This is a sample text",
        expectedDayRate: "30"
    }]);
});
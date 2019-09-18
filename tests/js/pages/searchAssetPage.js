const {
    I
} = inject();

module.exports = {
    fields: {
        selectMarket: {
            id: "searchbar"
        },
        golbalRFQButton: "Global Market RFQ",
        selectContract: "Armed Engagement Contract",
        contractType: ".dropdown-wrapper",
        location: "Location",
        duration: {
            name: "duration"
        },
        jobDescription: "job_description",
        expectedDayRate: "expected_day_rate"

    },

    startSearch(marketTypes) {
        // I.amOnPage("/asset-types");
        I.see("Find Assets");
        I.wait(3);
        console.log(marketTypes);

        marketTypes.forEach((element, index) => {
            if (index == 0)
                I.fillField("Select Market", element);
            else
                I.fillField(this.fields.selectMarket, element);
            // pause();
            I.pressKey("Enter");
            // pause();
        });
        // pause();
    },
    sendRFQ(data, assetName) {
        if (assetName) {
            //Sent Direct RFQ
            // I.see("Send RFQ");
            // I.fillField(this.fields.assetSearchBoXContainer, assetName);
            this.fillData(data);
            // I.pressKey("Enter");
            pause();

        } else {
            //Sent Global Market RFQ
            I.wait(3);
            I.click(this.fields.golbalRFQButton)
            this.fillData(data);
            pause();
        }
        //Fill the RFQ fields

    },
    fillData(data) {
        I.click(this.fields.selectContract);
        data.forEach(element => {
            I.fillField(this.fields.contractType, element.contractType);
            I.pressKey("Enter");
            I.fillField(this.fields.location, element.location);
            I.pressKey("Enter");
            //Implement the duration logic here

            // const currMonth = document.querySelector(".cur-month").innerText;
            // const curMonthTextValue = I.grabTextFrom(".cur-month");
            // const curMonth = curMonthTextValue.toString().substring(33, -1);
            // console.log(curMonth);

            // while (currMonth !== element.startDate.month) {
            //     // I.click()


            // }

            // locate("a").withAttr({
            //     d: "M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"
            // });

            I.fillField(this.fields.jobDescription, element.jobDescription);
            I.fillField(this.fields.expectedDayRate, element.expectedDayRate);
            I.click(this.fields.duration);

        });

    }
};
let assert = require('chai').assert;
let dcFunctions = require("../db/allSchemas");

let medicationList = [
    {
        id : 0,
        ndc : "Test id = 0",
        keyword : "Test NDC 0",
        width : 100,
        height : 100, 
        x : 101,
        y : 101,
        findX : 1,
        findY : 1,
        findField : "111111"
    },
    {
        id : 1,
        ndc : "Test id = 1",
        keyword : "Test NDC 1",
        width : 111,
        height : 111, 
        x : 101,
        y : 101,
        findX : 1,
        findY : 1,
        findField : "000001"
    },
    {
        id : 2,
        ndc : "Test id = 2",
        keyword : "Test NDC 2",
        width : 222,
        height : 222, 
        x : 202,
        y : 202,
        findX : 2,
        findY : 2,
        findField : "000222"
    },
    {
        id : 4,
        ndc : "Test id = 4",
        keyword : "Test NDC 4",
        width : 444,
        height : 444, 
        x : 404,
        y : 404,
        findX : 4,
        findY : 4,
        findField : "444444"
    }
]

describe("#CRUD Functions of the Realm Database", function () {
    beforeEach(function() {
        dcFunctions.deleteAllMatches();
        dcFunctions.insertNewMatch(medicationList[0]);
    })
    /*
    //Just testing if the assert works as intended, testing a local variable
    it("Testing Local Medication List id", function () {
        assert.equal(medicationList[0].id, 0);
    });*/

    //Inserts medList[0] and compared entries to ensure accuracy
    it("Testing insertNewMatch() of medlist[0] in the DB", function (done) {
        //dcFunctions.deleteAllMatches();
        //dcFunctions.insertNewMatch(medicationList[0]);
        
        dcFunctions.queryAllMatches("matchSchema").then
        (function (allMatches) {
            try {
            assert.deepEqual(allMatches[0].id, medicationList[0].id);
            assert.deepEqual(allMatches[0].ndc, medicationList[0].ndc);
            assert.deepEqual(allMatches[0].keyword, medicationList[0].keyword);
            assert.deepEqual(allMatches[0].width, medicationList[0].width);
            assert.deepEqual(allMatches[0].height, medicationList[0].height);
            assert.deepEqual(allMatches[0].x, medicationList[0].x);
            assert.deepEqual(allMatches[0].y, medicationList[0].y);
            assert.deepEqual(allMatches[0].findX, medicationList[0].findX);
            assert.deepEqual(allMatches[0].findY, medicationList[0].findY);
            assert.deepEqual(allMatches[0].findField, medicationList[0].findField);
            done();
            }
         catch(error) {
            done(error);
            }
        })
    });

    //Testing the Removal of all entries into the DB
    it("Testing all entries removal with deleteAllMatches()", function (done) {
        //dcFunctions.deleteAllMatches();
        //dcFunctions.insertNewMatch(medicationList[0]);
        dcFunctions.insertNewMatch(medicationList[1]);
        dcFunctions.insertNewMatch(medicationList[2]);
        dcFunctions.deleteAllMatches();
        dcFunctions.queryAllMatches().then
        (function (aMatch) {
            try {
                assert.notExists(aMatch[0]);
                assert.notExists(aMatch[1]);
                assert.notExists(aMatch[2]);
                done();
            }//end try
            catch (error) {
                done(error);
            }
        })
    });//end it

    //Testing the removal of a specific entry in the DB
    it("Testing a single entrie's removal with deleteMatch()", function(done) {
        //dcFunctions.deleteAllMatches();
        //dcFunctions.insertNewMatch(medicationList[0]);
        dcFunctions.deleteMatch(medicationList[0]);
        dcFunctions.queryMatch(medicationList[0]).then
        (function (allMatches) {
            try {
                assert.notExists(allMatches[0]);
                done ();
            }
            catch (error) {
                done(error);
            }
        });
    });

    //Testing updateMatch ()
    it ("Testing updateMatch() an entry already in the DB", function (done) {
        //dcFunctions.deleteAllMatches ();
        //dcFunctions.insertNewMatch(medicationList[0]);
        dcFunctions.updateMatch(medicationList[0], medicationList[1]);
        dcFunctions.queryAllMatches().then
        (function (allMatches) {
            try { 
                assert.equal(allMatches[0].keyword, "Test NDC 1", "Keyword was updated Properly");
                done ();
            }
            catch(error) {
                done(error);
            }
        })
    })
});
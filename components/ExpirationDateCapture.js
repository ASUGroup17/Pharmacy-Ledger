import { relative_Horizontal_Distance, relative_Vertical_Distance} from './RelativeDistanceCaptured';


let expPat1 = new RegExp(/(0[123456789]|10|11|12)([-]|[\s]|[/])([2][0][0-9][0-9])$/);  //ex: 03/2020    03-2020  03 2020 
//let expPat1 = new RegExp(/^(0[123456789]|10|11|12)([-]|[\s]|[/])\b([2][0][0-9][0-9])$\b/);  //ex: 03/2020    03-2020  03 2020 

let expPat2 = new RegExp(/\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)([-]|[\s]|[/])[2][0][0-9][0-9]/);
//ex:  feb/2021    mar 2022   march 2019   nov-2021

let expPat3 = new RegExp(/(0[123456789]|10|11|12)/);  //ex:  12-    03   11/                    Should there be a character after the numbers? or just numbers?
let expPat4 = new RegExp(/([2][0][0-9][0-9])/);

//expPat5 is the same as expPat2 without the space or slash between month and year
let expPat5 = new RegExp(/\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)[2][0][0-9][0-9]/);

//expPat6 is only checking for written months
let expPat6 = new RegExp(/\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)/);
let expPat7 = new RegExp(/(0[123456789]|10|11|12)([-]|[\s]|[/])([0-9][0-9])$/);  // ([0-9][0-9])


// Are expPat 8 & 9 too loose of requirments? I'm concerned they would captured too frequently, creating false positives
//let expPat8 = new RegExp(/\bexp\b/);
let expPat8 = new RegExp(/\bexp/);

//let expPat9 = new RegExp(/\bexpiry\b/);
let expPat9 = new RegExp(/\bexpiry/);

export const capturedTextBlocksExpiration = (textBlocks) => {
    let expiredFound = false;
    for (let index = 0; index < textBlocks.length; index++) {
     
        for (let index2 = 0; index2 < textBlocks[index].components.length; index2++){
            
            if ((expiredFound === false) && (expPat8.test(textBlocks[index].components[index2].value.toLowerCase()) ||
                    expPat9.test(textBlocks[index].components[index2].value.toLowerCase()))) {
                expiredFound = true;
        }
            if (expiredFound === true) {
                //Checks for 2 digit month, 4 digit year with a dash, forward slash or space in between. ex 02/2019  02 2019  02-2019 
                if (expPat1.test(textBlocks[index].components[index2].value)) {
                    let newExpDate = expPat1.exec(textBlocks[index].components[index2].value);
                    if (newExpDate != null){
                        console.log("Kevin: Return 1" + newExpDate[1]);
                        return newExpDate[0];
                    }

                }
                //CHecks for 2 digit month, 2 digit year with a dash, forward slash or space in between. ex 02/19  02 19  02-19 
                else if (expPat7.test(textBlocks[index].components[index2].value)) {
                    let newExpDate = expPat7.exec(textBlocks[index].components[index2].value);
                    if(newExpDate != null){
                        console.log("Kevin: Return 7: " + newExpDate[0]);
                    return newExpDate[0];
                    }
                }
                //Checks for Full or Patial written month, 4 digit year with dash,forward slash or space in between. ex: Feb 2019  February 2019  Feb/2019  February-2019
                else if (expPat2.test(textBlocks[index].components[index2].value.toLowerCase())) {                    
                    let newExpDate = expPat2.exec(textBlocks[index].components[index2].value);
                    if (newExpDate != null){
                        console.log("Kevin: Return 2: ");
                        console.log("Kevin: Re2: " + newExpDate[0])
                        return newExpDate[0];
                    }

                }
                //Checks for Full or Patial written month, 4 digit year captured as one word. ex: Feb2019  February2019
                else if (expPat5.test(textBlocks[index].components[index2].value.toLowerCase())) {
                    let newExpDate = expPat5.exec(textBlocks[index].components[index2].value);
                    if (newExpDate != null){
                        console.log("Kevin: Return 5 "+ newExpDate);
                        return newExpDate[0];
                    }

                }
                else if ( (textBlocks[index].components[index2+1] !== undefined) && (textBlocks[index].components[index2+1] !== null) ){
                    if ( (expPat3.test(textBlocks[index].components[index2].value) || expPat6.test(textBlocks[index].components[index2].value.toLowerCase())) &&
                        (expPat4.test(textBlocks[index].components[index2+1].value) || expPat7.test(textBlocks[index].components[index2+1].value))) {
                        let newExpDate = textBlocks[index].components[index2].value + " " + textBlocks[index].components[index2+1].value;
                        console.log("Kevin: Return 3 " + newExpDate);
                        return newExpDate;
                    }    
                }
            }
        }
    }
};


/*  This Method Effectively Captures Expiration Date when on the same line as the keyword.  The implementation from US179

//TODO: add 'best before', 'bbe', 'exp.date/control No.', determine if we want a month-day-year format caught, or year-day-month ...ect
export const capturedExpiration = (capturedArray) => {
    //  console.log("Kevin: capturedExpiration is called");    
    for (let index = 0; index < capturedArray.length; index ++) {        
        if ((capturedArray[index+1] !== undefined) &&
            capturedArray[index].word.toLowerCase() === "exp" || capturedArray[index].word.toLowerCase() === "expiry" || capturedArray[index].word.toLowerCase() === "expdate" ||
        capturedArray[index].word.toLowerCase() === "exp:" || capturedArray[index].word.toLowerCase() === "exp.date" || capturedArray[index].word.toLowerCase() === "expiry:"){    
                if (expPat1.test(capturedArray[index+1].word) || expPat7.test(capturedArray[index+1].word)) {
                   // console.log("Kevin: Return 1");
                    let newExpDate = capturedArray[index+1].word + " ";
                    return newExpDate;
                }
                else if (expPat2.test(capturedArray[index+1].word.toLowerCase()) || expPat5.test(capturedArray[index+1].word.toLowerCase())) {
                   // console.log("Kevin: Return 2");
                    let newExpDate = capturedArray[index+1].word + " ";
                    return newExpDate;
                }
                else if (capturedArray[index+2] !== undefined){
                    if ((expPat3.test(capturedArray[index+1].word) || expPat6.test(capturedArray[index+1].word.toLowerCase())) &&
                        expPat4.test(capturedArray[index+2].word) || expPat7.test(capturedArray[index+2].word)) {
                        let newExpDate = capturedArray[index+1].word + "/" + capturedArray[index+2].word;
                        //console.log("Kevin: Return 3 " + newExpDate);
                        return newExpDate;
                    }
                }
        }
    }//end for loop
}//end method*/
import { relative_Horizontal_Distance, relative_Vertical_Distance} from './RelativeDistanceCaptured';


//TODO: add 'best before', 'bbe', 'exp.date/control No.', determine if we want a month-day-year format caught, or year-day-month ...ect
export const capturedExpiration = (capturedArray) => {
    //  console.log("Kevin: capturedExpiration is called");
    for (let index = 0; index < capturedArray.length; index ++) {
        

        //let expPat1 = new RegExp("[0-1][0-9](-| |/)[2][0][0-9][0-9]");  //ex: 03/2020    03-2020  03 2020 
        let expPat1 = new RegExp(/\b(0[123456789]|[10]|[11]|[12])\b([-]|[\s]|[/])\b([2][0][0-9][0-9])\b/);  //ex: 03/2020    03-2020  03 2020 
        
        let expPat2 = new RegExp(/\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)([-]|[\s]|[/])[2][0][0-9][0-9]/);
        //ex:  feb/2021    mar 2022   march 2019   nov-2021

        let expPat3 = new RegExp(/(0[123456789]|[10]|[11]|[12])/);  //ex:  12-    03   11/                    Should there be a character after the numbers? or just numbers?
        let expPat4 = new RegExp(/([2][0][0-9][0-9])/);
        //expPat5 is the same as expPat2 without the space or slash between month and year
        let expPat5 = new RegExp(/\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)[2][0][0-9][0-9]/);
        //expPat6 is only checking for written months
        let expPat6 = new RegExp(/\b(?:jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)/);
        let expPat7 = new RegExp(/\b(0[123456789]|[10]|[11]|[12])\b([-]|[\s]|[/])\b([0-9][0-9])\b/);  // ([0-9][0-9])
        console.log("Kevin: regx1: " + expPat1.test(":05/2020")); 
       
        
        
        
        if (capturedArray[index].word.toLowerCase() === "exp" || capturedArray[index].word.toLowerCase() === "expiry" || capturedArray[index].word.toLowerCase() === "expdate" ||
        capturedArray[index].word.toLowerCase() === "exp:" || capturedArray[index].word.toLowerCase() === "exp.date" || capturedArray[index].word.toLowerCase() === "expiry:") {
            if (capturedArray[index+1] !== undefined){
                console.log("Kevin: word: " + capturedArray[index+1].word + "    " + capturedArray[index+1].word.length);                
                
                if (expPat1.test(capturedArray[index+1].word) || expPat7.test(capturedArray[index+1].word)) {
                    console.log("Kevin: Return 1");
                    let newExpDate = capturedArray[index+1].word + " ";
                    return newExpDate;
                }
                else if (expPat2.test(capturedArray[index+1].word.toLowerCase()) || expPat5.test(capturedArray[index+1].word.toLowerCase())) {
                    console.log("Kevin: Return 2");
                    let newExpDate = capturedArray[index+1].word + " ";
                    return newExpDate;
                }
                else if (capturedArray[index+2] !== undefined){
                    if ((expPat3.test(capturedArray[index+1].word) || expPat6.test(capturedArray[index+1].word.toLowerCase())) &&
                                expPat4.test(capturedArray[index+2].word) || expPat7.test(capturedArray[index+2].word)) {
                        let newExpDate = capturedArray[index+1].word + "/" + capturedArray[index+2].word;
                        console.log("Kevin: Return 3 " + newExpDate);
                        return newExpDate;
                    }
                }
            }    
        }
    }

}
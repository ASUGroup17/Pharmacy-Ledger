
//expPattern1 Must be 6 Digits/Letters long, only numbers (0-9) & uppercase letters
let expPattern8 = new RegExp(/^\b[0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z]$\b/);
//expPattern1 Must be 7 Digits/Letters long, only numbers (0-9) & uppercase letters
let expPattern1 = new RegExp(/^\b[0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z]$\b/);
//expPattern2 Must be 8 Digits/Letters long, only numbers (0-9) & uppercase letters
let expPattern2 = new RegExp(/^\b[0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z]$\b/);
//expPattern3 Must be 9 Digits/Letters long, only numbers (0-9) & uppercase letters
let expPattern3 = new RegExp(/^\b[0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z]$\b/);
//expPattern4 Must be 10 Digits/Letters long, only numbers (0-9) & uppercase letters
let expPattern4 = new RegExp(/^\b[0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z]$\b/);
//expPattern5 Looks for term like 'control no'.  Things can be leading before it or trailing after it.
let expPattern5 = new RegExp(/\bcontrol n[ou]\b/);
//expPattern6 Looks for term like 'batch'.  Characters can follow the batch keyword or be leading it
let expPattern6 = new RegExp(/\bbatch\b/);
//expPattern7 Looks for term like 'lot' Characters can follow 'lot' and precede it
let expPattern7 = new RegExp(/\blot\b/);

// textBlocks is a 'paragraph' captured by the Camera using Text Recognition; it's 2D array; of 'lines' captured, and the lines are then broken
// down into specific words that are captured.
export const capturedTextBlocksLot = (textBlocks) => {
    let lotFound = false;
    for (let index = 0; index < textBlocks.length; index++) {
     
        for (let index2 = 0; index2 < textBlocks[index].components.length; index2++){
            if((lotFound == false) && 
                (expPattern7.test(textBlocks[index].components[index2].value.toLowerCase()) || expPattern6.test(textBlocks[index].components[index2].value.toLowerCase()) ||
                expPattern5.test(textBlocks[index].components[index2].value.toLowerCase())  )){
                    lotFound = true;
            }//end if 

            if ((lotFound === true) && (
                expPattern1.test(textBlocks[index].components[index2].value) || expPattern2.test(textBlocks[index].components[index2].value) ||
                expPattern3.test(textBlocks[index].components[index2].value) || expPattern4.test(textBlocks[index].components[index2].value) ||
                expPattern8.test(textBlocks[index].components[index2].value))){    
                        return textBlocks[index].components[index2].value;
                    }
        }//end Inner for
    }//end Outter For
}//End capturedTextBlocksLot



/*  A Working version of capturing LotNumbers with a capturedArray.  
    This is effective for 'easy' labels, where keyword and data is on the same line.

export function capturedLot (capturedArray)  {
//    console.log("Kevin: ITS GETTING CALLED");
    //const { medication } = this.props;
    //This for statement will continually loop through captured textBlocks, initially it will check for Lot Number, then Expiration Date
    for (var index = 0; index < capturedArray.length; index++){
        //Testing to see if 'lot' was captured AND if the next value in the line was captured, it will throw error otherwise
    
            //Logic to determine if captured word is in a "proper" format; there is room for improvement on this logic
            if ((capturedArray[index].word.toLowerCase() === "lot" || capturedArray[index].word.toLowerCase() === "batch" ||
            capturedArray[index].word.toLowerCase() === "control no" || capturedArray[index].word.toLowerCase() === "control no.")
                    && (capturedArray.length > 1 && capturedArray[index+1].word.length > 6)){                                  
                
                //From keyword(lot, batch) to data captured
                //The verticle distance is sometimes 'infinity', I think this may be due to when we are dividing by zero or a tiny decimal,
                    // we may need some error handling with this
                let vertical_Difference = relative_Vertical_Distance(capturedArray[index].height, capturedArray[index+1].height,
                    capturedArray[index].yCoord, capturedArray[index+1].yCoord );
                let horizontal_Difference = relative_Horizontal_Distance (capturedArray[index].width, capturedArray[index+1].width, 
                    capturedArray[index].xCoord, capturedArray[index+1].xCoord);
                //console.log("Kevin: Test vert: " + vertical_Difference  + "    horiz: " + horizontal_Difference);

  //              console.log("Kevin: " + capturedArray[index+1].word);
                return capturedArray[index+1].word;                
            }
        }
}*/

relative_Vertical_Distance = (keyword_Height, data_Height, keyword_yCoord, data_yCoord) => {
    return (keyword_Height + data_Height + (data_yCoord - keyword_yCoord)) / (data_yCoord - keyword_yCoord);
}

relative_Horizontal_Distance = (keyword_Width, data_Width, keyword_xCoord, data_xCoord) => {
    return (keyword_Width + data_Width + (data_xCoord - keyword_xCoord)) / (data_xCoord - keyword_xCoord);
}

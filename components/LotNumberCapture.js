
export function capturedLot (capturedArray)  {
//    console.log("Kevin: ITS GETTING CALLED");
    //const { medication } = this.props;
    //This for statement will continually loop through captured textBlocks, initially it will check for Lot Number, then Expiration Date
    for (var index = 0; index < capturedArray.length; index++){
        //Testing to see if 'lot' was captured AND if the next value in the line was captured, it will throw error otherwise
    
            //Logic to determine if captured word is in a "proper" format; there is room for improvement on this logic
            if ((capturedArray[index].word.toLowerCase() === "lot" || capturedArray[index].word.toLowerCase() === "batch")
                    && (capturedArray.length > 1/*[index+1].word*/ && capturedArray[index+1].word.length > 6)){                                  
                
                //From keyword(lot, batch) to data captured
                //The verticle distance is sometimes 'infinity', I think this may be due to when we are dividing by zero or a tiny decimal,
                    // we may need some error handling with this
                let vertical_Difference = relative_Vertical_Distance(capturedArray[index].height, capturedArray[index+1].height,
                    capturedArray[index].yCoord, capturedArray[index+1].yCoord );
                let horizontal_Difference = relative_Horizontal_Distance (capturedArray[index].width, capturedArray[index+1].width, 
                    capturedArray[index].xCoord, capturedArray[index+1].xCoord);
                console.log("Kevin: Test vert: " + vertical_Difference  + "    horiz: " + horizontal_Difference);

  //              console.log("Kevin: " + capturedArray[index+1].word);
                return capturedArray[index+1].word;                
            }
        }
}

relative_Vertical_Distance = (keyword_Height, data_Height, keyword_yCoord, data_yCoord) => {
    return (keyword_Height + data_Height + (data_yCoord - keyword_yCoord)) / (data_yCoord - keyword_yCoord);
}

relative_Horizontal_Distance = (keyword_Width, data_Width, keyword_xCoord, data_xCoord) => {
    return (keyword_Width + data_Width + (data_xCoord - keyword_xCoord)) / (data_xCoord - keyword_xCoord);
}

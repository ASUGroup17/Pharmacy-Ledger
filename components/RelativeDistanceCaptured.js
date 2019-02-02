export function relative_Vertical_Distance  (keyword_Height, data_Height, keyword_yCoord, data_yCoord)  {
    return (keyword_Height + data_Height + (data_yCoord - keyword_yCoord)) / (data_yCoord - keyword_yCoord);
}

export function relative_Horizontal_Distance  (keyword_Width, data_Width, keyword_xCoord, data_xCoord)  {
    return (keyword_Width + data_Width + (data_xCoord - keyword_xCoord)) / (data_xCoord - keyword_xCoord);
}
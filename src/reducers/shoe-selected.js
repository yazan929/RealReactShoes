export default function (state =0, action) { // currently not used
    switch (action.type) {

        case "SHOE_SELECTED":

            // console.log("yo",action.payload);
            // action.payload = true;
            // state = true;
            console.log("yo",state);
            // return action.payload;
            return state+1;
        default:
            break;
    }
    return state;
}

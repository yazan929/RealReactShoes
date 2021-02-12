export const selectShoe = (shoe) => {
    console.log("shoe name is : ", shoe);
    return {
        type: "SHOE_SELECTED",
        payload: shoe
    };
};


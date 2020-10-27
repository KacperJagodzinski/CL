function calculateTip(amount, rating) {
    switch (rating) {
        case "Very good service":
            console.log(amount * 0.25);
            break;
        case "Good service":
            console.log(amount * 0.2);
            break;
        case "Neutral service":
            console.log(amount * 0.15);
            break;
        case "Bad service":
            console.log(amount * 0);
            break;
        default:
            console.log("Wrong rating");
            break;
    }
}

calculateTip(100,"Very good service");
calculateTip(100,"Good service");
calculateTip(100,"God service");
calculateTip(100,"Bad service");


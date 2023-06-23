import app from "./app.js";

const main = () =>{
    app.listen(app.get("port"));
    console.log(`The company es running on port`);
}

main();
import app from "./app.js";

const main = () =>{
    app.listen(app.get("port"));
    console.log(`The company es running on port`);
}

main();

//?=> tablas de la base de datos alquilartemis:
    //todo-> categorias//constructoras//cotizaciones//empleados//productos//productos_x_cotizacion

function calcular() {
    let cant = parseInt(document.getElementById("cantidad").value);
    let tipoOferta = document.getElementById("categoria").value;
    document.getElementById("total").value = totalPagar(tipoOferta, cant);
}

function totalPagar(categoria, cantidad) {
    let total;
    if (cantidad > 0 && categoria != null) {
        switch (categoria) {
            case "1":
                total = cuenta(80, cantidad * 200);
                break;
            case "2":
                total = cuenta(50, cantidad * 200);
                break;
            case "3":
                total = cuenta(15, cantidad * 200);
                break;
        }
    } else {
        total = "!!!Error!!! Ingresar cantidad Valida";
    }
    return total
}

function cuenta(porcentaje, precio) {
    let totalAPagar;
    let oferta = (porcentaje * precio / 100);
    totalAPagar = precio - oferta;
    return ("Totál a Pagar: $" + totalAPagar);
}
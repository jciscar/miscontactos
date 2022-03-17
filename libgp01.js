var aTipoTarifa     = ['A', 'B', 'C', 'D'];
var aPortes         = ['Debidos', 'Pagados'];
var aFormaEnvio     = ['Nuestros medios', 'Sus medios', 'Terceros'];
var aRegIVAv        = ['Exento', 'No devengado', 'Devengado régimen general', '', 'Devengado Exportaciones', 'Entregas intracomunitarias exentas'];
var aRegIVAc        = ['Exento', 'No deducible', 'Deducible operaciones interiores', 'Deducible importaciones', 'Deducible adquisiciones intracomunitarias'];
var aEstado1        = ['Pendiente', 'En curso', 'Terminado'];

var ventanaDesdePrincipal   = null;
var windowObjectReference1  = null;
var windowObjectReference2  = null;
var windowObjectReference3  = null;
var windowObjectReference4  = null;

var sMask1ant               = null;

function inicioVentanasDesdePrincipal() {
    localStorage.removeItem('sSolicitado1');
    localStorage.removeItem('sSolicitado2');
    localStorage.removeItem('sSolicitado3');
    localStorage.removeItem('sSolicitado4');
    localStorage.setItem('sSolicitado1', '');
    localStorage.setItem('sSolicitado2', '');
    localStorage.setItem('sSolicitado3', '');
    localStorage.setItem('sSolicitado4', '');
    return false;
}

function nuevaVentana(sSolicitado, fSolicitante, codSolicitante, desSolicitante, conSolicitante) {

    if (sSolicitado != 'gestiondocumental') {
        if (dPermiso(sSolicitado, 4, 5) == '0') {
            alert("sin permiso");
        }        
    }

    var resp = '';
    resp = localStorage.getItem('sSolicitado1');
    if (resp == sSolicitado) {
        // ventana ya abierta
        windowObjectReference1.focus();
        return false;
    } else if (resp == '') {
        // libre para ser utilizada
        nuevaVentana1(sSolicitado, fSolicitante, codSolicitante, desSolicitante, conSolicitante);
        return false;
    }

    resp = localStorage.getItem('sSolicitado2');
    if (resp == sSolicitado) {
        // ventana ya abierta
        windowObjectReference2.focus();
        return false;
    } else if (resp == '') {
        // libre para ser utilizada
        nuevaVentana2(sSolicitado, fSolicitante, codSolicitante, desSolicitante, conSolicitante);
        return false;
    }

    resp = localStorage.getItem('sSolicitado3');
    if (resp == sSolicitado) {
        // ventana ya abierta
        windowObjectReference3.focus();
        return false;
    } else if (resp == '') {
        // libre para ser utilizada
        nuevaVentana3(sSolicitado, fSolicitante, codSolicitante, desSolicitante, conSolicitante);
        return false;
    }

    resp = localStorage.getItem('sSolicitado4');
    if (resp == sSolicitado) {
        // ventana ya abierta
        windowObjectReference4.focus();
        return false;
    } else if (resp == '') {
        // libre para ser utilizada
        nuevaVentana4(sSolicitado, fSolicitante, codSolicitante, desSolicitante, conSolicitante);
        return false;
    } else {
        alert("Número máximo de ventanas abiertas permitidas");
        return false;
    }
}


function nuevaVentana1(sSolicitado, fSolicitante, codSolicitante, desSolicitante, conSolicitante) {
    localStorage.setItem('sSolicitado1',    sSolicitado);
    localStorage.setItem('codExt1',         '');

    if (windowObjectReference1 == null || windowObjectReference1.closed) {
        windowObjectReference1 = window.open(sSolicitado + '.html', '_blank', 'height=' + screen.availHeight + ', width=' + screen.availWidth);        
    } else {
        windowObjectReference1.focus();
    }

    var vSetInter1 = setInterval(function () {
        var resp1 = localStorage.getItem('codExt1');
        if (resp1 != '') {
            var elementos1 = document.getElementById(fSolicitante).elements;
            elementos1[codSolicitante].value = resp1;
            elementos1[desSolicitante].value = localStorage.getItem('desExt1'); 
            if (conSolicitante != '') {
                elementos1[conSolicitante].value = localStorage.getItem('conExt1');
            }
        }        
        var resp1 = localStorage.getItem('sSolicitado1');
        if (resp1 == '') {
            clearTimeout(vSetInter1);
            localStorage.removeItem('codExt1');
            localStorage.removeItem('desExt1');
            localStorage.removeItem('conExt1');
        }
    }, 2000);
    return false;
}

function nuevaVentana2(sSolicitado, fSolicitante, codSolicitante, desSolicitante, conSolicitante) {
    localStorage.setItem('sSolicitado2',    sSolicitado);
    localStorage.setItem('codExt2',         '');
    if (windowObjectReference2 == null || windowObjectReference2.closed) {
        windowObjectReference2 = window.open(sSolicitado + '.html', '_blank', 'height=' + screen.availHeight + ', width=' + screen.availWidth);
    } else {
        windowObjectReference2.focus();
    }
    var vSetInter2 = setInterval(function () {
        var resp2 = localStorage.getItem('codExt2');
        if (resp2 != '') {
            var elementos2 = document.getElementById(fSolicitante).elements;
            elementos2[codSolicitante].value = resp2;
            elementos2[desSolicitante].value = localStorage.getItem('desExt2');
            if (conSolicitante != '') {
                elementos2[conSolicitante].value = localStorage.getItem('conExt2');
            }             
        }        
        var resp2 = localStorage.getItem('sSolicitado2');
        if (resp2 == '') {
            clearTimeout(vSetInter2);
            localStorage.removeItem('codExt2');
            localStorage.removeItem('desExt2');
            localStorage.removeItem('conExt2');
        }
    }, 2000);
    return false;
}

function nuevaVentana3(sSolicitado, fSolicitante, codSolicitante, desSolicitante, conSolicitante) {
    localStorage.setItem('sSolicitado3',    sSolicitado);
    localStorage.setItem('codExt3',         '');
    if (windowObjectReference3 == null || windowObjectReference3.closed) {
        windowObjectReference3 = window.open(sSolicitado + '.html', '_blank', 'height=' + screen.availHeight + ', width=' + screen.availWidth);
    } else {
        windowObjectReference3.focus();
    }
    var vSetInter3 = setInterval(function () {
        var resp3 = localStorage.getItem('codExt3');
        if (resp3 != '') {
            var elementos3 = document.getElementById(fSolicitante).elements;
            elementos3[codSolicitante].value = resp3;
            elementos3[desSolicitante].value = localStorage.getItem('desExt3'); 
            if (conSolicitante != '') {
                elementos3[conSolicitante].value = localStorage.getItem('conExt3');
            }            
        }        
        var resp3 = localStorage.getItem('sSolicitado3');
        if (resp3 == '') {
            clearTimeout(vSetInter3);
            localStorage.removeItem('codExt3');
            localStorage.removeItem('desExt3');
            localStorage.removeItem('conExt3');
        }
    }, 2000);
    return false;
}

function nuevaVentana4(sSolicitado, fSolicitante, codSolicitante, desSolicitante, conSolicitante) {
    localStorage.setItem('sSolicitado4',    sSolicitado);
    localStorage.setItem('codExt4',         '');
    if (windowObjectReference4 == null || windowObjectReference4.closed) {
        windowObjectReference4 = window.open(sSolicitado + '.html', '_blank', 'height=' + screen.availHeight + ', width=' + screen.availWidth);
    } else {
        windowObjectReference4.focus();
    }
    var vSetInter4 = setInterval(function () {
        var resp4 = localStorage.getItem('codExt4');
        if (resp4 != '') {
            var elementos4 = document.getElementById(fSolicitante).elements;
            elementos4[codSolicitante].value = resp4;
            elementos4[desSolicitante].value = localStorage.getItem('desExt4'); 
            if (conSolicitante != '') {
                elementos4[conSolicitante].value = localStorage.getItem('conExt4');
            }            
        }        
        var resp4 = localStorage.getItem('sSolicitado4');
        if (resp4 == '') {
            clearTimeout(vSetInter4);
            localStorage.removeItem('codExt4');
            localStorage.removeItem('desExt4');
            localStorage.removeItem('conExt4');
        }
    }, 2000);
    return false;
}


function seleccionarRegistroYcerrar(winVar, cod, des, con) {
    if (window[winVar] == 1) {
        localStorage.setItem('codExt1', cod);
        localStorage.setItem('desExt1', des);
        localStorage.setItem('conExt1', con);
        cerrarVentana(winVar);    
    } else if (window[winVar] == 2) {
        localStorage.setItem('codExt2', cod);
        localStorage.setItem('desExt2', des);
        localStorage.setItem('conExt2', con);
        cerrarVentana(winVar);
    } else if (window[winVar] == 3) {
        localStorage.setItem('codExt3', cod);
        localStorage.setItem('desExt3', des);
        localStorage.setItem('conExt3', con);
        cerrarVentana(winVar);
    } else if (window[winVar] == 4) {
        localStorage.setItem('codExt4', cod);
        localStorage.setItem('desExt4', des);
        localStorage.setItem('conExt4', con);
        cerrarVentana(winVar);
    } 
}


function despuesDeAbrirVentana(winVar, nomPag) {
    window[winVar] = 0;
    if (localStorage.getItem('sSolicitado1') == nomPag) { window[winVar] = 1; }
    if (localStorage.getItem('sSolicitado2') == nomPag) { window[winVar] = 2; }
    if (localStorage.getItem('sSolicitado3') == nomPag) { window[winVar] = 3; }
    if (localStorage.getItem('sSolicitado4') == nomPag) { window[winVar] = 4; }
    return false;
}

function despuesDeCerrarVentana(winVar, nomPag) {
    var n = window[winVar];
    if (n == 0 || n == 1 ) {
        localStorage.setItem('sSolicitado1',  '');
        localStorage.setItem('sSolicitado2',  '');
        localStorage.setItem('sSolicitado3',  '');
        localStorage.setItem('sSolicitado4',  '');
    } else if (n == 2) {
        localStorage.setItem('sSolicitado2',  '');
        localStorage.setItem('sSolicitado3',  '');
        localStorage.setItem('sSolicitado4',  '');
    } else if (n == 3) {
        localStorage.setItem('sSolicitado3',  '');
        localStorage.setItem('sSolicitado4',  '');
    } else if (n == 4) {
        localStorage.setItem('sSolicitado4',  '');
    } 
    return false;
}


function abrirDesdePrincipal(s) {
    if (s == 'cambiarcontrasena') {
        window.open(s + '.html', '_self');
    } else if ((s == 'usuarios') || (s == 'gruposusuarios')) {
        if ((localStorage.getItem('nomUs') == 'admin') || (localStorage.getItem('esAdministrador'))) {
            window.open(s + '.html', '_self');
        } else {
            modal1('Mis contactos', 'Opción disponible sólo para usuarios administradores', myTextDataList);
        }
    } else {
        // comprobar primero si el usuario cuenta con el permiso Ver
        let p = dPermiso(s, 4, 5);
        if (p == '1') { 
            window.open(s + '.html', '_self');
        } else {
            modal1('Mis contactos', 'Sin permiso', myTextData);
        }        
    }
    return false;
};

function cerrarVentana(winVar) {
    if (window[winVar] == 0) {
         //window.location.replace('principal.html');
         history.back();
    } else {
        window.close(); 
    }
    return false;
};

function cerrarVentanaPrincipal() {
    window.location.replace('../wp/');
    return false;
};

function regTabla(modal, winVar, n) {
    window[winVar] = n;
    var myModal = new bootstrap.Modal(document.getElementById(modal));
    myModal.show();
}

function cerrarModal(m) {
    var myModalEl = document.getElementById(m);
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();    
}

function buscarAhora (tabla, control) {
    $('#' + tabla).bootstrapTable('resetSearch', document.getElementById(control).value);
    return false;
}


function valorTarjeta (s) {
    $('#' + s).bootstrapTable('toggleView');
    return false;
}

function imprimirTabla(titulo, tabla) {
    newWin= window.open("");
    newWin.document.write(formatoTablaImpresion(titulo, tabla));
    newWin.print();
    newWin.close();
    window.noCerrarModal = '1';
    return false;
}

function formatoTablaImpresion (titulo, tabla) {
    return `
        <html>
        <head>
        <style type="text/css">
          @media print

              table {
                page-break-inside: auto;
              }
              tr {
                page-break-inside: avoid;
                page-break-after: auto;
              }
              thead {
                display: table-header-group;
              }
              tfoot {
                display: table-footer-group;
              }

        </style>
          </head>
          <title> ` + titulo + `</title>
          <body>
          ` + tabla.outerHTML + `
          </body>
        </html>`
}


function exportarTabla(tipo, nomFichero, tituloNomTabla, ignorarColumna, tabla) {
    $('#' + tabla).tableExport({
        type:             tipo, // excel, csv, txt, json, sql
        exportDataType:   'all',
        escape:           false,
        ignoreColumn:     [ignorarColumna],
        fileName:         nomFichero,
        worksheetName:    nomFichero,
        tableName:        tituloNomTabla
    });
    return false;
}

function seleccionarCombo(nombre, valor) {
    var options = document.getElementsByName(nombre)[0];
    if (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].value === valor) {
                options[i].defaultSelected = true;
            } else {
                options[i].defaultSelected = false;
            }
        }
    }
    return false;
}

function seleccionarRadio(nombre, valor) {
    var options = document.getElementsByName(nombre);
    if (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].value == valor) {
                options[i].defaultChecked = true;
            } else {
                options[i].defaultChecked = false;
            }
        }
    }
    return false;
}


function dValorRadio(nombre) {
    var options = document.getElementsByName(nombre);
    if (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                return options[i].value;
            }
        }
    }
}

function desactivarRadio(nombre, valor) {
    var options = document.getElementsByName(nombre);
    if (options) {
        for (var i = 0; i < options.length; i++) {
            options[i].disabled = valor; 
        }
    }
}


function valorEnlace(sText, tipo) {
  // tipo = 1 teléfono, 2 sms, 3 whatsapp

  // para teléfono y sms puede haber ceros delante y el signo +
    // para whatsapp eliminar los ceros de delante por si viene
    // con un prefijo internacional con ceros delante, por ejemplo 0034

    let longitud        = sText.length;
    let numeros         = '';
    if (tipo == 1 || tipo == 2) {
        var cadena      = '1234567890+';
    } else {
        var cadena      = '1234567890';
    }

    for (x = 0; x <= longitud; x++) {
        var ss11 = sText.substr(x, 1);
        if (cadena.indexOf(ss11) != -1) {
            numeros = numeros + ss11;
        }
    }

    if (numeros.length == 0) { numeros = '0'; }
    switch(tipo) {
      case 1:
          return numeros;
          break;
      case 2:
          return numeros;
          break;
      case 3:
          return parseFloat(numeros);
          break;
    }
} 

function mostrarColumnas (s, n) {
    window.numTablaMostrarColumnas = n;
    let modalCol = new bootstrap.Modal(document.getElementById(s));
    modalCol.show();
}


function crearListadoNombresColumnas(s) {

    if (s == 'modalColumnasTablasAgencias') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabAgencias';}
        if (window.numTablaMostrarColumnas == 1) { window.noCerrarModal = '1'; var tabla1 = 'tabCostes';}    
    }  

    if (s == 'modalColumnasTablasAlmacenes') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabAlmacenes';}
        if (window.numTablaMostrarColumnas == 1) { window.noCerrarModal = '1'; var tabla1 = 'tabUsuarios';}
    }      

    if (s == 'modalColumnasTablasEmpresas') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabEmpresas';}
    }
    
    if (s == 'modalColumnasTablasUsuarios') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabUsuarios';}
    }    

    if (s == 'modalColumnasTablasDivisas') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabDivisas';}
    }

    if (s == 'modalColumnasTablasBancos') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabBancos';}
    }    

    if (s == 'modalColumnasTablasCtasRemesas') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabCtasRemesas';}
    }

    if (s == 'modalColumnasTablasCategorias') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabCategorias';}
        if (window.numTablaMostrarColumnas == 1) { window.noCerrarModal = '1'; var tabla1 = 'tabSubcategorias';}
    }

    if (s == 'modalColumnasTablasDepartamentos') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabDepartamentos';}
        if (window.numTablaMostrarColumnas == 1) { window.noCerrarModal = '1'; var tabla1 = 'tabEmpleados';}
    }    

    if (s == 'modalColumnasTablasClientes') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabClientes';}
        if (window.numTablaMostrarColumnas == 1) { window.noCerrarModal = '1'; var tabla1 = 'tabContactos';}
        if (window.numTablaMostrarColumnas == 2) { window.noCerrarModal = '1'; var tabla1 = 'tabDirEnvios';}
        if (window.numTablaMostrarColumnas == 3) { window.noCerrarModal = '1'; var tabla1 = 'tabContactosComerciales';}            
    }

    if (s == 'modalColumnasTablasProveedores') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabProveedores';}
        if (window.numTablaMostrarColumnas == 1) { window.noCerrarModal = '1'; var tabla1 = 'tabContactosProveedor';}         
    }

    if (s == 'modalColumnasTablasAgentes') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabAgentes';}
    }     

    if (s == 'modalColumnasTablasAcreedores') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabAcreedores';}
    } 

    if (s == 'modalColumnasTablasDeudores') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabDeudores';}
    }

    if (s == 'modalColumnasTablasProyectos') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabProyectos';}
    }

    if (s == 'modalColumnasTablasCtasTesoreria') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabCtasTesoreria';}
    }

    if (s == 'modalColumnasTablasFormasPago') {
        if (window.numTablaMostrarColumnas == 0) { var tabla1 = 'tabFormasPago';}
    }  
      

    $('#listFields').html('');
    var items = [];
    var a = $('#' + tabla1).bootstrapTable('getOptions');
    $.each(a.columns, function (key, value) {
        $.each(value, function (key1, value1) {
            if (value1.switchable == true) {
                if (value1.visible == true) {
                    items.push('<div class="form-check"><input class="form-check-input" type="checkbox" id="' + "f_" + value1.field + '" onchange="valorCasilla(this,' + tabla1 + ')" value="' + value1.field + '" checked><label class="form-check-label" for="' + "f_" + value1.field + '">' + value1.title + '</label></div>');
                } else {
                    items.push('<div class="form-check"><input class="form-check-input" type="checkbox" id="' + "f_" + value1.field + '" onchange="valorCasilla(this,' + tabla1 + ')" value="' + value1.field + '"><label class="form-check-label" for="' +  "f_" + value1.field + '">' + value1.title + '</label></div>');
                }
            }
        });
    });
    $('#listFields').append(items);
}

function valorCasilla (casilla, tabla) {
    if (casilla.checked == true) {
        $(tabla).bootstrapTable('showColumn', casilla.value);
    } else {
        $(tabla).bootstrapTable('hideColumn', casilla.value); 
    }
    return false;
}

function cambiarAltoTabla() { 
	var vSetInterA = setInterval(function () {
		let altoVentana   =  document.documentElement.clientHeight;
		let altoFila      = $("#fila").height();
		let diferencia    = altoVentana - altoFila;
		$table.bootstrapTable('resetView', {height: diferencia} );
	}, 1000);
    return false;
}

function formatoFechaHora(valor) {
    return valor.substring(8, 10) + '-' + valor.substring(5, 7) + '-' + valor.substring(0, 4) + ' ' + valor.substring(11, 13) + ':' + valor.substring(14, 16);
}

function sustituirT(v) {
    var longitudV   = v.length;
    var sNuevo      = '';
    for (var x = 0; x <= longitudV; x++) {
        var s = v.substr(x, 1);
        if (s == 'T') { s = ' '; }
        sNuevo += s;
    }
    return sNuevo;
}

function seleccionarFila(tabla, winVar, nomCampo, clase) {
    var numFilas = Object.keys($('#' + tabla).bootstrapTable('getData')).length;
    var ind = 0;

    if (numFilas != 0)  {

        let rows = Array.from(document.querySelectorAll('tr.' + clase));
        rows.forEach(row => {  row.classList.remove(clase);  });

        if (window[winVar] == '') {
            document.getElementById(tabla).rows[1].classList.add(clase);
            window[winVar] = $('#' + tabla).bootstrapTable('getData')[0][nomCampo];
            ind = 1;
        } else {
            for (i = 0; i < numFilas; i++) {
                if ($('#' + tabla).bootstrapTable('getData')[i][nomCampo] == window[winVar]) {
                    ind = i;
                    document.getElementById(tabla).rows[i + 1].classList.add(clase);
                    break;
                }
            }       
        }
    } else {
        ind = -1;
        window[winVar] = '';
        $('.' + clase).removeClass(clase);
    }
    // devuelve índice
    return ind;
}


function eliminarReg(tabla, winVar, nomCampo, winListEliminar) {
    let numFilas = Object.keys($('#' + tabla).bootstrapTable('getData')).length;
    //si no hay filas, salir
    if (numFilas == 0) { return false; }
    let valorAeliminar = window[winVar];
    let filaSeleccionada = indice(window[winVar], nomCampo, tabla);
    //si es la última fila ...
    if (numFilas - 1 == filaSeleccionada) {
        //si sólo hay una fila
        if (numFilas == 1) {
            window[winVar]='';
        } else {
            window[winVar]=$('#' + tabla).bootstrapTable('getData')[filaSeleccionada - 1][nomCampo];  
        }
    } else {
        window[winVar]=$('#' + tabla).bootstrapTable('getData')[filaSeleccionada + 1][nomCampo];
    }
    $('#' + tabla).bootstrapTable('remove', {
        field: nomCampo,
        values: [valorAeliminar]
    })
    if (winListEliminar != '') {
        window[winListEliminar].push(valorAeliminar);    
    }
    return false;
}

function indice(valor, nomCampo, tabla) {
    let a        = -1;
    let tabDatos = $('#' + tabla).bootstrapTable('getData');
    tabDatos.filter(function (o, index) {
        if (o[nomCampo] === valor) { a = index; }
    });
    return a; 
}

function formatoSepMilesSinDec(valor) {
    return parseInt(valor).toLocaleString();
}

function formatoFecha(valor) {
    return valor.substring(8, 10) + '-' + valor.substring(5, 7) + '-' + valor.substring(0, 4);
}

function formatoBool(valor, simbol) {
	if (valor == 0) {
		return '';
	} else {
        if (simbol) {
            return '<i class="bi bi-check-circle-fill text-success fw-bold"></i><title>Sí</title>';
        } else { return 'Sí'; }
	}	    	
}

function formatoPeriodicidad(valor) {
    if (valor == '')    { return ''; }
    if (valor == 'y')   { return 'Diaria'; }
    if (valor == 'ww')  { return 'Semanal'; }
    if (valor == 'm')   { return 'Mensual'; }
    if (valor == 'q')   { return 'Trimestral'; }
}

function formatBanco (value, longitudMax) {
    return '0'.repeat((longitudMax - value.length)) + value;
}

function cadenaCeros(oldS, numCeros) {
    oldS        = oldS.trim();
    var cadena  = '1234567890';
    var longS   = oldS.length;
    var newS    = '';
    var s       = '';
    for (let x = 0; x <= longS; x++) {
        s = oldS.substr(x, 1);
        if (cadena.indexOf(s) != -1) { newS += s; }
    }
    return formatBanco(newS, numCeros);     
}

function devBool(v) {
    if ((v == 0) || (v == false)) {
        return false;
    } else {
        return true;
    }
}

function porcentajeFocus(v) {
    sMask1ant = v;
}

function porcentajeBlur(n) {
    let n1 = document.getElementById(n); 
    let sMask1 = n1.value;
    if (sMask1 != sMask1ant) {
      let numSinMascara = quitarMascara(sMask1, ',');
      if (numSinMascara > 100) { numSinMascara = 100; }
      n1.value = numSinMascara.toFixed(2).toString().replace(".", ",") + " %";
    }    
}

function mascara (numDecimales, separadorDecimal, separadorMiles, simboloDivisa) {
    var sDec = '';
    if (numDecimales > 0) {
        sDec = separadorDecimal + '0'.repeat(numDecimales);
    }
    return $.trim('#' + separadorMiles + '##0' + sDec + ' ' + simboloDivisa);
}

function formatoNum (número, numDecimales, separadorDecimal, separadorMiles, simboloDivisa) {
    var nstr = número.toFixed(numDecimales).toString();
    nstr += '';
    x  = nstr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? separadorDecimal + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + separadorMiles + '$2');

    return $.trim(x1 + x2 + ' ' + simboloDivisa);
}

function quitarMascara(sMask1, separadorDecimal) {
    var longitudMask1               = sMask1.length;
    var sSinMask1                   = '';
    var cadena                      = '1234567890' + separadorDecimal;
    for (var x = 0; x <= longitudMask1; x++) {
        var s = sMask1.substr(x, 1);
        if (cadena.indexOf(s) != -1) {
            if (s == ',') { s = '.' }
            sSinMask1 = sSinMask1 + s;
        }
    }
    if (sSinMask1.length == 0) { sSinMask1 = '0'; }
    return parseFloat(sSinMask1);
}

function hiperenlace(sText, tipo) {
    // tipo = 1 teléfono, 2 sms, 3 whatsapp, 4 www, 5 mail
    if (tipo == 4) { 
        window.open(sText, '_blank');
    } else if (tipo == 5) {
        window.open('mailto:' + sText, '_blank');
    } else {
        // para teléfono y sms puede haber ceros delante y el signo +
        // para whatsapp eliminar los ceros de delante por si viene
        // con un prefijo internacional con ceros delante, por ejemplo 0034
        var longitud    = sText.length;
        var numeros     = '';
        if (tipo == 1 || tipo == 2) {
            var cadena      = '1234567890+';
        } else {
            var cadena      = '1234567890';
        }

        for (var x = 0; x <= longitud; x++) {
            var s = sText.substr(x, 1);
            if (cadena.indexOf(s) != -1) {
                numeros = numeros + s;
            }
        }
        if (numeros.length == 0) { numeros = '0'; }
        switch(tipo) {
            case 1: 
                window.open('tel:' + numeros, '_blank');
                break;
            case 2:
                window.open('sms:' + numeros, '_blank');
                break;
            case 3:
                window.open('https://wa.me/' + parseFloat(numeros), '_blank');  
                break;
        }           

    }
    return false;
}


function devDato(s, i, d) {
    // s es la cadena SQL
    // i es id del input text
    // si d = true es defaultValue,  false es value
    let formData4 = new FormData();
    formData4.append('queries', s);
    formData4.append('esBDempresas', 0);
    async function datosDevueltos4() {
        const response4 = await fetch('php/multiselect.php', {
            method: 'POST',
            body: formData4
        });
        const data = await response4.json();
        return data;
    };
    datosDevueltos4().then((data) => { 
        let s = data[0].datoDevuelto || '';
        if (d == true) { i.defaultValue = s; } else { i.value = s; }
    }).catch(error => {
        if (d == true) { i.defaultValue = ''; } else { i.value = ''; }
        //alert(error.message);
    })  
}


function modal1(t, m, i) {
    let h = '<div class="modal" id="dialogo1" tabindex="-1">';
    h +=    '   <div class="modal-dialog">';
    h +=    '       <div class="modal-content">';
    h +=    '           <div class="modal-header bg-light">';
    h +=    '               <h5 class="modal-title">' + t + '</h5>';
    h +=    '               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
    h +=    '          </div>';
    h +=    '          <div class="modal-body">';
    h +=    '              <div align="center">';
    h +=    '                  <p>' + m + '</p>';
    h +=    '              </div>';
    h +=    '          </div>';
    h +=    '      </div>';
    h +=    '  </div>';
    h +=    '</div>';
    i.innerHTML = h;
    let v = new bootstrap.Modal(dialogo1);
    v.show();
}


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function tooltips() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        this.addEventListener('hide.bs.tooltip', function () {
            new bootstrap.Tooltip(tooltipTriggerEl)
        })
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });    
}

function barraPaginacion (t) {
    if (window.innerWidth <= 992) {
        $(t).bootstrapTable('refreshOptions', {
            paginationParts: ['pageList']
        });
    } else {
        $(t).bootstrapTable('refreshOptions', {
            paginationParts: ['pageInfo', 'pageList']
        });         
    }
}

function noIncluidoEnContrasena(s, t) {
    s = s.trim();
    var longitud = s.length;
    var incluido = false;
    for (var x = 0; x < longitud; x++) {
        var ss11 = s.substr(x, 1);
        if (t==1) { var c = "1234567890".indexOf(ss11); }
        if (t==2) { var c = "abcdefghijklmnñopqrstuvwxyz".indexOf(ss11); }
        if (t==3) { var c = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".indexOf(ss11); }          
        if (c>=0) { incluido = true; break; }
    }
    return !incluido;
}

function msjDblClic () {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function compProcedencia() {
    if (!document.referrer) { window.location.replace('index.html'); };
}



function permisosVentana(s) {
    let p = dPermiso(s, 0, 10);
    let nomVentana = p.substring(0, 4);

    let p2  = document.getElementById(nomVentana + '2');
    let p2b = document.getElementById(nomVentana + '2b');
    if (p[5]=='0') { p2.disabled = true; p2b.style.display = 'none'; } else { p2.disabled = false; p2b.style.display = ''; }
    let p3  = document.getElementById(nomVentana + '3');
    let p3b = document.getElementById(nomVentana + '3b');
    if (p[6]=='0') { p3.disabled = true; p3b.style.display = 'none'; } else { p3.disabled = false; p3b.style.display = ''; }
    let p4  = document.getElementById(nomVentana + '4');
    let p4b = document.getElementById(nomVentana + '4b');
    if (p[7]=='0') { p4.disabled = true; p4b.style.display = 'none'; } else { p4.disabled = false; p4b.style.display = ''; }
    let p5  = document.getElementById(nomVentana + '5');
    let p5b = document.getElementById(nomVentana + '5b');
    if (p[8]=='0') { p5.disabled = true; p5b.style.display = 'none'; } else { p5.disabled = false; p5b.style.display = ''; }
    let p6  = document.getElementById(nomVentana + '6');
    let p6b = document.getElementById(nomVentana + '6b');
    if (p[9]=='0') { p6.disabled = true; p6b.style.display = 'none'; } else { p6.disabled = false; p6b.style.display = ''; }              
}

function dPermiso(s, ini, fin) {
    // si n = 0 devuelve la cadena con todos los permisos, por ejemplo 101010
    // si n tiene un valor de 1 a 6 devuelve el permiso específico
    // 1-->ver  2-->añadir  3-->modificar  4-->eliminar  5-->imprimir  6-->exportar
    let nomUs = localStorage.getItem('nomUs');
    let s4 = '';
    switch (s) {
        case 'clientes':
            s4 = 'clie';
            break;
        case 'proveedores':
            s4 = 'prov';
            break;
        case 'agentes':
            s4 = 'agen';
            break;          
        case 'departamentos':
            s4 = 'empl';
            break;
        case 'empresas':
            s4 = 'empr';
            break;
        case 'gruposclientes':
            s4 = 'gcli';
            break;
        case 'almacenes':
            s4 = 'alma';
            break;          
        case 'proyectos':
            s4 = 'proy';
            break;
        case 'zonas':
            s4 = 'zona';
            break;
        case 'agencias':
            s4 = 'tran';
            break;
        case 'formaspago':
            s4 = 'fpag';
            break;          
        case 'cuentastesoreria':
            s4 = 'ctat';
            break;
        case 'cuentasremesas':
            s4 = 'ctar';
            break;
        case 'divisas':
            s4 = 'divi';
            break;
        case 'bancos':
            s4 = 'banc';
            break;          
        case 'tiposatencion':
            s4 = 'tipa';
            break;
        case 'acreedores':
            s4 = 'acre';
            break; 
        case 'deudores':
            s4 = 'deud';
            break; 
        default:
            break;
    }
    if (nomUs == 'admin') {
        if (fin == 10) {
            return s4 + '111111';
        } else {
            return '1';
        }
    } else {
        let cadPermisos = localStorage.getItem('permisosGrupo');
        let pos = cadPermisos.indexOf(s4);
        return cadPermisos.substring(pos + ini, pos + fin);
    }
}

function nomFormInt(s) {
    let s4 = '';
    switch (s) {
        case 'f_clie':
            s4 = 'clie';
            break;
        case 'f_prove':
            s4 = 'prov';
            break;
        case 'f_age':
            s4 = 'agen';
            break;          
        case 'departamentos':
            s4 = 'empl';
            break;
        case 'empresas':
            s4 = 'empr';
            break;
        case 'GruposClientes':
            s4 = 'gcli';
            break;
        case 'almacenes':
            s4 = 'alma';
            break;          
        case 'proyectos':
            s4 = 'proy';
            break;
        case 'zonas':
            s4 = 'zona';
            break;
        case 'agencias':
            s4 = 'tran';
            break;
        case 'formas_de_pago':
            s4 = 'fpag';
            break;          
        case 'ctas_tesoreria':
            s4 = 'ctat';
            break;
        case 'ctasRemesas':
            s4 = 'ctar';
            break;
        case 'divisas':
            s4 = 'divi';
            break;
        case 'bancos':
            s4 = 'banc';
            break;          
        case 'tipo_atencion':
            s4 = 'tipa';
            break;
        case 'acreedores':
            s4 = 'acre';
            break; 
        case 'deudores':
            s4 = 'deud';
            break;                                         
        default:
            break;
    }
    return s4;
}


function entrada(email, user, pass, ultEmp, enlace) {
    var finalizado = false;
    async function datosDevueltos1() {
        let formData8 = new FormData();
        formData8.append('usuario', user);
        formData8.append('contrasena', pass);
        formData8.append('ultEmpAbierta', ultEmp);
        const response1 = await fetch('php/compEntrada.php', {
            method: 'POST',
            body:   formData8
        });
        const data = await response1.json();
        return data;
    }
    datosDevueltos1().then((data) => {

        if (data == 'KO') {
            modal1("Mis contactos", "Contraseña no válida", myTextData);
            contrasena.focus();             
        } else {
            // valores por defecto bd gpempresas
            localStorage.setItem("dp1PD",           data[0].dia_pago1);
            localStorage.setItem("dp2PD",           data[0].dia_pago2);
            localStorage.setItem("dp3PD",           data[0].dia_pago3);
            localStorage.setItem("mnpPD",           data[0].mes_no_pago);
            localStorage.setItem("igicPD",          data[0].igic);
            localStorage.setItem("dtoComPD",        data[0].dto_comercial1);
            localStorage.setItem("dtoPpPD",         data[0].dto_pronto_pago1);
            localStorage.setItem("intFinPD",        data[0].recargo1);
            localStorage.setItem("perioPD",         data[0].periodicidad);
            localStorage.setItem("ttPD",            data[0].tipo_tarifa);
            localStorage.setItem("porPD",           data[0].portes);
            localStorage.setItem("fdePD",           data[0].forma_de_envio);
            localStorage.setItem("codGrupoUsPri",   data[1].codGrupoUsPri);
            localStorage.setItem("nomGrupoUsPri",   data[1].nomGrupoUsPri);

            // valores por defecto bd gpempX
            if (data[2] === undefined) {
                localStorage.setItem("codFPpredProve", '');
                localStorage.setItem("desFPpredProve", ''); 
            } else {
                localStorage.setItem("codFPpredProve", data[2].codFPpredProve);
                localStorage.setItem("desFPpredProve", data[2].desFPpredProve);
            }

            if (data[3] === undefined) {
                localStorage.setItem("codFPpredClie", ''); 
                localStorage.setItem("desFPpredClie", '');
            } else {
                localStorage.setItem("codFPpredClie", data[3].codFPpredClie);
                localStorage.setItem("desFPpredClie", data[3].desFPpredClie);
            }

            if (data[4] === undefined) {
                localStorage.setItem("codDivPred", '');
                localStorage.setItem("nomDivPred", ''); 
                localStorage.setItem("abrevDivPred", '');
                localStorage.setItem("decImpDivPred", ''); 
                localStorage.setItem("decPreUniDivPred", '');                       
            } else {
                localStorage.setItem("codDivPred", data[4].codDivPred);
                localStorage.setItem("nomDivPred", data[4].nomDivPred);
                localStorage.setItem("abrevDivPred", data[4].abrevDivPred);
                localStorage.setItem("decImpDivPred", data[4].decImpDivPred);
                localStorage.setItem("decPreUniDivPred", data[4].decPreUniDivPred);
            }

            if (data[5] === undefined) {
                localStorage.setItem("codGrupoClientePred", '');
                localStorage.setItem("desGrupoClientePred", '');
            } else {
                localStorage.setItem("codGrupoClientePred", data[5].codGrupoClientePred);
                localStorage.setItem("desGrupoClientePred", data[5].desGrupoClientePred);
            }

            if (data[6] === undefined) {
                localStorage.setItem("codCtaTesComPred", '');
                localStorage.setItem("desCtaTesComPred", ''); 
            } else {
                localStorage.setItem("codCtaTesComPred", data[6].codCtaTesCom);
                localStorage.setItem("desCtaTesComPred", data[6].desCtaTesCom);
            }

            if (data[7] === undefined) {
                localStorage.setItem("codCtaTesVenPred", '');
                localStorage.setItem("desCtaTesVenPred", '');
            } else {
                localStorage.setItem("codCtaTesVenPred", data[7].codCtaTesVen);
                localStorage.setItem("desCtaTesVenPred", data[7].desCtaTesVen);
            }

            if (data[8] === undefined) {
                localStorage.setItem("codZonaPred", '');
                localStorage.setItem("desZonaPred", '');
            } else {
                localStorage.setItem("codZonaPred", data[8].codZonaPred);
                localStorage.setItem("desZonaPred", data[8].desZonaPred); 
            }

            if (data[9] === undefined) {
                localStorage.setItem("codAgenciaPred", '');
                localStorage.setItem("desAgenciaPred", '');
            } else {
                localStorage.setItem("codAgenciaPred", data[9].codAgenciaPred);
                localStorage.setItem("desAgenciaPred", data[9].desAgenciaPred); 
            } 

            if (data[10].Administrador == 0) {
                localStorage.setItem("esAdministrador", false);
            } else {
                localStorage.setItem("esAdministrador", true);
            }

            // permisos
            var t = '';
            var a = '';
            for (var i = 11; i < 29; i++) {
                a = data[i]; 
                t += nomFormInt(a.NombreFormInterno);
                if (a.ver       == 0) {t += '0';} else {t += '1';}
                if (a.anadir    == 0) {t += '0';} else {t += '1';}
                if (a.modificar == 0) {t += '0';} else {t += '1';}
                if (a.eliminar  == 0) {t += '0';} else {t += '1';}
                if (a.imprimir  == 0) {t += '0';} else {t += '1';}
                if (a.exportar  == 0) {t += '0';} else {t += '1';}
            }
            localStorage.setItem('permisosGrupo', t);

            localStorage.setItem('empActiva', ultEmp);

            finalizado = true;   

        }
    }).catch(error => {
        modal1('Mis contactos', 'Contraseña no válida', myTextData);
        contrasena.focus(); 
    }).finally( ()  => {
        if (finalizado) {
            if (enlace) {
                localStorage.setItem('eMail', email);
                localStorage.setItem('nomUs', user);
                localStorage.setItem('contrasena', pass);
                localStorage.setItem('procValida', true);
                window.location.replace('principal.html');                
            } else { return true; }
        }
    });

}


function gesDoc(n) {
    let serie       = 0;
    let numero      = 0;
    let nomForm     = '';
    switch (n) {
        case 20:
            numero  = window.idTabClientes;
            nomForm = 'formCliente';
            break; 
        case 21:
            numero  = window.idTabProveedores;
            nomForm = 'formProveedor';
            break;            
        case 22:
            numero  = window.idTabAgentes;
            nomForm = 'formAgente';
            break;
        case 83:
            numero  = window.idTabAcreedores;
            nomForm = 'formAcreedor';
            break;
        case 82:
            numero  = window.idTabDeudores;
            nomForm = 'formDeudor';
            break;
        default:
            break;
    } 

    var finalizadoGesDoc = false;
    async function datosDevueltos1() {
        let formData9 = new FormData();
        formData9.append('tfImp', n);
        formData9.append('serie', serie);
        formData9.append('numero', numero);
        const response1 = await fetch('php/gesdocprev.php', {
            method: 'POST',
            body:   formData9
        });
        const data = await response1.json();
        return data;
    }
    datosDevueltos1().then((data) => {
        if (data == 'OK') { finalizadoGesDoc = true; }
    }).catch(error => {
        modal1('Mis contactos', error.message, myTextData); 
    }).finally( ()  => {
        if (finalizadoGesDoc) { nuevaVentana('gestiondocumental', nomForm, '', '', ''); }
    });

}

function eliminarReg1(tabla, winVar, nomCampo, winListEliminar) {
    let numFilas = Object.keys($('#' + tabla).bootstrapTable('getData')).length;
    //si no hay filas, salir
    if (numFilas == 0) { return false; }
    let valorAeliminar = window[winVar];
    let filaSeleccionada = indice1(window[winVar], nomCampo, tabla);
    //si es la última fila ...
    if (numFilas - 1 == filaSeleccionada) {
        //si sólo hay una fila
        if (numFilas == 1) {
            window[winVar]='';
        } else {
            window[winVar]=$('#' + tabla).bootstrapTable('getData')[filaSeleccionada - 1][nomCampo];  
        }
    } else {
        window[winVar]=$('#' + tabla).bootstrapTable('getData')[filaSeleccionada + 1][nomCampo];
    }
    $('#' + tabla).bootstrapTable('remove', {
        field: nomCampo,
        values: [valorAeliminar]
    })
    if (winListEliminar != '') {
        window[winListEliminar].push(valorAeliminar);    
    }
}

function indice1(valor, nomCampo, tabla) {
    let numFilas = Object.keys($('#' + tabla).bootstrapTable('getData')).length;
    if (numFilas != 0) {
        for (i = 0; i < numFilas; i++) {
            if ($('#' + tabla).bootstrapTable('getData')[i][nomCampo] == valor) {
                return i;
            }
        }
    }
}

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
    var p = document.getElementById('PantallaCompleta');

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
        if (p.classList.contains('btn-outline-success')) { p.classList.remove('btn-outline-success'); }
        if (!p.classList.contains('btn-success')) { p.classList.add('btn-success'); }
    } else {
        cancelFullScreen.call(doc);
        if (p.classList.contains('btn-success')) { p.classList.remove('btn-success'); }
        if (!p.classList.contains('btn-outline-success')) { p.classList.add('btn-outline-success'); }
    }
}
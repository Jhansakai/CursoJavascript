
alturaCilindro = prompt('Ingresa la altura del empaque cilíndrico:')
diametroCilindro = prompt('Ingresa el diámetro del empaque cilíndrico:')
radioCilindro = diametroCilindro / 2;
volumenCilindro = Math.PI * (radioCilindro ** 2) * alturaCilindro

largoRectangulo = prompt('Ingresa el largo del empaque rectangular:')
anchoRectangulo = prompt('Ingresa el ancho del empaque rectangular:')
altoRectangulo = prompt('Ingresa la altura del empaque rectangular:')
volumenRectangulo = largoRectangulo * anchoRectangulo * altoRectangulo


radioCono = prompt('Ingresa el radio del empaque cónico:')
alturaCono = prompt('Ingresa la altura del empaque cónico:')
volumenCono = (1 / 3) * Math.PI * (radioCono ** 2) * alturaCono


if (volumenCilindro > volumenRectangulo && volumenCilindro > volumenCono) {
    alert('El empaque cilíndrico tiene: ' + Math.round(volumenCilindro) + ' cm³ es el que caben más krispetas.');
} else if (volumenRectangulo > volumenCilindro && volumenRectangulo > volumenCono) {
    alert('El empaque rectangular tiene: ' + Math.round(volumenRectangulo) + ' cm³ es el que caben más krispetas.');
} else {
    alert('El empaque cónico tiene: ' + Math.round(volumenCono) + ' cm³ es el que caben más krispetas.');
}
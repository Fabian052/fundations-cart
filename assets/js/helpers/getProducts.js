const dataBase = [
  {
    id: 1,
    name: "BALLANTINE`S - FINEST",
    price: 30,
    image: "assets/images/id_1.png",
    category: "Product",
    quantity: 10,
    description:
      "Whisky escocés de 750ML \n Destilados de cereal, malta y agua, azúcar, extracto de lima natural, aromatizantes naturales \n colorante: caramelo solo",
  },

  {
    id: 2,
    name: "ARDBEG - 10 YEAR OLD",
    price: 28,
    image: "assets/images/id_2.png",
    category: "Product",
    quantity: 12,
    description:
      "Whisky de 750ML \n Color Oro claro, con un aroma  Explosivo de intensa fruta ahumada, limón picante y lima, envuelta en chocolate oscuro ceroso",
  },

  {
    id: 3,
    name: "CANADIAN CLUB - CLASSIC 12 YEAR OLD",
    price: 35,
    image: "assets/images/id_3.png",
    category: "Product",
    quantity: 8,
    description:
      "Whisky canadiense de 750ML \n De aroma fresco y suave que tiene un sabor limpio, ligero y seco con notas de roble muy sutiles",
  },

  {
    id: 4,
    name: "CANADIAN CLUB - PREMIUM",
    price: 32,
    image: "assets/images/id_4.png",
    category: "Product",
    quantity: 15,
    description:
      "Whisky de 1.75 Litros \n De una Aroma fresco y suave, con una nuez de almendras, un toque de especias picantes, con sabor  especiado y sabroso, complementado con toques de rico roble y vainilla dulce, dulzura agradable.",
  },

  {
    id: 5,
    name: "AUCHENTOSHAN - THREE WOOD",
    price: 40,
    image: "assets/images/id_5.png",
    category: "Product",
    quantity: 14,
    description:
      "Whisky de 750 ml \n Color miel dorada, con aroma  de almendras tostadas, toffee caramelizado y la suavidadsabor suave y dulce, con notas de mandarina y lima. \n El final tiene un sabor a jengibre y es ligeramente seco, con un agradable y persistente sabor a nueces",
  },

  {
    id: 6,
    name: "MERSER - 12 YEAR OLD DOUBLE BARREL",
    price: 30,
    image: "assets/images/id_6.png",
    category: "Product",
    quantity: 13,
    description:
      "Este ron de 700 ML \n el cual es destilado en el Caribe, pero se mezcla en Londres. De acuerdo con las tradiciones establecidas por las casas cerveceras de Londres de los siglos XVII, XVIII y XIX, no se agrega azúcar ni colorante al ron envejecido en barricas de roble",
  },

  {
    id: 7,
    name: "PLAMB`S - NAVY",
    price: 32,
    image: "assets/images/id_7.png",
    category: "Product",
    quantity: 17,
    description:
      "Este ron de 700 ML \n el cual es destilado en el Caribe, pero se mezcla en Londres. De acuerdo con las tradiciones establecidas por las casas cerveceras de Londres de los siglos XVII, XVIII y XIX, no se agrega azúcar ni colorante al ron envejecido en barricas de roble",
  },

  {
    id: 8,
    name: "PCAPTAIN MORGAN - BLACK SPICED",
    price: 28,
    image: "assets/images/id_8.png",
    category: "Product",
    quantity: 18,
    description:
      "Ron de in 1 litro \n de color oscuro con una extensión de sabores, muchos más intensos y aromáticos (vainilla, canela china y el clavo)",
  },

  {
    id: 9,
    name: "BUMBU - CRAFT RUM",
    price: 18,
    image: "assets/images/id_9.png",
    category: "Product",
    quantity: 19,
    description:
      "Ron de 375ml \n Elaborado en pequeños lotes, con aroma ligero, notas dulces, afrutadas, con un sabor a Caramelo de azúcar moreno, macedonia de frutas con platano, piña, mango, melocotón y naranja con especias como la canela jengibre y cardamomo.",
  },

  {
    id: 10,
    name: "PAPPLETON ESTATE - 12YO RARE CASKS",
    price: 21,
    image: "assets/images/id_10.png",
    category: "Product",
    quantity: 13,
    description:
      " Ron de 700ml \n De Color dorado y miel, con una destacable claridad y brillo, con un sabor cítrico, afrutadas y dulces, reflejo de la caña de azúcar y el añejamiento. Sutiles aromas a piel de naranja, albaricoque, melocotón y melaza.",
  },

  {
    id: 11,
    name: "D`EAUBONNE - V.S.O.P.",
    price: 30,
    image: "assets/images/id_11.png",
    category: "Product",
    quantity: 15,
    description:
      "Pbrandy de 1.14 litros \n De color ámbar dorado. Nariz de naranja cítrica y caramelo con un toque de piña. Delicados sabores cítricos y de roble con un final cálido y seco. Sirva solo, en café español o use en adobos.",
  },

  {
    id: 12,
    name: "JP CHENET - BRANDY XO",
    price: 32,
    image: "assets/images/id_12.png",
    category: "Product",
    quantity: 17,
    description:
      "Brandy francés de 1 litro \n De Color ámbar dorado con un sabor elegante, flexible, cálido, redondo, de textura suave, tonos de frutos secos, madera, especias y un largo final y un aromaa del coñac predominan los tonos cálidos y refinados de la madera, que complementan los matices de ciruelas y chocolate",
  },

  {
    id: 13,
    name: "ST. REMY - V.S.O.P.",
    price: 29,
    image: "assets/images/id_13.png",
    category: "Product",
    quantity: 11,
    description:
      "Brandy de 500 ml \n De Color amarillo ámbar con reflejos dorados, con aroma afrutados de cereza, grosella y fresa silvestre",
  },

  {
    id: 14,
    name: "TORRES - 20 YEAR OLD",
    price: 37,
    image: "assets/images/id_14.png",
    category: "Product",
    quantity: 11,
    description:
      "Brandy de 700ml \n de color ambar oscuro con aroma cálido y  muy profundo con sabor canela, nuez moscaday vainilla, En boca aterciopelado intensamente con final breve y notas sutiles de roble",
  },

  {
    id: 15,
    name: "MIGUEL TORRES - 10",
    price: 46,
    image: "assets/images/id_15.png",
    category: "Product",
    quantity: 16,
    description:
      "Brandy de 700 ml \n Con un color topacio oscuro, con nobles reflejos oro viejo, De aroma intenso (canela, vainilla). Al paladar es graso y rico en taninos, evolucionando hacia un final de boca ampuloso y persistente, en el que se manifiestan los matices aromáticos del roble",
  },

  {
    id: 16,
    name: "COURVOISIER - V.S.",
    price: 32,
    image: "assets/images/id_16.png",
    quantity: 19,
    description:
      " Cognac de 700ml \n Con Color amarillo ámbar muy intenso con reflejos cobrizados, de aromas afrutados de albaricoque madura, junto con sensaciones de higos secos y fechadores, flores amarillas y aromas tostados de especias dulces, madera de sándalo y aceites perfumados, el sabor es fresco y redondo",
  },

  {
    id: 17,
    name: "D`USSE - V.S.O.P.",
    price: 29,
    image: "assets/images/id_17.png",
    quantity: 20,
    description:
      "Cognac de 700ml \n Con un aroma que revela un potente ramo, rico en notas leñosas con toques de canela y notas florales.Distintivo e inesperadamente suave, con cada sorbo, saboreas toques especiados, almendras y canela. Final con sutiles acentos de miel y frutos secos.",
  },

  {
    id: 18,
    name: "HENNESSY - X.O. THE ORIGINAL",
    price: 37,
    image: "assets/images/id_18.png",
    quantity: 12,
    description:
      "Brandy de 700ml \n De color  intenso y ascendente, con un sabor picante entrelazado con un toque de chocolate.",
  },

  {
    id: 19,
    name: "HINE - VINTAGE 1988",
    price: 46,
    image: "assets/images/id_19.png",
    quantity: 9,
    description:
      "Cognac de 500ml \n Con tonos cítricos jubilosos dan paso al aroma más suave y fragante de la acacia. Los matices picantes de la cereza presagian una juventud aún ardiendo en aventuras, atenuados por las notas agudas de la toronja de pulpa amarilla",
  },

  {
    id: 20,
    name: "REMY MARTIN - X.O. FINE CHAMPAGNE EXCELLENCE",
    price: 33,
    image: "assets/images/id_20.png",
    quantity: 7,
    description:
      "Martini de 750 ml \n con notas de sabor a fruta madura a finales del verano como el ciruelas jugosas, higos maduros, naranjas confitadas. también posee notas de roble, canela y avellanas. sabor aterciopelado, rico y persistente.",
  },
  {
    id: 21,
    name: "SUNTORY WHISKY - HIBIKI JAPANESE HARMONY",
    price: 165,
    image: "assets/images/id_21.png",
    quantity: 2,
    description:
      "Mantecoso y cremoso en nariz, con notas herbales frescas de cilantro, vainilla, pasteles horneados, albaricoque y frutas secas, aunque las notas herbales se intensifican con el tiempo. En boca se mezclan sabores de ensalada de frutas frescas, vainilla , miel, dulce de azúcar, cítricos dulces, caramelo y una delicada pimienta. Esta expresión tiene una textura fantástica, que equilibra las frutas suaves, la dulzura del dulce de azúcar y los cítricos, para terminar con melón dulce, azúcar glas y un picante dinámico.",
  },
];

export default dataBase

export const sampleRecipes = [
  // RECETAS EXISTENTES DE ENTRADAS
  {
    id: 2,
    slug: "banderillas",
    title: "Banderillas de Salchicha",
    description: "Crujientes brochetas de salchicha empanizadas, perfectas para snacks",
    prepTime: 20,
    cookTime: 10,
    servings: 4,
    difficulty: "Fácil",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "banderillas",
    video: "/videos/banderillas.mp4",
    ingredients: [
      { name: "Salchichas para hot dog", quantity: 8, unit: "unidades", package: "embutidos", price: 3.50 },
      { name: "Harina de trigo", quantity: 100, unit: "gramos", package: "harinas", price: 0.45 },
      { name: "Huevos", quantity: 2, unit: "unidades", package: "lácteos", price: 1.20 },
      { name: "Pan molido", quantity: 200, unit: "gramos", package: "panadería", price: 2.00 },
      { name: "Palitos de brocheta", quantity: 8, unit: "unidades", package: "utensilios", price: 1.50 },
      { name: "Aceite vegetal", quantity: 500, unit: "ml", package: "aceites", price: 2.50 }
    ],
    steps: [
      "Cortar cada salchicha en 3 trozos iguales",
      "Ensalivar ligeramente los palitos de brocheta e insertar 3 trozos de salchicha en cada uno",
      "Preparar tres platos: uno con harina, otro con huevos batidos, y otro con pan molido",
      "Pasar cada banderilla por harina, luego por huevo y finalmente por pan molido",
      "Calentar el aceite a 180°C en una olla profunda",
      "Freír las banderillas por 3-4 minutos hasta que estén doradas y crujientes",
      "Escurrir sobre papel absorbente y servir calientes"
    ],
    image: { src: "/imagenes/ban.png", alt: "Banderillas de salchicha crujientes" },
    calories: 380
  },
  {
    id: 29,
    slug: "banderillas-coreanas",
    title: "Banderillas Coreanas Picantes",
    description: "Banderillas con salsa gochujang y especias coreanas",
    prepTime: 25,
    cookTime: 12,
    servings: 4,
    difficulty: "Medio",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "banderillas",
    video: "/videos/banderillaspicantes.mp4",
    ingredients: [
      { name: "Salchichas para hot dog", quantity: 8, unit: "unidades", package: "embutidos", price: 3.50 },
      { name: "Salsa gochujang", quantity: 3, unit: "cucharadas", package: "salsas", price: 2.50 },
      { name: "Miel", quantity: 2, unit: "cucharadas", package: "endulzantes", price: 1.00 },
      { name: "Salsa de soja", quantity: 2, unit: "cucharadas", package: "condimentos", price: 1.20 },
      { name: "Ajo picado", quantity: 2, unit: "dientes", package: "verduras", price: 0.20 },
      { name: "Aceite de sésamo", quantity: 1, unit: "cucharada", package: "aceites", price: 0.80 }
    ],
    steps: [
      "Cortar las salchichas en trozos y ensartar en palitos",
      "Mezclar gochujang, miel, salsa de soja y ajo para hacer la salsa",
      "Asar las banderillas en parrilla o sartén hasta dorar",
      "Pincelar con la salsa coreana y cocinar 2 minutos más",
      "Servir calientes como aperitivo"
    ],
    image: { src: "/imagenes/banco.png", alt: "Banderillas coreanas picantes" },
    calories: 320
  },
  {
    id: 4,
    slug: "deditos-de-queso",
    title: "Deditos con extra queso",
    description: "Deditos de queso para acompañamiento",
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    difficulty: "Fácil",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "dedos",
    video: "/videos/palitos.mp4",
    ingredients: [
      { name: "Queso mozzarella", quantity: 200, unit: "gramos", package: "lácteos", price: 3.50 },
      { name: "Harina de trigo", quantity: 100, unit: "gramos", package: "harinas", price: 0.45 },
      { name: "Huevos", quantity: 2, unit: "unidades", package: "lácteos", price: 1.20 },
      { name: "Pan molido", quantity: 150, unit: "gramos", package: "panadería", price: 1.50 },
      { name: "Aceite vegetal", quantity: 500, unit: "ml", package: "aceites", price: 2.50 }
    ],
    steps: [
      "Cortar el queso mozzarella en bastones de aproximadamente 1cm de grosor",
      "Pasar cada bastón por harina, luego huevo batido y finalmente pan molido",
      "Repetir el proceso para crear una capa gruesa de empanizado",
      "Freír en aceite caliente (180°C) hasta que estén dorados y crujientes",
      "Escurrir sobre papel absorbente y servir inmediatamente"
    ],
    image: { src: "/imagenes/de.jpeg", alt: "Deditos de queso crujientes" },
    calories: 320
  },
  {
    id: 30,
    slug: "deditos-jalapeno",
    title: "Deditos de Jalapeño con Queso",
    description: "Jalapeños rellenos de queso empanizados",
    prepTime: 25,
    cookTime: 15,
    servings: 4,
    difficulty: "Medio",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "dedos",
    video: "/videos/deditos-jalapeno.mp4",
    ingredients: [
      { name: "Jalapeños frescos", quantity: 8, unit: "unidades", package: "verduras", price: 2.00 },
      { name: "Queso crema", quantity: 200, unit: "gramos", package: "lácteos", price: 3.00 },
      { name: "Harina de trigo", quantity: 100, unit: "gramos", package: "harinas", price: 0.45 },
      { name: "Huevos", quantity: 2, unit: "unidades", package: "lácteos", price: 1.20 },
      { name: "Pan molido", quantity: 150, unit: "gramos", package: "panadería", price: 1.50 },
      { name: "Aceite vegetal", quantity: 500, unit: "ml", package: "aceites", price: 2.50 }
    ],
    steps: [
      "Cortar los jalapeños por la mitad y quitar las semillas",
      "Rellenar cada mitad con queso crema",
      "Pasar por harina, huevo batido y pan molido",
      "Freír en aceite caliente hasta dorar",
      "Escurrir y servir con salsa ranch"
    ],
    image: { src: "/imagenes/depeño.webp", alt: "Deditos de jalapeño con queso" },
    calories: 280
  },
  {
    id: 8,
    slug: "nachos",
    title: "Nachos",
    description: "Crujientes nachos con queso y toppings",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    difficulty: "Medio",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "nachos",
    video: "/videos/na.mp4",
    ingredients: [
      { name: "Tortillas de maíz", quantity: 200, unit: "gramos", package: "granos", price: 2.50 },
      { name: "Queso cheddar", quantity: 200, unit: "gramos", package: "lácteos", price: 3.00 },
      { name: "Jalapeños en escabeche", quantity: 100, unit: "gramos", package: "encurtidos", price: 1.50 },
      { name: "Crema ácida", quantity: 150, unit: "ml", package: "lácteos", price: 2.00 },
      { name: "Salsa de tomate", quantity: 100, unit: "ml", package: "condimentos", price: 1.20 }
    ],
    steps: [
      "Cortar las tortillas en triángulos",
      "Freír los nachos hasta que estén crujientes",
      "Rallar el queso cheddar",
      "Colocar los nachos en una bandeja, añadir el queso y hornear hasta derretir",
      "Agregar jalapeños y servir con crema ácida y salsa"
    ],
    image: { src: "/imagenes/na.png", alt: "Nachos con queso" },
    calories: 350
  },
  {
    id: 31,
    slug: "nachos-supremos",
    title: "Nachos Supremos con Carne",
    description: "Nachos con carne molida, frijoles y todos los toppings",
    prepTime: 15,
    cookTime: 15,
    servings: 6,
    difficulty: "Medio",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "nachos",
    video: "/videos/nachos-supremos.mp4",
    ingredients: [
      { name: "Tortillas de maíz", quantity: 300, unit: "gramos", package: "granos", price: 3.50 },
      { name: "Carne molida", quantity: 300, unit: "gramos", package: "carnes", price: 4.50 },
      { name: "Frijoles refritos", quantity: 200, unit: "gramos", package: "legumbres", price: 1.50 },
      { name: "Queso cheddar", quantity: 250, unit: "gramos", package: "lácteos", price: 3.50 },
      { name: "Crema ácida", quantity: 200, unit: "ml", package: "lácteos", price: 2.50 },
      { name: "Guacamole", quantity: 200, unit: "gramos", package: "salsas", price: 3.00 }
    ],
    steps: [
      "Freír las tortillas cortadas en triángulos",
      "Cocinar la carne molida con especias",
      "En una bandeja, colocar una capa de nachos",
      "Agregar carne, frijoles y queso",
      "Hornear hasta que el queso se derrita",
      "Servir con crema ácida y guacamole"
    ],
    image: { src: "/imagenes/nane.png", alt: "Nachos supremos con carne" },
    calories: 420
  },
  {
    id: 13,
    slug: "sopa-de-pollo",
    title: "Sopa de Pollo Casera",
    description: "Reconfortante sopa de pollo con verduras",
    prepTime: 15,
    cookTime: 40,
    servings: 6,
    difficulty: "Medio",
    category: "Sopas",
    subcategory: "entrada",
    recipeType: "sopa",
    video: "/videos/sopadepollo.mp4",
    ingredients: [
      { name: "Pollo entero", quantity: 1, unit: "unidad", package: "carnes", price: 8.00 },
      { name: "Zanahorias", quantity: 3, unit: "unidades", package: "verduras", price: 1.20 },
      { name: "Apio", quantity: 2, unit: "tallos", package: "verduras", price: 0.80 },
      { name: "Cebolla", quantity: 1, unit: "unidad", package: "verduras", price: 0.50 },
      { name: "Fideos para sopa", quantity: 200, unit: "gramos", package: "pastas", price: 1.50 }
    ],
    steps: [
      "En una olla grande, colocar el pollo y cubrir con agua",
      "Agregar sal, pimienta y llevar a ebullición",
      "Reducir el fuego y cocinar por 30 minutos",
      "Agregar las zanahorias, apio y cebolla picados",
      "Cocinar por 15 minutos más hasta que las verduras estén tiernas",
      "Agregar los fideos y cocinar por 8-10 minutos",
      "Servir caliente con perejil picado"
    ],
    image: { src: "/imagenes/sopapollo.png", alt: "Sopa de pollo casera" },
    calories: 180
  },
  {
    id: 32,
    slug: "sopa-tortilla",
    title: "Sopa de Tortilla",
    description: "Sopa tradicional mexicana con tortillas fritas",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: "Medio",
    category: "Sopas",
    subcategory: "entrada",
    recipeType: "sopa",
    video: "/videos/sopatortilla.mp4",
    ingredients: [
      { name: "Tortillas de maíz", quantity: 6, unit: "unidades", package: "granos", price: 1.80 },
      { name: "Pechuga de pollo", quantity: 300, unit: "gramos", package: "carnes", price: 5.00 },
      { name: "Tomates", quantity: 4, unit: "unidades", package: "verduras", price: 2.00 },
      { name: "Cebolla", quantity: 1, unit: "unidad", package: "verduras", price: 0.50 },
      { name: "Ajo", quantity: 2, unit: "dientes", package: "verduras", price: 0.20 },
      { name: "Aguacate", quantity: 1, unit: "unidad", package: "verduras", price: 1.50 }
    ],
    steps: [
      "Cocer y desmenuzar el pollo",
      "Licuar tomates, cebolla y ajo para hacer la salsa",
      "Freír las tortillas cortadas en tiras",
      "Cocinar la salsa con caldo de pollo",
      "Servir con pollo, tiras de tortilla y aguacate"
    ],
    image: { src: "/imagenes/sotilla.png", alt: "Sopa de tortilla" },
    calories: 220
  },
  {
    id: 16,
    slug: "ensalada-cesar",
    title: "Ensalada César Clásica",
    description: "Ensalada fresca con aderezo césar casero",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Fácil",
    category: "Ensaladas",
    subcategory: "entrada",
    recipeType: "ensalada",
    video: "/videos/ensaladacesar.mp4",
    ingredients: [
      { name: "Lechuga romana", quantity: 1, unit: "cabeza", package: "verduras", price: 1.80 },
      { name: "Pollo asado", quantity: 200, unit: "gramos", package: "carnes", price: 4.00 },
      { name: "Crutones", quantity: 100, unit: "gramos", package: "panadería", price: 1.20 },
      { name: "Queso parmesano", quantity: 50, unit: "gramos", package: "lácteos", price: 2.50 },
      { name: "Aceite de oliva", quantity: 60, unit: "ml", package: "aceites", price: 1.20 }
    ],
    steps: [
      "Lavar y cortar la lechuga en trozos",
      "Preparar el aderezo: licuar aceite, limón, anchoas, ajo y mostaza",
      "Cortar el pollo en tiras",
      "En un bowl grande, mezclar la lechuga con el aderezo",
      "Agregar el pollo, crutones y queso parmesano rallado",
      "Mezclar suavemente y servir inmediatamente"
    ],
    image: { src: "/imagenes/ces.png", alt: "Ensalada césar clásica" },
    calories: 280
  },
  {
    id: 33,
    slug: "ensalada-griega",
    title: "Ensalada Griega Tradicional",
    description: "Ensalada mediterránea con queso feta y aceitunas",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Fácil",
    category: "Ensaladas",
    subcategory: "entrada",
    recipeType: "ensalada",
    video: "/videos/ensaladagriega.mp4",
    ingredients: [
      { name: "Pepino", quantity: 1, unit: "unidad", package: "verduras", price: 1.00 },
      { name: "Tomates", quantity: 3, unit: "unidades", package: "verduras", price: 1.50 },
      { name: "Queso feta", quantity: 200, unit: "gramos", package: "lácteos", price: 4.00 },
      { name: "Aceitunas kalamata", quantity: 100, unit: "gramos", package: "encurtidos", price: 2.50 },
      { name: "Aceite de oliva", quantity: 60, unit: "ml", package: "aceites", price: 1.20 },
      { name: "Orégano seco", quantity: 1, unit: "cucharadita", package: "especias", price: 0.30 }
    ],
    steps: [
      "Cortar pepino y tomates en cubos",
      "Desmenuzar el queso feta",
      "Mezclar todos los ingredientes en un bowl",
      "Aliñar con aceite de oliva y orégano",
      "Servir fresca"
    ],
    image: { src: "/imagenes/engria.png", alt: "Ensalada griega tradicional" },
    calories: 200
  },
  {
    id: 21,
    slug: "sopes",
    title: "Sopes Mexicanos",
    description: "Base de masa con frijoles, carne y verduras",
    prepTime: 30,
    cookTime: 20,
    servings: 6,
    difficulty: "Medio",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "sopes",
    video: "/videos/sopes.mp4",
    ingredients: [
      { name: "Masa de maíz", quantity: 500, unit: "gramos", package: "granos", price: 3.50 },
      { name: "Frijoles refritos", quantity: 300, unit: "gramos", package: "legumbres", price: 1.80 },
      { name: "Carne molida", quantity: 300, unit: "gramos", package: "carnes", price: 4.50 },
      { name: "Lechuga", quantity: 1, unit: "cabeza", package: "verduras", price: 1.20 },
      { name: "Crema", quantity: 200, unit: "ml", package: "lácteos", price: 2.00 }
    ],
    steps: [
      "Formar discos de masa y hacer bordes",
      "Cocinar en comal hasta dorar",
      "Freír ligeramente en aceite",
      "Untar con frijoles refritos",
      "Agregar carne, lechuga, crema y queso",
      "Servir inmediatamente"
    ],
    image: { src: "/imagenes/sopes.webp", alt: "Sopes mexicanos" },
    calories: 280
  },
  {
    id: 34,
    slug: "sopes-tinga",
    title: "Sopes de Tinga de Pollo",
    description: "Sopes con tinga de pollo y crema",
    prepTime: 35,
    cookTime: 25,
    servings: 6,
    difficulty: "Medio",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "sopes",
    video: "/videos/sopestinga.mp4",
    ingredients: [
      { name: "Masa de maíz", quantity: 500, unit: "gramos", package: "granos", price: 3.50 },
      { name: "Pechuga de pollo", quantity: 400, unit: "gramos", package: "carnes", price: 6.00 },
      { name: "Cebolla", quantity: 2, unit: "unidades", package: "verduras", price: 1.00 },
      { name: "Chipotle en adobo", quantity: 3, unit: "cucharadas", package: "condimentos", price: 2.00 },
      { name: "Crema", quantity: 200, unit: "ml", package: "lácteos", price: 2.00 },
      { name: "Queso fresco", quantity: 200, unit: "gramos", package: "lácteos", price: 3.00 }
    ],
    steps: [
      "Preparar la tinga: cocinar pollo desmenuzado con cebolla y chipotle",
      "Formar y cocinar los sopes",
      "Freír ligeramente los sopes",
      "Agregar tinga de pollo a cada sope",
      "Decorar con crema y queso fresco",
      "Servir calientes"
    ],
    image: { src: "/imagenes/sopespollo.webp", alt: "Sopes de tinga de pollo" },
    calories: 320
  },
  {
    id: 20,
    slug: "molletes",
    title: "Molletes Caseros",
    description: "Pan tostado con frijoles y queso derretido",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "Fácil",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "molletes",
    video: "/videos/molletes.mp4",
    ingredients: [
      { name: "Bolillo", quantity: 4, unit: "unidades", package: "panadería", price: 2.00 },
      { name: "Frijoles refritos", quantity: 400, unit: "gramos", package: "legumbres", price: 2.50 },
      { name: "Queso manchego", quantity: 200, unit: "gramos", package: "lácteos", price: 4.00 },
      { name: "Pico de gallo", quantity: 200, unit: "gramos", package: "verduras", price: 2.00 }
    ],
    steps: [
      "Cortar los bolillos por la mitad",
      "Tostar ligeramente el pan",
      "Untar una capa generosa de frijoles",
      "Cubrir con queso manchego rallado",
      "Gratinar hasta que el queso se derrita",
      "Servir con pico de gallo"
    ],
    image: { src: "/imagenes/molle.png", alt: "Molletes caseros" },
    calories: 320
  },
  {
    id: 35,
    slug: "molletes-huevo",
    title: "Molletes con Huevo Estrellado",
    description: "Molletes tradicionales con huevo frito",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Fácil",
    category: "Aperitivos",
    subcategory: "entrada",
    recipeType: "molletes",
    video: "/videos/molletehuevo.mp4",
    ingredients: [
      { name: "Bolillo", quantity: 4, unit: "unidades", package: "panadería", price: 2.00 },
      { name: "Frijoles refritos", quantity: 400, unit: "gramos", package: "legumbres", price: 2.50 },
      { name: "Queso manchego", quantity: 200, unit: "gramos", package: "lácteos", price: 4.00 },
      { name: "Huevos", quantity: 4, unit: "unidades", package: "lácteos", price: 2.40 },
      { name: "Aceite", quantity: 2, unit: "cucharadas", package: "aceites", price: 0.30 }
    ],
    steps: [
      "Preparar los molletes básicos",
      "Freír los huevos al gusto",
      "Colocar un huevo frito sobre cada mollete",
      "Servir inmediatamente",
      "Acompañar con salsa picante al gusto"
    ],
    image: { src: "/imagenes/molletehuevo.png", alt: "Molletes con huevo estrellado" },
    calories: 380
  },

  // PLATOS FUERTES - HAMBURGUESAS
  {
    id: 1,
    slug: "hamburguesa-queso",
    title: "Hamburguesa Clásica con Queso",
    description: "Jugosa hamburguesa casera con queso cheddar derretido",
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    difficulty: "Difícil",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "hamburguesa",
    video: "/videos/hamburguesa.mp4",
    ingredients: [
      { name: "Carne molida de res", quantity: 400, unit: "gramos", package: "carnes", price: 6.50 },
      { name: "Pan de hamburguesa", quantity: 2, unit: "unidades", package: "panadería", price: 1.20 },
      { name: "Queso cheddar", quantity: 4, unit: "rebanadas", package: "lácteos", price: 2.80 },
      { name: "Lechuga", quantity: 4, unit: "hojas", package: "verduras", price: 0.60 },
      { name: "Tomate", quantity: 1, unit: "unidad", package: "verduras", price: 0.80 }
    ],
    steps: [
      "Formar dos tortas de carne de 200g cada una, sazonar con sal y pimienta",
      "Calentar la plancha a fuego medio-alto y cocinar las hamburguesas 4-5 minutos por lado",
      "En el último minuto, colocar dos rebanadas de queso cheddar sobre cada hamburguesa",
      "Tostar ligeramente los panes en la plancha",
      "Armar la hamburguesa: pan base, salsa, lechuga, tomate, cebolla, hamburguesa con queso y tapa del pan"
    ],
    image: { src: "/imagenes/ham.png", alt: "Hamburguesa clásica con queso" },
    calories: 650
  },
  {
    id: 36,
    slug: "hamburguesa-pollo",
    title: "Hamburguesa de Pollo Crispy",
    description: "Hamburguesa de pollo empanizado con vegetales frescos",
    prepTime: 25,
    cookTime: 20,
    servings: 2,
    difficulty: "Medio",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "hamburguesa",
    video: "/videos/hamburguesapollo.mp4",
    ingredients: [
      { name: "Pechuga de pollo", quantity: 400, unit: "gramos", package: "carnes", price: 6.00 },
      { name: "Pan de hamburguesa", quantity: 2, unit: "unidades", package: "panadería", price: 1.20 },
      { name: "Harina de trigo", quantity: 100, unit: "gramos", package: "harinas", price: 0.45 },
      { name: "Huevos", quantity: 2, unit: "unidades", package: "lácteos", price: 1.20 },
      { name: "Pan molido", quantity: 150, unit: "gramos", package: "panadería", price: 1.50 },
      { name: "Lechuga", quantity: 4, unit: "hojas", package: "verduras", price: 0.60 }
    ],
    steps: [
      "Aplanar las pechugas de pollo",
      "Pasar por harina, huevo y pan molido",
      "Freír en aceite caliente hasta dorar",
      "Tostar los panes",
      "Armar hamburguesa con pollo, lechuga, tomate y mayonesa"
    ],
    image: { src: "/imagenes/hambpollo.png", alt: "Hamburguesa de pollo crispy" },
    calories: 520
  },

  // HOT DOGS
  {
    id: 3,
    slug: "hotdog",
    title: "Hot Dogs Clásicos",
    description: "Deliciosos hot dogs con todos los ingredientes tradicionales",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    difficulty: "Medio",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "hotdog",
    video: "/videos/hotdog.mp4",
    ingredients: [
      { name: "Salchichas para hot dog", quantity: 8, unit: "unidades", package: "embutidos", price: 4.50 },
      { name: "Pan para hot dog", quantity: 8, unit: "unidades", package: "panadería", price: 3.20 },
      { name: "Cebolla", quantity: 1, unit: "unidad", package: "verduras", price: 0.50 },
      { name: "Tomate", quantity: 2, unit: "unidades", package: "verduras", price: 1.60 },
      { name: "Mostaza", quantity: 60, unit: "ml", package: "condimentos", price: 1.50 }
    ],
    steps: [
      "Calentar una parrilla o sartén a fuego medio",
      "Cocinar las salchichas por 8-10 minutos, volteando ocasionalmente hasta que estén doradas",
      "Mientras tanto, cortar la cebolla en aros finos y el tomate en rodajas",
      "Tostar ligeramente los panes para hot dog en la parrilla",
      "Armar los hot dogs: colocar una salchicha en cada pan",
      "Agregar los toppings: cebolla, tomate",
      "Finalizar con las salsas al gusto: mostaza, salsa de tomate y mayonesa"
    ],
    image: { src: "/imagenes/hot.png", alt: "Hot dogs clásicos con toppings" },
    calories: 420
  },
  {
    id: 37,
    slug: "hotdog-mexicano",
    title: "Hot Dogs Estilo Mexicano",
    description: "Hot dogs con tocino, aguacate y jalapeños",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    difficulty: "Medio",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "hotdog",
    video: "/videos/hotdogmexica.mp4",
    ingredients: [
      { name: "Salchichas para hot dog", quantity: 8, unit: "unidades", package: "embutidos", price: 4.50 },
      { name: "Pan para hot dog", quantity: 8, unit: "unidades", package: "panadería", price: 3.20 },
      { name: "Tocino", quantity: 8, unit: "rebanadas", package: "embutidos", price: 4.00 },
      { name: "Aguacate", quantity: 2, unit: "unidades", package: "verduras", price: 3.00 },
      { name: "Jalapeños en escabeche", quantity: 100, unit: "gramos", package: "encurtidos", price: 1.50 },
      { name: "Cebolla", quantity: 1, unit: "unidad", package: "verduras", price: 0.50 }
    ],
    steps: [
      "Enrollar cada salchicha en una rebanada de tocino",
      "Cocinar en sartén hasta que el tocino esté crujiente",
      "Tostar los panes",
      "Preparar guacamole con aguacate y cebolla",
      "Armar hot dogs con salchicha envuelta en tocino",
      "Agregar guacamole y jalapeños"
    ],
    image: { src: "/imagenes/hotmexicano.png", alt: "Hot dogs estilo mexicano" },
    calories: 480
  },

  // PIZZAS
  {
    id: 5,
    slug: "pizza-peperoni",
    title: "Pizza de Pepperoni Casera",
    description: "Pizza fácil de hacer en casa",
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    difficulty: "Difícil",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "pizza",
    video: "/videos/pizza.mp4",
    ingredients: [
      { name: "Masa para pizza", quantity: 1, unit: "unidad", package: "panadería", price: 2.50 },
      { name: "Salsa de tomate", quantity: 200, unit: "ml", package: "salsas", price: 1.80 },
      { name: "Queso mozzarella", quantity: 250, unit: "gramos", package: "lácteos", price: 4.50 },
      { name: "Pepperoni", quantity: 150, unit: "gramos", package: "embutidos", price: 5.20 },
      { name: "Orégano", quantity: 10, unit: "gramos", package: "especias", price: 1.00 }
    ],
    steps: [
      "Precalentar el horno a 220°C",
      "Extender la masa para pizza en una bandeja para horno",
      "Untar la salsa de tomate uniformemente sobre la masa",
      "Agregar el queso mozzarella rallado y distribuir el pepperoni",
      "Espolvorear orégano y un poco de aceite de oliva",
      "Hornear durante 15-20 minutos hasta que el borde esté dorado"
    ],
    image: { src: "/imagenes/pi.jpg", alt: "Pizza de pepperoni casera" },
    calories: 280
  },
  {
    id: 38,
    slug: "pizza-hawaiana",
    title: "Pizza Hawaiana Casera",
    description: "Pizza con piña y jamón, dulce y salada",
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    difficulty: "Medio",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "pizza",
    video: "/videos/pizzahawaii.mp4",
    ingredients: [
      { name: "Masa para pizza", quantity: 1, unit: "unidad", package: "panadería", price: 2.50 },
      { name: "Salsa de tomate", quantity: 200, unit: "ml", package: "salsas", price: 1.80 },
      { name: "Queso mozzarella", quantity: 250, unit: "gramos", package: "lácteos", price: 4.50 },
      { name: "Jamón", quantity: 200, unit: "gramos", package: "embutidos", price: 4.00 },
      { name: "Piña en almíbar", quantity: 200, unit: "gramos", package: "frutas", price: 2.50 },
      { name: "Orégano", quantity: 10, unit: "gramos", package: "especias", price: 1.00 }
    ],
    steps: [
      "Precalentar el horno a 220°C",
      "Extender la masa para pizza",
      "Untar con salsa de tomate",
      "Agregar queso mozzarella",
      "Distribuir jamón en tiras y piña escurrida",
      "Hornear 15-20 minutos hasta que esté dorada"
    ],
    image: { src: "/imagenes/pizzahaw.png", alt: "Pizza hawaiana casera" },
    calories: 300
  },

  // TOSTADAS
  {
    id: 10,
    slug: "tostadas-de-frijoles",
    title: "Tostadas de Frijoles",
    description: "Tostadas crujientes con frijoles refritos y toppings",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: "Difícil",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "tostadas",
    video: "/videos/to.mp4",
    ingredients: [
      { name: "Tortillas de maíz", quantity: 8, unit: "unidades", package: "granos", price: 3.00 },
      { name: "Frijoles refritos", quantity: 400, unit: "gramos", package: "legumbres", price: 2.50 },
      { name: "Lechuga", quantity: 1, unit: "cabeza", package: "verduras", price: 1.20 },
      { name: "Queso fresco", quantity: 200, unit: "gramos", package: "lácteos", price: 2.80 },
      { name: "Crema", quantity: 200, unit: "ml", package: "lácteos", price: 1.50 }
    ],
    steps: [
      "Freír las tortillas hasta que estén crujientes",
      "Calentar los frijoles refritos",
      "Picar la lechuga y desmenuzar el queso",
      "Untar los frijoles sobre las tostadas",
      "Agregar lechuga, queso, crema y salsa al gusto"
    ],
    image: { src: "/imagenes/to.png", alt: "Tostadas de frijoles" },
    calories: 320
  },
  {
    id: 39,
    slug: "tostadas-tinga",
    title: "Tostadas de Tinga de Pollo",
    description: "Tostadas con tinga de pollo y crema",
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    difficulty: "Medio",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "tostadas",
    video: "/videos/tostadastinga.mp4",
    ingredients: [
      { name: "Tortillas de maíz", quantity: 8, unit: "unidades", package: "granos", price: 3.00 },
      { name: "Pechuga de pollo", quantity: 400, unit: "gramos", package: "carnes", price: 6.00 },
      { name: "Cebolla", quantity: 2, unit: "unidades", package: "verduras", price: 1.00 },
      { name: "Chipotle en adobo", quantity: 3, unit: "cucharadas", package: "condimentos", price: 2.00 },
      { name: "Crema", quantity: 200, unit: "ml", package: "lácteos", price: 2.00 },
      { name: "Aguacate", quantity: 2, unit: "unidades", package: "verduras", price: 3.00 }
    ],
    steps: [
      "Freír tortillas hasta que estén crujientes",
      "Preparar tinga de pollo con cebolla y chipotle",
      "Picar aguacate en rebanadas",
      "Armar tostadas: base crujiente, tinga de pollo",
      "Decorar con crema y aguacate"
    ],
    image: { src: "/imagenes/tostapollo.jpg", alt: "Tostadas de tinga de pollo" },
    calories: 350
  },

  // TACOS
  {
    id: 17,
    slug: "tacos-al-pastor",
    title: "Tacos al Pastor",
    description: "Auténticos tacos al pastor con piña y cebolla",
    prepTime: 30,
    cookTime: 25,
    servings: 4,
    difficulty: "Medio",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "tacos",
    video: "/videos/tacospastor.mp4",
    ingredients: [
      { name: "Carne de cerdo", quantity: 500, unit: "gramos", package: "carnes", price: 8.50 },
      { name: "Piña", quantity: 200, unit: "gramos", package: "frutas", price: 2.00 },
      { name: "Tortillas de maíz", quantity: 16, unit: "unidades", package: "granos", price: 3.20 },
      { name: "Cebolla", quantity: 1, unit: "unidad", package: "verduras", price: 0.50 },
      { name: "Cilantro", quantity: 1, unit: "manojo", package: "verduras", price: 0.80 }
    ],
    steps: [
      "Preparar la marinada con chiles, ajo, vinagre y especias",
      "Marinar la carne por al menos 2 horas",
      "Asar la carne en un trompo o sartén",
      "Calentar las tortillas",
      "Picar cebolla, cilantro y piña",
      "Armar los tacos con carne, piña, cebolla y cilantro"
    ],
    image: { src: "/imagenes/tocos.png", alt: "Tacos al pastor con piña" },
    calories: 320
  },
  {
    id: 40,
    slug: "tacos-bistec",
    title: "Tacos de Bistec con Cebolla",
    description: "Tacos de bistec a la plancha con cebolla asada",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: "Fácil",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "tacos",
    video: "/videos/tacosbistec.mp4",
    ingredients: [
      { name: "Bistec de res", quantity: 500, unit: "gramos", package: "carnes", price: 9.00 },
      { name: "Tortillas de maíz", quantity: 16, unit: "unidades", package: "granos", price: 3.20 },
      { name: "Cebolla", quantity: 2, unit: "unidades", package: "verduras", price: 1.00 },
      { name: "Cilantro", quantity: 1, unit: "manojo", package: "verduras", price: 0.80 },
      { name: "Limones", quantity: 4, unit: "unidades", package: "frutas", price: 1.20 },
      { name: "Salsa verde", quantity: 200, unit: "ml", package: "salsas", price: 2.50 }
    ],
    steps: [
      "Cortar el bistec en tiras delgadas",
      "Asar la cebolla en rodajas",
      "Cocinar la carne en plancha caliente",
      "Calentar tortillas",
      "Armar tacos con carne, cebolla asada y cilantro",
      "Servir con limón y salsa verde"
    ],
    image: { src: "/imagenes/tacosBi.png", alt: "Tacos de bistec con cebolla" },
    calories: 340
  },

  // ENCHILADAS
  {
    id: 18,
    slug: "enchiladas-verdes",
    title: "Enchiladas Verdes",
    description: "Deliciosas enchiladas bañadas en salsa verde",
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    difficulty: "Medio",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "enchiladas",
    video: "/videos/enchiladasverdes.mp4",
    ingredients: [
      { name: "Pechuga de pollo", quantity: 400, unit: "gramos", package: "carnes", price: 6.80 },
      { name: "Tortillas de maíz", quantity: 12, unit: "unidades", package: "granos", price: 2.40 },
      { name: "Tomates verdes", quantity: 500, unit: "gramos", package: "verduras", price: 3.50 },
      { name: "Crema", quantity: 200, unit: "ml", package: "lácteos", price: 2.00 },
      { name: "Queso fresco", quantity: 200, unit: "gramos", package: "lácteos", price: 3.00 }
    ],
    steps: [
      "Cocinar el pollo y desmenuzarlo",
      "Preparar la salsa verde con tomates, chile y cebolla",
      "Freír ligeramente las tortillas",
      "Rellenar tortillas con pollo y enrollar",
      "Bañar con salsa verde",
      "Decorar con crema y queso fresco"
    ],
    image: { src: "/imagenes/flautas.png", alt: "Enchiladas verdes" },
    calories: 280
  },
  {
    id: 41,
    slug: "enchiladas-rojas",
    title: "Enchiladas Rojas con Pollo",
    description: "Enchiladas bañadas en salsa roja de jitomate",
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    difficulty: "Medio",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "enchiladas",
    video: "/videos/enchiladasrojas.mp4",
    ingredients: [
      { name: "Pechuga de pollo", quantity: 400, unit: "gramos", package: "carnes", price: 6.80 },
      { name: "Tortillas de maíz", quantity: 12, unit: "unidades", package: "granos", price: 2.40 },
      { name: "Tomates rojos", quantity: 6, unit: "unidades", package: "verduras", price: 3.00 },
      { name: "Chile guajillo", quantity: 4, unit: "unidades", package: "verduras", price: 1.50 },
      { name: "Crema", quantity: 200, unit: "ml", package: "lácteos", price: 2.00 },
      { name: "Queso fresco", quantity: 200, unit: "gramos", package: "lácteos", price: 3.00 }
    ],
    steps: [
      "Cocinar y desmenuzar el pollo",
      "Preparar salsa roja con tomates y chiles guajillo",
      "Pasar tortillas por la salsa y freír ligeramente",
      "Rellenar con pollo y enrollar",
      "Bañar con más salsa",
      "Decorar con crema, queso y cebolla"
    ],
    image: { src: "/imagenes/enciladasrojas.webp", alt: "Enchiladas rojas con pollo" },
    calories: 300
  },

  // CHILES RELLENOS
  {
    id: 19,
    slug: "chiles-rellenos",
    title: "Chiles Rellenos",
    description: "Chiles poblanos rellenos de queso y bañados en salsa de tomate",
    prepTime: 40,
    cookTime: 30,
    servings: 4,
    difficulty: "Difícil",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "chiles-rellenos",
    video: "/videos/chilesrellenos.mp4",
    ingredients: [
      { name: "Chiles poblanos", quantity: 8, unit: "unidades", package: "verduras", price: 4.00 },
      { name: "Queso panela", quantity: 400, unit: "gramos", package: "lácteos", price: 6.00 },
      { name: "Tomates", quantity: 6, unit: "unidades", package: "verduras", price: 3.00 },
      { name: "Huevos", quantity: 4, unit: "unidades", package: "lácteos", price: 2.40 },
      { name: "Harina", quantity: 100, unit: "gramos", package: "harinas", price: 0.45 }
    ],
    steps: [
      "Asar y pelar los chiles poblanos",
      "Rellenar con queso panela",
      "Preparar la salsa de tomate",
      "Batir claras a punto de turrón y agregar yemas",
      "Empanizar chiles en harina y huevo",
      "Freír hasta dorar y bañar con salsa"
    ],
    image: { src: "/imagenes/chilesrellenos.png", alt: "Chiles rellenos" },
    calories: 350
  },
  {
    id: 42,
    slug: "chiles-rellenos-picadillo",
    title: "Chiles Rellenos de Picadillo",
    description: "Chiles poblanos rellenos de picadillo de carne",
    prepTime: 45,
    cookTime: 35,
    servings: 4,
    difficulty: "Difícil",
    category: "Principales",
    subcategory: "fuerte",
    recipeType: "chiles-rellenos",
    video: "/videos/chilesrellenospicadillo.mp4",
    ingredients: [
      { name: "Chiles poblanos", quantity: 8, unit: "unidades", package: "verduras", price: 4.00 },
      { name: "Carne molida", quantity: 400, unit: "gramos", package: "carnes", price: 6.50 },
      { name: "Tomates", quantity: 6, unit: "unidades", package: "verduras", price: 3.00 },
      { name: "Pasas", quantity: 50, unit: "gramos", package: "frutas", price: 1.50 },
      { name: "Almendras", quantity: 50, unit: "gramos", package: "frutos-secos", price: 2.00 },
      { name: "Huevos", quantity: 4, unit: "unidades", package: "lácteos", price: 2.40 }
    ],
    steps: [
      "Asar y pelar los chiles",
      "Preparar picadillo con carne, pasas y almendras",
      "Rellenar chiles con picadillo",
      "Preparar salsa de tomate",
      "Empanizar y freír los chiles",
      "Bañar con salsa y servir"
    ],
    image: { src: "/imagenes/chilepicadillo.webp", alt: "Chiles rellenos de picadillo" },
    calories: 420
  },

  // ARROCES
  {
    id: 12,
    slug: "arroz-blanco",
    title: "Arroz Blanco Casero",
    description: "Arroz blanco esponjoso y perfecto para acompañar",
    prepTime: 5,
    cookTime: 20,
    servings: 4,
    difficulty: "Fácil",
    category: "Acompañamientos",
    subcategory: "fuerte",
    recipeType: "arroz",
    video: "/videos/arrozblanco.mp4",
    ingredients: [
      { name: "Arroz blanco", quantity: 2, unit: "tazas", package: "granos", price: 1.50 },
      { name: "Agua", quantity: 4, unit: "tazas", package: "básicos", price: 0.00 },
      { name: "Aceite vegetal", quantity: 2, unit: "cucharadas", package: "aceites", price: 0.30 },
      { name: "Sal", quantity: 1, unit: "cucharadita", package: "especias", price: 0.10 }
    ],
    steps: [
      "Lavar el arroz hasta que el agua salga clara",
      "En una olla, calentar el aceite y sofreír el arroz",
      "Agregar el agua y la sal, llevar a ebullición",
      "Bajar el fuego, tapar y cocinar por 15-20 minutos",
      "Dejar reposar 5 minutos antes de servir"
    ],
    image: { src: "/imagenes/blanco.png", alt: "Arroz blanco casero" },
    calories: 200
  },
  {
    id: 43,
    slug: "arroz-rojo",
    title: "Arroz Rojo Mexicano",
    description: "Arroz rojo tradicional con verduras",
    prepTime: 10,
    cookTime: 25,
    servings: 6,
    difficulty: "Fácil",
    category: "Acompañamientos",
    subcategory: "fuerte",
    recipeType: "arroz",
    video: "/videos/arrozrojo.mp4",
    ingredients: [
      { name: "Arroz blanco", quantity: 2, unit: "tazas", package: "granos", price: 1.50 },
      { name: "Tomates", quantity: 3, unit: "unidades", package: "verduras", price: 1.50 },
      { name: "Cebolla", quantity: 0.5, unit: "unidad", package: "verduras", price: 0.25 },
      { name: "Ajo", quantity: 2, unit: "dientes", package: "verduras", price: 0.20 },
      { name: "Zanahoria", quantity: 1, unit: "unidad", package: "verduras", price: 0.40 },
      { name: "Chícharos", quantity: 100, unit: "gramos", package: "verduras", price: 1.20 }
    ],
    steps: [
      "Licuar tomates, cebolla y ajo",
      "Sofreír el arroz en aceite hasta dorar",
      "Agregar la salsa de tomate y cocinar 2 minutos",
      "Añadir agua, zanahoria y chícharos",
      "Cocinar a fuego bajo 20 minutos",
      "Dejar reposar 5 minutos y servir"
    ],
    image: { src: "/imagenes/arrozrojo.webp", alt: "Arroz rojo mexicano" },
    calories: 220
  },

  // FRIJOLES
  {
    id: 28,
    slug: "frijoles-charros",
    title: "Frijoles Charros",
    description: "Frijoles cocidos con chorizo y tocino",
    prepTime: 15,
    cookTime: 60,
    servings: 6,
    difficulty: "Medio",
    category: "Acompañamientos",
    subcategory: "fuerte",
    recipeType: "frijoles",
    video: "/videos/frijolescharros.mp4",
    ingredients: [
      { name: "Frijol bayo", quantity: 500, unit: "gramos", package: "legumbres", price: 4.50 },
      { name: "Chorizo", quantity: 200, unit: "gramos", package: "embutidos", price: 3.50 },
      { name: "Tocino", quantity: 150, unit: "gramos", package: "embutidos", price: 4.00 },
      { name: "Cebolla", quantity: 1, unit: "unidad", package: "verduras", price: 0.50 },
      { name: "Chile jalapeño", quantity: 2, unit: "unidades", package: "verduras", price: 0.60 }
    ],
    steps: [
      "Cocinar frijoles hasta estar suaves",
      "Freír chorizo y tocino",
      "Agregar cebolla y chile picados",
      "Incorporar a los frijoles cocidos",
      "Cocinar 15 minutos más",
      "Agregar cilantro picado al servir"
    ],
    image: { src: "/imagenes/frijol.png", alt: "Frijoles charros" },
    calories: 280
  },
  {
    id: 44,
    slug: "frijoles-refritos",
    title: "Frijoles Refritos Tradicionales",
    description: "Frijoles refritos cremosos para acompañar",
    prepTime: 10,
    cookTime: 20,
    servings: 6,
    difficulty: "Fácil",
    category: "Acompañamientos",
    subcategory: "fuerte",
    recipeType: "frijoles",
    video: "/videos/frijolesfritos.mp4",
    ingredients: [
      { name: "Frijoles bayo cocidos", quantity: 500, unit: "gramos", package: "legumbres", price: 3.00 },
      { name: "Cebolla", quantity: 0.5, unit: "unidad", package: "verduras", price: 0.25 },
      { name: "Ajo", quantity: 2, unit: "dientes", package: "verduras", price: 0.20 },
      { name: "Manteca de cerdo", quantity: 3, unit: "cucharadas", package: "grasas", price: 1.50 },
      { name: "Sal", quantity: 1, unit: "cucharadita", package: "especias", price: 0.10 }
    ],
    steps: [
      "Calentar la manteca en una sartén",
      "Sofreír cebolla y ajo picados",
      "Agregar los frijoles cocidos con un poco de caldo",
      "Aplastar con un machacador hasta obtener la textura deseada",
      "Cocinar hasta que espese",
      "Servir calientes"
    ],
    image: { src: "/imagenes/frijjolesrefritos.png", alt: "Frijoles refritos tradicionales" },
    calories: 250
  },

  // POSTRES - HELADOS
  {
    id: 6,
    slug: "helado-fresa",
    title: "Helado de Fresa Super Refrescante",
    description: "Rico helado de fresa",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Medio",
    category: "Postres",
    subcategory: "postre",
    recipeType: "helados",
    video: "/videos/helado.mp4",
    ingredients: [
      { name: "Fresas frescas", quantity: 500, unit: "gramos", package: "frutas", price: 4.00 },
      { name: "Crema para batir", quantity: 500, unit: "ml", package: "lácteos", price: 3.50 },
      { name: "Leche condensada", quantity: 1, unit: "lata", package: "lácteos", price: 2.80 },
      { name: "Azúcar", quantity: 100, unit: "gramos", package: "endulzantes", price: 0.80 }
    ],
    steps: [
      "Lavar y cortar las fresas, reservar algunas para decorar",
      "Licuar las fresas con el azúcar",
      "En un bowl aparte, batir la crema hasta punto de chantilly",
      "Incorporar la leche condensada y la mezcla de fresas a la crema batida",
      "Verter en un recipiente y congelar por al menos 6 horas",
      "Servir con fresas frescas por encima"
    ],
    image: { src: "/imagenes/hel.jpg", alt: "Helado de fresa casero" },
    calories: 420
  },
  {
    id: 45,
    slug: "helado-vainilla",
    title: "Helado de Vainilla Casero",
    description: "Helado cremoso de vainilla natural",
    prepTime: 20,
    cookTime: 0,
    servings: 6,
    difficulty: "Medio",
    category: "Postres",
    subcategory: "postre",
    recipeType: "helados",
    video: "/videos/heladovainilla.mp4",
    ingredients: [
      { name: "Crema para batir", quantity: 500, unit: "ml", package: "lácteos", price: 3.50 },
      { name: "Leche evaporada", quantity: 1, unit: "lata", package: "lácteos", price: 2.00 },
      { name: "Leche condensada", quantity: 1, unit: "lata", package: "lácteos", price: 2.80 },
      { name: "Vainilla", quantity: 2, unit: "cucharaditas", package: "especias", price: 1.00 },
      { name: "Yemas de huevo", quantity: 4, unit: "unidades", package: "lácteos", price: 2.00 }
    ],
    steps: [
      "Batir las yemas con la leche condensada",
      "Calentar la leche evaporada con vainilla",
      "Incorporar las yemas batidas a la leche caliente",
      "Dejar enfriar completamente",
      "Batir la crema y mezclar con la preparación anterior",
      "Congelar por 6 horas, removiendo cada hora"
    ],
    image: { src: "/imagenes/vainilla.jpg", alt: "Helado de vainilla casero" },
    calories: 380
  },

  // POSTRES DE FRUTA
  {
    id: 7,
    slug: "fresas-con-crema",
    title: "Fresas con Crema",
    description: "Deliciosas fresas frescas con crema batida endulzada",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: "Fácil",
    category: "Postres",
    subcategory: "postre",
    recipeType: "frutas",
    video: "/videos/fre.mp4",
    ingredients: [
      { name: "Fresas frescas", quantity: 500, unit: "gramos", package: "frutas", price: 4.00 },
      { name: "Crema para batir", quantity: 250, unit: "ml", package: "lácteos", price: 1.75 },
      { name: "Azúcar glass", quantity: 50, unit: "gramos", package: "endulzantes", price: 0.40 },
      { name: "Esencia de vainilla", quantity: 1, unit: "cucharadita", package: "especias", price: 0.30 }
    ],
    steps: [
      "Lavar y cortar las fresas en rodajas",
      "En un bowl, batir la crema con el azúcar glass y la vainilla hasta punto de chantilly",
      "Servir las fresas en copas individuales",
      "Decorar con la crema batida por encima",
      "Refrigerar por 15 minutos antes de servir"
    ],
    image: { src: "/imagenes/fre.png", alt: "Fresas con crema" },
    calories: 280
  },
  {
    id: 46,
    slug: "manzanas-acarameladas",
    title: "Manzanas Acarameladas",
    description: "Manzanas cubiertas con caramelo crujiente",
    prepTime: 15,
    cookTime: 10,
    servings: 6,
    difficulty: "Medio",
    category: "Postres",
    subcategory: "postre",
    recipeType: "frutas",
    video: "/videos/manzanacaramel.mp4",
    ingredients: [
      { name: "Manzanas verdes", quantity: 6, unit: "unidades", package: "frutas", price: 3.00 },
      { name: "Azúcar", quantity: 400, unit: "gramos", package: "endulzantes", price: 1.20 },
      { name: "Jarabe de maíz", quantity: 200, unit: "ml", package: "endulzantes", price: 2.00 },
      { name: "Colorante rojo", quantity: 1, unit: "cucharadita", package: "colorantes", price: 1.50 },
      { name: "Palitos de madera", quantity: 6, unit: "unidades", package: "utensilios", price: 1.00 }
    ],
    steps: [
      "Lavar y secar las manzanas",
      "Insertar palitos en la base de cada manzana",
      "En una cazuela, derretir azúcar con jarabe de maíz",
      "Agregar colorante y cocinar hasta punto de bola dura",
      "Sumergir las manzanas en el caramelo",
      "Dejar enfriar sobre papel encerado"
    ],
    image: { src: "/imagenes/manzanacaramelo.png", alt: "Manzanas acarameladas" },
    calories: 320
  },

  // PASTELES Y PIES
  {
    id: 11,
    slug: "pay-de-limon",
    title: "Pay de Limón",
    description: "Delicioso pay de limón con base de galleta",
    prepTime: 30,
    cookTime: 20,
    servings: 8,
    difficulty: "Difícil",
    category: "Postres",
    subcategory: "postre",
    recipeType: "pasteles",
    video: "/videos/pa.mp4",
    ingredients: [
      { name: "Galletas maría", quantity: 200, unit: "gramos", package: "galletas", price: 1.80 },
      { name: "Mantequilla", quantity: 100, unit: "gramos", package: "lácteos", price: 1.50 },
      { name: "Leche condensada", quantity: 1, unit: "lata", package: "lácteos", price: 2.80 },
      { name: "Jugo de limón", quantity: 1, unit: "taza", package: "frutas", price: 1.20 },
      { name: "Crema para batir", quantity: 200, unit: "ml", package: "lácteos", price: 1.40 }
    ],
    steps: [
      "Triturar las galletas y mezclar con mantequilla derretida",
      "Forrar un molde con la mezcla de galletas y refrigerar",
      "Batir la leche condensada con el jugo de limón",
      "Incorporar la crema batida",
      "Verter sobre la base de galletas y refrigerar por 4 horas"
    ],
    image: { src: "/imagenes/pai.png", alt: "Pay de limón" },
    calories: 380
  },
  {
    id: 47,
    slug: "pastel-chocolate",
    title: "Pastel de Chocolate Clásico",
    description: "Pastel esponjoso de chocolate con betún",
    prepTime: 40,
    cookTime: 35,
    servings: 10,
    difficulty: "Medio",
    category: "Postres",
    subcategory: "postre",
    recipeType: "pasteles",
    video: "/videos/pastelchocolate.mp4",
    ingredients: [
      { name: "Harina de trigo", quantity: 300, unit: "gramos", package: "harinas", price: 1.20 },
      { name: "Azúcar", quantity: 400, unit: "gramos", package: "endulzantes", price: 1.20 },
      { name: "Cacao en polvo", quantity: 100, unit: "gramos", package: "endulzantes", price: 2.50 },
      { name: "Huevos", quantity: 4, unit: "unidades", package: "lácteos", price: 2.40 },
      { name: "Aceite vegetal", quantity: 200, unit: "ml", package: "aceites", price: 1.00 },
      { name: "Leche", quantity: 250, unit: "ml", package: "lácteos", price: 1.50 }
    ],
    steps: [
      "Precalentar horno a 180°C",
      "Mezclar ingredientes secos: harina, azúcar, cacao",
      "Agregar huevos, aceite y leche, batir bien",
      "Verter en moldes para pastel",
      "Hornear 30-35 minutos",
      "Dejar enfriar y decorar con betún de chocolate"
    ],
    image: { src: "/imagenes/pastelchoco.webp", alt: "Pastel de chocolate clásico" },
    calories: 450
  },

  // FLANES
  {
    id: 22,
    slug: "flan-de-cajeta",
    title: "Flan de Cajeta",
    description: "Flan cubierto con deliciosa cajeta",
    prepTime: 20,
    cookTime: 60,
    servings: 8,
    difficulty: "Medio",
    category: "Postres",
    subcategory: "postre",
    recipeType: "flanes",
    video: "/videos/flancajeta.mp4",
    ingredients: [
      { name: "Leche condensada", quantity: 1, unit: "lata", package: "lácteos", price: 2.80 },
      { name: "Leche evaporada", quantity: 1, unit: "lata", package: "lácteos", price: 2.00 },
      { name: "Huevos", quantity: 5, unit: "unidades", package: "lácteos", price: 3.00 },
      { name: "Cajeta", quantity: 200, unit: "gramos", package: "dulces", price: 4.50 },
      { name: "Vainilla", quantity: 1, unit: "cucharadita", package: "especias", price: 0.50 }
    ],
    steps: [
      "Precalentar horno a 180°C",
      "Mezclar leches, huevos y vainilla",
      "Forrar moldes con cajeta",
      "Verter mezcla en moldes",
      "Hornear a baño María por 50 minutos",
      "Refrigerar por 4 horas antes de servir"
    ],
    image: { src: "/imagenes/fla.png", alt: "Flan de cajeta" },
    calories: 380
  },
  {
    id: 48,
    slug: "flan-napolitano",
    title: "Flan Napolitano",
    description: "Flan con tres capas: café, vainilla y cajeta",
    prepTime: 25,
    cookTime: 60,
    servings: 8,
    difficulty: "Difícil",
    category: "Postres",
    subcategory: "postre",
    recipeType: "flanes",
    video: "/videos/flannapolitano.mp4",
    ingredients: [
      { name: "Leche condensada", quantity: 1, unit: "lata", package: "lácteos", price: 2.80 },
      { name: "Leche evaporada", quantity: 1, unit: "lata", package: "lácteos", price: 2.00 },
      { name: "Huevos", quantity: 5, unit: "unidades", package: "lácteos", price: 3.00 },
      { name: "Café instantáneo", quantity: 2, unit: "cucharadas", package: "bebidas", price: 1.50 },
      { name: "Cajeta", quantity: 200, unit: "gramos", package: "dulces", price: 4.50 }
    ],
    steps: [
      "Preparar tres mezclas: una con café, una natural y una con cajeta",
      "Verter en capas en el molde",
      "Hornear a baño María 50-60 minutos",
      "Dejar enfriar y refrigerar 4 horas",
      "Desmoldar y servir"
    ],
    image: { src: "/imagenes/flannapo.png", alt: "Flan napolitano" },
    calories: 400
  },

  // POSTRES FRITOS
  {
    id: 23,
    slug: "churros",
    title: "Churros Caseros",
    description: "Churros crujientes espolvoreados con azúcar y canela",
    prepTime: 20,
    cookTime: 15,
    servings: 6,
    difficulty: "Medio",
    category: "Postres",
    subcategory: "postre",
    recipeType: "fritos",
    video: "/videos/churros.mp4",
    ingredients: [
      { name: "Harina", quantity: 250, unit: "gramos", package: "harinas", price: 1.10 },
      { name: "Agua", quantity: 250, unit: "ml", package: "básicos", price: 0.00 },
      { name: "Mantequilla", quantity: 50, unit: "gramos", package: "lácteos", price: 1.00 },
      { name: "Azúcar", quantity: 100, unit: "gramos", package: "endulzantes", price: 0.80 },
      { name: "Canela", quantity: 2, unit: "cucharadas", package: "especias", price: 0.60 }
    ],
    steps: [
      "Hervir agua con mantequilla",
      "Agregar harina y mezclar hasta formar masa",
      "Poner masa en manga pastelera con duya estrellada",
      "Freír en aceite caliente hasta dorar",
      "Escurrir y pasar por mezcla de azúcar y canela",
      "Servir calientes"
    ],
    image: { src: "/imagenes/churr.png", alt: "Churros caseros" },
    calories: 420
  },
  {
    id: 49,
    slug: "buñuelos",
    title: "Buñuelos Mexicanos",
    description: "Buñuelos crujientes con piloncillo",
    prepTime: 30,
    cookTime: 20,
    servings: 8,
    difficulty: "Medio",
    category: "Postres",
    subcategory: "postre",
    recipeType: "fritos",
    video: "/videos/bunuelos.mp4",
    ingredients: [
      { name: "Harina de trigo", quantity: 500, unit: "gramos", package: "harinas", price: 2.20 },
      { name: "Huevos", quantity: 2, unit: "unidades", package: "lácteos", price: 1.20 },
      { name: "Mantequilla", quantity: 100, unit: "gramos", package: "lácteos", price: 2.00 },
      { name: "Piloncillo", quantity: 300, unit: "gramos", package: "endulzantes", price: 3.00 },
      { name: "Canela", quantity: 2, unit: "rajas", package: "especias", price: 0.80 }
    ],
    steps: [
      "Mezclar harina, huevos y mantequilla para formar masa",
      "Dejar reposar 30 minutos",
      "Formar bolitas y estirar muy delgado",
      "Freír en aceite caliente hasta dorar",
      "Preparar miel de piloncillo con canela",
      "Bañar los buñuelos con la miel caliente"
    ],
    image: { src: "/imagenes/muño.avif", alt: "Buñuelos mexicanos" },
    calories: 380
  },

  // BEBIDAS - AGUAS FRESCAS
  {
    id: 14,
    slug: "limonada-casera",
    title: "Limonada Casera Refrescante",
    description: "Limonada natural y refrescante perfecta para cualquier ocasión",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "aguas",
    video: "/videos/limonada.mp4",
    ingredients: [
      { name: "Limones frescos", quantity: 6, unit: "unidades", package: "frutas", price: 2.40 },
      { name: "Azúcar", quantity: 1, unit: "taza", package: "endulzantes", price: 0.80 },
      { name: "Agua", quantity: 1, unit: "litro", package: "básicos", price: 0.00 },
      { name: "Hielo", quantity: 2, unit: "tazas", package: "básicos", price: 0.50 }
    ],
    steps: [
      "Exprimir los limones hasta obtener 1 taza de jugo",
      "En una jarra, disolver el azúcar en un poco de agua tibia",
      "Agregar el jugo de limón y el resto del agua",
      "Mezclar bien y refrigerar por 30 minutos",
      "Servir con hielo y decorar con hojas de menta"
    ],
    image: { src: "/imagenes/limo.png", alt: "Limonada casera refrescante" },
    calories: 120
  },
  {
    id: 15,
    slug: "agua-de-horchata",
    title: "Agua de Horchata",
    description: "Bebida tradicional de arroz con canela",
    prepTime: 10,
    cookTime: 0,
    servings: 6,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "aguas",
    video: "/videos/horchata.mp4",
    ingredients: [
      { name: "Arroz blanco", quantity: 1, unit: "taza", package: "granos", price: 0.75 },
      { name: "Agua", quantity: 1.5, unit: "litros", package: "básicos", price: 0.00 },
      { name: "Leche evaporada", quantity: 1, unit: "lata", package: "lácteos", price: 2.00 },
      { name: "Azúcar", quantity: 1, unit: "taza", package: "endulzantes", price: 0.80 },
      { name: "Canela en polvo", quantity: 1, unit: "cucharada", package: "especias", price: 0.40 }
    ],
    steps: [
      "Remojar el arroz en agua por al menos 4 horas o toda la noche",
      "Licuar el arroz con el agua de remojo",
      "Colar la mezcla para eliminar los sólidos",
      "Agregar la leche evaporada, azúcar, canela y vainilla",
      "Mezclar bien y refrigerar por 1 hora",
      "Servir fría con hielo y espolvorear canela"
    ],
    image: { src: "/imagenes/aguahor.png", alt: "Agua de horchata" },
    calories: 150
  },
  {
    id: 24,
    slug: "agua-de-jamaica",
    title: "Agua de Jamaica",
    description: "Refrescante bebida de flor de jamaica",
    prepTime: 10,
    cookTime: 5,
    servings: 6,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "aguas",
    video: "/videos/jamaica.mp4",
    ingredients: [
      { name: "Flor de jamaica", quantity: 100, unit: "gramos", package: "hierbas", price: 3.00 },
      { name: "Azúcar", quantity: 1, unit: "taza", package: "endulzantes", price: 0.80 },
      { name: "Agua", quantity: 2, unit: "litros", package: "básicos", price: 0.00 },
      { name: "Hielo", quantity: 2, unit: "tazas", package: "básicos", price: 0.50 }
    ],
    steps: [
      "Hervir 1 litro de agua",
      "Agregar flor de jamaica y cocinar 5 minutos",
      "Dejar reposar 15 minutos",
      "Colar la infusión",
      "Agregar azúcar y el resto del agua",
      "Refrigerar y servir con hielo"
    ],
    image: { src: "/imagenes/aguaja.png", alt: "Agua de jamaica" },
    calories: 90
  },

  // BEBIDAS DE LECHE
  {
    id: 50,
    slug: "licuado-fresa",
    title: "Licuado de Fresa",
    description: "Batido cremoso de fresa con leche",
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "leches",
    video: "/videos/licuadofresa.mp4",
    ingredients: [
      { name: "Fresas frescas", quantity: 200, unit: "gramos", package: "frutas", price: 2.00 },
      { name: "Leche", quantity: 400, unit: "ml", package: "lácteos", price: 2.00 },
      { name: "Azúcar", quantity: 3, unit: "cucharadas", package: "endulzantes", price: 0.30 },
      { name: "Hielo", quantity: 1, unit: "taza", package: "básicos", price: 0.25 },
      { name: "Vainilla", quantity: 1, unit: "cucharadita", package: "especias", price: 0.30 }
    ],
    steps: [
      "Lavar y cortar las fresas",
      "Licuar todos los ingredientes",
      "Servir inmediatamente",
      "Decorar con una fresa en el borde del vaso"
    ],
    image: { src: "/imagenes/licufresa.webp", alt: "Licuado de fresa" },
    calories: 180
  },
  {
    id: 51,
    slug: "chocolate-caliente",
    title: "Chocolate Caliente Cremoso",
    description: "Chocolate caliente tradicional espumoso",
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "leches",
    video: "/videos/chocolatecaliente.mp4",
    ingredients: [
      { name: "Leche", quantity: 500, unit: "ml", package: "lácteos", price: 2.50 },
      { name: "Chocolate para mesa", quantity: 100, unit: "gramos", package: "dulces", price: 3.00 },
      { name: "Azúcar", quantity: 2, unit: "cucharadas", package: "endulzantes", price: 0.20 },
      { name: "Canela en polvo", quantity: 0.5, unit: "cucharadita", package: "especias", price: 0.20 },
      { name: "Vainilla", quantity: 0.5, unit: "cucharadita", package: "especias", price: 0.15 }
    ],
    steps: [
      "Calentar la leche a fuego medio",
      "Agregar el chocolate picado y azúcar",
      "Batir constantemente hasta que el chocolate se derrita",
      "Agregar canela y vainilla",
      "Batir con molinillo hasta que espume",
      "Servir caliente"
    ],
    image: { src: "/imagenes/chococremo.png", alt: "Chocolate caliente cremoso" },
    calories: 220
  },

  // CAFÉS
  {
    id: 25,
    slug: "cafe-de-olla",
    title: "Café de Olla",
    description: "Tradicional café mexicano con canela y piloncillo",
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "cafes",
    video: "/videos/cafeolla.mp4",
    ingredients: [
      { name: "Café molido", quantity: 60, unit: "gramos", package: "bebidas", price: 4.00 },
      { name: "Piloncillo", quantity: 100, unit: "gramos", package: "endulzantes", price: 1.50 },
      { name: "Canela en raja", quantity: 2, unit: "unidades", package: "especias", price: 0.80 },
      { name: "Clavos de olor", quantity: 3, unit: "unidades", package: "especias", price: 0.30 },
      { name: "Agua", quantity: 1, unit: "litro", package: "básicos", price: 0.00 }
    ],
    steps: [
      "Hervir agua con piloncillo, canela y clavos",
      "Cuando hierva, agregar el café molido",
      "Dejar hervir 5 minutos a fuego lento",
      "Apagar y dejar reposar 3 minutos",
      "Colar y servir caliente"
    ],
    image: { src: "/imagenes/cafe.png", alt: "Café de olla" },
    calories: 60
  },
  {
    id: 52,
    slug: "cafe-capuchino",
    title: "Capuchino Casero",
    description: "Café espresso con leche espumosa",
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: "Medio",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "cafes",
    video: "/videos/capuchino.mp4",
    ingredients: [
      { name: "Café molido para espresso", quantity: 30, unit: "gramos", package: "bebidas", price: 3.00 },
      { name: "Leche entera", quantity: 300, unit: "ml", package: "lácteos", price: 1.50 },
      { name: "Azúcar", quantity: 2, unit: "cucharadas", package: "endulzantes", price: 0.20 },
      { name: "Canela en polvo", quantity: 1, unit: "cucharadita", package: "especias", price: 0.20 },
      { name: "Chocolate en polvo", quantity: 1, unit: "cucharada", package: "dulces", price: 0.50 }
    ],
    steps: [
      "Preparar café espresso fuerte",
      "Calentar la leche sin hervir",
      "Espumar la leche con espumador",
      "Verter el café en tazas",
      "Agregar leche espumada por encima",
      "Espolvorear canela y chocolate"
    ],
    image: { src: "/imagenes/capuchino.webp", alt: "Capuchino casero" },
    calories: 80
  },

  // TÉS E INFUSIONES
  {
    id: 53,
    slug: "te-manzanilla",
    title: "Té de Manzanilla Relajante",
    description: "Infusión de manzanilla con miel y limón",
    prepTime: 5,
    cookTime: 5,
    servings: 2,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "tes",
    video: "/videos/temanzanilla.mp4",
    ingredients: [
      { name: "Flores de manzanilla", quantity: 4, unit: "cucharadas", package: "hierbas", price: 2.00 },
      { name: "Agua", quantity: 500, unit: "ml", package: "básicos", price: 0.00 },
      { name: "Miel", quantity: 2, unit: "cucharadas", package: "endulzantes", price: 1.00 },
      { name: "Limón", quantity: 1, unit: "unidad", package: "frutas", price: 0.40 },
      { name: "Jengibre fresco", quantity: 2, unit: "rebanadas", package: "verduras", price: 0.30 }
    ],
    steps: [
      "Hervir el agua",
      "Agregar manzanilla y jengibre",
      "Dejar infusionar 5 minutos",
      "Colar la infusión",
      "Agregar miel y jugo de limón",
      "Servir caliente"
    ],
    image: { src: "/imagenes/manzanilla.webp", alt: "Té de manzanilla relajante" },
    calories: 40
  },
  {
    id: 54,
    slug: "te-verde",
    title: "Té Verde con Menta",
    description: "Té verde refrescante con hojas de menta",
    prepTime: 5,
    cookTime: 3,
    servings: 2,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "tes",
    video: "/videos/teverde.mp4",
    ingredients: [
      { name: "Té verde en hojas", quantity: 2, unit: "cucharadas", package: "hierbas", price: 3.00 },
      { name: "Hojas de menta fresca", quantity: 10, unit: "hojas", package: "hierbas", price: 0.60 },
      { name: "Agua", quantity: 500, unit: "ml", package: "básicos", price: 0.00 },
      { name: "Miel", quantity: 1, unit: "cucharada", package: "endulzantes", price: 0.50 },
      { name: "Limón", quantity: 0.5, unit: "unidad", package: "frutas", price: 0.20 }
    ],
    steps: [
      "Calentar agua a 80°C (no hervir)",
      "Agregar té verde y menta",
      "Dejar infusionar 3 minutos",
      "Colar la infusión",
      "Agregar miel y limón al gusto",
      "Servir caliente o frío"
    ],
    image: { src: "/imagenes/verdementa.png", alt: "Té verde con menta" },
    calories: 30
  },

  // JUGOS NATURALES
  {
    id: 55,
    slug: "jugo-naranja",
    title: "Jugo de Naranja Natural",
    description: "Jugo fresco de naranja recién exprimido",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "jugos",
    video: "/videos/aguanaranja.mp4",
    ingredients: [
      { name: "Naranjas dulces", quantity: 6, unit: "unidades", package: "frutas", price: 3.00 },
      { name: "Hielo", quantity: 1, unit: "taza", package: "básicos", price: 0.25 },
      { name: "Azúcar", quantity: 1, unit: "cucharada", package: "endulzantes", price: 0.10 },
      { name: "Menta fresca", quantity: 4, unit: "hojas", package: "hierbas", price: 0.30 }
    ],
    steps: [
      "Lavar las naranjas",
      "Exprimir las naranjas para obtener el jugo",
      "Colar las semillas si es necesario",
      "Agregar azúcar si se desea más dulce",
      "Servir con hielo y decorar con menta",
      "Revolver bien antes de servir"
    ],
    image: { src: "/imagenes/junaranja.avif", alt: "Jugo de naranja natural" },
    calories: 110
  },
  {
    id: 56,
    slug: "jugo-zanahoria",
    title: "Jugo de Zanahoria con Naranja",
    description: "Jugo nutritivo de zanahoria y cítricos",
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    difficulty: "Fácil",
    category: "Bebidas",
    subcategory: "bebidas",
    recipeType: "jugos",
    video: "/videos/naranjazanahoria.mp4",
    ingredients: [
      { name: "Zanahorias", quantity: 4, unit: "unidades", package: "verduras", price: 1.60 },
      { name: "Naranjas", quantity: 2, unit: "unidades", package: "frutas", price: 1.00 },
      { name: "Jengibre fresco", quantity: 1, unit: "rebanada", package: "verduras", price: 0.15 },
      { name: "Miel", quantity: 1, unit: "cucharada", package: "endulzantes", price: 0.50 },
      { name: "Hielo", quantity: 1, unit: "taza", package: "básicos", price: 0.25 }
    ],
    steps: [
      "Pelar y picar las zanahorias",
      "Exprimir las naranjas",
      "Licuar zanahorias con jugo de naranja",
      "Agregar jengibre y miel",
      "Licuar hasta obtener consistencia suave",
      "Servir con hielo"
    ],
    image: { src: "/imagenes/juzana.jpg", alt: "Jugo de zanahoria con naranja" },
    calories: 130
  }
];

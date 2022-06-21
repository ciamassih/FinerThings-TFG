Libros = require('../libros')
require('../../database');

async function initDB() {
    try{
        await Libros.collection.drop();
    } catch (e){
        console.log("Collection didn't exist, will be created.")
    }

    const initLibros = [
        {
            photo: "/img/elnadador.png",
            title: "El Nadador",
            titlesearch: "el nadador",
            author: "admin",
            description: "Ned Merrill se embarca en un viaje por todas las piscinas del condado, y se da de bruces con la lacerante realidad.",
            category: "Ficción",
            language: "Español",
            content: "Era uno de esos domingos de mediados del verano, cuando todos se sientan y comentan “Anoche bebí demasiado”. Quizá uno oyó la frase murmurada por los feligreses que salen de la iglesia, o la escuchó de labios del propio sacerdote, que se debate con su casulla en el vestiarium, o en las pistas de golf y de tenis, o en la reserva natural donde el jefe del grupo Audubon sufre el terrible malestar del día siguiente.\n" +
                "\n" +
                "–Bebí demasiado –dijo Donald Westerhazy.\n" +
                "\n" +
                "–Todos bebimos demasiado –dijo Lucinda Merrill.\n" +
                "\n" +
                "–Seguramente fue el vino –dijo Helen Westerhazy–. Bebí demasiado clarete.\n" +
                "\n" +
                "Esto sucedía al borde de la piscina de los Westerhazy. La piscina, alimentada por un pozo artesiano que tenía elevado contenido de hierro, mostraba un matiz verde claro. El tiempo era excelente. Hacia el oeste se dibujaba un macizo de cúmulos, desde lejos tan parecido a una ciudad –vistos desde la proa de un barco que se acercaba– que incluso hubiera podido asignársele nombre. Lisboa. Hackensack. El sol calentaba fuerte. Neddy Merrill estaba sentado al borde del agua verdosa, una mano sumergida, la otra sosteniendo un vaso de ginebra. Era un hombre esbelto –parecía tener la especial esbeltez de la juventud– y, si bien no era joven ni mucho menos, esa mañana se había deslizado por su baranda y había descargado una palmada sobre el trasero de bronce de Afrodita, que estaba sobre la mesa del vestíbulo, mientras se enfilaba hacia el olor del café en su comedor. Podía habérsele comparado con un día estival, y si bien no tenía raqueta de tenis ni bolso de marinero, suscitaba una definida impresión de juventud, deporte y buen tiempo. Había estado nadando, y ahora respiraba estertorosa, profundamente, como si pudiese absorber con sus pulmones los componentes de ese momento, el calor del sol, la intensidad de su propio placer. Parecía que todo confluía hacia el interior de su pecho. Su propia casa se levantaba en Bullet Park, unos trece kilómetros hacia el sur, donde sus cuatro hermosas hijas seguramente ya habían almorzado y quizá ahora jugaban a tenis. Entonces, se le ocurrió que dirigiéndose hacia el suroeste podía llegar a su casa por el agua.\n" +
                "\n" +
                "Su vida no lo limitaba, y el placer que extraía de esta observación no podía explicarse por su sugerencia de evasión. Le parecía ver, con el ojo de un cartógrafo, esa hilera de piscinas, esa corriente casi subterránea que recorría el condado. Había realizado un descubrimiento, un aporte a la geografía moderna; en homenaje a su esposa, llamaría Lucinda a este curso de agua. No le agradaban las bromas pesadas y no era tonto, pero sin duda era original y tenía una indefinida y modesta idea de sí mismo como una figura legendaria. Era un día hermoso y se le ocurrió que nadar largo rato podía ensanchar y exaltar su belleza.\n" +
                "\n" +
                "Se quitó el suéter que colgaba de sus hombros y se zambulló. Sentía un inexplicable desprecio hacia los hombres que no se arrojaban a la piscina. Usó una brazada corta, respirando con cada movimiento del brazo o cada cuatro brazadas y contando en un rincón muy lejano de la mente el uno-dos, uno-dos de la patada nerviosa. No era una brazada útil para las distancias largas, pero la domesticación de la natación había impuesto ciertas costumbres a este deporte, y en el rincón del mundo al que él pertenecía, el estilo crol era usual. Parecía que verse abrazado y sostenido por el agua verde claro era no tanto un placer como la recuperación de una condición natural, y él habría deseado nadar sin pantaloncitos, pero en vista de su propio proyecto eso no era posible. Se alzó sobre el reborde del extremo opuesto –nunca usaba la escalerilla– y comenzó a atravesar el jardín. Cuando Lucinda preguntó adónde iba, él dijo que volvía nadando a casa.\n" +
                "\n" +
                "Los únicos mapas y planos eran los que podía recordar o sencillamente imaginar, pero eran bastante claros. Primero estaban los Graham, los Hammer, los Lear, los Howland y los Crosscup. Después, cruzaba la calle Ditmar y llegaba a la propiedad de los Bunker, y después de recorrer un breve trayecto llegaba a los Levy, los Welcher y la piscina pública de Lancaster. Después estaban los Halloran, los Sachs, los Biswanger, Shirley Adams, los Gilmartin y los Clyde. El día era hermoso, y que él viviera en un mundo tan generosamente abastecido de agua parecía un acto de clemencia, una suerte de beneficencia. Sentía exultante el corazón y atravesó corriendo el pasto. Volver a casa siguiendo un camino diferente le infundía la sensación de que era un peregrino, un explorador, un hombre que tenía un destino; y además sabía que a lo largo del camino hallaría amigos: los amigos guarnecerían las orillas del río Lucinda.\n" +
                "Atravesó un seto que separaba la propiedad de los Westerhazy de la que ocupaban los Graham, caminó bajo unos manzanos floridos, dejó tras el cobertizo que albergaba la bomba y el filtro, y salió a la piscina de los Graham.\n" +
                "\n" +
                "–Caramba, Neddy –dijo la señora Graham–, qué sorpresa maravillosa. Toda la mañana he tratado de hablar con usted por teléfono. Venga, sírvase una copa– comprendió entonces, como les ocurre a todos los exploradores, que tendría que manejar con cautela las costumbres y las tradiciones hospitalarias de los nativos si quería llegar a buen destino. No quería mentir ni mostrarse grosero con los Graham, y tampoco disponía de tiempo para demorarse allí. Nadó la piscina de un extremo al otro, se reunió con ellos al sol y pocos minutos después lo salvó la llegada de dos automóviles colmados de amigos que venían de Connecticut. Mientras todos formaban grupos bulliciosos él pudo alejarse discretamente. Descendió por la fachada de la casa de los Graham, pasó un seto espinoso y cruzó una parcela vacía para llegar a la propiedad de los Hammer. La señora Hammer apartó los ojos de sus rosas, lo vio nadar, pero no pudo identificarlo bien. Los Lear lo oyeron chapotear frente a las ventanas abiertas de su sala. Los Howland y los Crosscup no estaban en casa. Después de salir del jardín de los Howland, cruzó la calle Ditmar y comenzó a acercarse a la casa de los Bunker; aun a esa distancia podía oírse el bullicio de una fiesta.\n" +
                "\n" +
                "El agua refractaba el sonido de las voces y las risas y parecía suspenderlo en el aire. La piscina de los Bunker estaba sobre una elevación, y él ascendió unos peldaños y salió a una terraza, donde bebían veinticinco o treinta hombres y mujeres. La única persona que estaba en el agua era Rusty Towers, que flotaba sobre un colchón de goma. ¡Oh, qué bonitas y lujuriosas eran las orillas del río Lucinda! Hombres y mujeres prósperos se reunían alrededor de las aguas color zafiro, mientras los camareros de chaqueta blanca distribuían ginebra fría. En el cielo, un avión de Haviland, un aparato rojo de entrenamiento, describía sin cesar círculos en el cielo mostrando parte del regocijo de un niño que se mece. Ned sintió un afecto transitorio por la escena, una ternura dirigida hacia los que estaban allí reunidos, como si se tratara de algo que él pudiera tocar. Oyó a distancia el retumbo del trueno. Apenas Enid Bunker lo vio comenzó a gritar:\n" +
                "\n" +
                "–¡Oh, vean quién ha venido! ¡Qué sorpresa tan maravillosa! Cuando Lucinda me dijo que usted no podía venir, sentí que me moría– se abrió paso entre la gente para llegar a él, y cuando terminaron de besarse lo llevó al bar, pero avanzaron con paso lento, porque ella se detuvo para besar a ocho o diez mujeres y estrechar las manos del mismo número de hombres. Un barman sonriente a quien Neddy había visto en cien reuniones parecidas le entregó una ginebra con agua tónica, y Neddy permaneció de pie un momento frente al bar, evitando mezclarse en conversaciones que podían retrasar su viaje. Cuando temió verse envuelto, se zambulló y nadó cerca del borde, para evitar un choque con el flotador de Rusty. En el extremo opuesto de la piscina dejó atrás a los Tomlinson, a quienes dirigió una amplia sonrisa, y se alejó trotando por el sendero del jardín. La grava le lastimaba los pies, pero ése era el único motivo de desagrado. La fiesta se mantenía confinada a los terrenos contiguos a la piscina, y cuando ya estaba acercándose a la casa oyó atenuarse el sonido brillante y acuoso de las voces, oyó el ruido de un receptor de radio que provenía de la cocina de los Bunker, donde alguien estaba escuchando la retransmisión de un partido de béisbol. Una tarde de domingo. Se deslizó entre los automóviles estacionados y descendió por los límites cubiertos de pasto del sendero, en dirección a la calle Alewives. No deseaba que nadie lo viera en el camino, con sus pantaloncitos de baño pero no había tránsito, y Neddy recorrió la reducida distancia que lo separaba del sendero de los Levy, donde había un letrero indicando: PROPIEDAD PRIVADA, y un recipiente para The New York Times. Todas las puertas y ventanas de la espaciosa casa estaban abiertas, pero no había signos de vida, ni siquiera el ladrido de un perro. Dio la vuelta a la casa, buscando la piscina, y se dio cuenta de que los Levy habían salido poco antes. Habían dejado vasos, botellas y platitos de maníes sobre una mesa instalada hacia el fondo, donde había un vestuario o mirador adornado con farolitos japoneses. Después de atravesar a nado la piscina, consiguió un vaso y se sirvió una copa. Era la cuarta o la quinta copa, y ya había nadado casi la mitad de la longitud del río Lucinda. Se sentía cansado y limpio, y en ese momento lo complacía estar solo; en realidad, todo lo complacía.\n" +
                "\n" +
                "Habría tormenta. El grupo de cúmulos –esa ciudad– se había elevado y ensombrecido, y mientras estaba allí, sentado, oyó de nuevo la percusión del trueno. El avión de entrenamiento de Haviland continuaba describiendo círculos en el cielo. Ned creyó que casi podía oír la risa del piloto, complacido con la tarde, pero cuando se descargó otra cascada de truenos, reanudó la marcha hacia su hogar. Sonó el silbato de un tren, y se preguntó qué hora sería. ¿Las cuatro? ¿Las cinco? Pensó en la estación provinciana a esa hora, el lugar donde un camarero, con el traje de etiqueta disimulado por un impermeable, un enano con flores envueltas en papel de diario y una mujer que había estado llorando esperaban el tren local. De pronto comenzó a oscurecer; era el momento en que las aves de cabeza de alfiler parecen organizar su canto anunciando con un sonido agudo y reconocible la llegada de la tormenta. A su espalda se oyó el ruido leve del agua que caía de la copa de un roble, como si allí hubiesen abierto un grifo. Después, el ruido de fuentes se repitió en las coronas de todos los árboles altos. ¿Por qué le agradaban las tormentas? ¿Qué sentido tenía su excitación cuando la puerta se abría bruscamente y el viento de lluvia se abalanzaba impetuoso escaleras arriba? ¿Por qué la sencilla tarea de cerrar las ventanas de una vieja casa parecía apropiada y urgente? ¿Por qué las primeras notas cristalinas de un viento de tormenta tenían para él el sonido inequívoco de las buenas nuevas, una sugerencia de alegría y buen ánimo? Después, hubo una explosión, olor de cordita, y la lluvia flageló los farolitos japoneses que la señora Levy había comprado en Kioto el año anterior, ¿o quizá era incluso un año antes?\n" +
                "\n" +
                "Permaneció en el jardín de los Levy hasta que pasó la tormenta. La lluvia había refrescado el aire, y él temblaba. La fuerza del viento había despejado de sus hojas rojas y amarillas a un arce y las había dispersado sobre el pasto y el agua. Como era mediados del verano seguramente el árbol se agostaría, y sin embargo Ned sintió una extraña tristeza ante ese signo otoñal. Flexionó los hombros, vació el vaso y caminó hacia la piscina de los Welcher. Para llegar necesitaba cruzar la pista de equitación de los Lindley, y lo sorprendió descubrir que el pasto estaba alto y todas las vallas aparecían desarmadas. Se preguntó si los Lindley habían vendido sus caballos o se habían ausentado todo el verano y habían dejado en una pensión los animales. Le pareció recordar haber oído algo acerca de los Lindley y sus caballos, pero el recuerdo no era claro. Continuó caminando, descalzo sobre el pasto húmedo, hacia la casa de los Welcher, donde descubrió que la piscina estaba seca.\n" +
                "\n" +
                "La ausencia de este eslabón en su cadena acuática lo decepcionó de un modo absurdo, y se sintió como un explorador que busca una fuente torrencial y encuentra un arroyo seco. Se sintió desilusionado y desconcertado. Era costumbre salir durante el verano, pero nadie vaciaba nunca sus piscinas. Era evidente que los Welcher se habían marchado. Los muebles de la piscina estaban plegados, apilados y cubiertos con fundas. El vestuario estaba cerrado con llave. Todas las ventanas de la casa estaban cerradas, y cuando dio la vuelta a la vivienda en busca del sendero que conducía a la salida vio un cartel que indicaba EN VENTA clavado a un árbol. ¿Cuándo había oído hablar por última vez de los Welcher…?; es decir, ¿cuándo había sido la última vez que él y Lucinda habían rechazado una invitación a cenar con ellos? Le parecía que hacía apenas una semana, poco más o menos. ¿La memoria le estaba fallando, o la había disciplinado tanto en la representación de los hechos ingratos que había deteriorado su propio sentido de la verdad? Ahora, oyó a lo lejos el ruido de un encuentro de tenis. El hecho lo reanimó, disipó sus aprensiones y pudo mirar con indiferencia el cielo nublado y el aire frío. Era el día que Neddy Merrill atravesaba nadando el condado. ¡El mismo día! Atacó ahora el trecho más difícil.\n" +
                "\n" +
                "Si ese día uno hubiera salido a pasear para gozar de la tarde dominical quizá lo hubiera visto, casi desnudo, de pie al borde la Ruta 424, esperando la oportunidad de cruzar. Quizá uno se preguntaría si era la víctima de una broma pesada, si su automóvil había sufrido su desperfecto o si se trataba sencillamente de un loco. De pie, descalzo, sobre los montículos al costado de la autopista –latas de cerveza, trapos viejos y cámaras reventadas– expuesto a todas las burlas, ofrecía un espectáculo lamentable. Al comenzar, sabía que ese trecho era parte de su trayecto –había estado en sus mapas–, pero al enfrentarse a las hileras del tránsito que serpeaban a través de la luz estival, descubrió que no estaba preparado. Provocó risas y burlas, le arrojaron un envase de cerveza, y no podía afrontar la situación con dignidad ni humor. Hubiera podido regresar, volver a casa de los Westerhazy, donde Lucinda sin duda continuaba sentada al sol. No había firmado nada, jurado ni prometido nada, ni siquiera a sí mismo. ¿Por qué, creyendo, como era el caso, que todas las formas de obstinación humana eran asequibles al sentido común, no podía regresar? ¿Por qué estaba decidido a terminar su viaje aunque eso amenazara su propia vida? ¿En qué momento esa travesura, esa broma, esa suerte de pirueta había cobrado gravedad? No podía volver, ni siquiera podía recordar claramente el agua verdosa de los Westerhazy, la sensación de inhalar los componentes del día, las voces amistosas y descansadas que afirmaban que ellos habían bebido demasiado. Después de más o menos una hora había recorrido una distancia que imposibilitaba el regreso.\n" +
                "\n" +
                "Un anciano que venía por la autopista a veinticinco kilómetros por hora le permitió llegar al medio de la calzada, donde había un refugio cubierto de pasto. Allí se vio expuesto a las burlas del tránsito que iba hacia el norte, pero después de diez o quince minutos pudo cruzar. Desde allí, tenía un breve trecho hasta el Centro de Recreación, que estaba a la salida del pueblo de Lancaster, donde había unas canchas de balonmano y una piscina pública.\n" +
                "\n" +
                "El efecto del agua en las voces, la ilusión de brillo y expectativa era la misma que en la piscina de los Bunker, pero aquí los sonidos eran más estridentes, más ásperos y más agudos, y apenas entró en el recinto atestado tropezó con la reglamentación “TODOS LOS BAÑISTAS DEBEN DARSE UNA DUCHA ANTES DE USAR LA PISCINA. TODOS LOS BAÑISTAS DEBEN USAR LA PLACA DE IDENTIFICACIÓN”. Se dio una ducha, se lavó los pies en una solución turbia y acre y se acercó al borde del agua. Hedía a cloro y le pareció un fregadero. Un par de salvavidas apostados en un par de torrecillas tocaban silbatos policiales, aparentemente con intervalos regulares, y agredían a los bañistas por un sistema de altavoces. Neddy recordó añorante el agua color zafiro de los Bunker, y pensó que podía contaminarse –perjudicar su propio bienestar y su encanto– nadando en ese lodazal, pero recordó que era un explorador, un peregrino, y que se trataba sencillamente de un recodo de aguas estancadas del río Lucinda. Se zambulló, arrugando el rostro con desagrado, en el agua clorada y tuvo que nadar con la cabeza sobre el agua para evitar choques, pero aun así lo empujaron, lo salpicaron y zarandearon. Cuando llegó al extremo menos profundo, ambos salvavidas estaban gritándole:\n" +
                "\n" +
                "–¡Eh, usted, el que no tiene placa de identificación, salga del agua!\n" +
                "\n" +
                "Así lo hizo, pero no podían perseguirlo, y atravesó el hedor de aceite bronceador y cloro, dejó atrás la empalizada y fue a las pistas de balonmano. Después de cruzar el camino entró en el sector arbolado de la propiedad de los Halloran. No se había desbrozado el bosque, y el suelo fue traicionero y difícil hasta que llegó al jardín y el seto de hayas recortadas que rodeaban la piscina.\n" +
                "\n" +
                "Los Halloran eran amigos, y una pareja anciana muy adinerada que parecía regodearse con la sospecha de que podían ser comunistas. Eran entusiastas reformadores, pero no comunistas, y sin embargo cuando se los acusaba de subversión, como a veces ocurría, el incidente parecía complacerlos y excitarlos. El seto de hayas era amarillo, y nadie supuso que estaba agostado, como el arce de los Levy. Dijo “Hola, hola”, para avisar a los Halloran que se acercaba, para moderar su invasión de la intimidad del matrimonio. Por razones que el propio Neddy nunca había llegado a entender, los Halloran no usaban trajes de baño. A decir verdad, no eran necesarias las explicaciones. Su desnudez era un detalle de la inflexible adhesión a la reforma, y antes de pasar la abertura del seto Neddy se despojó cortésmente de sus pantaloncitos.\n" +
                "\n" +
                "La señora Halloran, una mujer robusta de cabellos blancos y rostro sereno, estaba leyendo el Times. El señor Halloran estaba extrayendo del agua hojas de haya con una barredera. No parecieron sorprendidos ni desagradados de verlo. La piscina de los Halloran era quizá la más antigua de la región, un rectángulo de lajas alimentado por un arroyo. No tenía filtro ni bomba, y sus aguas mostraban el oro opaco del arroyo.\n" +
                "\n" +
                "–Estoy nadando a través del condado –dijo Ned.\n" +
                "\n" +
                "–Vaya, no sabía que era posible –exclamó la señora Halloran.\n" +
                "\n" +
                "–Bien, vengo de la casa de los Westerhazy –afirmó Ned–. Unos seis kilómetros.\n" +
                "\n" +
                "Dejó los pantaloncitos en el extremo más hondo, caminó hacia el extremo contrario y nadó el largo de la piscina. Cuando salía del agua oyó la voz de la señora Halloran que decía:\n" +
                "\n" +
                "–Neddy, nos dolió muchísimo enterarnos de sus desgracias.\n" +
                "\n" +
                "–¿Mis desgracias? –preguntó Ned–. No sé de qué habla.\n" +
                "\n" +
                "–Bien, oímos decir que vendió la casa y que sus pobres niñas…\n" +
                "\n" +
                "–No recuerdo haber vendido la casa –dijo Ned–, y las niñas están allí.\n" +
                "\n" +
                "–Sí –suspiró la señora Halloran–. Sí… –su voz impregnó el aire de una desagradable melancolía y Ned habló con brusquedad:\n" +
                "\n" +
                "–Gracias por permitirme nadar.\n" +
                "\n" +
                "–Bien, que tenga un buen viaje –dijo la señora Halloran.\n" +
                "\n" +
                "Después del seto, se puso los pantaloncitos y se los ajustó. Los sintió sueltos, y se preguntó si en el curso de una tarde podía haber adelgazado. Tenía frío y estaba cansado, y los Halloran desnudos y sus aguas oscuras lo habían deprimido. El esfuerzo era excesivo para su resistencia, pero ¿cómo podía haberlo previsto cuando se deslizaba por la baranda esa mañana y estaba sentado al sol, en casa de los Westerhazy? Tenía los brazos inertes. Sentía las piernas como de goma y le dolían las articulaciones. Lo peor era el frío en los huesos y la sensación de que quizá nunca volviera a sentir calor. Alrededor, caían las hojas y Ned olió en el viento el humo de leña. ¿Quién estaría quemando leña en esa época del año?\n" +
                "\n" +
                "Necesitaba una copa. El whisky podía calentarlo, reanimarlo, permitirle salvar la última etapa de su trayecto, renovar su idea de que atravesar nadando el condado era un acto original y valiente. Los nadadores que atravesaban el canal bebían brandy. Necesitaba un estimulante. Cruzó el prado que se extendía frente a la casa de los Halloran y descendió por un estrecho sendero hasta el lugar en que habían levantado una casa para su única hija, Helen, y su marido, Eric Sachs. La piscina de los Sachs era pequeña, y allí encontró a Helen y su marido.\n" +
                "\n" +
                "–Oh, Neddy –exclamó Helen–. ¿Almorzaste en casa de mamá?\n" +
                "\n" +
                "–En realidad, no –dijo Ned–. Pero en efecto vi a tus padres –le pareció que la explicación bastaba–. Lamento muchísimo interrumpirlos, pero tengo frío y pienso que podrían ofrecerme un trago.\n" +
                "\n" +
                "–Bien, me encantaría –dijo Helen–, pero después de la operación de Eric no tenemos bebidas en casa. Desde hace tres años.\n" +
                "\n" +
                "¿Estaba perdiendo la memoria y quizá su talento para disimular los hechos dolorosos lo inducía a olvidar que había vendido la casa, que sus hijas estaban en dificultades y que su amigo había sufrido una enfermedad? Su vista descendió del rostro al abdomen de Eric, donde vio tres pálidas cicatrices de sutura, y dos tenían por lo menos treinta centímetros de largo. El ombligo había desaparecido, y Neddy se preguntó qué podía hacer a las tres de la madrugada la mano errabunda que ponía a prueba nuestras cualidades amatorias, con un vientre sin ombligo, desprovisto de nexo con el nacimiento. ¿Qué podía hacer con esa brecha en la sucesión?\n" +
                "\n" +
                "–Estoy segura de que podrás beber algo en casa de los Biswanger –dijo Helen–. Celebran una reunión enorme. Puedes oírlos desde aquí. ¡Escucha!\n" +
                "\n" +
                "Ella alzó la cabeza y desde el otro lado del camino, atravesando los prados, los jardines, los bosques, los campos, él volvió a oír el sonido luminoso de las voces reflejadas en el agua.\n" +
                "\n" +
                "–Bien, me mojaré –dijo Ned, dominado siempre por la idea de que no tenía modo de elegir su medio de viaje. Se zambulló en el agua fría de la piscina de los Sachs y jadeante, casi ahogándose, recorrió la piscina de un extremo al otro–. Lucinda y yo deseamos muchísimo verlos –dijo por encima del hombro, la cara vuelta hacia la propiedad de los Biswanger–. Lamentamos que haya pasado tanto tiempo y los llamaremos muy pronto.\n" +
                "\n" +
                "Cruzó algunos campos en dirección a los Biswanger y los sonidos de la fiesta. Se sentirían honrados de ofrecerle una copa, de buena gana le darían de beber. Los Biswanger invitaban a cenar a Ned y Lucinda cuatro veces al año, con seis semanas de anticipación. Siempre se veían desairados, y sin embargo continuaban enviando sus invitaciones, renuentes a aceptar las realidades rígidas y antidemocráticas de su propia sociedad. Eran la clase de gente que discutía el precio de las cosas en los cócteles, intercambiaba datos acerca de los precios durante la cena, y después de cenar contaba chistes verdes a un público de ambos sexos. No pertenecían al grupo de Neddy, ni siquiera estaban incluidos en la lista que Lucinda utilizaba para enviar tarjetas de Navidad. Se acercó a la piscina con sentimientos de indiferencia, compasión y cierta incomodidad, pues parecía que estaba oscureciendo y eran los días más largos del año. Cuando llegó, encontró una fiesta ruidosa y con mucha gente. Grace Biswanger era el tipo de anfitriona que invitaba al dueño de la óptica, al veterinario, al negociante de bienes raíces y al dentista. Nadie estaba nadando, y la luz del crepúsculo reflejada en el agua de la piscina tenía un destello invernal. Habían montado un bar, y Ned caminó en esa dirección. Cuando Grace Biswanger lo vio se acercó a él, no afectuosamente, como él tenía derecho a esperar, sino en actitud belicosa.\n" +
                "\n" +
                "–Caramba, a esta fiesta viene todo el mundo –dijo en voz alta–, hasta los colados.\n" +
                "\n" +
                "Ella no podía perjudicarlo socialmente…, eso era indudable, y él no se impresionó.\n" +
                "\n" +
                "–En mi calidad de colado –preguntó cortésmente–, ¿puedo pedir una copa?\n" +
                "\n" +
                "–Como guste –dijo ella–. No parece que preste mucha atención a las invitaciones.\n" +
                "\n" +
                "Le volvió la espalda y se reunió con varios invitados, y Ned se acercó al bar y pidió un whisky. El barman le sirvió, pero lo hizo bruscamente. El suyo era un mundo en que los camareros representaban el termómetro social, y verse desairado por un barman que trabajaba por horas significaba que había sufrido cierta pérdida de dignidad social. O quizá el hombre era nuevo y no estaba informado. Entonces, oyó a sus espaldas la voz de Grace, que decía:\n" +
                "–Se arruinaron de la noche a la mañana. Tienen solamente lo que ganan… y él apareció borracho un domingo y nos pidió que le prestásemos cinco mil dólares… –esa mujer siempre hablaba de dinero. Era peor que comer guisantes con cuchillo. Se zambulló en la piscina, nadó de un extremo al otro y se alejó.\n" +
                "La piscina siguiente de su lista, la antepenúltima, pertenecía a su antigua amante, Shirley Adams. Si lo habían herido en la propiedad de los Biswanger, aquí podía curarse. El amor –en realidad, el combate sexual– era el supremo elixir, el gran anestésico, la píldora de vivo color que renovaría la primavera de su andar, la alegría de la vida en su corazón. Habían tenido un affaire la semana pasada, el mes pasado, el año pasado. No lo lograba recordar. Él había interrumpido la relación, pues era quien tenía la ventaja, y pasó el portón en la pared que rodeaba la piscina sin que su sentimiento fuese tan ponderado como la confianza en sí mismo. En cierto modo parecía que era su propia piscina, pues el amante, y sobre todo el amante ilícito, goza de las posesiones. La vio allí, los cabellos color de bronce, pero su figura, al borde del agua luminosa y cerúlea, no evocó en él recuerdos profundos. Pensó que había sido un asunto superficial, aunque ella había llorado cuando lo dio por terminado. Parecía confundida de verlo, y Ned se preguntó si aún estaba lastimada. ¿Quizá, Dios no lo permitiese, volvería a llorar?\n" +
                "\n" +
                "–¿Qué deseas? –preguntó.\n" +
                "\n" +
                "–Estoy nadando a través del condado.\n" +
                "\n" +
                "–Santo Dios. ¿Jamás crecerás?\n" +
                "\n" +
                "–¿Qué pasa?\n" +
                "\n" +
                "–Si viniste a buscar dinero –dijo–, no te daré un centavo más.\n" +
                "\n" +
                "–Podrías ofrecerme una bebida.\n" +
                "\n" +
                "–Podría, pero no lo haré. No estoy sola.\n" +
                "\n" +
                "–Bien, ya me voy.\n" +
                "\n" +
                "Se zambulló y nadó a lo largo de la piscina, pero cuando trató de alzarse con los brazos sobre el reborde descubrió que ni los brazos ni los hombros le respondían, así que chapoteó hasta la escalerilla y trepó por ella. Mirando por encima del hombro vio, en el vestuario iluminado, la figura de un joven. Cuando salió al prado oscuro olió crisantemos y caléndulas –una tenaz fragancia otoñal– en el aire nocturno, un olor intenso como de gas. Alzó la vista y vio que habían salido las estrellas, pero ¿por qué le parecía estar viendo a Andrómeda, Cefeo y Casiopea? ¿Qué se había hecho de las constelaciones de mitad del verano? Se echó a llorar.\n" +
                "\n" +
                "Probablemente era la primera vez que lloraba siendo adulto y en todo caso la primera vez en su vida que se sentía tan desdichado, con tanto frío, tan cansado y desconcertado. No podía entender la dureza del barman o la dureza de una amante que le había rogado de rodillas y había regado de lágrimas sus pantalones. Había nadado demasiado, había estado mucho tiempo en el agua, y ahora tenía irritadas la nariz y la garganta. Lo que necesitaba era una bebida, un poco de compañía y ropas limpias y secas, y aunque hubiera podido acortar camino directamente, a través de la calle, para llegar a su casa, siguió en dirección a la piscina de los Gilmartin. Aquí, por primera vez en su vida, no se zambulló y descendió los peldaños hasta el agua helada y nadó con una brazada irregular que quizá había aprendido cuando era niño. Se tamboleó de fatiga de camino hacia la propiedad de los Clyde, y chapoteó de un extremo al otro de la piscina, deteniéndose de tanto en tanto a descansar con la mano aferrada al borde. Había cumplido su propósito, había recorrido a nado el condado, pero estaba tan aturdido por el agotamiento que no veía claro su propio triunfo. Encorvado, aferrándose a los pilares del portón en busca de apoyo, subió por el sendero de su propia casa.\n" +
                "\n" +
                "El lugar estaba a oscuras. ¿Era tan tarde que todos se habían acostado? ¿Lucinda se había quedado a cenar en casa de los Westerhazy? ¿Las niñas habían ido a buscarla, o estaban en otro lugar? ¿O habían convenido, como solían hacer el domingo, rechazar todas las invitaciones y quedarse en casa? Probó las puertas del garaje para ver qué automóviles había allí, pero las puertas estaban cerradas con llave y de los picaportes se desprendió óxido que le manchó las manos. Se acercó a la casa y vio que la fuerza de la tormenta había desprendido uno de los caños de desagüe. Colgaba sobre la puerta principal como la costilla de un paraguas; pero eso podía arreglarse por la mañana. La casa estaba cerrada con llave, y él pensó que la estúpida cocinera o la estúpida criada seguramente habían cerrado todo, hasta que recordó que hacía un tiempo que no empleaban criada ni cocinera. Gritó, golpeó la puerta, trató de forzarla con el hombro y después, mirando por las ventanas, vio que el lugar estaba vacío.",
        },
        {
            photo: "/img/corazon.png",
            title: "El corazón delator",
            titlesearch: "el corazon delator",
            author: "admin",
            description: "La historia sobre una confesión de amor que culminó en un asesinato.",
            category: "Horror",
            language: "Español",
            content: "¡Es cierto! Siempre he sido nervioso, muy nervioso, terriblemente nervioso. ¿Pero por qué afirman ustedes que estoy loco? La enfermedad había agudizado mis sentidos, en vez de destruirlos o embotarlos. Y mi oído era el más agudo de todos. Oía todo lo que puede oírse en la tierra y en el cielo. Muchas cosas oí en el infierno. ¿Cómo puedo estar loco, entonces? Escuchen… y observen con cuánta cordura, con cuánta tranquilidad les cuento mi historia.\n" +
                "\n" +
                "Me es imposible decir cómo aquella idea me entró en la cabeza por primera vez; pero, una vez concebida, me acosó noche y día. Yo no perseguía ningún propósito. Ni tampoco estaba colérico. Quería mucho al viejo. Jamás me había hecho nada malo. Jamás me insultó. Su dinero no me interesaba. Me parece que fue su ojo. ¡Sí, eso fue! Tenía un ojo semejante al de un buitre… Un ojo celeste, y velado por una tela. Cada vez que lo clavaba en mí se me helaba la sangre. Y así, poco a poco, muy gradualmente, me fui decidiendo a matar al viejo y librarme de aquel ojo para siempre.\n" +
                "\n" +
                "Presten atención ahora. Ustedes me toman por loco. Pero los locos no saben nada. En cambio… ¡Si hubieran podido verme! ¡Si hubieran podido ver con qué habilidad procedí! ¡Con qué cuidado… con qué previsión… con qué disimulo me puse a la obra! Jamás fui más amable con el viejo que la semana antes de matarlo. Todas las noches, hacia las doce, hacía yo girar el picaporte de su puerta y la abría… ¡oh, tan suavemente! Y entonces, cuando la abertura era lo bastante grande para pasar la cabeza, levantaba una linterna sorda, cerrada, completamente cerrada, de manera que no se viera ninguna luz, y tras ella pasaba la cabeza. ¡Oh, ustedes se hubieran reído al ver cuán astutamente pasaba la cabeza! La movía lentamente… muy, muy lentamente, a fin de no perturbar el sueño del viejo. Me llevaba una hora entera introducir completamente la cabeza por la abertura de la puerta, hasta verlo tendido en su cama. ¿Eh? ¿Es que un loco hubiera sido tan prudente como yo? Y entonces, cuando tenía la cabeza completamente dentro del cuarto, abría la linterna cautelosamente… ¡oh, tan cautelosamente! Sí, cautelosamente iba abriendo la linterna (pues crujían las bisagras), la iba abriendo lo suficiente para que un solo rayo de luz cayera sobre el ojo de buitre. Y esto lo hice durante siete largas noches… cada noche, a las doce… pero siempre encontré el ojo cerrado, y por eso me era imposible cumplir mi obra, porque no era el viejo quien me irritaba, sino el mal de ojo. Y por la mañana, apenas iniciado el día, entraba sin miedo en su habitación y le hablaba resueltamente, llamándolo por su nombre con voz cordial y preguntándole cómo había pasado la noche. Ya ven ustedes que tendría que haber sido un viejo muy astuto para sospechar que todas las noches, justamente a las doce, iba yo a mirarlo mientras dormía.\n" +
                "\n" +
                "Al llegar la octava noche, procedí con mayor cautela que de costumbre al abrir la puerta. El minutero de un reloj se mueve con más rapidez de lo que se movía mi mano. Jamás, antes de aquella noche, había sentido el alcance de mis facultades, de mi sagacidad. Apenas lograba contener mi impresión de triunfo. ¡Pensar que estaba ahí, abriendo poco a poco la puerta, y que él ni siquiera soñaba con mis secretas intenciones o pensamientos! Me reí entre dientes ante esta idea, y quizá me oyó, porque lo sentí moverse repentinamente en la cama, como si se sobresaltara. Ustedes pensarán que me eché hacia atrás… pero no. Su cuarto estaba tan negro como la pez, ya que el viejo cerraba completamente las persianas por miedo a los ladrones; yo sabía que le era imposible distinguir la abertura de la puerta, y seguí empujando suavemente, suavemente.\n" +
                "\n" +
                "Había ya pasado la cabeza y me disponía a abrir la linterna, cuando mi pulgar resbaló en el cierre metálico y el viejo se enderezó en el lecho, gritando:\n" +
                "\n" +
                "-¿Quién está ahí?\n" +
                "\n" +
                "Permanecí inmóvil, sin decir palabra. Durante una hora entera no moví un solo músculo, y en todo ese tiempo no oí que volviera a tenderse en la cama. Seguía sentado, escuchando… tal como yo lo había hecho, noche tras noche, mientras escuchaba en la pared los taladros cuyo sonido anuncia la muerte.\n" +
                "\n" +
                "Oí de pronto un leve quejido, y supe que era el quejido que nace del terror. No expresaba dolor o pena… ¡oh, no! Era el ahogado sonido que brota del fondo del alma cuando el espanto la sobrecoge. Bien conocía yo ese sonido. Muchas noches, justamente a las doce, cuando el mundo entero dormía, surgió de mi pecho, ahondando con su espantoso eco los terrores que me enloquecían. Repito que lo conocía bien. Comprendí lo que estaba sintiendo el viejo y le tuve lástima, aunque me reía en el fondo de mi corazón. Comprendí que había estado despierto desde el primer leve ruido, cuando se movió en la cama. Había tratado de decirse que aquel ruido no era nada, pero sin conseguirlo. Pensaba: “No es más que el viento en la chimenea… o un grillo que chirrió una sola vez”. Sí, había tratado de darse ánimo con esas suposiciones, pero todo era en vano. Todo era en vano, porque la Muerte se había aproximado a él, deslizándose furtiva, y envolvía a su víctima. Y la fúnebre influencia de aquella sombra imperceptible era la que lo movía a sentir -aunque no podía verla ni oírla-, a sentir la presencia de mi cabeza dentro de la habitación.\n" +
                "\n" +
                "Después de haber esperado largo tiempo, con toda paciencia, sin oír que volviera a acostarse, resolví abrir una pequeña, una pequeñísima ranura en la linterna.\n" +
                "\n" +
                "Así lo hice -no pueden imaginarse ustedes con qué cuidado, con qué inmenso cuidado-, hasta que un fino rayo de luz, semejante al hilo de la araña, brotó de la ranura y cayó de lleno sobre el ojo de buitre.\n" +
                "\n" +
                "Estaba abierto, abierto de par en par… y yo empecé a enfurecerme mientras lo miraba. Lo vi con toda claridad, de un azul apagado y con aquella horrible tela que me helaba hasta el tuétano. Pero no podía ver nada de la cara o del cuerpo del viejo, pues, como movido por un instinto, había orientado el haz de luz exactamente hacia el punto maldito.\n" +
                "\n" +
                "¿No les he dicho ya que lo que toman erradamente por locura es sólo una excesiva agudeza de los sentidos? En aquel momento llegó a mis oídos un resonar apagado y presuroso, como el que podría hacer un reloj envuelto en algodón. Aquel sonido también me era familiar. Era el latir del corazón del viejo. Aumentó aún más mi furia, tal como el redoblar de un tambor estimula el coraje de un soldado.\n" +
                "\n" +
                "Pero, incluso entonces, me contuve y seguí callado. Apenas si respiraba. Sostenía la linterna de modo que no se moviera, tratando de mantener con toda la firmeza posible el haz de luz sobre el ojo. Entretanto, el infernal latir del corazón iba en aumento. Se hacía cada vez más rápido, cada vez más fuerte, momento a momento. El espanto del viejo tenía que ser terrible. ¡Cada vez más fuerte, más fuerte! ¿Me siguen ustedes con atención? Les he dicho que soy nervioso. Sí, lo soy. Y ahora, a medianoche, en el terrible silencio de aquella antigua casa, un resonar tan extraño como aquél me llenó de un horror incontrolable. Sin embargo, me contuve todavía algunos minutos y permanecí inmóvil. ¡Pero el latido crecía cada vez más fuerte, más fuerte! Me pareció que aquel corazón iba a estallar. Y una nueva ansiedad se apoderó de mí… ¡Algún vecino podía escuchar aquel sonido! ¡La hora del viejo había sonado! Lanzando un alarido, abrí del todo la linterna y me precipité en la habitación. El viejo clamó una vez… nada más que una vez. Me bastó un segundo para arrojarlo al suelo y echarle encima el pesado colchón. Sonreí alegremente al ver lo fácil que me había resultado todo. Pero, durante varios minutos, el corazón siguió latiendo con un sonido ahogado. Claro que no me preocupaba, pues nadie podría escucharlo a través de las paredes. Cesó, por fin, de latir. El viejo había muerto. Levanté el colchón y examiné el cadáver. Sí, estaba muerto, completamente muerto. Apoyé la mano sobre el corazón y la mantuve así largo tiempo. No se sentía el menor latido. El viejo estaba bien muerto. Su ojo no volvería a molestarme.\n" +
                "\n" +
                "Si ustedes continúan tomándome por loco dejarán de hacerlo cuando les describa las astutas precauciones que adopté para esconder el cadáver. La noche avanzaba, mientras yo cumplía mi trabajo con rapidez, pero en silencio. Ante todo descuarticé el cadáver. Le corté la cabeza, brazos y piernas.\n" +
                "\n" +
                "Levanté luego tres planchas del piso de la habitación y escondí los restos en el hueco. Volví a colocar los tablones con tanta habilidad que ningún ojo humano -ni siquiera el suyo- hubiera podido advertir la menor diferencia. No había nada que lavar… ninguna mancha… ningún rastro de sangre. Yo era demasiado precavido para eso. Una cuba había recogido todo… ¡ja, ja!\n" +
                "\n" +
                "Cuando hube terminado mi tarea eran las cuatro de la madrugada, pero seguía tan oscuro como a medianoche. En momentos en que se oían las campanadas de la hora, golpearon a la puerta de la calle. Acudí a abrir con toda tranquilidad, pues ¿qué podía temer ahora?\n" +
                "\n" +
                "Hallé a tres caballeros, que se presentaron muy civilmente como oficiales de policía. Durante la noche, un vecino había escuchado un alarido, por lo cual se sospechaba la posibilidad de algún atentado. Al recibir este informe en el puesto de policía, habían comisionado a los tres agentes para que registraran el lugar.\n" +
                "\n" +
                "Sonreí, pues… ¿qué tenía que temer? Di la bienvenida a los oficiales y les expliqué que yo había lanzado aquel grito durante una pesadilla. Les hice saber que el viejo se había ausentado a la campaña. Llevé a los visitantes a recorrer la casa y los invité a que revisaran, a que revisaran bien. Finalmente, acabé conduciéndolos a la habitación del muerto. Les mostré sus caudales intactos y cómo cada cosa se hallaba en su lugar. En el entusiasmo de mis confidencias traje sillas a la habitación y pedí a los tres caballeros que descansaran allí de su fatiga, mientras yo mismo, con la audacia de mi perfecto triunfo, colocaba mi silla en el exacto punto bajo el cual reposaba el cadáver de mi víctima.\n" +
                "\n" +
                "Los oficiales se sentían satisfechos. Mis modales los habían convencido. Por mi parte, me hallaba perfectamente cómodo. Sentáronse y hablaron de cosas comunes, mientras yo les contestaba con animación. Mas, al cabo de un rato, empecé a notar que me ponía pálido y deseé que se marcharan. Me dolía la cabeza y creía percibir un zumbido en los oídos; pero los policías continuaban sentados y charlando. El zumbido se hizo más intenso; seguía resonando y era cada vez más intenso. Hablé en voz muy alta para librarme de esa sensación, pero continuaba lo mismo y se iba haciendo cada vez más clara… hasta que, al fin, me di cuenta de que aquel sonido no se producía dentro de mis oídos.\n" +
                "\n" +
                "Sin duda, debí de ponerme muy pálido, pero seguí hablando con creciente soltura y levantando mucho la voz. Empero, el sonido aumentaba… ¿y que podía hacer yo? Era un resonar apagado y presuroso…, un sonido como el que podría hacer un reloj envuelto en algodón. Yo jadeaba, tratando de recobrar el aliento, y, sin embargo, los policías no habían oído nada. Hablé con mayor rapidez, con vehemencia, pero el sonido crecía continuamente. Me puse en pie y discutí sobre insignificancias en voz muy alta y con violentas gesticulaciones; pero el sonido crecía continuamente. ¿Por qué no se iban? Anduve de un lado a otro, a grandes pasos, como si las observaciones de aquellos hombres me enfurecieran; pero el sonido crecía continuamente. ¡Oh, Dios! ¿Qué podía hacer yo? Lancé espumarajos de rabia… maldije… juré… Balanceando la silla sobre la cual me había sentado, raspé con ella las tablas del piso, pero el sonido sobrepujaba todos los otros y crecía sin cesar. ¡Más alto… más alto… más alto! Y entretanto los hombres seguían charlando plácidamente y sonriendo. ¿Era posible que no oyeran? ¡Santo Dios! ¡No, no! ¡Claro que oían y que sospechaban! ¡Sabían… y se estaban burlando de mi horror! ¡Sí, así lo pensé y así lo pienso hoy! ¡Pero cualquier cosa era preferible a aquella agonía! ¡Cualquier cosa sería más tolerable que aquel escarnio! ¡No podía soportar más tiempo sus sonrisas hipócritas! ¡Sentí que tenía que gritar o morir, y entonces… otra vez… escuchen… más fuerte… más fuerte… más fuerte… más fuerte!\n" +
                "\n" +
                "-¡Basta ya de fingir, malvados! -aullé-. ¡Confieso que lo maté! ¡Levanten esos tablones! ¡Ahí… ahí!¡Donde está latiendo su horrible corazón!",
        },

        {
            photo: "/img/perfecta.png",
            title: "Sobre encontrarse a la chica 100% perfecta",
            titlesearch: "sobre encontrarse a la chica 100% perfecta",
            author: "admin",
            description: "Dos jóvenes se encuentran en una calle sin conocerse y se deciden expresar mutuamente la posibilidad de ser el uno para el otro.",
            category: "Romance",
            language: "Español",
            content: "Una bella mañana de abril, en una callecita lateral del elegante barrio de Harajuku en Tokio, me crucé con la chica 100% perfecta.\n" +
                "\n" +
                "A decir verdad, no era tan guapa. No sobresalía de ninguna manera. Su ropa no era nada especial. En la nuca su cabello tenía las marcas de recién haber despertado. Tampoco era joven –debía andar alrededor de los treinta, ni si quiera cerca de lo que comúnmente se considera una “chica”. Aún así, a quince metros sé que ella es la chica 100% perfecta para mí. Desde el momento que la vi algo retumbó en mi pecho y mi boca quedó seca como un desierto. Quizá tú tienes tu propio tipo de chica favorita: digamos, las de tobillos delgados, o grandes ojos, o delicados dedos, o sin tener una buena razón te enloquecen las chicas que se toman su tiempo en terminar su merienda. Yo tengo mis propias preferencias, por supuesto. A veces en un restaurante me descubro mirando a la chica de la mesa de al lado porque me gusta la forma de su nariz.\n" +
                "\n" +
                "Pero nadie puede asegurar que su chica 100% perfecta corresponde a un tipo preconcebido. Por mucho que me gusten las narices, no puedo recordar la forma de la de ella –ni siquiera si tenía una. Todo lo que puedo recordar de forma segura es que no era una gran belleza. Extraño.\n" +
                "\n" +
                "–Ayer me crucé en la calle con la chica 100% perfecta –le digo a alguien.\n" +
                "\n" +
                "–¿Sí? –dice él– ¿Estaba guapa?\n" +
                "\n" +
                "–No realmente.\n" +
                "\n" +
                "–De tu tipo entonces.\n" +
                "\n" +
                "–No lo sé. Me parece que no puedo recordar nada de ella, la forma de sus ojos o el tamaño de su pecho.\n" +
                "\n" +
                "–Raro.\n" +
                "\n" +
                "–Sí. Raro.\n" +
                "\n" +
                "–Bueno, como sea –me dice ya aburrido–, ¿qué hiciste? ¿Le hablaste? ¿La seguiste?\n" +
                "\n" +
                "–Nah, sólo me crucé con ella en la calle.\n" +
                "\n" +
                "Ella caminaba de este a oeste y yo de oeste a este. Era una bella mañana de abril.\n" +
                "\n" +
                "Ojalá hubiera hablado con ella. Media hora sería suficiente: sólo para preguntarle acerca de ella misma, contarle algo acerca de mí, y –lo que realmente me gustaría hacer– explicarle las complejidades del destino que nos llevaron a cruzarnos uno con el otro en esa calle en Harajuku en una bella mañana de abril de 1981. Algo que seguro nos llenaría de tibios secretos, como un antiguo reloj construido cuando la paz reinaba en el mundo.\n" +
                "\n" +
                "Después de hablar, almorzaríamos en algún lugar, quizá veríamos una película de Woody Allen, entrar en el bar de un hotel para tomar unos cócteles. Con un poco de suerte, terminaríamos en la cama.\n" +
                "\n" +
                "La posibilidad toca en la puerta de mi corazón.\n" +
                "\n" +
                "Ahora la distancia entre nosotros es de apenas 15 metros.\n" +
                "\n" +
                "¿Cómo acercarme? ¿Qué debería decirle?\n" +
                "\n" +
                "–Buenos días, señorita, ¿podría compartir conmigo media hora para conversar?\n" +
                "\n" +
                "Ridículo. Sonaría como un vendedor de seguros.\n" +
                "\n" +
                "–Discúlpeme, ¿sabría usted si hay en el barrio alguna lavandería 24 horas?\n" +
                "\n" +
                "No, simplemente ridículo. No cargo nada que lavar, ¿quién me creería en una línea como esa?\n" +
                "\n" +
                "Quizá simplemente sirva la verdad: Buenos días, tú eres la chica 100% perfecta para mí.\n" +
                "\n" +
                "No, no se lo creería. Aunque lo dijera es posible que no quisiera hablar conmigo. Perdóname, podría decir, es posible que yo sea la chica 100% perfecta para ti, pero tú no eres el chico 100% perfecto para mí. Podría suceder, y de encontrarme en esa situación me rompería en mil pedazos, jamás me recuperaría del golpe, tengo treinta y dos años, y de eso se trata madurar.\n" +
                "\n" +
                "Pasamos frente a una florería. Un tibio airecito toca mi piel. La acera está húmeda y percibo el olor de las rosas. No puedo hablar con ella. Ella trae un suéter blanco y en su mano derecha estruja un sobre blanco con una sola estampilla. Así que ella le ha escrito una carta a alguien, a juzgar por su mirada adormecida quizá pasó toda la noche escribiendo. El sobre puede guardar todos sus secretos.\n" +
                "\n" +
                "Doy algunas zancadas y giro: ella se pierde en la multitud.\n" +
                "\n" +
                "Ahora, por supuesto, sé exactamente qué tendría que haberle dicho. Tendría que haber sido un largo discurso, pienso, demasiado tarde como para decirlo ahora. Se me ocurren las ideas cuando ya no son prácticas.\n" +
                "\n" +
                "Bueno, no importa, hubiera empezado “Érase una vez” y terminado con “Una historia triste, ¿no crees?”\n" +
                "\n" +
                "Érase una vez un muchacho y una muchacha. El muchacho tenía dieciocho y la muchacha dieciséis. Él no era notablemente apuesto y ella no era especialmente bella. Eran solamente un ordinario muchacho solitario y una ordinaria muchacha solitaria, como todos los demás. Pero ellos creían con todo su corazón que en algún lugar del mundo vivía el muchacho 100% perfecto y la muchacha 100% perfecta para ellos. Sí, creían en el milagro. Y ese milagro sucedió.\n" +
                "\n" +
                "Un día se encontraron en una esquina de la calle.\n" +
                "\n" +
                "–Esto es maravilloso –dijo él–. Te he estado buscando toda mi vida. Puede que no creas esto, pero eres la chica 100% perfecta para mí.\n" +
                "\n" +
                "–Y tú –ella le respondió– eres el chico 100% perfecto para mí, exactamente como te he imaginado en cada detalle. Es como un sueño.\n" +
                "\n" +
                "Se sentaron en la banca de un parque, se tomaron de las manos y contaron sus historias hora tras hora. Ya no estaban solos. Qué cosa maravillosa encontrar y ser encontrado por tu otro 100% perfecto. Un milagro, un milagro cósmico.\n" +
                "\n" +
                "Sin embargo, mientras se sentaron y hablaron una pequeña, pequeñísima astilla de duda echó raíces en sus corazones: ¿estaba bien si los sueños de uno se cumplen tan fácilmente?\n" +
                "\n" +
                "Y así, tras una pausa en su conversación, el chico le dijo a la chica: Vamos a probarnos, sólo una vez. Si realmente somos los amantes 100% perfectos, entonces alguna vez en algún lugar, nos volveremos a encontrar sin duda alguna y cuando eso suceda y sepamos que somos los 100% perfectos, nos casaremos ahí y entonces, ¿cómo ves?\n" +
                "\n" +
                "–Sí –ella dijo– eso es exactamente lo que debemos hacer.\n" +
                "\n" +
                "Y así partieron, ella al este y él hacia el oeste.\n" +
                "\n" +
                "Sin embargo, la prueba en que estuvieron de acuerdo era absolutamente innecesaria, nunca debieron someterse a ella porque en verdad eran el amante 100% perfecto el uno para el otro y era un milagro que se hubieran conocido. Pero era imposible para ellos saberlo, jóvenes como eran. Las frías, indiferentes olas del destino procederían a agitarlos sin piedad.\n" +
                "\n" +
                "Un invierno, ambos, el chico y la chica se enfermaron de influenza, y tras pasar semanas entre la vida y la muerte, perdieron toda memoria de los años primeros. Cuando despertaron sus cabezas estaban vacías como la alcancía del joven D. H. Lawrence.\n" +
                "\n" +
                "Eran dos jóvenes brillantes y determinados, a través de esfuerzos continuos pudieron adquirir de nuevo el conocimiento y la sensación que los calificaba para volver como miembros hechos y derechos de la sociedad. Bendito el cielo, se convirtieron en ciudadanos modelo, sabían transbordar de una línea del subterráneo a otra, eran capaces de enviar una carta de entrega especial en la oficina de correos. De hecho, incluso experimentaron otra vez el amor, a veces el 75% o aún el 85% del amor.\n" +
                "\n" +
                "El tiempo pasó veloz y pronto el chico tuvo treinta y dos, la chica treinta.\n" +
                "\n" +
                "Una bella mañana de abril, en búsqueda de una taza de café para empezar el día, el chico caminaba de este a oeste, mientras que la chica lo hacía de oeste a este, ambos a lo largo de la callecita del barrio de Harajuku de Tokio. Pasaron uno al lado del otro justo en el centro de la calle. El débil destello de sus memorias perdidas brilló tenue y breve en sus corazones. Cada uno sintió retumbar su pecho. Y supieron:\n" +
                "\n" +
                "Ella es la chica 100% perfecta para mí.\n" +
                "\n" +
                "Él es el chico 100% perfecto para mí.\n" +
                "\n" +
                "Pero el resplandor de sus recuerdos era tan débil y sus pensamientos no tenían ya la claridad de hace catorce años. Sin una palabra, se pasaron de largo, uno al otro, desapareciendo en la multitud. Para siempre.\n" +
                "\n" +
                "Una historia triste, ¿no crees?\n" +
                "\n" +
                "Sí, eso es, eso es lo que tendría que haberle dicho.",
        },

        {
            photo: "/img/noche.png",
            title: "La noche boca arriba",
            titlesearch: "la noche boca arriba",
            author: "admin",
            description: "Un indio azteca es perseguido por una tribu enemiga.",
            category: "Acción",
            language: "Español",
            content: "A mitad del largo zaguán del hotel pensó que debía ser tarde y se apuró a salir a la calle y sacar la motocicleta del rincón donde el portero de al lado le permitía guardarla. En la joyería de la esquina vio que eran las nueve menos diez; llegaría con tiempo sobrado adonde iba. El sol se filtraba entre los altos edificios del centro, y él -porque para sí mismo, para ir pensando, no tenía nombre- montó en la máquina saboreando el paseo. La moto ronroneaba entre sus piernas, y un viento fresco le chicoteaba los pantalones.\n" +
                "\n" +
                "Dejó pasar los ministerios (el rosa, el blanco) y la serie de comercios con brillantes vitrinas de la calle Central. Ahora entraba en la parte más agradable del trayecto, el verdadero paseo: una calle larga, bordeada de árboles, con poco tráfico y amplias villas que dejaban venir los jardines hasta las aceras, apenas demarcadas por setos bajos. Quizá algo distraído, pero corriendo por la derecha como correspondía, se dejó llevar por la tersura, por la leve crispación de ese día apenas empezado. Tal vez su involuntario relajamiento le impidió prevenir el accidente. Cuando vio que la mujer parada en la esquina se lanzaba a la calzada a pesar de las luces verdes, ya era tarde para las soluciones fáciles. Frenó con el pie y con la mano, desviándose a la izquierda; oyó el grito de la mujer, y junto con el choque perdió la visión. Fue como dormirse de golpe.\n" +
                "\n" +
                "Volvió bruscamente del desmayo. Cuatro o cinco hombres jóvenes lo estaban sacando de debajo de la moto. Sentía gusto a sal y sangre, le dolía una rodilla y cuando lo alzaron gritó, porque no podía soportar la presión en el brazo derecho. Voces que no parecían pertenecer a las caras suspendidas sobre él, lo alentaban con bromas y seguridades. Su único alivio fue oír la confirmación de que había estado en su derecho al cruzar la esquina. Preguntó por la mujer, tratando de dominar la náusea que le ganaba la garganta. Mientras lo llevaban boca arriba hasta una farmacia próxima, supo que la causante del accidente no tenía más que rasguños en la piernas. “Usté la agarró apenas, pero el golpe le hizo saltar la máquina de costado…”; Opiniones, recuerdos, despacio, éntrenlo de espaldas, así va bien, y alguien con guardapolvo dándole de beber un trago que lo alivió en la penumbra de una pequeña farmacia de barrio.\n" +
                "\n" +
                "La ambulancia policial llegó a los cinco minutos, y lo subieron a una camilla blanda donde pudo tenderse a gusto. Con toda lucidez, pero sabiendo que estaba bajo los efectos de un shock terrible, dio sus señas al policía que lo acompañaba. El brazo casi no le dolía; de una cortadura en la ceja goteaba sangre por toda la cara. Una o dos veces se lamió los labios para beberla. Se sentía bien, era un accidente, mala suerte; unas semanas quieto y nada más. El vigilante le dijo que la motocicleta no parecía muy estropeada. “Natural”, dijo él. “Como que me la ligué encima…” Los dos rieron y el vigilante le dio la mano al llegar al hospital y le deseó buena suerte. Ya la náusea volvía poco a poco; mientras lo llevaban en una camilla de ruedas hasta un pabellón del fondo, pasando bajo árboles llenos de pájaros, cerró los ojos y deseó estar dormido o cloroformado. Pero lo tuvieron largo rato en una pieza con olor a hospital, llenando una ficha, quitándole la ropa y vistiéndolo con una camisa grisácea y dura. Le movían cuidadosamente el brazo, sin que le doliera. Las enfermeras bromeaban todo el tiempo, y si no hubiera sido por las contracciones del estómago se habría sentido muy bien, casi contento.\n" +
                "\n" +
                "Lo llevaron a la sala de radio, y veinte minutos después, con la placa todavía húmeda puesta sobre el pecho como una lápida negra, pasó a la sala de operaciones. Alguien de blanco, alto y delgado, se le acercó y se puso a mirar la radiografía. Manos de mujer le acomodaban la cabeza, sintió que lo pasaban de una camilla a otra. El hombre de blanco se le acercó otra vez, sonriendo, con algo que le brillaba en la mano derecha. Le palmeó la mejilla e hizo una seña a alguien parado atrás.\n" +
                "\n" +
                "Como sueño era curioso porque estaba lleno de olores y él nunca soñaba olores. Primero un olor a pantano, ya que a la izquierda de la calzada empezaban las marismas, los tembladerales de donde no volvía nadie. Pero el olor cesó, y en cambio vino una fragancia compuesta y oscura como la noche en que se movía huyendo de los aztecas. Y todo era tan natural, tenía que huir de los aztecas que andaban a caza de hombre, y su única probabilidad era la de esconderse en lo más denso de la selva, cuidando de no apartarse de la estrecha calzada que solo ellos, los motecas, conocían.\n" +
                "\n" +
                "Lo que más lo torturaba era el olor, como si aun en la absoluta aceptación del sueño algo se revelara contra eso que no era habitual, que hasta entonces no había participado del juego. “Huele a guerra”, pensó, tocando instintivamente el puñal de piedra atravesado en su ceñidor de lana tejida. Un sonido inesperado lo hizo agacharse y quedar inmóvil, temblando. Tener miedo no era extraño, en sus sueños abundaba el miedo. Esperó, tapado por las ramas de un arbusto y la noche sin estrellas. Muy lejos, probablemente del otro lado del gran lago, debían estar ardiendo fuegos de vivac; un resplandor rojizo teñía esa parte del cielo. El sonido no se repitió. Había sido como una rama quebrada. Tal vez un animal que escapaba como él del olor a guerra. Se enderezó despacio, venteando. No se oía nada, pero el miedo seguía allí como el olor, ese incienso dulzón de la guerra florida. Había que seguir, llegar al corazón de la selva evitando las ciénagas. A tientas, agachándose a cada instante para tocar el suelo más duro de la calzada, dio algunos pasos. Hubiera querido echar a correr, pero los tembladerales palpitaban a su lado. En el sendero en tinieblas, buscó el rumbo. Entonces sintió una bocanada del olor que más temía, y saltó desesperado hacia adelante.\n" +
                "\n" +
                "-Se va a caer de la cama -dijo el enfermo de la cama de al lado-. No brinque tanto, amigazo.\n" +
                "\n" +
                "Abrió los ojos y era de tarde, con el sol ya bajo en los ventanales de la larga sala. Mientras trataba de sonreír a su vecino, se despegó casi físicamente de la última visión de la pesadilla. El brazo, enyesado, colgaba de un aparato con pesas y poleas. Sintió sed, como si hubiera estado corriendo kilómetros, pero no querían darle mucha agua, apenas para mojarse los labios y hacer un buche. La fiebre lo iba ganando despacio y hubiera podido dormirse otra vez, pero saboreaba el placer de quedarse despierto, entornados los ojos, escuchando el diálogo de los otros enfermos, respondiendo de cuando en cuando a alguna pregunta. Vio llegar un carrito blanco que pusieron al lado de su cama, una enfermera rubia le frotó con alcohol la cara anterior del muslo, y le clavó una gruesa aguja conectada con un tubo que subía hasta un frasco lleno de líquido opalino. Un médico joven vino con un aparato de metal y cuero que le ajustó al brazo sano para verificar alguna cosa. Caía la noche, y la fiebre lo iba arrastrando blandamente a un estado donde las cosas tenían un relieve como de gemelos de teatro, eran reales y dulces y a la vez ligeramente repugnantes; como estar viendo una película aburrida y pensar que sin embargo en la calle es peor; y quedarse.\n" +
                "\n" +
                "Vino una taza de maravilloso caldo de oro oliendo a puerro, a apio, a perejil. Un trozito de pan, más precioso que todo un banquete, se fue desmigajando poco a poco. El brazo no le dolía nada y solamente en la ceja, donde lo habían suturado, chirriaba a veces una punzada caliente y rápida. Cuando los ventanales de enfrente viraron a manchas de un azul oscuro, pensó que no iba a ser difícil dormirse. Un poco incómodo, de espaldas, pero al pasarse la lengua por los labios resecos y calientes sintió el sabor del caldo, y suspiró de felicidad, abandonándose.\n" +
                "\n" +
                "Primero fue una confusión, un atraer hacia sí todas las sensaciones por un instante embotadas o confundidas. Comprendía que estaba corriendo en plena oscuridad, aunque arriba el cielo cruzado de copas de árboles era menos negro que el resto. “La calzada”, pensó. “Me salí de la calzada.” Sus pies se hundían en un colchón de hojas y barro, y ya no podía dar un paso sin que las ramas de los arbustos le azotaran el torso y las piernas. Jadeante, sabiéndose acorralado a pesar de la oscuridad y el silencio, se agachó para escuchar. Tal vez la calzada estaba cerca, con la primera luz del día iba a verla otra vez. Nada podía ayudarlo ahora a encontrarla. La mano que sin saberlo él aferraba el mango del puñal, subió como un escorpión de los pantanos hasta su cuello, donde colgaba el amuleto protector. Moviendo apenas los labios musitó la plegaria del maíz que trae las lunas felices, y la súplica a la Muy Alta, a la dispensadora de los bienes motecas. Pero sentía al mismo tiempo que los tobillos se le estaban hundiendo despacio en el barro, y la espera en la oscuridad del chaparral desconocido se le hacía insoportable. La guerra florida había empezado con la luna y llevaba ya tres días y tres noches. Si conseguía refugiarse en lo profundo de la selva, abandonando la calzada más allá de la región de las ciénagas, quizá los guerreros no le siguieran el rastro. Pensó en la cantidad de prisioneros que ya habrían hecho. Pero la cantidad no contaba, sino el tiempo sagrado. La caza continuaría hasta que los sacerdotes dieran la señal del regreso. Todo tenía su número y su fin, y él estaba dentro del tiempo sagrado, del otro lado de los cazadores.\n" +
                "\n" +
                "Oyó los gritos y se enderezó de un salto, puñal en mano. Como si el cielo se incendiara en el horizonte, vio antorchas moviéndose entre las ramas, muy cerca. El olor a guerra era insoportable, y cuando el primer enemigo le saltó al cuello casi sintió placer en hundirle la hoja de piedra en pleno pecho. Ya lo rodeaban las luces y los gritos alegres. Alcanzó a cortar el aire una o dos veces, y entonces una soga lo atrapó desde atrás.\n" +
                "\n" +
                "-Es la fiebre -dijo el de la cama de al lado-. A mí me pasaba igual cuando me operé del duodeno. Tome agua y va a ver que duerme bien.\n" +
                "\n" +
                "Al lado de la noche de donde volvía, la penumbra tibia de la sala le pareció deliciosa. Una lámpara violeta velaba en lo alto de la pared del fondo como un ojo protector. Se oía toser, respirar fuerte, a veces un diálogo en voz baja. Todo era grato y seguro, sin acoso, sin… Pero no quería seguir pensando en la pesadilla. Había tantas cosas en qué entretenerse. Se puso a mirar el yeso del brazo, las poleas que tan cómodamente se lo sostenían en el aire. Le habían puesto una botella de agua mineral en la mesa de noche. Bebió del gollete, golosamente. Distinguía ahora las formas de la sala, las treinta camas, los armarios con vitrinas. Ya no debía tener tanta fiebre, sentía fresca la cara. La ceja le dolía apenas, como un recuerdo. Se vio otra vez saliendo del hotel, sacando la moto. ¿Quién hubiera pensado que la cosa iba a acabar así? Trataba de fijar el momento del accidente, y le dio rabia advertir que había ahí como un hueco, un vacío que no alcanzaba a rellenar. Entre el choque y el momento en que lo habían levantado del suelo, un desmayo o lo que fuera no le dejaba ver nada. Y al mismo tiempo tenía la sensación de que ese hueco, esa nada, había durado una eternidad. No, ni siquiera tiempo, más bien como si en ese hueco él hubiera pasado a través de algo o recorrido distancias inmensas. El choque, el golpe brutal contra el pavimento. De todas maneras al salir del pozo negro había sentido casi un alivio mientras los hombres lo alzaban del suelo. Con el dolor del brazo roto, la sangre de la ceja partida, la contusión en la rodilla; con todo eso, un alivio al volver al día y sentirse sostenido y auxiliado. Y era raro. Le preguntaría alguna vez al médico de la oficina. Ahora volvía a ganarlo el sueño, a tirarlo despacio hacia abajo. La almohada era tan blanda, y en su garganta afiebrada la frescura del agua mineral. Quizá pudiera descansar de veras, sin las malditas pesadillas. La luz violeta de la lámpara en lo alto se iba apagando poco a poco.\n" +
                "\n" +
                "Como dormía de espaldas, no lo sorprendió la posición en que volvía a reconocerse, pero en cambio el olor a humedad, a piedra rezumante de filtraciones, le cerró la garganta y lo obligó a comprender. Inútil abrir los ojos y mirar en todas direcciones; lo envolvía una oscuridad absoluta. Quiso enderezarse y sintió las sogas en las muñecas y los tobillos. Estaba estaqueado en el piso, en un suelo de lajas helado y húmedo. El frío le ganaba la espalda desnuda, las piernas. Con el mentón buscó torpemente el contacto con su amuleto, y supo que se lo habían arrancado. Ahora estaba perdido, ninguna plegaria podía salvarlo del final. Lejanamente, como filtrándose entre las piedras del calabozo, oyó los atabales de la fiesta. Lo habían traído al teocalli, estaba en las mazmorras del templo a la espera de su turno.\n" +
                "\n" +
                "Oyó gritar, un grito ronco que rebotaba en las paredes. Otro grito, acabando en un quejido. Era él que gritaba en las tinieblas, gritaba porque estaba vivo, todo su cuerpo se defendía con el grito de lo que iba a venir, del final inevitable. Pensó en sus compañeros que llenarían otras mazmorras, y en los que ascendían ya los peldaños del sacrificio. Gritó de nuevo sofocadamente, casi no podía abrir la boca, tenía las mandíbulas agarrotadas y a la vez como si fueran de goma y se abrieran lentamente, con un esfuerzo interminable. El chirriar de los cerrojos lo sacudió como un látigo. Convulso, retorciéndose, luchó por zafarse de las cuerdas que se le hundían en la carne. Su brazo derecho, el más fuerte, tiraba hasta que el dolor se hizo intolerable y hubo que ceder. Vio abrirse la doble puerta, y el olor de las antorchas le llegó antes que la luz. Apenas ceñidos con el taparrabos de la ceremonia, los acólitos de los sacerdotes se le acercaron mirándolo con desprecio. Las luces se reflejaban en los torsos sudados, en el pelo negro lleno de plumas. Cedieron las sogas, y en su lugar lo aferraron manos calientes, duras como el bronce; se sintió alzado, siempre boca arriba, tironeado por los cuatro acólitos que lo llevaban por el pasadizo. Los portadores de antorchas iban adelante, alumbrando vagamente el corredor de paredes mojadas y techo tan bajo que los acólitos debían agachar la cabeza. Ahora lo llevaban, lo llevaban, era el final. Boca arriba, a un metro del techo de roca viva que por momentos se iluminaba con un reflejo de antorcha. Cuando en vez del techo nacieran las estrellas y se alzara ante él la escalinata incendiada de gritos y danzas, sería el fin. El pasadizo no acababa nunca, pero ya iba a acabar, de repente olería el aire libre lleno de estrellas, pero todavía no, andaban llevándolo sin fin en la penumbra roja, tironeándolo brutalmente, y él no quería, pero cómo impedirlo si le habían arrancado el amuleto que era su verdadero corazón, el centro de la vida.\n" +
                "\n" +
                "Salió de un brinco a la noche del hospital, al alto cielo raso dulce, a la sombra blanda que lo rodeaba. Pensó que debía haber gritado, pero sus vecinos dormían callados. En la mesa de noche, la botella de agua tenía algo de burbuja, de imagen traslúcida contra la sombra azulada de los ventanales. Jadeó buscando el alivio de los pulmones, el olvido de esas imágenes que seguían pegadas a sus párpados. Cada vez que cerraba los ojos las veía formarse instantáneamente, y se enderezaba aterrado pero gozando a la vez del saber que ahora estaba despierto, que la vigilia lo protegía, que pronto iba a amanecer, con el buen sueño profundo que se tiene a esa hora, sin imágenes, sin nada… Le costaba mantener los ojos abiertos, la modorra era más fuerte que él. Hizo un último esfuerzo, con la mano sana esbozó un gesto hacia la botella de agua; no llegó a tomarla, sus dedos se cerraron en un vacío otra vez negro, y el pasadizo seguía interminable, roca tras roca, con súbitas fulguraciones rojizas, y él boca arriba gimió apagadamente porque el techo iba a acabarse, subía, abriéndose como una boca de sombra, y los acólitos se enderezaban y de la altura una luna menguante le cayó en la cara donde los ojos no querían verla, desesperadamente se cerraban y abrían buscando pasar al otro lado, descubrir de nuevo el cielo raso protector de la sala. Y cada vez que se abrían era la noche y la luna mientras lo subían por la escalinata, ahora con la cabeza colgando hacia abajo, y en lo alto estaban las hogueras, las rojas columnas de rojo perfumado, y de golpe vio la piedra roja, brillante de sangre que chorreaba, y el vaivén de los pies del sacrificado, que arrastraban para tirarlo rodando por las escalinatas del norte. Con una última esperanza apretó los párpados, gimiendo por despertar. Durante un segundo creyó que lo lograría, porque estaba otra vez inmóvil en la cama, a salvo del balanceo cabeza abajo. Pero olía a muerte y cuando abrió los ojos vio la figura ensangrentada del sacrificador que venía hacia él con el cuchillo de piedra en la mano. Alcanzó a cerrar otra vez los párpados, aunque ahora sabía que no iba a despertarse, que estaba despierto, que el sueño maravilloso había sido el otro, absurdo como todos los sueños; un sueño en el que había andado por extrañas avenidas de una ciudad asombrosa, con luces verdes y rojas que ardían sin llama ni humo, con un enorme insecto de metal que zumbaba bajo sus piernas. En la mentira infinita de ese sueño también lo habían alzado del suelo, también alguien se le había acercado con un cuchillo en la mano, a él tendido boca arriba, a él boca arriba con los ojos cerrados entre las hogueras.",
        },

        {
            photo: "/img/necklace.png",
            title: "The Necklace",
            titlesearch: "the necklace",
            author: "admin",
            description: "A woman who craved wealth loses a borrowed diamond necklace at a ball.",
            category: "Humor",
            language: "Inglés",
            content: "The girl was one of those pretty and charming young creatures who sometimes are born, as if by a slip of fate, into a family of clerks. She had no dowry, no expectations, no way of being known, understood, loved, married by any rich and distinguished man; so she let herself be married to a little clerk of the Ministry of Public Instruction.\n" +
                "\n" +
                "She dressed plainly because she could not dress well, but she was unhappy as if she had really fallen from a higher station; since with women there is neither caste nor rank, for beauty, grace and charm take the place of family and birth. Natural ingenuity, instinct for what is elegant, a supple mind are their sole hierarchy, and often make of women of the people the equals of the very greatest ladies.\n" +
                "\n" +
                "Mathilde suffered ceaselessly, feeling herself born to enjoy all delicacies and all luxuries. She was distressed at the poverty of her dwelling, at the bareness of the walls, at the shabby chairs, the ugliness of the curtains. All those things, of which another woman of her rank would never even have been conscious, tortured her and made her angry. The sight of the little Breton peasant who did her humble housework aroused in her despairing regrets and bewildering dreams. She thought of silent antechambers hung with Oriental tapestry, illumined by tall bronze candelabra, and of two great footmen in knee breeches who sleep in the big armchairs, made drowsy by the oppressive heat of the stove. She thought of long reception halls hung with ancient silk, of the dainty cabinets containing priceless curiosities and of the little coquettish perfumed reception rooms made for chatting at five o'clock with intimate friends, with men famous and sought after, whom all women envy and whose attention they all desire.\n" +
                "\n" +
                "When she sat down to dinner, before the round table covered with a tablecloth in use three days, opposite her husband, who uncovered the soup tureen and declared with a delighted air, \"Ah, the good soup! I don't know anything better than that,\" she thought of dainty dinners, of shining silverware, of tapestry that peopled the walls with ancient personages and with strange birds flying in the midst of a fairy forest; and she thought of delicious dishes served on marvellous plates and of the whispered gallantries to which you listen with a sphinxlike smile while you are eating the pink meat of a trout or the wings of a quail.\n" +
                "\n" +
                "She had no gowns, no jewels, nothing. And she loved nothing but that. She felt made for that. She would have liked so much to please, to be envied, to be charming, to be sought after.\n" +
                "\n" +
                "She had a friend, a former schoolmate at the convent, who was rich, and whom she did not like to go to see any more because she felt so sad when she came home.\n" +
                "\n" +
                "But one evening her husband reached home with a triumphant air and holding a large envelope in his hand.\n" +
                "\n" +
                "\"There,\" said he, \"there is something for you.\"\n" +
                "\n" +
                "She tore the paper quickly and drew out a printed card which bore these words:\n" +
                "\n" +
                "The Minister of Public Instruction and Madame Georges Ramponneau request the honor of M. and Madame Loisel's company at the palace of the Ministry on Monday evening, January 18th.\n" +
                "\n" +
                "Instead of being delighted, as her husband had hoped, she threw the invitation on the table crossly, muttering:\n" +
                "\n" +
                "\"What do you wish me to do with that?\"\n" +
                "\n" +
                "\"Why, my dear, I thought you would be glad. You never go out, and this is such a fine opportunity. I had great trouble to get it. Every one wants to go; it is very select, and they are not giving many invitations to clerks. The whole official world will be there.\"\n" +
                "\n" +
                "She looked at him with an irritated glance and said impatiently:\n" +
                "\n" +
                "\"And what do you wish me to put on my back?\"\n" +
                "\n" +
                "He had not thought of that. He stammered:\n" +
                "\n" +
                "\"Why, the gown you go to the theatre in. It looks very well to me.\"\n" +
                "\n" +
                "He stopped, distracted, seeing that his wife was weeping. Two great tears ran slowly from the corners of her eyes toward the corners of her mouth.\n" +
                "\n" +
                "\"What's the matter? What's the matter?\" he answered.\n" +
                "\n" +
                "By a violent effort she conquered her grief and replied in a calm voice, while she wiped her wet cheeks:\n" +
                "\n" +
                "\"Nothing. Only I have no gown, and, therefore, I can't go to this ball. Give your card to some colleague whose wife is better equipped than I am.\"\n" +
                "\n" +
                "He was in despair. He resumed:\n" +
                "\n" +
                "\"Come, let us see, Mathilde. How much would it cost, a suitable gown, which you could use on other occasions--something very simple?\"\n" +
                "\n" +
                "She reflected several seconds, making her calculations and wondering also what sum she could ask without drawing on herself an immediate refusal and a frightened exclamation from the economical clerk.\n" +
                "\n" +
                "Finally she replied hesitating:\n" +
                "\n" +
                "\"I don't know exactly, but I think I could manage it with four hundred francs.\"\n" +
                "\n" +
                "He grew a little pale, because he was laying aside just that amount to buy a gun and treat himself to a little shooting next summer on the plain of Nanterre, with several friends who went to shoot larks there of a Sunday.\n" +
                "\n" +
                "But he said:\n" +
                "\n" +
                "\"Very well. I will give you four hundred francs. And try to have a pretty gown.\"\n" +
                "\n" +
                "The day of the ball drew near and Madame Loisel seemed sad, uneasy, anxious. Her frock was ready, however. Her husband said to her one evening:\n" +
                "\n" +
                "\"What is the matter? Come, you have seemed very queer these last three days.\"\n" +
                "\n" +
                "And she answered:\n" +
                "\n" +
                "\"It annoys me not to have a single piece of jewelry, not a single ornament, nothing to put on. I shall look poverty-stricken. I would almost rather not go at all.\"\n" +
                "\n" +
                "\"You might wear natural flowers,\" said her husband. \"They're very stylish at this time of year. For ten francs you can get two or three magnificent roses.\"\n" +
                "\n" +
                "She was not convinced.\n" +
                "\n" +
                "\"No; there's nothing more humiliating than to look poor among other women who are rich.\"\n" +
                "\n" +
                "\"How stupid you are!\" her husband cried. \"Go look up your friend, Madame Forestier, and ask her to lend you some jewels. You're intimate enough with her to do that.\"\n" +
                "\n" +
                "She uttered a cry of joy:\n" +
                "\n" +
                "\"True! I never thought of it.\"\n" +
                "\n" +
                "The next day she went to her friend and told her of her distress.\n" +
                "\n" +
                "Madame Forestier went to a wardrobe with a mirror, took out a large jewel box, brought it back, opened it and said to Madame Loisel:\n" +
                "\n" +
                "\"Choose, my dear.\"\n" +
                "\n" +
                "She saw first some bracelets, then a pearl necklace, then a Venetian gold cross set with precious stones, of admirable workmanship. She tried on the ornaments before the mirror, hesitated and could not make up her mind to part with them, to give them back. She kept asking:\n" +
                "\n" +
                "\"Haven't you any more?\"\n" +
                "\n" +
                "\"Why, yes. Look further; I don't know what you like.\"\n" +
                "\n" +
                "Suddenly she discovered, in a black satin box, a superb diamond necklace, and her heart throbbed with an immoderate desire. Her hands trembled as she took it. She fastened it round her throat, outside her high-necked waist, and was lost in ecstasy at her reflection in the mirror.\n" +
                "\n" +
                "Then she asked, hesitating, filled with anxious doubt:\n" +
                "\n" +
                "\"Will you lend me this, only this?\"\n" +
                "\n" +
                "\"Why, yes, certainly.\"\n" +
                "\n" +
                "She threw her arms round her friend's neck, kissed her passionately, then fled with her treasure.\n" +
                "\n" +
                "The night of the ball arrived. Madame Loisel was a great success. She was prettier than any other woman present, elegant, graceful, smiling and wild with joy. All the men looked at her, asked her name, sought to be introduced. All the attaches of the Cabinet wished to waltz with her. She was remarked by the minister himself.\n" +
                "\n" +
                "She danced with rapture, with passion, intoxicated by pleasure, forgetting all in the triumph of her beauty, in the glory of her success, in a sort of cloud of happiness comprised of all this homage, admiration, these awakened desires and of that sense of triumph which is so sweet to woman's heart.\n" +
                "\n" +
                "She left the ball about four o'clock in the morning. Her husband had been sleeping since midnight in a little deserted anteroom with three other gentlemen whose wives were enjoying the ball.\n" +
                "\n" +
                "He threw over her shoulders the wraps he had brought, the modest wraps of common life, the poverty of which contrasted with the elegance of the ball dress. She felt this and wished to escape so as not to be remarked by the other women, who were enveloping themselves in costly furs.\n" +
                "\n" +
                "Loisel held her back, saying: \"Wait a bit. You will catch cold outside. I will call a cab.\"\n" +
                "\n" +
                "But she did not listen to him and rapidly descended the stairs. When they reached the street they could not find a carriage and began to look for one, shouting after the cabmen passing at a distance.\n" +
                "\n" +
                "They went toward the Seine in despair, shivering with cold. At last they found on the quay one of those ancient night cabs which, as though they were ashamed to show their shabbiness during the day, are never seen round Paris until after dark.\n" +
                "\n" +
                "It took them to their dwelling in the Rue des Martyrs, and sadly they mounted the stairs to their flat. All was ended for her. As to him, he reflected that he must be at the ministry at ten o'clock that morning.\n" +
                "\n" +
                "She removed her wraps before the glass so as to see herself once more in all her glory. But suddenly she uttered a cry. She no longer had the necklace around her neck!\n" +
                "\n" +
                "\"What is the matter with you?\" demanded her husband, already half undressed.\n" +
                "\n" +
                "She turned distractedly toward him.\n" +
                "\n" +
                "\"I have--I have--I've lost Madame Forestier's necklace,\" she cried.\n" +
                "\n" +
                "He stood up, bewildered.\n" +
                "\n" +
                "\"What!--how? Impossible!\"\n" +
                "\n" +
                "They looked among the folds of her skirt, of her cloak, in her pockets, everywhere, but did not find it.\n" +
                "\n" +
                "\"You're sure you had it on when you left the ball?\" he asked.\n" +
                "\n" +
                "\"Yes, I felt it in the vestibule of the minister's house.\"\n" +
                "\n" +
                "\"But if you had lost it in the street we should have heard it fall. It must be in the cab.\"\n" +
                "\n" +
                "\"Yes, probably. Did you take his number?\"\n" +
                "\n" +
                "\"No. And you--didn't you notice it?\"\n" +
                "\n" +
                "\"No.\"\n" +
                "\n" +
                "They looked, thunderstruck, at each other. At last Loisel put on his clothes.\n" +
                "\n" +
                "\"I shall go back on foot,\" said he, \"over the whole route, to see whether I can find it.\"\n" +
                "\n" +
                "He went out. She sat waiting on a chair in her ball dress, without strength to go to bed, overwhelmed, without any fire, without a thought.\n" +
                "\n" +
                "Her husband returned about seven o'clock. He had found nothing.\n" +
                "\n" +
                "He went to police headquarters, to the newspaper offices to offer a reward; he went to the cab companies--everywhere, in fact, whither he was urged by the least spark of hope.\n" +
                "\n" +
                "She waited all day, in the same condition of mad fear before this terrible calamity.\n" +
                "\n" +
                "Loisel returned at night with a hollow, pale face. He had discovered nothing.\n" +
                "\n" +
                "\"You must write to your friend,\" said he, \"that you have broken the clasp of her necklace and that you are having it mended. That will give us time to turn round.\"\n" +
                "\n" +
                "She wrote at his dictation.\n" +
                "\n" +
                "At the end of a week they had lost all hope. Loisel, who had aged five years, declared:\n" +
                "\n" +
                "\"We must consider how to replace that ornament.\"\n" +
                "\n" +
                "The next day they took the box that had contained it and went to the jeweler whose name was found within. He consulted his books.\n" +
                "\n" +
                "\"It was not I, madame, who sold that necklace; I must simply have furnished the case.\"\n" +
                "\n" +
                "Then they went from jeweler to jeweler, searching for a necklace like the other, trying to recall it, both sick with chagrin and grief.\n" +
                "\n" +
                "They found, in a shop at the Palais Royal, a string of diamonds that seemed to them exactly like the one they had lost. It was worth forty thousand francs. They could have it for thirty-six.\n" +
                "\n" +
                "So they begged the jeweler not to sell it for three days yet. And they made a bargain that he should buy it back for thirty-four thousand francs, in case they should find the lost necklace before the end of February.\n" +
                "\n" +
                "Loisel possessed eighteen thousand francs which his father had left him. He would borrow the rest.\n" +
                "\n" +
                "He did borrow, asking a thousand francs of one, five hundred of another, five louis here, three louis there. He gave notes, took up ruinous obligations, dealt with usurers and all the race of lenders. He compromised all the rest of his life, risked signing a note without even knowing whether he could meet it; and, frightened by the trouble yet to come, by the black misery that was about to fall upon him, by the prospect of all the physical privations and moral tortures that he was to suffer, he went to get the new necklace, laying upon the jeweler's counter thirty-six thousand francs.\n" +
                "\n" +
                "When Madame Loisel took back the necklace Madame Forestier said to her with a chilly manner:\n" +
                "\n" +
                "\"You should have returned it sooner; I might have needed it.\"\n" +
                "\n" +
                "She did not open the case, as her friend had so much feared. If she had detected the substitution, what would she have thought, what would she have said? Would she not have taken Madame Loisel for a thief?\n" +
                "\n" +
                "Thereafter Madame Loisel knew the horrible existence of the needy. She bore her part, however, with sudden heroism. That dreadful debt must be paid. She would pay it. They dismissed their servant; they changed their lodgings; they rented a garret under the roof.\n" +
                "\n" +
                "She came to know what heavy housework meant and the odious cares of the kitchen. She washed the dishes, using her dainty fingers and rosy nails on greasy pots and pans. She washed the soiled linen, the shirts and the dishcloths, which she dried upon a line; she carried the slops down to the street every morning and carried up the water, stopping for breath at every landing. And dressed like a woman of the people, she went to the fruiterer, the grocer, the butcher, a basket on her arm, bargaining, meeting with impertinence, defending her miserable money, sou by sou.\n" +
                "\n" +
                "Every month they had to meet some notes, renew others, obtain more time.\n" +
                "\n" +
                "Her husband worked evenings, making up a tradesman's accounts, and late at night he often copied manuscript for five sous a page.\n" +
                "\n" +
                "This life lasted ten years.\n" +
                "\n" +
                "At the end of ten years they had paid everything, everything, with the rates of usury and the accumulations of the compound interest.\n" +
                "\n" +
                "Madame Loisel looked old now. She had become the woman of impoverished households--strong and hard and rough. With frowsy hair, skirts askew and red hands, she talked loud while washing the floor with great swishes of water. But sometimes, when her husband was at the office, she sat down near the window and she thought of that gay evening of long ago, of that ball where she had been so beautiful and so admired.\n" +
                "\n" +
                "What would have happened if she had not lost that necklace? Who knows? who knows? How strange and changeful is life! How small a thing is needed to make or ruin us!\n" +
                "\n" +
                "But one Sunday, having gone to take a walk in the Champs Elysees to refresh herself after the labors of the week, she suddenly perceived a woman who was leading a child. It was Madame Forestier, still young, still beautiful, still charming.\n" +
                "\n" +
                "Madame Loisel felt moved. Should she speak to her? Yes, certainly. And now that she had paid, she would tell her all about it. Why not?\n" +
                "\n" +
                "She went up.\n" +
                "\n" +
                "\"Good-day, Jeanne.\"\n" +
                "\n" +
                "The other, astonished to be familiarly addressed by this plain good-wife, did not recognize her at all and stammered:\n" +
                "\n" +
                "\"But--madame!--I do not know--You must have mistaken.\"\n" +
                "\n" +
                "\"No. I am Mathilde Loisel.\"\n" +
                "\n" +
                "Her friend uttered a cry.\n" +
                "\n" +
                "\"Oh, my poor Mathilde! How you are changed!\"\n" +
                "\n" +
                "\"Yes, I have had a pretty hard life, since I last saw you, and great poverty--and that because of you!\"\n" +
                "\n" +
                "\"Of me! How so?\"\n" +
                "\n" +
                "\"Do you remember that diamond necklace you lent me to wear at the ministerial ball?\"\n" +
                "\n" +
                "\"Yes. Well?\"\n" +
                "\n" +
                "\"Well, I lost it.\"\n" +
                "\n" +
                "\"What do you mean? You brought it back.\"\n" +
                "\n" +
                "\"I brought you back another exactly like it. And it has taken us ten years to pay for it. You can understand that it was not easy for us, for us who had nothing. At last it is ended, and I am very glad.\"\n" +
                "\n" +
                "Madame Forestier had stopped.\n" +
                "\n" +
                "\"You say that you bought a necklace of diamonds to replace mine?\"\n" +
                "\n" +
                "\"Yes. You never noticed it, then! They were very similar.\"\n" +
                "\n" +
                "And she smiled with a joy that was at once proud and ingenuous.\n" +
                "\n" +
                "Madame Forestier, deeply moved, took her hands.\n" +
                "\n" +
                "\"Oh, my poor Mathilde! Why, my necklace was paste! It was worth at most only five hundred francs!\"",
        },

        {
            photo: "/img/moscas.png",
            title: "Las moscas",
            titlesearch: "las moscas",
            author: "admin",
            description: "Los últimos instantes de un hombre que sabe que morirá solo en la selva.",
            category: "Misterio",
            language: "Español",
            content: "Al rozar el monte, los hombres tumbaron el año anterior este árbol, cuyo tronco yace en toda su extensión aplastado contra el suelo. Mientras sus compañeros han perdido gran parte de la corteza en el incendio del rozado, aquél conserva la suya casi intacta. Apenas si a todo lo largo una franja carbonizada habla muy claro de la acción del fuego.\n" +
                "\n" +
                "Esto era el invierno pasado. Han transcurrido cuatro meses. En medio del rozado perdido por la sequía, el árbol tronchado yace siempre en un páramo de cenizas. Sentado contra el tronco, el dorso apoyado en él, me hallo también inmóvil. En algún punto de la espalda tengo la columna vertebral rota. He caído allí mismo, después de tropezar sin suerte contra un raigón. Tal como he caído, permanezco sentado -quebrado, mejor dicho- contra el árbol.\n" +
                "\n" +
                "Desde hace un instante siento un zumbido fijo -el zumbido de la lesión medular- que lo inunda todo, y en el que mi aliento parece defluirse. No puedo ya mover las manos, y apenas uno que otro dedo alcanza a remover la ceniza.\n" +
                "\n" +
                "Clarísima y capital, adquiero desde este instante mismo la certidumbre de que a ras del suelo mi vida está aguardando la instantaneidad de unos segundos para extinguirse de una vez.\n" +
                "\n" +
                "Esta es la verdad. Como ella, jamás se ha presentado a mi mente una más rotunda. Todas las otras flotan, danzan en una como reverberación lejanísima de otro yo, en un pasado que tampoco me pertenece. La única percepción de mi existir, pero flagrante como un gran golpe asestado en silencio, es que de aquí a un instante voy a morir.\n" +
                "\n" +
                "¿Pero cuándo? ¿Qué segundos y qué instantes son éstos en que esta exasperada conciencia de vivir todavía dejará paso a un sosegado cadáver?\n" +
                "\n" +
                "Nadie se acerca en este rozado: ningún pique de monte lleva hasta él desde propiedad alguna. Para el hombre allí sentado, como para el tronco que lo sostiene, las lluvias se sucederán mojando corteza y ropa, y los soles secarán líquenes y cabellos, hasta que el monte rebrote y unifique árboles y potasa, huesos y cuero de calzado.\n" +
                "\n" +
                "¡Y nada, nada en la serenidad del ambiente que denuncie y grite tal acontecimiento! Antes bien, a través de los troncos y negros gajos del rozado, desde aquí o allá, sea cual fuere el punto de observación, cualquiera puede contemplar con perfecta nitidez al hombre cuya vida está a punto de detenerse sobre la ceniza, atraída como un péndulo por ingente gravedad: tan pequeño es el lugar que ocupa en el rozado y tan clara su situación: se muere.\n" +
                "\n" +
                "Esta es la verdad. Mas para la oscura animalidad resistente, para el latir y el alentar amenazados de muerte, ¿qué vale ella ante la bárbara inquietud del instante preciso en que este resistir de la vida y esta tremenda tortura psicológica estallarán como un cohete, dejando por todo residuo un ex hombre con el rostro fijo para siempre adelante?\n" +
                "\n" +
                "El zumbido aumenta cada vez más. Ciérnese ahora sobre mis ojos un velo de densa tiniebla en que se destacan rombos verdes. Y en seguida veo la puerta amurallada de un zoco marroquí, por una de cuyas hojas sale a escape una tropilla de potros blancos, mientras por la otra entra corriendo una teoría de hombres decapitados.\n" +
                "\n" +
                "Quiero cerrar los ojos, y no lo consigo ya. Veo ahora un cuartito de hospital, donde cuatro médicos amigos se empeñan en convencerme de que no voy a morir. Yo los observo en silencio, y ellos se echan a reír, pues siguen mi pensamiento.\n" +
                "\n" +
                "-Entonces -dice uno de aquéllos -no le queda más prueba de convicción que la jaulita de moscas. Yo tengo una.\n" +
                "\n" +
                "-¿Moscas?…\n" +
                "\n" +
                "-Sí -responde-, moscas verdes de rastreo. Usted no ignora que las moscas verdes olfatean la descomposición de la carne mucho antes de producirse la defunción del sujeto. Vivo aún el paciente, ellas acuden, seguras de su presa. Vuelan sobre ella sin prisa mas sin perderla de vista, pues ya han olido su muerte. Es el medio más eficaz de pronóstico que se conozca. Por eso yo tengo algunas de olfato afinadísimo por la selección, que alquilo a precio módico. Donde ellas entran, presa segura. Puedo colocarlas en el corredor cuando usted quede solo, y abrir la puerta de la jaulita que, dicho sea de paso, es un pequeño ataúd. A usted no le queda más tarea que atisbar el ojo de la cerradura. Si una mosca entra y la oye usted zumbar, esté seguro de que las otras hallarán también el camino hasta usted. Las alquilo a precio módico.\n" +
                "\n" +
                "¿Hospital…? Súbitamente el cuartito blanqueado, el botiquín, los médicos y su risa se desvanecen en un zumbido…\n" +
                "\n" +
                "Y bruscamente, también, se hace en mí la revelación. ¡Las moscas!\n" +
                "\n" +
                "Son ellas las que zumban. Desde que he caído han acudido sin demora. Amodorradas en el monte por el ámbito de fuego, las moscas han tenido, no sé cómo, conocimiento de una presa segura en la vecindad. Han olido ya la próxima descomposición del hombre sentado, por caracteres inapreciables para nosotros, tal vez en la exhalación a través de la carne de la médula espinal cortada. Han acudido sin demora y revolotean sin prisa, midiendo con los ojos las proporciones del nido que la suerte acaba de deparar a sus huevos.\n" +
                "\n" +
                "El médico tenía razón. No puede ser su oficio más lucrativo.\n" +
                "\n" +
                "Mas he aquí que esta ansia desesperada de resistir se aplaca y cede el paso a una beata imponderabilidad. No me siento ya un punto fijo en la tierra, arraigado a ella por gravísima tortura. Siento que fluye de mí como la vida misma, la ligereza del vaho ambiente, la luz del sol, la fecundidad de la hora. Libre del espacio y el tiempo, puedo ir aquí, allá, a este árbol, a aquella liana. Puedo ver, lejanísimo ya, como un recuerdo de remoto existir, puedo todavía ver, al pie de un tronco, un muñeco de ojos sin parpadeo, un espantapájaros de mirar vidrioso y piernas rígidas. Del seno de esta expansión, que el sol dilata desmenuzando mi conciencia en un billón de partículas, puedo alzarme y volar, volar…\n" +
                "\n" +
                "Y vuelo, y me poso con mis compañeras sobre el tronco caído, a los rayos del sol que prestan su fuego a nuestra obra de renovación vital.",
        },

        {
            photo: "/img/bomb.png",
            title: "The Bomb",
            titlesearch: "the bomb",
            author: "admin",
            description: "What would you do if a bomb just appeared in the middle of your dining room one day?",
            category: "Poesía",
            language: "Inglés",
            content: "I’ve been tiptoeing around a bomb for some time.\n" +
                "\n" +
                "It just appeared in the middle of my dining room one day.\n" +
                "\n" +
                "I’m not sure if I know how to deactivate it, so I just leave it alone.\n" +
                "\n" +
                "It’s an imminent reminder of destruction,\n" +
                "\n" +
                "it doesn’t let me sleep at night.\n" +
                "\n" +
                "I can hear it ticking;\n" +
                "\n" +
                "tick;\n" +
                "\n" +
                "...\n" +
                "\n" +
                "tock;\n" +
                "\n" +
                "....\n" +
                "\n" +
                "tick;\n" +
                "\n" +
                "...\n" +
                "\n" +
                "I have tried moving it, maybe I can avoid its blast.\n" +
                "\n" +
                "I’ll watch out!\n" +
                "\n" +
                "I’ll stay safe.\n" +
                "\n" +
                "But it won’t budge.\n" +
                "\n" +
                "It’s too heavy for me.\n" +
                "\n" +
                "It’d be too heavy for anyone.\n" +
                "\n" +
                "And, God, I wish it wasn’t so hard. \n" +
                "\n" +
                "I wish I could forget it was there,\n" +
                "\n" +
                "maybe I could avoid it forever.\n" +
                "\n" +
                "But all bombs are bound to explode.\n" +
                "\n" +
                "That’s what they’re meant to do.\n" +
                "\n" +
                "I can’t convince it or myself otherwise.\n" +
                "\n" +
                "\n" +
                "\n" +
                "I think I’ve found the right combination to deactivate it.\n" +
                "\n" +
                "But I’m scared.\n" +
                "\n" +
                "It might not work.\n" +
                "\n" +
                "It might kill me.\n" +
                "\n" +
                "Or it might be just what was needed.\n" +
                "\n" +
                "It might be what I should have done from the beginning,\n" +
                "\n" +
                "and I would’ve spared myself the agony of omitting it.\n" +
                "\n" +
                "I would’ve slept more peacefully,\n" +
                "\n" +
                "or at least, died trying to set things right.\n" +
                "\n" +
                "\n" +
                "\n" +
                "But I’m a coward.\n" +
                "\n" +
                "And I can’t do it.\n" +
                "\n" +
                "I can’t touch it.\n" +
                "\n" +
                "I don’t even want to see it.\n" +
                "\n" +
                "What if I do something that makes everything worse?\n" +
                "\n" +
                "Imagine if it’d tick in a quicker pace.\n" +
                "\n" +
                "I’d be living in hell. \n" +
                "\n" +
                "I won’t try.\n" +
                "\n" +
                "\n" +
                "\n" +
                "No, I have to.\n" +
                "\n" +
                "I have to try.\n" +
                "\n" +
                "Come on, I should be able to do this.\n" +
                "\n" +
                "I have to.\n" +
                "\n" +
                "I have to.\n" +
                "\n" +
                "I...\n" +
                "\n" +
                "I did it!\n" +
                "\n" +
                "My hands were trembling, my eyes were shut.\n" +
                "\n" +
                "But I did it.\n" +
                "\n" +
                "That wasn’t that hard, was it?\n" +
                "\n" +
                "It’s over.\n" +
                "\n" +
                "Oh, God, it’s finally all over.\n" +
                "\n" +
                "\n" +
                "\n" +
                "But wait.\n" +
                "\n" +
                "What do I do with it now?\n" +
                "\n" +
                "It’s still too heavy.\n" +
                "\n" +
                "I...\n" +
                "\n" +
                "I can’t move it.\n" +
                "\n" +
                "And, what is that smell?\n" +
                "\n" +
                "I have to get out of here.\n" +
                "\n" +
                "It’s-\n" +
                "\n" +
                "It’s too strong.\n" +
                "\n" +
                "Like a mixture of rotten eggs and oxidized metal.\n" +
                "\n" +
                "I need to leave.\n" +
                "\n" +
                "This will be a problem for someone else to fix. \n" +
                "\n" +
                "I’ve done most of the work here.\n" +
                "\n" +
                "I can’t keep doing this.\n" +
                "\n" +
                "I have to leave.\n" +
                "\n" +
                "\n" +
                "\n" +
                "Hold on. \n" +
                "\n" +
                "What if I cover it with something?\n" +
                "\n" +
                "Will perfume diffuse it’s scent?\n" +
                "\n" +
                "I should at least try.\n" +
                "\n" +
                "Have I come this far to quit now?\n" +
                "\n" +
                "No, no, no.\n" +
                "\n" +
                "I have to keep trying.\n" +
                "\n" +
                "I can’t give up.\n" +
                "\n" +
                "Let me get some things.\n" +
                "\n" +
                "Hold on.\n" +
                "\n" +
                "\n" +
                "\n" +
                "The blankets draped over its corpse contain most of the stench.\n" +
                "\n" +
                "The perfume mixes with the remaining bits of chaos in the atmosphere, cheating you to believe it’s not rotten inside.\n" +
                "\n" +
                "It still stinks.\n" +
                "\n" +
                "But it’s not that bad anymore.\n" +
                "\n" +
                "Maybe it’s all done now.\n" +
                "\n" +
                "I can finally rest.\n" +
                "\n" +
                "\n" +
                "\n" +
                "But wait.\n" +
                "\n" +
                "This shit still takes up most of the space in my apartment.\n" +
                "\n" +
                "Perhaps I can force myself to forget it’s there.\n" +
                "\n" +
                "After all, it can’t harm me anymore.\n" +
                "\n" +
                "Though... it’ll always remind me I have failed.\n" +
                "\n" +
                "I...\n" +
                "\n" +
                "\n" +
                "\n" +
                "I should just move out.\n" +
                "\n" +
                "I give up.\n" +
                "\n" +
                "Dear bomb, you’ve won.",
        }

    ];

    await Libros.insertMany(initLibros)
}
Promise.all([

    initDB()

]).then(process.exit);


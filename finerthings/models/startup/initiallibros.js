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
            title: "Sobre la chica 100% perfecta",
            titlesearch: "sobre la chica 100% perfecta",
            author: "admin",
            description: "A veces solo hace falta estar en el momento correcto en el lugar correcto.",
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


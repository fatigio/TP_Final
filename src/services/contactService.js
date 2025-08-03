const contacts = [
    {
        id: 1,
        name: 'Harry Potter',
        description: 'No busco líos... los líos me encuentran',
        avatar: '/images/harry-potter.jpg',
        last_connection: 'Última conexión hoy a las 10:12',
        connection_status: 'offline',
        last_message_time: '9:20',
        messages: [
            {
                emisor: 'Usuario',
                hora: '9:15',
                texto: 'Hola Harry, ¿cómo te va con las clases?',
                status: 'visto',
                id: 1
            },
            {
                emisor: 'Harry',
                hora: '9:16',
                texto: 'Bien, bastante normal. Las cosas en Hogwarts suelen ser complicadas, pero trato de llevarlo tranquilo.',
                status: 'visto',
                id: 2
            },
            {
                emisor: 'Usuario',
                hora: '9:17',
                texto: '¿Y qué hacés cuando no estás en clase?',
                status: 'visto',
                id: 3
            },
            {
                emisor: 'Harry',
                hora: '9:18',
                texto: 'Suelo practicar un poco de Quidditch o pasar tiempo con Ron y Hermione. Es bueno desconectarse un rato.',
                status: 'visto',
                id: 4
            },
            {
                emisor: 'Usuario',
                hora: '9:20',
                texto: 'Suena bien, un poco de descanso ayuda siempre.',
                status: 'visto',
                id: 5
            },
            {
                emisor: 'Harry',
                hora: '9:21',
                texto: 'Sí, y más con todo lo que pasa por acá.',
                status: 'visto',
                id: 6
            }
        ]
    },
    {
        id: 2,
        name: 'Hermione Granger',
        description: 'El conocimiento es el arma más poderosa que podemos poseer',
        avatar: '/images/hermione-granger.jpg',
        last_connection: 'En línea',
        connection_status: 'online',
        last_message_time: 'Ayer',
        messages: [
            {
                emisor: 'Usuario',
                hora: '15:40',
                texto: 'Hola Hermione, te veo siempre muy concentrada con los libros.',
                status: 'visto',
                id: 1
            },
            {
                emisor: 'Hermione',
                hora: '15:42',
                texto: 'Sí, me gusta mantenerme al día con todo lo que aprendemos. Creo que es importante aprovechar el tiempo.',
                status: 'visto',
                id: 2
            },
            {
                emisor: 'Usuario',
                hora: '15:43',
                texto: 'Seguro que eso te ayuda mucho.',
                status: 'visto',
                id: 3
            },
            {
                emisor: 'Hermione',
                hora: '15:44',
                texto: 'Sí, y también trato de ayudar a los demás cuando puedo, especialmente con las materias que se les dificultan.',
                status: 'visto',
                id: 4
            },
            {
                emisor: 'Usuario',
                hora: '15:46',
                texto: 'Muy solidaria, eso está bueno.',
                status: 'visto',
                id: 5
            },
            {
                emisor: 'Hermione',
                hora: '15:47',
                texto: 'Trato de hacer lo correcto.',
                status: 'no-visto',
                id: 6
            }
        ]
    },
    {
        id: 3,
            name: 'Ron Weasley',
            description: 'Me quedé sin lechuzas. Manden carta normal',
            avatar: '/images/ron-weasley.jpg',
            last_connection: 'Última conexión hoy a las 11:38',
            connection_status: 'offline',
            last_message_time: '19:10',
            messages: [
                {
                    emisor: 'Usuario',
                    hora: '19:05',
                    texto: ' ¿Qué onda, Ron? ¿Ya cenaste?',
                    status: 'visto',
                    id: 1
                },
                {
                    emisor: 'Ron',
                    hora: '19:06',
                    texto: 'Sí, justo ahora. Estaba muerto de hambre después de jugar un rato de ajedrez mágico con Harry.',
                    status: 'visto',
                    id: 2
                },
                {
                    emisor: 'Usuario',
                    hora: '19:08',
                    texto: '¿Y quién ganó?',
                    status: 'visto',
                    id: 3
                },
                {
                    emisor: 'Ron',
                    hora: '19:09',
                    texto: 'Él, claro, pero no pienso rendirme tan fácil.',
                    status: 'visto',
                    id: 4
                },
                {
                    emisor: 'Usuario',
                    hora: '19:10',
                    texto: 'Eso está bueno, el espíritu competitivo.',
                    status: 'no-visto',
                    id: 5
                }
            ]
    },
    {
        id: 4,
        name: 'Draco Malfoy',
        description: 'No necesito tu aprobación, soy un Malfoy',
        avatar: '/images/draco-malfoy.jpg',
        last_connection: 'Última conexión hoy a las 14:09',
        connection_status: 'offline',
        last_message_time: 'jueves',
        messages: [
            {
                emisor: 'Usuario',
                hora: '11:30',
                texto: 'Draco, ¿qué tal está todo en Hogwarts?',
                status: 'visto',
                id: 1
            },
            {
                emisor: 'Draco',
                hora: '11:31',
                texto: 'Normal, como siempre. Trato de enfocarme en lo mío y evitar problemas.',
                status: 'visto',
                id: 2
            },
            {
                emisor: 'Usuario',
                hora: '11:33',
                texto: 'Eso suena sensato.',
                status: 'visto',
                id: 3
            },
            {
                emisor: 'Draco',
                hora: '11:34',
                texto: 'Sí, prefiero mantener las cosas bajo control y no perder tiempo en discusiones.',
                status: 'visto',
                id: 4
            },
            {
                emisor: 'Usuario',
                hora: '11:36',
                texto: 'Me parece una buena forma de manejarlo.',
                status: 'visto',
                id: 5
            }
        ]
    },
    {
        id: 5,
        name: 'Hagrid',
        description: 'Nada como un buen té y el canto de Buckbeak',
        avatar: '/images/hagrid.jpg',
        last_connection: 'En línea',
        connection_status: 'online',
        last_message_time: 'Ayer',
        messages: [
            {
                emisor: 'Usuario',
                hora: '18:11',
                texto: 'Buenas tardes, Hagrid, ¿cómo va todo en el bosque?',
                status: 'visto',
                id: 1
            },
            {
                emisor: 'Hagrid',
                hora: '18:12',
                texto: 'Pues, estoy cuidando a unos animales nuevos. Son un poco traviesos, pero muy interesantes.',
                status: 'visto',
                id: 2
            },
            {
                emisor: 'Usuario',
                hora: '18:14',
                texto: 'Seguro que les das mucho cariño.',
                status: 'visto',
                id: 3
            },
            {
                emisor: 'Hagrid',
                hora: '18:15',
                texto: 'Sí, siempre trato de hacer lo mejor por ellos.',
                status: 'visto',
                id: 4
            },
            {
                emisor: 'Usuario',
                hora: '18:16',
                texto: 'Qué bueno, alguien tiene que cuidar de esas criaturas.',
                status: 'visto',
                id: 5
            },
            {
                emisor: 'YO',
                hora: '18:19',
                texto: 'Exacto, es importante.',
                status: 'visto',
                id: 6
            }
        ]
    },
    {
        id: 6,
        name: 'Luna Lovegood',
        description: 'No todos me entienden, y está bien.',
        avatar: '/images/luna-lovegood.jpg',
        last_connection: 'Última conexión hoy a las 10:53',
        connection_status: 'offline',
        last_message_time: '10:15',
        messages: [
            {
                emisor: 'Usuario',
                hora: '10:10',
                texto: 'Hola Luna, ¿qué andás haciendo últimamente?',
                status: 'visto',
                id: 1
            },
            {
                emisor: 'Luna',
                hora: '10:11',
                texto: 'He estado observando algunas criaturas mágicas, es interesante aprender de ellas.',
                status: 'visto',
                id: 2
            },
            {
                emisor: 'Usuario',
                hora: '10:13:',
                texto: 'Eso suena tranquilo.',
                status: 'visto',
                id: 3
            },
            {
                emisor: 'Luna',
                hora: '10:14',
                texto: 'Sí, me gusta pasar tiempo así, en silencio y atenta a los detalles.',
                status: 'visto',
                id: 4
            },
            {
                emisor: 'Usuario',
                hora: '10:15',
                texto: 'Se nota que te gusta la naturaleza.',
                status: 'visto',
                id: 5
            }
        ]
    },
    {
        id: 7,
        name: 'Lord Voldemort',
        description: 'Sin emociones. Sin errores.',
        avatar: '/images/lord-voldemort.jpg',
        last_connection: 'En línea',
        connection_status: 'online',
        last_message_time: '22:05',
        messages: [
            {
                emisor: 'Usuario',
                hora: '22:00',
                texto: 'Señor, ¿cómo están las cosas?',
                status: 'visto',
                id: 1
            },
            {
                emisor: 'Voldemort',
                hora: '22:02',
                texto: 'Todo avanza según lo planeado. La paciencia es clave.',
                status: 'visto',
                id: 2
            },
            {
                emisor: 'Usuario',
                hora: '22:04',
                texto: 'Espero que todo salga bien para usted.',
                status: 'visto',
                id: 3
            },
            {
                emisor: 'Voldemort',
                hora: '22:05',
                texto: 'Confío en que así será.',
                status: 'no-visto',
                id: 4
            }
        ]
    },
    {
        id: 8,
        name: 'Albus Dumbledore',
        description: 'El tiempo es un amigo para quien sabe escuchar.',
        avatar: '/images/albus-dumbledore.jpg',
        last_connection: 'En línea',
        connection_status: 'online',
        last_message_time: '22:05',
        messages: [
            {
                emisor: 'Usuario',
                hora: '7:15',
                texto: 'Buenos días, profesor Dumbledore. ¿Lo desperté muy temprano?',
                status: 'visto',
                id: 1
            },
            {
                emisor: 'Albus Dumbledore',
                hora: '7:16',
                texto: 'Buenos días. No, ya estaba despierto, me gusta disfrutar la tranquilidad de la mañana en el castillo.',
                status: 'visto',
                id: 2
            },
            {
                emisor: 'Usuario',
                hora: '7:17',
                texto: 'Debe ser muy lindo ver amanecer desde su oficina.',
                status: 'visto',
                id: 3
            },
            {
                emisor: 'Albus Dumbledore',
                hora: '7:18',
                texto: 'Es uno de mis momentos favoritos. El sol iluminando las torres de Hogwarts tiene algo… mágico.',
                status: 'visto',
                id: 4
            },
            {
                emisor: 'Usuario',
                hora: '7:19',
                texto: '¿Y tiene algún plan para hoy?',
                status: 'visto',
                id: 5
            },
            {
                emisor: 'Albus Dumbledore',
                hora: '7:21',
                texto: 'Un par de reuniones con los profesores y después dedicaré tiempo a la biblioteca. Siempre hay algo nuevo que aprender.',
                status: 'visto',
                id: 6
            },
            {
                emisor: 'Usuario',
                hora: '7:22',
                texto: 'Eso suena muy relajante.',
                status: 'visto',
                id: 7
            },
            {
                emisor: 'Albus Dumbledore',
                hora: '7:23',
                texto: 'La calma siempre es una buena compañera.',
                status: 'visto',
                id: 8
            }
        ]
    }
]

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for(const contact of contacts){
        if(Number(contact.id) === Number(contact_id)){
            return contact
        }
    }
    return null
}


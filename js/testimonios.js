const testimonios = [
    {
        name: "Juan Pérez",
        text: "Este servicio cambió mi vida, ¡lo recomiendo al 100%!",
        stars: 5,
    },
    {
        name: "María García",
        text: "Excelente atención y resultados increíbles. Volveré pronto.",
        stars: 5,
    },
    {
        name: "Carlos López",
        text: "Muy profesional, resolvieron todas mis dudas rápidamente.",
        stars: 5,
    },
    {
        name: "Ana Torres",
        text: "¡Me encantó! El equipo fue muy atento y amable.",
        stars: 5,
    },
    {
        name: "Luis Fernández",
        text: "Un servicio excepcional y de alta calidad.",
        stars: 5,
    },
    {
        name: "Sofía Ramírez",
        text: "Hubo pequeños retrasos, pero el resultado fue excelente.",
        stars: 5,
    },
    {
        name: "Pedro Castillo",
        text: "Muy satisfecho con el trabajo, definitivamente lo recomiendo.",
        stars: 5,
    },
    {
        name: "Laura Jiménez",
        text: "El precio es justo",
        stars: 5,
    },
    {
        name: "Diego Martínez",
        text: "Me ayudaron mucho, el equipo es muy profesional.",
        stars: 5,
    },
]

function createTestimonials(testimonials) {
    const container = document.getElementById('testimonial')

    testimonials.forEach(({ name, stars, text }) => {

        const testimonialDiv = document.createElement('div')
        testimonialDiv.className = 'testimonial'

        const baseURL = "/LuxeAesthetic/"

        const photoImg = document.createElement('img')
        photoImg.src = `${baseURL}images/user.png`
        photoImg.alt = `${name}'s photo`
        photoImg.className = 'testimonial-photo'

        const nameElement = document.createElement('h3')
        nameElement.textContent = name
        nameElement.className = 'testimonial-name'

        const textElement = document.createElement('p')
        textElement.textContent = text
        textElement.className = 'testimonial-text'


        const starsDiv = document.createElement('div')
        starsDiv.className = 'testimonial-stars'

        for (let i = 0; i < stars; i++) {
            const star = document.createElement('span')
            star.textContent = '★' 
            star.className = 'star'
            starsDiv.appendChild(star)
        }

        testimonialDiv.appendChild(photoImg)
        testimonialDiv.appendChild(nameElement)
        testimonialDiv.appendChild(textElement)
        testimonialDiv.appendChild(starsDiv)

        container.appendChild(testimonialDiv)
    })
}


document.addEventListener('DOMContentLoaded', () => {
    createTestimonials(testimonios)
})



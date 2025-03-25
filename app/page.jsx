export default function HomePage(){
    
    return(
    <div>
        <img src="/images/Logo.png" alt="Logo" className="main-image" />
        <div className="about-us">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una organización dedicada a encontrar hogares amorosos para mascotas necesitadas. 
          Nuestra misión es brindar una segunda oportunidad a estos maravillosos animales, 
          asegurándonos de que encuentren un hogar donde sean amados y cuidados. 
          Creemos firmemente en la importancia de la adopción responsable y trabajamos arduamente 
          para educar a la comunidad sobre los beneficios de adoptar en lugar de comprar mascotas.
          Desde nuestros inicios, hemos ayudado a miles de mascotas a encontrar hogares permanentes. 
          Nuestro equipo está compuesto por voluntarios apasionados y profesionales dedicados que 
          trabajan incansablemente para garantizar el bienestar de cada animal bajo nuestro cuidado. 
          Ofrecemos servicios de adopción, programas de esterilización y castración, y campañas de 
          concienciación para promover la adopción y el cuidado responsable de las mascotas.
          En nuestra organización, cada mascota es tratada con el amor y el respeto que merece. 
          Nos aseguramos de que cada animal reciba atención médica adecuada, una dieta balanceada 
          y mucho cariño mientras espera encontrar su hogar definitivo. Además, realizamos un 
          riguroso proceso de selección para los adoptantes, asegurándonos de que cada mascota 
          vaya a un hogar adecuado y seguro.
          Agradecemos a todos nuestros voluntarios, adoptantes y donantes por su apoyo continuo. 
          Sin ustedes, nuestra labor no sería posible. Invitamos a todos a unirse a nuestra causa 
          y ayudar a hacer una diferencia en la vida de estos animales maravillosos. Juntos, 
          podemos crear un mundo donde cada mascota tenga un hogar amoroso y permanente.
        </p>
        <footer>
            <p>© 2025 Rescata un Amigo. Todos los derechos reservados.</p>
            <p>Contáctanos:</p>
            <div className="social-icons">
            <a href="https://www.facebook.com/RescataUnAmigo" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/rescataunamigo" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com/RescataUnAmigo" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.whatsapp.com/RescataUnAmigo" target="_blank" rel="noopener noreferrer">
              <img src="/images/whatsapp.png" alt="Whatsapp" />
            </a>
            </div>
        </footer>
    </div>
    <style >{`
        .main-image {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: auto;
          height: auto;
          margin-bottom: 20px;
          margin-top: -80px; /* Add this line to move the image up */
        }
        .about-us {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          margin-top: 20px;
          overflow-y: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        .social-icons img {
          width: 30px; /* Ajusta el tamaño de las imágenes según sea necesario */
          height: 30px;
        }
          
      `}</style>
    </div>
    );  

}
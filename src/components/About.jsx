const About = () => {
  return (
    <section id='about' className='flex-col lg:flex-row flex items-center justify-between'>
      <img className='w-96 lg:w-2/5' src="/images/about.png" alt="about image" />
      <article className='ml-10'>
        <h2>Sobre</h2>
        <p className='mt-4'>
          Conecse foi feito para pessoas que queiram aprender ou que queira
          ensinar voluntariamente. Se você estiver interessado em alguma área do
          conhecimento basta se registrar na plataforma e adicionar assuntos que
          você queira aprender ou ensinar.
        </p>
        <p className='mt-2'>
          A plataforma tem a aba de chat, na qual você pode conversar com seus
          professores e alunos. Conecse ainda não terá nessa primeira versão a
          funcionalidade de chamadas de áudio ou vídeo.
        </p>
        <p className='mt-2'>
          O projeto é idealizado por{" "}
          <a className='hover:text-primaryColor underline' target="_blank" href="https://www.linkedin.com/in/angelo-marques-87265a196/">
            Ângelo Marques
          </a>
          , um jovem piauiense que ama tecnologia e empreendedorismo.
        </p>
      </article>
    </section>
  );
};

export default About;

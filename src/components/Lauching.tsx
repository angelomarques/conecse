const Lauching = () => {
  return (
    <section id='launching' className='flex-col lg:flex-row flex my-12'>
      <div className=' mb-8 lg:mb-0 mr-10'>
        <h2>Lançamento</h2>
        <p className='mt-4'>
          Ainda não há data de lançamento. Mas caso queira se manter atualizado
          e receber informações ou tenha alguma dúvida sobre a plataforma basta
          clicar no botão abaixo.
        </p>
        <button className='mt-8 bg-primaryColor text-lightColor text-xl px-7 py-3 rounded-lg'>Manter-se Atualizado</button>
      </div>
      <img className='w-96 lg:w-2/5' src="/images/launching.svg" alt="launching image" />
    </section>
  );
};

export default Lauching;

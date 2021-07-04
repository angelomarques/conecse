const AppHeader = () => {
  return (
    <header className='px-5 md:px-24 lg:px-48 bg-primaryColor flex-col md:flex-row flex justify-between py-7'>
      <img className='w-32 mb-4 md:mb-0' src="/logo-text.svg" alt="logo text" />

      <nav className='flex items-center text-lightColor text-lg md:text-xl flex-wrap'>
        <a className='link' href="#about">Sobre</a>
        <a className='link' href="#launching">Lançamento</a>
        <a className='link opacity-75' href="#contribute">Contribuir</a>
        <button className='border cursor-not-allowed border-lightColor opacity-75 p-1 rounded-sm'>Entrar</button>
      </nav>
    </header>
  );
};

export default AppHeader;

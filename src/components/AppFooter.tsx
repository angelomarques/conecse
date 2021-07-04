const AppFooter = () => {
  return (
    <footer className="bg-primaryColor px-5 md:px-24 lg:px-48 py-6 flex items-center justify-center">
      <img className="w-32 pr-4 sm:pr-8" src="/logo-text.svg" alt="logo text" />
      <span className="infoFooter text-sm sm:text-lg relative text-lightColor pl-4 sm:pl-8">
        Todos os direitos reservados
      </span>
    </footer>
  );
};

export default AppFooter;

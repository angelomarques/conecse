import { useForm, ValidationError } from "@formspree/react";

const Contribute = () => {
  const [state, handleSubmit] = useForm("xnqlvvgn");

  if (state.succeeded) {
    return <p>Obrigado pelo feedback</p>;
  }

  return (
    <section className="mb-14" id="contribute">
      <form
        className="grid lg:grid-cols-2 gap-x-5 form auto-rows-auto"
        action="https://formspree.io/f/xnqlvvgn"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h2 className="col-span-1">Contribuição</h2>
        <p className="mb-4">
          A Conecse também é um projeto open-source voluntariado, qualquer um é
          bem-vindo para contribuir. Se você tem uma ideia ou deseja contribuir
          de alguma forma, basta preencher o formulário abaixo.
        </p>

        <input
          className="input row-start-3 h-12 mb-4"
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
        />
        <input
          className="input row-start-4 h-12 -mb-10"
          type="email"
          name="_replyto"
          id="email"
          placeholder="Digite seu email"
        />
        <textarea
          className="input lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4 mb-4"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Deixe sua mensagem"
        ></textarea>
        <button
          className="bg-primaryColor text-lightColor font-medium text-lg w-24 h-12 rounded-sm lg:row-start-4"
          type="submit"
          disabled={state.submitting}
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contribute;

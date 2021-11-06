import DadosPessoais from "./DadosPessoais";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
    </>
  );
}

export default FormularioCadastro;

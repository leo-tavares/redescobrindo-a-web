import { createElement } from "../../utils.js";

const Bloco = function ({ title, contexto, opts, buttonText, imagePath }) {
  const Container = createElement("div", "container");
  const Title = createElement("h1", "title_main");
  const Contexto = createElement("blockquote", "contexto");
  const Image = createElement("img", "image");
  Image.type = "image/jpeg";
  Image.src = imagePath;
  !!imagePath || (Image.style.display = "none");

  const Options = opts.map((option, key) => {
    const Opt = createElement("input", `option${key}`);
    Opt.type = "radio";
    Opt.name = "options";
    const Label = createElement("label", `label__option${key}`);
    Label.for = `option${key}`;
    Label.append(Opt);
    Label.append(option);
    return Label;
  });
  const ButtonNext = createElement("button", "btn-next");

  Title.textContent = title;
  Contexto.textContent = contexto;
  ButtonNext.textContent = buttonText;

  if (Options.length) {
		const InputContainer = createElement("div", "input__container");

    InputContainer.append(...Options);
    Container.append(Title, Contexto, Image, InputContainer, ButtonNext);
    return {
			Container,
      ButtonNext,
      Contexto,
			Image,
			InputContainer,
			Options,
      getInputChecked: () => {
				const [radioButtons] = Options.filter(option => option.firstChild.checked)
				console.log(Options);
				console.log(Options.length);

				console.log(radioButtons);
        return radioButtons.textContent;
      },
    };
  }
  Container.append(Title, Contexto, Image, ButtonNext);
  return { Container, ButtonNext, Contexto, Image };
};

export default Bloco;

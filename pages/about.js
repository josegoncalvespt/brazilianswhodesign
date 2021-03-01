import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

const item = {
  hidden: { opacity: 0, y: "15%" },
  show: { opacity: 1, y: "0%" },
  transition: {
    easing: "easeInOut",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Developers Portugueses | Sobre</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <Title
        className="title m0 p0"
        text="&#8220;Developers*Portugueses&#8220;&nbsp;é&nbsp;um&nbsp;"
        noAnimation
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="f1 extend">
          <motion.span variants={item}>espaço para mostrar</motion.span>{" "}
          <motion.span variants={item}>o trabalho de talentodos developers</motion.span>{" "}
          <motion.span variants={item}> Portugueses</motion.span>{" "}
          <motion.span variants={item}>e dar a conhecer</motion.span>{" "}
          <motion.span variants={item}>aquilo que se faz</motion.span>{" "}
          <motion.span variants={item}>nesta indústria em</motion.span>{" "}
          <motion.span variants={item}>Portugal</motion.span>{" "}
        </p>
      </motion.div>

      <div className="moreabout">
        <div className="col-left">
          <h3>Como posso nomear alguém?</h3>
          <p>
            Se conheces um developer Português que merece estar nesta lista{" "}
            <Link href="/nominate">
              <a className="link">preenche este formulário</a>
            </Link>{" "}
            com algumas informações sobre esse(a) developer e o porquê de o(a) estares
            a nomear. O link pode redirecionar para o portfolio, Linkedin, ou
            outra rede social - qualquer link que represente a maneira como esta
            pessoa está a fazer a diferença na indústria.
          </p>

          <h3>Porquê?</h3>
          <p>
            O site "Developers Portugueses" tem como objetivo
            dar a conhecer o talento nacional nas áreas
            do desenvolvimento tecnológico. Um bom recurso para quem
            procura parceiros, freelancers ou simplesmente conhecer pessoas
            novas com interesses comuns.
          </p>

          <h3>Como é que tivemos a ideia de criar este projeto?</h3>
          <p>
            Não tivemos. Este projeto foi inspirado por outros projetos semelhantes:
          </p>
          <ul>
            <li>
              <a className="link" href="https://portuguesewho.design/">
                Portuguese Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.womenwhodraw.com/">
                Women Who Draw
              </a>
            </li>
            <li>
              <a className="link" href="http://www.28blacks.com/">
                28 Black Designers
              </a>
            </li>
            <li>
              <a className="link" href="https://www.latinxswhodesign.com/">
                Latinx Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://queerdesign.club/">
                Queer Design Club
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://filipinos-who-design.webflow.io/"
              >
                Filipinos Who Design
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://filipinos-who-design.webflow.io/"
              >
                People Of Craft
              </a>
            </li>
            <li>
              <a className="link" href="https://indianswhodesign.in/">
                Indians Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.apiwho.design/">
                Asian & Pacific Islanders Who Design
              </a>
            </li>
          </ul>

          <h3>Como é que o projeto foi construído?</h3>
          <p>
            Developers Portugueses é um projeto{" "}
            <a
              className="link"
              target="_blank"
              href="https://github.com/zehfernandes/brazilianswhodesign"
            >
              open source
            </a>{" "}
            para que cada pessoa consiga criar o seu espaço.
            Este projeto é construído sobre o código publicado
            por Jules Forrest no Github depois de construir{" "}
            <a
              className="link"
              target="_blank"
              href="https://github.com/julesforrest/womenwhodesign"
            >
              Women Who Design.
            </a>
            <br />
            <br />
            Sites construídos com a mesma base:
          </p>
          <ul>
            <li>
              <a className="link" href="https://uruguayanswho.design/">
                uruguayanswho.design
              </a>
            </li>
            <li>
              <a className="link" href="https://spaniardswho.design/">
                spaniardswho.design
              </a>
            </li>
            <li>
              <a className="link" href="https://britswho.design/">
                britswho.design
              </a>
            </li>
          </ul>
          <br />


          <h3>Quem está por trás deste projeto?</h3>
          <ul>
            <li>
              <a className="link" href="https://twitter.com/jose_goncalves_">
                José Gonçalves
              </a>
            </li>
            <li>
              <a className="link" href="https://twitter.com/ernstgnzlz">
                Ernesto González
              </a>
            </li>
          </ul>
        </div>
        <div className="col-right">
          <h3>Como posso remover o meu nome?</h3>
          <p>
            Se foste adicionado à lista e queres que o teu nome seja retirado
            ou editar o teu perfil, envia um email para ola@developersportugueses.pt
          </p>
        </div>

        <Analytics />
      </div>

      <style jsx>{`
        .extend {
          margin: 0;
          max-width: 17ch;
        }

        .moreabout {
          font-weight: normal;
          font-size: 1.5rem;
          line-height: 140%;
          letter-spacing: 0.01em;
          display: flex;
          margin-top: 8rem;
        }

        .moreabout > div {
          width: 50%;
          max-width: 50ch;
        }

        .col-right {
          padding-left: 3rem;
        }
        .col-left {
          padding-right: 3rem;
        }

        .moreabout p {
          margin: 0;
          padding: 0;
        }

        .moreabout h3 {
          padding: 0;
          margin: 0;
          font-size: 1.5rem;
        }

        .moreabout h3 {
          margin: 4rem 0 0 0;
        }

        ul,
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          margin-top: 0.3rem;
        }

        @media (max-width: 480px) {
          .moreabout {
            display: block;
          }

          .moreabout > div {
            width: 100%;
            max-width: 100%;
            display: block;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}

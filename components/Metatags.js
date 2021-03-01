export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Developers Portugueses" />
      <meta
        name="description"
        content="Espaço para mostrar o trabalho de talentosos developers Portugueses e dar a conhecer aquilo que se faz nesta indústria em Portugal"
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://developersportugueses.pt/" />
      <meta property="og:title" content="Developers Portugueses" />
      <meta
        property="og:description"
        content="Espaço para mostrar o trabalho de talentosos developers Portugueses e dar a conhecer aquilo que se faz nesta indústria em Portugal"
      />
      <meta
        property="og:image"
        content="http://developersportugueses.pt/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://developersportugueses.pt/" />
      <meta property="twitter:title" content="Developers Portugueses" />
      <meta
        property="twitter:description"
        content="Espaço para mostrar o trabalho de talentosos developers Portugueses e dar a conhecer aquilo que se faz nesta indústria em Portugal"
      />
      <meta
        property="twitter:image"
        content="http://developersportugueses.pt/img/preview.png"
      />
    </>
  );
}

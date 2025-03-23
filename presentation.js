const Presentation = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    {
      title: "Mister IA : une expertise approfondie du marché et une notoriété établie auprès des entreprises",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Mister IA : une expertise approfondie du marché et une notoriété établie auprès des entreprises</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Nos clients sont principalement des PME et ETI de moins de 150 collaborateurs — un positionnement parfaitement aligné avec l'offre <strong>Le Chat Teams</strong> de Mistral.</li>
            <li>Nous auditons des dizaines d'équipes d'entreprise par chaque mois, ce qui nous confère une vision concrète et actualisée du terrain, des métiers et des cas d'usage.</li>
            <li>Nous sommes le <strong>premier organisme de formation en IA générative en France</strong> pour les professionnels, avec une reconnaissance particulière dans les secteurs de l'<strong>immobilier</strong>, des <strong>notaires</strong> et des <strong>avocats</strong>, qui constituent des niches stratégiques.</li>
            <li>Nos clients nous font pleinement confiance : ils suivent nos recommandations d'outils, et sont souvent prêts à adapter ou revoir leur stratégie numérique en fonction de nos préconisations.</li>
            <li>Nous accompagnons actuellement <strong>une vingtaine d'entreprises</strong> dans l'administration, le suivi et l'optimisation de leurs licences d'outils d'IA générative.</li>
            <li>Plus de <strong>20 000 professionnels formés</strong> à ce jour. Nous assurons <strong>plus de 5 formations par jour</strong> sur tout le territoire, exclusivement sur les outils que nous jugeons les plus pertinents.</li>
            <li>Nous accompagnons en <strong>coaching individuel plus de 40 dirigeants</strong> dans leur stratégie IA, avec une relation de proximité directe avec les derniers décideurs de chaque structure.</li>
          </ul>
          <div className="mt-6 p-4 bg-blue-100 rounded-lg">
            <p>Nos retours terrain montrent que la majorité des ETI et PME en France n'ont pas encore intégré l'IA générative dans leurs outils et processus. Une part croissante explore le sujet ou entame des expérimentations limitées. Seule une minorité a structuré une approche claire, alignée sur ses métiers. Le potentiel est largement sous-exploité.</p>
          </div>
        </div>
      )
    },
    {
      title: "Niveaux de maturité",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Nos clients se répartissent en trois niveaux de maturité :</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-300">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Débutants</h3>
              <p className="mb-3">Le sujet de l'IA générative est encore flou, aucune réflexion n'est engagée.</p>
              <p className="italic text-sm">Accompagnement nécessaire sur la compréhension des fondamentaux et les impacts de cette technologie, souvent première étape vers des usages plus avancés.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Intermédiaires</h3>
              <p className="mb-3">Le sujet est identifié comme prioritaire, des formations sont déployées pour initier une montée en compétence généralisée.</p>
              <p className="italic text-sm">Accompagnement centré sur le choix de l'outil et l'appropriation opérationnelle.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-700">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Avancés</h3>
              <p className="mb-3">Au-delà de l'usage chez les collaborateurs, une réflexion est engagée sur l'implémentation stratégique de l'IA dans les services internes ou à destination des clients.</p>
              <p className="italic text-sm">Accompagnement dans l'intégration concrète de LLM dans les processus métiers existants.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Cas d'usages fréquents",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Listing des cas d'usages les plus fréquents chez nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Rédiger</h3>
              <p className="text-sm">Des comptes-rendus de réunions ou des emails en utilisant la fonction vocale, en respectant un certain style d'écriture et une structure précise, avec un ton professionnel et adapté à la typologie d'interlocuteur ; des contrats juridiques, un courrier pour le maire, courriers vendeur, un courrier locataire, un pitch de centre, un pitch commercial, un cahier des charges, des notes d'information, un CCTP, un RAO, une fiche synthèse (à partir d'un CCTP et un CCAP par exemple), un mandat de gestion, un acte de caution, une fiche de recensement, une fiche de lancement, un communiqué de presse, des éléments de langage pour un discours, des flash-actu, des newsletters ; des annonces de biens immobiliers, notamment à partir de documents tels que l'avis de valeur ; du contenu pour les réseaux sociaux tels que des fiches de poste ; du contenu optimisé SEO pour un site internet tel que des articles de blog.</p>
            </div>
            <div cl

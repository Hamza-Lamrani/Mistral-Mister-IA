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
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Analyser et extraire</h3>
              <p className="text-sm">Les informations clés de documents tels que baux commerciaux, conventions de financement, contrats de construction, cahier des charges, appels d'offre, un dossier de candidature, des CV, PLU, plans cadastraux, plans de vente, comptes financiers, revue de presse, PV d'AG, décisions d'action de justice, actes de cession, litige, un bail, actes de propriété, EDD, un rapport d'expert, un mémoire technique, des bilans financiers.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Générer</h3>
              <p className="text-sm">Des comptes-rendus automatiques de réunions en visioconférence.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Comparer et vérifier</h3>
              <p className="text-sm">La conformité entre des surfaces et des points de vente, un CCTP et un RC, un ancien CETG et une nouvelle version, un devis et un rapport d'expertise, des plans de vente et des plans synoptiques, des notices cibles et des notices de collection, des devis de prestataires, etc. ; rapidement et efficacement différentes versions de documents légaux ; des devis, régimes juridiques internationaux des donations et successions (USA, UK, France, Suisse), documents administratifs ou comptables, etc.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Cas d'usages fréquents (suite)",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Listing des cas d'usages les plus fréquents chez nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Vulgariser</h3>
              <p className="text-sm">Des concepts techniques ou spécifiques à un domaine (juridique par exemple) complexes en les rendant accessibles et compréhensibles pour les clients.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Traduire</h3>
              <p className="text-sm">Des documents, paragraphes ou phrases d'une langue à une autre pour faciliter la communication internationale.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Décliner</h3>
              <p className="text-sm">Un PV d'AG en PV abrégé, une annonce immobilière en post LinkedIn.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Créer</h3>
              <p className="text-sm">Des supports de présentation percutants respectant une charte graphique (proposition commerciale, régimes matrimoniaux, assemblée générale, réunion interne…) ; des modules de formation pour des équipes de collaborateurs, un processus d'onboarding, sur n'importe quel sujet, n'importe quel outil (Power BI, Excel) pour maîtriser n'importe quel jargon, en adaptant les explications au niveau de l'apprenant ; un simulateur financier personnalisé, un simulateur d'investissement locatif, de partages successoraux, d'assurance emprunteur, etc. ; des rappels pour envoyer des courriers ou emails de relance personnalisés pour solliciter des documents auprès des clients ou faire un suivi commercial ; des checklists, pour une visite terrain par exemple ; des macros VBA ou formules Excel ; des interfaces ergonomiques et interactives.</p>
            </div>
          </div>
          <div className="mt-4 bg-white rounded-lg p-4 shadow-md">
            <p className="mb-2"><strong>Autres cas d'usage courants :</strong></p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 list-disc pl-5">
              <li>Effectuer une veille de marché</li>
              <li>Réaliser des analyses patrimoniales</li>
              <li>Simuler différents scénarios</li>
              <li>Concevoir un calculateur d'impacts fiscaux</li>
              <li>Rechercher la jurisprudence</li>
              <li>Synthétiser des contrats</li>
              <li>Obtenir une classification DISC</li>
              <li>Définir un plan de communication</li>
              <li>Optimiser des trajets</li>
              <li>Préparer des documents explicatifs</li>
              <li>Analyser des graphiques</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Potentiel et améliorations",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Potentiel et améliorations de Mistral</h2>
          <p className="mb-4">D'après nos tests, Mistral permet déjà de répondre à une grande partie des cas d'usage identifiés.</p>
          <p className="mb-6">Toutefois, pour en faire un outil pleinement adapté aux besoins des entreprises françaises, certaines fonctionnalités clés — aujourd'hui absentes ou limitées par rapport aux concurrents — mériteraient d'être intégrées. Elles constituent des axes d'amélioration non négligeables :</p>
          <div className="bg-white rounded-lg p-4 shadow-md mb-6">
            <ul className="list-disc pl-5 space-y-2">
              <li className="italic">Mode vision en temps réel</li>
              <li className="italic">Artefacts / Object workspace</li>
              <li className="italic">Recherche avancée / Deep research</li>
              <li className="italic">Intégration et gestion d'une mémoire dite transverse ou d'instructions système personnalisée</li>
              <li className="italic">Plugins ou extensions tierces intégrées (il semble qu'il s'agit d'un sujet en cours de traitement)</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-bold text-blue-700 mb-4">Arguments en faveur de Mistral pour nos clients</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Entreprise française indépendante. Nous sommes conscients que vous ne souhaitez pas être sélectionné pour cette raison, mais il reste toutefois l'argument le plus important dans le choix de Mistral.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Capacités à traiter de nombreux cas d'usages</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Collaboration avec l'AFP pour nourrir la base de connaissance de l'outil</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Rapidité de réponse</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Très bon en français</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Très bon dans la génération d'image</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Outil évolutif</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Ergonomie de l'interface</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Traitement OCR des documents</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="h-2 bg-blue-700 rounded-full mb-2"></div>
              <p>Fenêtre contextuelle étendue</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Questions techniques et stratégiques",
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">1. Questions techniques et fonctionnelles</h2>
          <ol className="list-decimal pl-5 space-y-3 mb-8">
            <li>Quelles sont les différences fonctionnelles entre Le Chat (gratuit), Le Chat Pro et Le Chat Teams ?</li>
            <li>Quel est le volume de données qui pourront être intégrées dans "Bibliothèque" ?</li>
            <li>À quoi pourra être lié "Data Connectors" et comptez-vous l'adapter aux applications Microsoft ?</li>
            <li>Combien de sources en moyenne et quels moteurs de recherche consulte Le Chat lorsque la navigation web est activée ?</li>
            <li>Pouvez-vous nous en dire plus sur Mistral Code et sa date de déploiement ?</li>
            <li>Quelles sont les prochaines fonctionnalités prévues pour les différentes licences ?</li>
            <li>Proposez-vous des outils d'analyse ou de pilotage de l'usage (dashboards, logs, quota, etc.) pour les administrateurs de Le Chat Teams ?</li>
            <li>Proposez-vous du fine-tuning ou des capacités d'adaptation métier sur vos modèles propriétaires ?</li>
            <li>Quelle est, selon vous, la principale valeur ajoutée de Le Chat par rapport aux autres solutions du marché ?</li>
          </ol>
          
          <h2 className="text-2xl font-bold text-blue-700 mb-6">2. Questions stratégiques</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Comment garantissez-vous la confidentialité, la non-rétention et la non-exploitation des données saisies dans vos différents services : via API, Le Chat (gratuit), Le Chat Pro et Le Chat Teams ?</li>
            <li>Quel est votre positionnement vis-à-vis du Cloud Act et quelles alternatives d'hébergement (souverain ou européen) proposez-vous à vos clients autre que Azure de Microsoft ?</li>
            <li>Pouvez-vous détailler la répartition géographique de vos centres de données et de vos infrastructures techniques (datacenters, GPU, etc.) ?</li>
            <li>Comment Mistral se positionne-t-elle en matière de souveraineté numérique européenne ?</li>
            <li>Pouvez-vous décrire votre approche sur la constitution et le traitement des données d'entraînement de vos modèles ?</li>
            <li>Quel est votre niveau de conformité vis-à-vis de l'IA Act ?</li>
            <li>Quelle est votre politique de gestion des biais algorithmiques et des enjeux de transparence ?</li>
            <li>Quels sont, selon vous, les principaux freins actuels à l'adoption de vos solutions en entreprise, et comment anticipez-vous l'évolution du marché et de la régulation à moyen terme ?</li>
          </ol>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen" style={{ backgroundColor: "#f2f2f0" }}>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg mb-6">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-700">Mister IA</h1>
            <div className="text-gray-600">Slide {currentSlide + 1} / {slides.length}</div>
          </div>
          
          <div className="p-4">
            {slides[currentSlide].content}
          </div>
          
          <div className="p-4 border-t border-gray-200 flex justify-between">
            <button 
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className={`px-4 py-2 rounded ${currentSlide === 0 ? 'bg-gray-200 text-gray-500' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
            >
              Précédent
            </button>
            <button 
              onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlide === slides.length - 1}
              className={`px-4 py-2 rounded ${currentSlide === slides.length - 1 ? 'bg-gray-200 text-gray-500' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Presentation />, document.getElementById('root'));

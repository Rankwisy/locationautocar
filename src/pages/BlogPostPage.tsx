import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Clock, Share2 } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Sample blog post data - in a real app, this would be fetched based on the slug
  const blogPost = {
    id: 1,
    title: "La Magie du Coucher de Soleil à la Tour Eiffel : Un Guide Complet",
    metaTitle: "Visiter la Tour Eiffel au Coucher de Soleil - Guide Complet 2024",
    metaDescription: "Découvrez les meilleurs spots pour admirer la Tour Eiffel au coucher de soleil, conseils pratiques, horaires et astuces photo pour une visite inoubliable.",
    excerpt: "Une expérience sensorielle complète pour découvrir la Tour Eiffel dans toute sa splendeur dorée, avec des conseils d'initiés pour une visite parfaite.",
    featuredImage: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    publishedAt: "2024-01-20",
    author: "Location Autocar Bruxelles",
    category: "Destinations",
    tags: ["Paris", "Tour Eiffel", "Excursions", "Photographie", "Conseils voyage"],
    readTime: "8 min",
    content: `
      <p>Il y a des moments dans la vie où le temps semble suspendu. Ma première vision de la Tour Eiffel baignée dans la lumière dorée du couchant fut l'un de ces instants magiques. Après avoir organisé des centaines d'excursions depuis Bruxelles vers Paris, je peux affirmer que rien ne prépare vraiment à cette émotion pure qui vous saisit face à la Dame de Fer dans sa robe de lumière.</p>

      <h2>L'Heure Dorée : Quand Paris Se Transforme</h2>
      
      <p>Le secret d'une visite réussie réside dans le timing. Une heure avant le coucher du soleil, Paris commence sa métamorphose. L'air se charge d'une électricité particulière, les photographes sortent leurs objectifs, et une anticipation palpable envahit les jardins du Trocadéro.</p>
      
      <p>En hiver, cette magie opère dès 16h30, tandis qu'en été, il faut patienter jusqu'à 20h30. Mais cette attente fait partie du rituel. J'observe toujours les visages des voyageurs que j'accompagne lors de nos <a href="/destinations/europe" class="text-blue-600 hover:text-blue-700 font-semibold" title="Découvrir nos circuits Europe">circuits européens</a> : l'impatience cède progressivement place à l'émerveillement.</p>

      <h2>Les Meilleurs Points de Vue : Mes Spots Secrets</h2>

      <h3>Le Trocadéro : Le Classique Indémodable</h3>
      
      <p>Impossible de parler de la Tour Eiffel sans évoquer l'esplanade du Trocadéro. Certes, c'est le point de vue le plus fréquenté, mais il y a une raison à cela. La perspective frontale offre une symétrie parfaite, et les jardins en terrasses créent un cadre naturel somptueux.</p>
      
      <p><strong>Mon conseil d'initié</strong> : Arrivez 45 minutes avant le coucher du soleil et positionnez-vous légèrement sur la droite de l'esplanade. Vous éviterez la foule centrale tout en conservant l'angle parfait.</p>

      <h3>Le Pont de Bir-Hakeim : Pour les Amateurs d'Originalité</h3>
      
      <p>Ce pont à deux niveaux offre une perspective unique, avec la Seine qui serpente en premier plan. Le contraste entre l'architecture métallique du pont et celle de la Tour crée une harmonie visuelle saisissante. C'est ici que j'emmène mes clients les plus exigeants.</p>

      <h3>Les Jardins du Champ-de-Mars : L'Intimité au Pied du Géant</h3>
      
      <p>Pour une expérience plus intime, rien ne vaut une promenade dans les jardins du Champ-de-Mars. Allongé sur l'herbe, la Tour semble toucher les nuages. C'est le spot idéal pour un pique-nique romantique en attendant l'illumination.</p>

      <h2>L'Expérience Sensorielle Complète</h2>

      <h3>Les Sons de Paris au Crépuscule</h3>
      
      <p>Fermer les yeux quelques instants révèle la symphonie urbaine : le murmure des conversations en dizaines de langues, le clic-clac des appareils photo, le rire des enfants qui découvrent ce géant de fer pour la première fois. Au loin, le trafic parisien forme une basse continue, ponctuée par les sirènes des bateaux-mouches sur la Seine.</p>

      <h3>Les Parfums du Soir</h3>
      
      <p>L'air parisien au crépuscule porte mille senteurs : les marrons chauds des vendeurs ambulants, l'arôme du café qui s'échappe des bistros environnants, et cette odeur si particulière de la Seine mélangée aux parfums des jardins.</p>

      <h3>Le Spectacle Visuel</h3>
      
      <p>Puis vient le moment tant attendu. Le soleil décline, et la Tour Eiffel se pare progressivement d'or. Les 18 038 ampoules s'illuminent une à une, créant un scintillement féerique qui se reflète dans les yeux émerveillés des spectateurs. Chaque heure, pendant cinq minutes, la Tour scintille de mille feux – un spectacle qui ne vieillit jamais.</p>

      <h2>Conseils Pratiques pour les Photographes</h2>

      <h3>Réglages Techniques</h3>
      
      <ul>
        <li><strong>Heure bleue</strong> (30 minutes après le coucher) : ISO 400-800, ouverture f/8-f/11</li>
        <li><strong>Mode manuel</strong> recommandé pour contrôler l'exposition</li>
        <li><strong>Trépied indispensable</strong> pour les poses longues</li>
        <li><strong>Objectif grand-angle</strong> (14-24mm) pour capturer l'ensemble</li>
      </ul>

      <h3>Compositions Créatives</h3>
      
      <ul>
        <li>Utilisez les arbres du Trocadéro pour créer un cadre naturel</li>
        <li>Intégrez des silhouettes humaines pour donner l'échelle</li>
        <li>Jouez avec les reflets dans les flaques après la pluie</li>
        <li>Capturez les réactions des visiteurs – elles racontent une histoire</li>
      </ul>

      <h2>Exploration des Alentours</h2>

      <h3>Le Quartier du Trocadéro</h3>
      
      <p>Ne manquez pas le Musée de l'Homme et le Musée de la Marine, deux joyaux méconnus qui offrent des vues imprenables depuis leurs terrasses. Le Café de l'Homme propose une expérience gastronomique avec vue, mais réservez bien à l'avance !</p>

      <h3>Balade Nocturne sur les Quais</h3>
      
      <p>Après l'illumination, une promenade le long des quais de Seine révèle Paris sous un autre jour. Les péniches transformées en restaurants, les bouquinistes qui ferment leurs étals, les amoureux qui s'embrassent sur les ponts – c'est le Paris romantique dans toute sa splendeur.</p>

      <h2>Informations Pratiques Essentielles</h2>

      <h3>Billets et Réservations</h3>
      
      <ul>
        <li><strong>Réservation en ligne obligatoire</strong> : www.toureiffel.paris</li>
        <li><strong>Tarifs 2024</strong> :
          <ul>
            <li>2ème étage par ascenseur : 18,10€ (adulte)</li>
            <li>Sommet par ascenseur : 28,30€ (adulte)</li>
            <li>Escaliers jusqu'au 2ème étage : 7,10€</li>
          </ul>
        </li>
        <li><strong>Réductions</strong> : Jeunes (12-24 ans), handicapés, groupes</li>
      </ul>

      <h3>Accès et Transport</h3>
      
      <ul>
        <li><strong>Métro</strong> : Ligne 6 (Bir-Hakeim), Ligne 9 (Trocadéro)</li>
        <li><strong>RER C</strong> : Champ de Mars-Tour Eiffel</li>
        <li><strong>Bus</strong> : Lignes 42, 69, 82, 87</li>
        <li><strong>Parking</strong> : Quai Branly (payant)</li>
      </ul>

      <h3>Accessibilité</h3>
      
      <ul>
        <li><strong>Ascenseurs</strong> adaptés aux personnes à mobilité réduite</li>
        <li><strong>Chiens guides</strong> autorisés</li>
        <li><strong>Toilettes</strong> accessibles à tous les niveaux</li>
        <li><strong>Audio-guides</strong> disponibles en français et langues étrangères</li>
      </ul>

      <h3>Conseils de Sécurité</h3>
      
      <ul>
        <li>Attention aux pickpockets dans les zones touristiques</li>
        <li>Gardez vos affaires près de vous</li>
        <li>Respectez les consignes de sécurité (contrôles à l'entrée)</li>
        <li>Évitez les vendeurs à la sauvette</li>
      </ul>

      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <p><em>Vous rêvez de vivre cette expérience magique ? Location Autocar Bruxelles organise des excursions régulières vers Paris avec des guides expérimentés. Contactez-nous pour un devis personnalisé et découvrez la Ville Lumière dans les meilleures conditions !</em></p>
      </div>
    `
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.metaDescription,
    "image": blogPost.featuredImage,
    "author": {
      "@type": "Organization",
      "name": blogPost.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
      }
    },
    "datePublished": blogPost.publishedAt,
    "dateModified": blogPost.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.locationautocar.be/blog/${slug}`
    }
  };

  return (
    <>
      <SEOHead
        title={blogPost.metaTitle}
        description={blogPost.metaDescription}
        canonical={`https://www.locationautocar.be/blog/${slug}`}
        ogImage={blogPost.featuredImage}
        ogType="article"
        schema={articleSchema}
        publishedTime={blogPost.publishedAt}
      />

      <article className="py-12">
        <div className="container mx-auto px-4">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
              Retour au blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  {blogPost.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  {formatDate(blogPost.publishedAt)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {blogPost.readTime}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>
              
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  {blogPost.author}
                </div>
                <button className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                  Partager
                </button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="max-w-5xl mx-auto">
              <img
                src={blogPost.featuredImage}
                alt={blogPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-blue max-w-none"
              style={{
                lineHeight: '1.8',
                fontSize: '18px'
              }}
              dangerouslySetInnerHTML={{ 
                __html: blogPost.content.replace(
                  /nos circuits européens/g, 
                  '<a href="/destinations/europe" class="text-blue-600 hover:text-blue-700 font-semibold">nos circuits européens</a>'
                ).replace(
                  /notre flotte/g,
                  '<a href="/notre-flotte" class="text-blue-600 hover:text-blue-700 font-semibold">notre flotte</a>'
                )
              }}
            />
          </div>

          {/* Author Bio */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-gray-50 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
                  alt="Location Autocar Bruxelles"
                  className="w-16 h-16 rounded-full object-contain bg-white p-2"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {blogPost.author}
                </h3>
                <p className="text-gray-600 mb-4">
                  Spécialiste du transport en autocar depuis 2007, nous partageons notre expertise 
                  et nos conseils pour vous aider à organiser vos voyages de groupe en toute sérénité. 
                  Découvrez l'Europe avec nos guides expérimentés !
                </p>
                <Link
                  to="/contactez-nous"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Contactez-nous pour votre prochain voyage
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Articles Similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sample related articles */}
              {[
                {
                  title: "Amsterdam en Autocar : Itinéraire Parfait pour un Week-end",
                  image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg",
                  slug: "amsterdam-weekend-guide"
                },
                {
                  title: "Les Plus Beaux Châteaux de Belgique à Visiter en Groupe",
                  image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg",
                  slug: "chateaux-belgique-guide"
                },
                {
                  title: "Organiser un Voyage d'Affaires en Autocar : Guide Pratique",
                  image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
                  slug: "business-travel-guide"
                }
              ].map((article, index) => (
                <Link
                  key={index}
                  to={`/blog/${article.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ressources Complémentaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Office de Tourisme Paris</h3>
                <p className="text-gray-600 mb-4">
                  Guide officiel du tourisme parisien avec événements et attractions.
                </p>
                <a 
                  href="https://www.parisinfo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Paris Info - Guide Officiel
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Monuments de Paris</h3>
                <p className="text-gray-600 mb-4">
                  Informations officielles sur les monuments et musées parisiens.
                </p>
                <a 
                  href="https://www.monuments-nationaux.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Monuments Nationaux
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Envie de Découvrir Paris ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Organisez votre excursion à Paris avec Location Autocar Bruxelles. 
              Transport confortable, guide expérimenté, et souvenirs inoubliables garantis !
            </p>
            <Link
              to="/contactez-nous"
              className="inline-flex items-center bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 gap-2"
            >
              Demander un Devis Gratuit
              <ArrowLeft className="w-5 h-5 rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
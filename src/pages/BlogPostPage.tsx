import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Clock, Share2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { getBlogPostBySlug, type BlogPost } from '../data/blogContentData';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Get blog post data based on slug
  const blogPost = slug ? getBlogPostBySlug(slug) : null;

  // If no blog post found, show 404 with clear exit links and enough content for SEO (50+ words)
  if (!blogPost) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé | Blog Bruxelles</h1>
            <p className="text-xl text-gray-600 mb-4">
              L'article que vous recherchez n'existe pas ou a été déplacé.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Le blog de Location Autocar Bruxelles propose des guides voyage, conseils pratiques et actualités 
              sur le transport en autocar avec chauffeur à Bruxelles et en Europe. Découvrez nos articles sur 
              les excursions, la LEZ bruxelloise, nos destinations et notre flotte pour préparer vos prochains 
              déplacements de groupe. Consultez la liste de nos articles ci-dessous ou revenez à l'accueil.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                Retour au blog
              </Link>
              <Link
                to="/"
                className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        title={blogPost.metaTitle || blogPost.title}
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
                loading="eager"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
              style={{
                lineHeight: '1.8',
                fontSize: '18px'
              }}
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
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


          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Vivre Ces Expériences ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Organisez votre prochaine excursion avec Location Autocar Bruxelles. 
              Transport confortable, guides expérimentés, et souvenirs inoubliables garantis !
            </p>
            <Link
              to="/contactez-nous"
              className="inline-flex items-center bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 gap-2"
            >
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
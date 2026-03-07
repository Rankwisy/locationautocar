import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag, ArrowLeft, Clock, Share2, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '@/data/blogContentData';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);
  if (!blogPost) {
    return { title: 'Article non trouvé | Blog Bruxelles' };
  }
  return {
    title: blogPost.metaTitle || blogPost.title,
    description: blogPost.metaDescription,
    alternates: { canonical: `https://www.locationautocar.be/blog/${slug}` },
    openGraph: {
      title: blogPost.metaTitle || blogPost.title,
      description: blogPost.metaDescription,
      url: `https://www.locationautocar.be/blog/${slug}`,
      images: [blogPost.featuredImage],
      type: 'article',
      publishedTime: blogPost.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);

  if (!blogPost) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
            Retour au blog
          </Link>
        </div>

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
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{blogPost.excerpt}</p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" aria-hidden="true" />
                {blogPost.author}
              </div>
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

        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
            style={{ lineHeight: '1.8', fontSize: '18px' }}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>

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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{blogPost.author}</h3>
              <p className="text-gray-600 mb-4">
                Spécialiste du transport en autocar depuis 2007, nous partageons notre expertise
                et nos conseils pour vous aider à organiser vos voyages de groupe en toute sérénité.
              </p>
              <Link
                href="/contactez-nous"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Contactez-nous pour votre prochain voyage
                <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Vivre Ces Expériences ?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Organisez votre prochaine excursion avec Location Autocar Bruxelles.
          </p>
          <Link
            href="/contactez-nous"
            className="inline-flex items-center bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 gap-2"
          >
            Demander un Devis Gratuit
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

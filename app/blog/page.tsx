'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { getAllBlogPosts, getBlogPostsByCategory } from '@/data/blogContentData';

const categories = ['Tous', 'Destinations', 'Conseils', 'Réglementation'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const filteredPosts = getBlogPostsByCategory(selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog Location Autocar Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Découvrez nos guides de voyage, conseils pratiques et actualités sur le transport en autocar.
            Inspirez-vous pour vos prochaines aventures ! Explorez notre{' '}
            <Link href="/notre-flotte" className="text-blue-600 hover:text-blue-700 font-semibold">
              flotte moderne
            </Link>{' '}
            et découvrez toutes nos{' '}
            <Link href="/destinations" className="text-blue-600 hover:text-blue-700 font-semibold">
              destinations européennes
            </Link>
            .
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Location Autocar Bruxelles partage ici son expertise sur les transferts aéroports, les excursions
            à Bruxelles et en Europe, la conformité LEZ et l&apos;organisation de voyages en groupe.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={filteredPosts[0].featuredImage}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Article Vedette
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {filteredPosts[0].category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {formatDate(filteredPosts[0].publishedAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      {filteredPosts[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                  <Link
                    href={`/blog/${filteredPosts[0].slug}`}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold group"
                  >
                    Lire l&apos;article
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="relative">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" aria-hidden="true" />
                    {post.author}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group"
                  >
                    Lire plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à Vivre Ces Expériences ?</h2>
          <p className="text-xl text-gray-600 mb-8">Contactez-nous pour organiser votre prochaine excursion en autocar</p>
          <Link
            href="/contactez-nous"
            className="inline-flex items-center bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 gap-2"
          >
            Demander un Devis
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

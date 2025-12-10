'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface Props {
  articles: Article[];
  autoPlayInterval?: number;
}

export function HeroSlider({ articles, autoPlayInterval = 5000 }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  }, [articles.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  }, [articles.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (isHovered || articles.length <= 1) return;
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide, autoPlayInterval, articles.length]);

  if (articles.length === 0) return null;

  const currentArticle = articles[currentIndex];

  return (
    <section 
      className="relative mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Slider */}
      <div className="relative aspect-[21/9] md:aspect-[21/8] overflow-hidden rounded-xl">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Link href={`/article/${article.slug}`}>
              {article.featuredImage ? (
                <Image
                  src={article.featuredImage.url}
                  alt={article.featuredImage.alt || article.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark" />
              )}
            </Link>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="max-w-3xl">
                {article.category && (
                  <Link 
                    href={`/category/${article.category.slug}`}
                    className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded mb-3 hover:bg-primary-dark transition-colors"
                  >
                    {article.category.name}
                  </Link>
                )}
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 line-clamp-2">
                  <Link href={`/article/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-200 text-sm md:text-base line-clamp-2 hidden sm:block">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {articles.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {articles.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Navigation */}
      {articles.length > 1 && (
        <div className="hidden lg:flex gap-3 mt-4">
          {articles.map((article, index) => (
            <button
              key={article.id}
              onClick={() => goToSlide(index)}
              className={`flex-1 flex gap-3 p-3 rounded-lg transition-all ${
                index === currentIndex 
                  ? 'bg-primary/10 border-2 border-primary' 
                  : 'bg-white border border-gray-200 hover:border-primary/50'
              }`}
            >
              <div className="relative w-16 h-12 flex-shrink-0 overflow-hidden rounded">
                {article.featuredImage ? (
                  <Image
                    src={article.featuredImage.url}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm">📄</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h4 className={`text-xs font-medium line-clamp-2 ${
                  index === currentIndex ? 'text-primary' : 'text-gray-700'
                }`}>
                  {article.title}
                </h4>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

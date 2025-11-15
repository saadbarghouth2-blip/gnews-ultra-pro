import React from 'react';
import useNews from '../hooks/useNews';
import SearchBar from '../components/SearchBar';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const { query, setQuery, articles, loading } = useNews('الأخبار');

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      {loading && <div className='text-center mb-4'>جاري التحميل...</div>}

      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {articles.map((a, i) => <ArticleCard key={i} article={a} />)}
      </div>
    </div>
  );
}

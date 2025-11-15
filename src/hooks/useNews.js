import { useState, useEffect } from 'react';
import { fetchNews } from '../api';

export default function useNews(initial='أخبار') {
  const [query, setQuery] = useState(initial);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchNews({ q: query, lang: 'ar', max: 12 });
        if (mounted) setArticles(data.articles || []);
      } catch(e) { console.error(e); }
      setLoading(false);
    };
    load();
    return () => { mounted = false; };
  }, [query]);

  return { query, setQuery, articles, loading };
}

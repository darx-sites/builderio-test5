'use client';

import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderPageProps {
  params: {
    page: string[];
  };
}

export default function BuilderPage({ params }: BuilderPageProps) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const urlPath = '/' + (params.page?.join('/') || '');
        const content = await builder
          .get('page', {
            url: urlPath,
          })
          .promise();

        setContent(content);
      } catch (error) {
        console.error('Error fetching Builder.io content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [params.page]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Page not found</div>
      </div>
    );
  }

  return (
    <BuilderComponent
      model="page"
      content={content}
    />
  );
}
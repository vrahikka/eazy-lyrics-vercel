import { Metadata } from 'next';
import { search } from '@/_api/api';
import Error from '@/components/Error';
import PageTemplate from '@/components/PageTemplate/PageTemplate';
import SearchResults from '@/components/SearchResults/SearchResults';
import { isError } from '@/src/guards';
import { PageProps } from '@/src/types';

export const metadata: Metadata = {
  title: 'Search',
  robots: {
    index: false,
    follow: false,
    notranslate: true,
  },
};

export default async function Page({ searchParams }: PageProps<'id'>) {
  // Access query parameters
  const { search: searchString } = await searchParams;

  // Ensure searchString is a string
  const query = Array.isArray(searchString) ? searchString[0] : searchString;

  const data = await search(query ?? '');

  const error = isError(data);

  return (
    <PageTemplate>
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-center">{`Search hits for: ${searchString}`}</h2>
        {error ? (
          <Error data={data} />
        ) : (
          <SearchResults hits={data?.hits ?? []} />
        )}
      </div>
    </PageTemplate>
  );
}

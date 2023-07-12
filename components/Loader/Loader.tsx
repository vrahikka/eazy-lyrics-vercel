import PageTemplate from '../PageTemplate/PageTemplate';

function Loader() {
  return (
    <PageTemplate className="mt-10 md:mt-24 w-fit">
      <div className="p-8 md:w-[25rem] flex flex-col items-center gap-4 justify-center text-gray">
        <p>Loading...</p>
        <div className="loader ease-linear text-white rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    </PageTemplate>
  );
}
export default Loader;

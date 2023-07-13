import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// const SPECIAL_ELEMENTS = ['intro', 'chorus', 'verse', 'bridge', 'pre-chorus'];

interface Props {
  htmlText: string;
}
function Lyric({ htmlText }: Props) {
  const { window } = new JSDOM('');
  const purify = DOMPurify(window);
  const sanitizedLyrics = purify
    .sanitize(htmlText)
    .replace(/\[(.*?)](?:<br>|<p>)/g, (match, p1) => {
      let className = '';
      if ((p1.toLowerCase() as string).includes('pre-chorus')) {
        className = 'other special';
      } else if ((p1.toLowerCase() as string).includes('chorus')) {
        className = 'chorus special';
      } else {
        className = 'other special';
      }

      return `<p class="${className}">${match}</p>`;
    });

  const doc = new window.DOMParser().parseFromString(
    sanitizedLyrics,
    'text/html'
  );

  doc.querySelectorAll('a').forEach((anchor) => {
    const p = doc.createElement('p');
    p.innerHTML = anchor.innerHTML;
    anchor.replaceWith(p);
  });
  doc.querySelectorAll('i').forEach((anchor) => {
    anchor.remove();
  });

  return (
    <div
      className="flex-col pb-[40rem] items-center text-center [&_.special]:underline [&_.special]:decoration-2 [&_.chorus]:decoration-primary [&_.other]:decoration-secondary"
      dangerouslySetInnerHTML={{
        __html: doc.body.innerHTML,
      }}
    />
  );
}
export default Lyric;

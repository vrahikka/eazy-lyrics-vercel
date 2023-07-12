'use client';

import DOMPurify from 'dompurify';

// const SPECIAL_ELEMENTS = ['intro', 'chorus', 'verse', 'bridge', 'pre-chorus'];

interface Props {
  htmlText: string;
}
function Lyric({ htmlText }: Props) {
  console.log(htmlText);
  const sanitizedLyrics = DOMPurify.sanitize(htmlText).replace(
    /\[(.*?)](?:<br>|<p>)/g,
    (match, p1) => {
      let className = '';
      if ((p1.toLowerCase() as string).includes('pre-chorus')) {
        className = 'other special';
      } else if ((p1.toLowerCase() as string).includes('chorus')) {
        className = 'chorus special';
      } else {
        className = 'other special';
      }

      return `<p class="${className}">${match}</p>`;
    }
  );

  const doc = new DOMParser().parseFromString(sanitizedLyrics, 'text/html');

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

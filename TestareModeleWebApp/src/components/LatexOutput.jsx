import { MathJax, MathJaxContext } from 'better-react-mathjax';
// Componenta care primeste textul generat de GPT (sau orice altă sursă) si il reda cu formule LaTeX
export default function LatexOutput({ gptText }) {

  // Separă textul în părți: text obișnuit și expresii LaTeX delimitate de $$, \[ \], sau \( \)
  const parts = gptText.split(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g);

  return (
    <MathJaxContext> {/* Context pentru procesarea LaTeX */}
      <div style={{ whiteSpace: 'pre-wrap' }}> {/* Menține spațiile și liniile noi */}
        {parts.map((part, i) => {
          
          // Detecteaza formule afisate (display mode), ex: $$...$$ sau \[...\]
          if (part.startsWith('$$') || part.startsWith('\\[')) {
            const clean = part.replace(/^\$\$|^\[\\|\\\]|\$\$$/g, ''); // Elimina delimitatorii
            return (
              <MathJax key={i} dynamic>
                {`\\[${clean.trim()}\\]`} {/* Reincadreaza in delimitatori pentru display mode */}
              </MathJax>
            );
          }

          // Detectează formule inline, ex: \( ... \)
          if (part.startsWith('\\(') && part.endsWith('\\)')) {
            return (
              <MathJax key={i} dynamic inline>
                {part} {/* Foloseste delimitatori inline direct */}
              </MathJax>
            );
          }

          // Redă restul textului ca text normal
          return <span key={i}>{part}</span>;
        })}
      </div>
    </MathJaxContext>
  );
}
import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';
// Componentă custom care procesează LaTeX în răspunsul GPT
import LatexOutput from './LatexOutput';

export default function DragZone() {
    // Stări pentru fișierul selectat și preview-ul imaginii
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    // Stări pentru procesare și rezultate
    const [loading, setLoading] = useState(false);            // pentru Mathpix
    const [mathpixResult, setMathpixResult] = useState('');   // textul extras
    const [gptResponse, setGptResponse] = useState('');       // răspunsul GPT
    const [submittingToGpt, setSubmittingToGpt] = useState(false);

    // Conversie fișier imagine în base64
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    // Trimite imaginea la Mathpix pentru OCR
    const sendToMathpix = async (file) => {
        setLoading(true);
        try {
            const base64 = await toBase64(file);

            const response = await fetch('https://api.mathpix.com/v3/text', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'app_id': import.meta.env.VITE_MATHPIX_APP_ID,
                    'app_key': import.meta.env.VITE_MATHPIX_APP_KEY

                },
                body: JSON.stringify({
                    src: base64,
                    formats: ['text', 'data', 'html'],
                    ocr: ['math', 'text']
                })
            });

            const data = await response.json();
            setMathpixResult(data.text || '(fără rezultat)');
        } catch (err) {
            console.error('[Mathpix] Eroare:', err);
            setMathpixResult('Eroare la procesarea imaginii.');
        }
        setLoading(false);
    };

    // Trimite textul OCR la GPT pentru rezolvare
    const sendToGpt = async () => {
        setSubmittingToGpt(true);
        setGptResponse('');

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-4.1-mini',
                    messages: [
                        {
                            role: 'system',
                            content: 'Rezolvă problema de matematică primită. Răspunde clar și pas cu pas.'
                        },
                        {
                            role: 'user',
                            content: mathpixResult
                        }
                    ],
                    temperature: 0.1
                })
            });

            const data = await response.json();
            const content = data.choices?.[0]?.message?.content || 'Niciun răspuns.';
            setGptResponse(content);
        } catch (error) {
            console.error('[GPT] Eroare:', error);
            setGptResponse('Eroare la trimiterea către GPT.');
        }

        setSubmittingToGpt(false);
    };

    // Initializarea dropzone-ului pentru fisiere imagine
    const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
        accept: { 'image/*': [] },
        multiple: false,
        maxSize: 2 * 1024 * 1024, // max 2MB
        onDrop: async (acceptedFiles) => {
            const selected = acceptedFiles[0];
            setFile(selected);
            setGptResponse('');
            if (selected) {
                const objectUrl = URL.createObjectURL(selected);
                setPreview(objectUrl); // pentru afișare imagine
                await sendToMathpix(selected); // OCR
            }
        }
    });

    // Curatare preview imagine din memorie când componenta se demonteaza
    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    return (
        <div>

            {/* Zona de drag & drop */}
            <div {...getRootProps()} className="p-4 border border-secondary rounded bg-light text-center text-dark">
                <input {...getInputProps()} />
                <p>{isDragActive ? 'Lasă fișierul aici...' : 'Trage o imagine sau click pentru a selecta'}</p>
            </div>

            {/* Previzualizare imagine incarcata */}
            {file && (
                <div className="mt-3 text-center">
                    <h5 className="text-white">{file.name}</h5>
                    <img src={preview} alt="Preview" className="img-fluid mt-2 rounded" style={{ maxHeight: '300px' }} />
                </div>
            )}

            {/* Afisare status procesare Mathpix */}
            {loading && <p className="text-warning mt-3">Se procesează imaginea în Mathpix...</p>}

            {/* Text OCR si buton GPT */}
            {mathpixResult && !loading && (
                <div className="mt-4">
                    <h6>Rezultat OCR (editabil):</h6>
                    <textarea
                        className="form-control"
                        rows={8}
                        value={mathpixResult}
                        onChange={(e) => setMathpixResult(e.target.value)}
                    />
                    <button className="btn btn-primary mt-3" onClick={sendToGpt} disabled={submittingToGpt}>
                        {submittingToGpt ? 'Se trimite la modelul de limbaj' : 'Trimite la modelul de limbaj'}
                    </button>
                </div>
            )}

            {/* Raspuns GPT randat cu LaTeXOutput */}
            {typeof gptResponse === 'string' && gptResponse.trim() !== '' && (
                <div className="mt-4">
                    <div className="text-center">
                        <h6 className="text-light">Răspunsul modelului de limbaj (randat):</h6>
                    </div>
                    <div
                        style={{
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #ccc',
                            maxHeight: '80vh',
                            minHeight: '400px',
                            overflowY: 'auto',
                            whiteSpace: 'pre-wrap',
                            fontSize: '1.1rem',
                            lineHeight: '1.75',
                            width: '100%'
                        }}
                    >
                        <LatexOutput gptText={gptResponse} />
                    </div>
                </div>
            )}

            {/* Eroare fisier invalid */}
            {fileRejections.length > 0 && (
                <div className="mt-3 text-danger">
                    <strong>Fișier respins:</strong>
                    <ul>
                        {fileRejections.map(({ file, errors }) => (
                            <li key={file.name}>
                                {file.name}
                                <ul>
                                    {errors.map(e => <li key={e.code}>{e.message}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
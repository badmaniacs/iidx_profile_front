import { domToPng } from 'modern-screenshot';

export const captureComponent = async (
  captureRef: React.RefObject<HTMLDivElement>,
) => {
  if (!captureRef.current) return;

  const div = captureRef.current;

  const imageDataURL = await domToPng(div, {quality:1, scale:1.2});

  const a = document.createElement('a');
  a.href = imageDataURL;
  a.download = 'captured_image.png';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

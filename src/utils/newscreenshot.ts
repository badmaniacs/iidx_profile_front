import html2canvas from 'html2canvas';

export const captureComponent = async (
  captureRef: React.RefObject<HTMLDivElement>,
) => {
  if (!captureRef.current) return;

  const div = captureRef.current;
  const canvas = await html2canvas(div, {
    scale: 1,
    allowTaint: true,
    backgroundColor: '#18181B',
    useCORS: true,
  });

  const imageDataURL = canvas.toDataURL('image/png');

  const a = document.createElement('a');
  a.href = imageDataURL;
  a.download = 'captured_image.png';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

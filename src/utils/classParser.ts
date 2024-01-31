export const classParser = (classtype: string) => {
  let classstyle;
  switch (classtype) {
    case '皆伝':
      classstyle = 'font-outline-kaiden';
      break;
    case '中伝':
      classstyle = 'font-outline-chuden';
      break;
    case '十段':
      classstyle = 'font-outline-reddan';
      break;
    case '九段':
      classstyle = 'font-outline-reddan';
      break;
    case '八段':
      classstyle = 'font-outline-bluedan';
      break;
    case '七段':
      classstyle = 'font-outline-bluedan';
      break;
    default:
      classstyle = '';
      break;
  }

  return classstyle;
};

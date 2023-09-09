import { songdata } from './songdata';

export const rankParser = (
  title: string,
  difficulty: string,
  playtype: string,
  score: number,
) => {
  let index = -1;
  switch (playtype) {
    case 'SP':
      switch (difficulty) {
        case 'NOVICE':
          index = 2;
          break;
        case 'NORMAL':
          index = 3;
          break;
        case 'HYPER':
          index = 4;
          break;
        case 'ANOTHER':
          index = 5;
          break;
        case 'LEGGENDARIA':
          index = 6;
          break;
      }
      break;
    case 'DP':
      switch (difficulty) {
        case 'NOVICE':
          index = 7;
          break;
        case 'NORMAL':
          index = 8;
          break;
        case 'HYPER':
          index = 9;
          break;
        case 'ANOTHER':
          index = 10;
          break;
        case 'LEGGENDARIA':
          index = 11;
          break;
      }
  }
  if (songdata[title]) {
    const notes = songdata[title][index] as number;

    const maxScore = notes * 2;

    let rank: string;
    if (score >= maxScore * 0.8889) {
      rank = 'AAA';
    } else if (score >= maxScore * 0.7778) {
      rank = 'AA';
    } else if (score >= maxScore * 0.6667) {
      rank = 'A';
    } else if (score >= maxScore * 0.5556) {
      rank = 'B';
    } else if (score >= maxScore * 0.4444) {
      rank = 'C';
    } else if (score >= maxScore * 0.3333) {
      rank = 'D';
    } else if (score >= maxScore * 0.2222) {
      rank = 'E';
    } else {
      rank = 'F';
    }

    let scoreConversion: string;
    if (score >= maxScore * 0.9444) {
      scoreConversion = `MAX-${maxScore - score}`;
    } else if (score >= maxScore * 0.8889) {
      scoreConversion = `AAA+${score - Math.ceil(maxScore * 0.8889)}`;
    } else if (score >= maxScore * 0.8333) {
      scoreConversion = `AAA-${Math.ceil(maxScore * 0.8889) - score}`;
    } else if (score >= maxScore * 0.7778) {
      scoreConversion = `AA+${score - Math.ceil(maxScore * 0.7778)}`;
    } else if (score >= maxScore * 0.7222) {
      scoreConversion = `AA-${Math.ceil(maxScore * 0.7778 - score)}`;
    } else if (score >= maxScore * 0.6667) {
      scoreConversion = `A+${score - Math.ceil(maxScore * 0.6667)}`;
    } else if (score >= maxScore * 0.6111) {
      scoreConversion = `A-${Math.ceil(maxScore * 0.6667) - score}`;
    } else if (score >= maxScore * 0.5556) {
      scoreConversion = `B+${score - Math.ceil(maxScore * 0.5556)}`;
    } else if (score >= maxScore * 0.5) {
      scoreConversion = `B-${Math.ceil(maxScore * 0.5556) - score}`;
    } else if (score >= maxScore * 0.4444) {
      scoreConversion = `C+${score - Math.ceil(maxScore * 0.4444)}`;
    } else if (score >= maxScore * 0.3889) {
      scoreConversion = `C-${Math.ceil(maxScore * 0.4444) - score}`;
    } else if (score >= maxScore * 0.3333) {
      scoreConversion = `D+${score - Math.ceil(maxScore * 0.3333)}`;
    } else if (score >= maxScore * 0.2778) {
      scoreConversion = `D-${Math.ceil(maxScore * 0.3333) - score}`;
    } else if (score >= maxScore * 0.2222) {
      scoreConversion = `E+${score - Math.ceil(maxScore * 0.2222)}`;
    } else if (score >= maxScore * 0.1111) {
      scoreConversion = `E-${Math.ceil(maxScore * 0.2222) - score}`;
    } else {
      scoreConversion = `F+${score}`;
    }

    return { rank, scoreConversion };
  } else {
    false;
  }
};

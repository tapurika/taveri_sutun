// NOTE: This file should not be edited
// see https://nextjs.org/docs/pages/api-reference/config/typescript for more information.
declare type strOrStrArr = string | string[];

declare interface IWord {
  w: string;
  m: strOrStrArr;
  d?: strOrStrArr;
}

declare interface IProverbCard {
  proverb: strOrStrArr;
  mean: strOrStrArr;
  description: strOrStrArr;
  irony: strOrStrArr;
  reference: {
    writer: string;
    book: string;
  };
  words: IWord[] | string[];
  p_equal: strOrStrArr;
  subjects: string[];
}

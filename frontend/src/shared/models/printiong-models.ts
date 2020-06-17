import { Print } from '../printing';
import { Currency } from '../enums';
export interface PrintingEdition{
    title: string;
    description: string;
    cover_image: string;
    type: Print;
    price: number;
    currency: Currency;
    author_ids: Array<string>;
}
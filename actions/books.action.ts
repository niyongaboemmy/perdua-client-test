export interface BookInterface {}
export interface RegisterBookData {
  language_id: string;
  category_id: string;
  publisher_id: string;
  title: string;
  short_description: string;
  isbn: string;
  num_pages: string;
  book_cover: File | null;
  availability: BookAvailability;
  publication_date: string;
  author_id: string;
  price: number;
}

export enum ImageFolder {
  cover = "cover",
  author = "author",
}
export enum BookAvailability {
  IN_STOCK = "IN_STOCK",
  OUT_STOCK = "OUT_STOCK",
}

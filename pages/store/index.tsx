import React, { Component } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { ProductsList } from "./components/ProductsList";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import Book6 from "../../assets/books/book6.jpg";
import { SideNavFilter } from "./components/SideNavFilter";

export interface BookDetailsInterface {
  book_id: string;
  title: string;
  description: string;
  photo: any;
  price: number;
}

interface BookStoreProps {}
interface BookStoreState {
  loading_page: boolean;
  loading_data: boolean;
  success: string;
  error: string;
  showLeftNav: boolean;
  showRightNav: boolean;
  books_categories: { id: string; name: string }[] | null;
  selected_book_category: { id: string; name: string } | null;
  books: BookDetailsInterface[] | null;
}

export const books_list_temp: BookDetailsInterface[] = [
  {
    book_id: "1",
    title: "Elephant's shame",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book1,
    price: 2500,
  },
  {
    book_id: "2",
    title: "The potbellied frog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book2,
    price: 2100,
  },
  {
    book_id: "3",
    title: "Goody in the desert",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book3,
    price: 1000,
  },
  {
    book_id: "4",
    title: "Kapi and his friends",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book4,
    price: 5000,
  },
  {
    book_id: "5",
    title: "Kapi and giant bird",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book5,
    price: 5000,
  },
  {
    book_id: "6",
    title: "Arabic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book6,
    price: 5000,
  },
  {
    book_id: "7",
    title: "Elephant's shame",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book1,
    price: 2500,
  },
  {
    book_id: "8",
    title: "The potbellied frog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book2,
    price: 2100,
  },
  {
    book_id: "9",
    title: "Goody in the desert",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book3,
    price: 1000,
  },
  {
    book_id: "10",
    title: "Kapi and his friends",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia officiis totam quis odio iure. Cupiditate vel ab architecto. Aliquam praesentium eaque saepe iste ducimus eveniet unde minus cum optio asperiores.",
    photo: Book4,
    price: 5000,
  },
];

class BookStore extends Component<BookStoreProps, BookStoreState> {
  constructor(props: BookStoreProps) {
    super(props);

    this.state = {
      loading_page: false,
      loading_data: false,
      error: "",
      success: "",
      showLeftNav: true,
      showRightNav: false,
      books_categories: [
        {
          id: "1",
          name: "Adventure stories",
        },
        {
          id: "2",
          name: "Classics",
        },
        {
          id: "3",
          name: "Fairy tales, fables, and folk tales",
        },
        {
          id: "4",
          name: "Historical fiction",
        },
        {
          id: "5",
          name: "Women’s fiction",
        },
      ],
      selected_book_category: {
        id: "2",
        name: "Classics",
      },
      books: books_list_temp,
    };
  }
  componentDidMount(): void {}
  render() {
    return (
      <PageContainer page_title="Books store | Perdua Publishers Ltd">
        <div className="pt-20 px-2 md:px-4">
          <div className="grid grid-cols-12 gap-4">
            <div className={`col-span-12 lg:col-span-3`}>
              {this.state.books_categories !== null && (
                <SideNavFilter
                  books_categories={this.state.books_categories}
                  selected_book_category={this.state.selected_book_category}
                  onSelect_book_category={(data: {
                    id: string;
                    name: string;
                  }) => {
                    this.setState({ selected_book_category: data });
                  }}
                />
              )}
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="bg-white rounded-lg p-3 min-h-screen mb-3">
                {this.state.books !== null &&
                  this.state.selected_book_category !== null && (
                    <ProductsList
                      books={this.state.books}
                      selected_books_category={
                        this.state.selected_book_category
                      }
                    />
                  )}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default BookStore;

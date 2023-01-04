import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import { ImBook } from "react-icons/im";
import { RiSearchLine } from "react-icons/ri";
import { BookDetailsInterface } from "..";
import { BookItem } from "../../../components/BookItem/BookItem";
import { commaFy, search } from "../../../utils/functions";

interface ProductsListProps {
  books: BookDetailsInterface[];
  selected_books_category: {
    id: string;
    name: string;
  };
}
interface ProductsListState {
  search_data: string;
}

export class ProductsList extends Component<
  ProductsListProps,
  ProductsListState
> {
  constructor(props: ProductsListProps) {
    super(props);

    this.state = {
      search_data: "",
    };
  }
  render() {
    return (
      <div>
        <div>
          <div className="flex flex-row items-center justify-between gap-3 w-full">
            <div className="mb-3 flex flex-row items-center gap-2">
              <div>
                <ImBook className="text-2xl text-green-600" />
              </div>
              <div className="text-xl font-bold px-2">
                {this.props.selected_books_category.name}
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <div className="font-semibold text-gray-500">Total books:</div>
              <div className="font-bold text-lg bg-gray-100 px-2 rounded-md">
                {commaFy(this.props.books.length)}
              </div>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full bg-gray-100 rounded-md px-3 py-2 pl-12"
              placeholder="Search . . ."
              value={this.state.search_data}
              onChange={(e) => this.setState({ search_data: e.target.value })}
            />
            <div className="absolute top-2 left-2">
              <RiSearchLine className="text-2xl" />
            </div>
          </div>
        </div>
        {/* Products list */}
        <div className="grid grid-cols-12 gap-3 w-full mt-5">
          {(
            search(
              this.props.books,
              this.state.search_data
            ) as BookDetailsInterface[]
          ).length === 0 ? (
            <div className="col-span-12 font-light text-xl p-6 text-center rounded-md my-3 bg-gray-100 animate__animated animate__shakeX">
              No books found!
            </div>
          ) : (
            (
              search(
                this.props.books,
                this.state.search_data
              ) as BookDetailsInterface[]
            ).map((item, i) => (
              <Link
                href={`/book_details?book=${item.book_id}&product_title=${item.title}&product_image=${item.photo}`}
                key={i + 1}
                className={`col-span-6 md:col-span-3 lg:col-span-2`}
              >
                <BookItem item={item} onClick={() => {}} />
              </Link>
            ))
          )}
        </div>
      </div>
    );
  }
}

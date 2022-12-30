import Image, { StaticImageData } from "next/image";
import React, { Component } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowRight, BsStarHalf } from "react-icons/bs";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import Book6 from "../../assets/books/book6.jpg";
import Container from "../Container/Container";

interface NewBooksProps {}
interface NewBooksState {}

export class NewBooks extends Component<NewBooksProps, NewBooksState> {
  render() {
    const books_list: {
      title: string;
      description: string;
      photo: StaticImageData;
      price: number;
    }[] = [
      {
        title: "Elephant's shame",
        description: "",
        photo: Book1,
        price: 2500,
      },
      {
        title: "The potbellied frog",
        description: "",
        photo: Book2,
        price: 2100,
      },
      {
        title: "Goody in the desert",
        description: "",
        photo: Book3,
        price: 1000,
      },
      {
        title: "Kapi and his friends",
        description: "",
        photo: Book4,
        price: 5000,
      },
      {
        title: "Kapi and giant bird",
        description: "",
        photo: Book5,
        price: 5000,
      },
      {
        title: "Arabic",
        description: "",
        photo: Book6,
        price: 5000,
      },
    ];
    return (
      <div className="py-20 bg-white mt-12 md:mt-0">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-10">
            <div>
              <div className="text-3xl font-bold">Discover Your Next Book</div>
              <div className="text-gray-500 text-sm">
                List of recently added books you can read. Select your
                preference
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center justify-center gap-2 bg-gray-100 hover:bg-green-100 hover:text-green-700 p-2 px-4 font-light rounded-md text-lg cursor-pointer w-max">
                <span>View all books</span>
                <div>
                  <BsArrowRight className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {books_list.map((book, i) => (
              <div
                key={i + 1}
                className="col-span-6 md:col-span-4 lg:col-span-2 group cursor-pointer relative"
              >
                <Image
                  src={book.photo}
                  alt={book.title}
                  className="rounded-xl group-hover:shadow"
                />
                <div className="mt-2 truncate group-hover:text-green-600">
                  {book.title}
                </div>
                <div className="flex flex-row items-center gap-0">
                  <div>
                    <AiFillStar className="text-lg text-yellow-400" />
                  </div>
                  <div>
                    <AiFillStar className="text-lg text-yellow-400" />
                  </div>
                  <div>
                    <BsStarHalf className="text-lg text-yellow-400" />
                  </div>
                  <div>
                    <AiOutlineStar className="text-lg text-gray-400" />
                  </div>
                  <div>
                    <AiOutlineStar className="text-lg text-gray-400" />
                  </div>
                </div>
                {/* <div className="hidden rounded group-hover:flex flex-row justify-between gap-2 group-hover:text-green-700 font-bold border-t mt-2 pt-2">
                  <span>View details</span>
                  <div></div>
                </div> */}
                <div className="bg-green-600 h-3 w-3 rounded-full absolute top-0 right-0 -mt-1 -mr-1 animate-ping"></div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

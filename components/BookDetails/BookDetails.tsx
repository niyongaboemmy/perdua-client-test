import Image from "next/image";
import React, { Component } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsCheckCircleFill,
  BsStarHalf,
} from "react-icons/bs";
import { BookDetailsInterface, books_list_temp } from "../../pages/store";
import { commaFy } from "../../utils/functions";
import Container from "../Container/Container";
import ADS_IMAGE from "../../assets/catalogue.jpeg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BookReview } from "./BookReview";
import Link from "next/link";
import { BookItem } from "../BookItem/BookItem";

interface BookDetailsProps {
  book_details: BookDetailsInterface;
}

interface BookDetailsState {
  book_review: boolean;
}

export class BookDetails extends Component<BookDetailsProps, BookDetailsState> {
  constructor(props: BookDetailsProps) {
    super(props);

    this.state = {
      book_review: false,
    };
  }
  render() {
    return (
      <Container>
        <div className="mb-8">
          <div className="grid grid-cols-12 gap-0 bg-white rounded-lg overflow-hidden">
            <div className="col-span-4 bg-gray-100">
              <Image
                src={this.props.book_details.photo}
                alt={this.props.book_details.title}
              />
            </div>
            <div className="col-span-8 p-3 md:p-6 bg-white">
              <div className="flex flex-row items-center gap-2">
                <div>
                  <div className="bg-gray-100 hover:bg-green-700 hover:text-white rounded-full flex items-center justify-center h-10 w-10 cursor-pointer">
                    <BsArrowLeft className="text-2xl" />
                  </div>
                </div>
                <div className="text-2xl font-bold">
                  {this.props.book_details.title}
                </div>
              </div>
              <div className="my-2">{this.props.book_details.description}</div>
              <div className="my-4">
                <div className="font-semibold">Availability</div>
                <div className="bg-green-100 w-max p-2 pr-3 text-sm rounded-md text-green-800 font-semibold flex flex-row items-center justify-center gap-2">
                  <div>
                    <BsCheckCircleFill className="text-xl" />
                  </div>
                  <span>In stock</span>
                </div>
              </div>
              <div className="my-4 mb-0">
                <div className="font-semibold text-gray-500">
                  Book unit price
                </div>
                <div className="text-3xl font-bold -mt-1">
                  <span className="text-2xl">RWF </span>
                  {commaFy(this.props.book_details.price)}
                </div>
              </div>
              <div className="border-b py-2"></div>
              {this.state.book_review === false ? (
                <div>
                  <div className="flex flex-row items-center gap-2 w-full mt-3">
                    <div>Book Reviews</div>
                    <div>
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
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2 mt-3">
                    <Link
                      href={"/contact"}
                      className="bg-gray-100 rounded-md px-3 py-2 w-max font-normal cursor-pointer hover:bg-green-700 hover:text-white border border-gray-100 hover:border-green-700"
                    >
                      Contact Us
                    </Link>
                    <div
                      onClick={() => this.setState({ book_review: true })}
                      className="bg-white rounded-md px-3 py-2 w-max font-normal cursor-pointer hover:bg-green-700 hover:text-white border border-gray-300 hover:border-green-700"
                    >
                      Submit review
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  <BookReview
                    book_details={this.props.book_details}
                    onClose={() => this.setState({ book_review: false })}
                  />
                </div>
              )}
            </div>
            {/* <div className="col-span-2 px-3">
              <div className="bg-white h-full">
                <Image src={ADS_IMAGE} alt="" />
              </div>
            </div> */}
          </div>
          {/* Related products */}
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-9">
              <div className="bg-white rounded-md p-2">
                <div className="flex flex-row items-center justify-between gap-2">
                  <div className="text-xl font-bold ml-3">
                    Related books for reading
                  </div>
                  <div>
                    <Link
                      href={"/store"}
                      className="flex flex-row items-center justify-end gap-3 bg-gray-100 rounded-md w-max px-3 py-2 cursor-pointer hover:bg-green-600 hover:text-white"
                    >
                      <div>Visit the store</div>
                      <div>
                        <BsArrowRight className="text-xl" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12 gap-3">
                    {books_list_temp.map((item, i) => (
                      <Link
                        key={i + 1}
                        href={`/book_details?book=${item.book_id}&product_title=${item.title}&product_image=${item.photo}`}
                        className={`col-span-2`}
                      >
                        <BookItem
                          item={item}
                          onClick={() => {}}
                          hide_price={true}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 overflow-hidden">
              <div className="bg-white rounded-md p-2 h-full">
                <div>
                  <Image src={ADS_IMAGE} alt="" className="w-full rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

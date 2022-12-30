import React, { Component } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiChevronsLeft } from "react-icons/fi";
import { ImRadioUnchecked } from "react-icons/im";

interface sideNavFilterProps {
  books_categories: { id: string; name: string }[];
  selected_book_category: { id: string; name: string } | null;
  onSelect_book_category: (data: { id: string; name: string }) => void;
}
interface sideNavFilterState {}

export class SideNavFilter extends Component<
  sideNavFilterProps,
  sideNavFilterState
> {
  render() {
    return (
      <div className="">
        <div className="bg-white rounded-lg p-4">
          <div className="flex flex-row items-center gap-3">
            <div>
              <div className="flex items-center justify-center h-9 w-9 rounded-full cursor-pointer bg-gray-100 hover:bg-yellow-600 hover:text-white">
                <FiChevronsLeft className="text-2xl" />
              </div>
            </div>
            <div className="font-semibold">Books categories</div>
          </div>
          {/* Data here */}
          <div className="mt-3">
            {this.props.books_categories.map((item, i) => (
              <div
                key={i + 1}
                className={`flex flex-row items-center gap-3 w-full p-2 mb-2 cursor-pointer rounded-lg ${
                  this.props.selected_book_category !== null &&
                  this.props.selected_book_category.id === item.id
                    ? "bg-green-50 text-green-700 font-semibold animate__animated animate__zoomIn"
                    : "bg-gray-50 hover:bg-green-50 hover:text-green-700"
                } group`}
                onClick={() => {
                  this.props.onSelect_book_category(item);
                }}
              >
                <div>
                  {this.props.selected_book_category !== null &&
                  this.props.selected_book_category.id === item.id ? (
                    <BsCheckCircleFill className="text-xl text-green-700" />
                  ) : (
                    <ImRadioUnchecked className="text-xl group-hover:text-green-700" />
                  )}
                </div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

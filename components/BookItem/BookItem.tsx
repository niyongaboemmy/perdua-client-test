import Image from "next/image";
import React, { Component } from "react";
import { BookDetailsInterface } from "../../pages/store";
import { commaFy } from "../../utils/functions";

interface BookItemProps {
  item: BookDetailsInterface;
  hide_title?: boolean;
  hide_price?: boolean;
  onClick: () => void;
}
interface BookItemState {}

export class BookItem extends Component<BookItemProps, BookItemState> {
  render() {
    return (
      <div
        title={`${this.props.item.title} - ${commaFy(this.props.item.price)}`}
        className={`cursor-pointer bg-white rounded-lg group border border-white hover:border-green-600 animate__animated animate__fadeIn`}
        onClick={this.props.onClick}
      >
        <div
          className="mb-2 overflow-hidden bg-gray-100 rounded-md group-hover:rounded-b-none"
          style={{ minHeight: "180px" }}
        >
          <Image
            src={this.props.item.photo}
            alt={this.props.item.title}
            className={`w-full rounded-md group-hover:rounded-b-none`}
          />
        </div>
        <div className="p-3 pt-0">
          <div className="flex flex-col">
            {this.props.hide_title !== true && (
              <div className="text-sm">{this.props.item.title}</div>
            )}
            {this.props.hide_price !== true && (
              <div className="text-xl font-bold -mt-1 text-gray-800 group-hover:text-green-600">
                <span className="text-base">RWF</span>{" "}
                {commaFy(this.props.item.price)}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

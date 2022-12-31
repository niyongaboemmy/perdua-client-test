import React, { Component } from "react";
import { BsImage } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { connect } from "react-redux";
import {
  Auth,
  BookCategory,
  BookLanguage,
  BookPublishers,
  GetBookCategoryById,
  GetBookLanguageById,
  GetBookPublisherById,
  SystemBasicInfoData,
} from "../../actions";
import { BookAvailability } from "../../actions/books.action";
import { StoreState } from "../../reducers";
import { Alert } from "../Alert/Alert";
import FilePreview from "../FilePreview/FilePreview";
import Button from "../FormItems/Button";
import Loading from "../Loading/Loading";
import SelectCustom from "../SelectCustom/SelectCustom";

interface RegisterBookFormProps {
  auth: Auth;
  systemBasicInfo: SystemBasicInfoData;
}
interface RegisterBookFormState {
  loading_form: boolean;
  language_id: string;
  category_id: string;
  publisher_id: string;
  title: string;
  short_description: string;
  isbn: string;
  num_pages: string;
  book_cover: File | null;
  availability: BookAvailability | null;
  publication_date: string;
  author_id: string[];
  price: string;
  error: {
    target:
      | "language_id"
      | "category_id"
      | "publisher_id"
      | "title"
      | "short_description"
      | "isbn"
      | "num_pages"
      | "book_cover"
      | "availability"
      | "publication_date"
      | "author_id"
      | "price"
      | "main";
    msg: string;
  } | null;
  success: string;
  // ----------
  openSelectLanguage: boolean;
  openSelectCategory: boolean;
  openSelectPublisher: boolean;
}

class _RegisterBookForm extends Component<
  RegisterBookFormProps,
  RegisterBookFormState
> {
  constructor(props: RegisterBookFormProps) {
    super(props);

    this.state = {
      loading_form: false,
      language_id: "",
      category_id: "",
      publisher_id: "",
      title: "",
      short_description: "",
      isbn: "",
      num_pages: "",
      book_cover: null,
      availability: null,
      publication_date: "",
      author_id: [],
      price: "",
      error: null,
      success: "",
      // ----------
      openSelectLanguage: false,
      openSelectCategory: false,
      openSelectPublisher: false,
    };
  }
  FC_SubmitBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.language_id === "") {
      return this.setState({
        error: {
          target: "language_id",
          msg: "Please select book language",
        },
      });
    }
    if (this.state.category_id === "") {
      return this.setState({
        error: {
          target: "category_id",
          msg: "Please select book category",
        },
      });
    }
    if (this.state.title === "") {
      return this.setState({
        error: {
          target: "title",
          msg: "Please provide book title",
        },
      });
    }
    if (this.state.price === "") {
      return this.setState({
        error: {
          target: "price",
          msg: "Please book price is required",
        },
      });
    }
    if (this.state.isbn === "") {
      return this.setState({
        error: {
          target: "isbn",
          msg: "Please type ISBN",
        },
      });
    }
    if (this.state.num_pages === "") {
      return this.setState({
        error: {
          target: "num_pages",
          msg: "Please type book pages number",
        },
      });
    }
    if (this.state.short_description === "") {
      return this.setState({
        error: {
          target: "short_description",
          msg: "Please provide the summary for the book",
        },
      });
    }
    if (this.state.publisher_id === "") {
      return this.setState({
        error: {
          target: "publisher_id",
          msg: "Please select the publisher",
        },
      });
    }
    if (this.state.publication_date === "") {
      return this.setState({
        error: {
          target: "publication_date",
          msg: "Please select publication date",
        },
      });
    }
    if (this.state.availability === null) {
      return this.setState({
        error: {
          target: "availability",
          msg: "Please select the availability status",
        },
      });
    }
    if (this.state.book_cover === null) {
      return this.setState({
        error: {
          target: "book_cover",
          msg: "Please select book cover image",
        },
      });
    }
    if (this.state.author_id.length === 0) {
      return this.setState({
        error: {
          target: "author_id",
          msg: "Please select the authors",
        },
      });
    }
  };
  render() {
    if (this.props.systemBasicInfo.basic_info === null) {
      return (
        <div className="pt-24">
          <Loading title="Loading, please wait.." className="bg-white" />
        </div>
      );
    }
    return (
      <div className="">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-8">
            <div className="bg-white rounded-md p-3">
              <form className="w-full" onSubmit={this.FC_SubmitBook}>
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col relative">
                      <span>Choose book language</span>
                      <div
                        onClick={() =>
                          this.setState({
                            openSelectLanguage: true,
                            error: null,
                          })
                        }
                        className={`${
                          this.state.error?.target === "language_id"
                            ? "border border-red-600 bg-white"
                            : "bg-gray-100"
                        } rounded-md pl-3 font-semibold w-full cursor-pointer h-10 flex flex-row items-center justify-between gap-2`}
                      >
                        <span>
                          {this.state.language_id !== "" &&
                          GetBookLanguageById(
                            this.state.language_id,
                            this.props.systemBasicInfo.basic_info
                          ) !== null
                            ? GetBookLanguageById(
                                this.state.language_id,
                                this.props.systemBasicInfo.basic_info
                              )?.language_name
                            : ""}
                        </span>
                        <div className="mr-2">
                          <MdKeyboardArrowDown className="text-2xl" />
                        </div>
                      </div>
                      {this.state.openSelectLanguage === true && (
                        <div className="absolute top-6 right-0 left-0 animate__animated animate__zoomIn animate__faster">
                          <SelectCustom
                            loading={this.state.loading_form}
                            id={"language_id"}
                            title={"language_name"}
                            close={() =>
                              this.setState({ openSelectLanguage: false })
                            }
                            data={
                              this.props.systemBasicInfo.basic_info.languages
                            }
                            click={(data: BookLanguage) => {
                              this.setState({
                                language_id: data.language_id,
                                openSelectLanguage: false,
                              });
                            }}
                          />
                        </div>
                      )}
                      {this.state.error?.target === "language_id" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* -------------------------------------- */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col relative">
                      <span>Choose book category</span>
                      <div
                        onClick={() =>
                          this.setState({
                            openSelectCategory: true,
                            error: null,
                          })
                        }
                        className={`${
                          this.state.error?.target === "category_id"
                            ? "border border-red-600 bg-white"
                            : "bg-gray-100"
                        } rounded-md pl-3 font-semibold w-full cursor-pointer h-10 flex flex-row items-center justify-between gap-2`}
                      >
                        <span>
                          {this.state.category_id !== "" &&
                          GetBookCategoryById(
                            this.state.category_id,
                            this.props.systemBasicInfo.basic_info
                          ) !== null
                            ? GetBookCategoryById(
                                this.state.category_id,
                                this.props.systemBasicInfo.basic_info
                              )?.category_name
                            : ""}
                        </span>
                        <div className="mr-2">
                          <MdKeyboardArrowDown className="text-2xl" />
                        </div>
                      </div>
                      {this.state.openSelectCategory === true && (
                        <div className="absolute top-6 right-0 left-0 animate__animated animate__zoomIn animate__faster">
                          <SelectCustom
                            loading={this.state.loading_form}
                            id={"category_id"}
                            title={"category_name"}
                            close={() =>
                              this.setState({ openSelectCategory: false })
                            }
                            data={
                              this.props.systemBasicInfo.basic_info.categories
                            }
                            click={(data: BookCategory) => {
                              this.setState({
                                category_id: data.category_id,
                                openSelectCategory: false,
                              });
                            }}
                          />
                        </div>
                      )}
                      {this.state.error?.target === "category_id" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* -------------------------------------- */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col">
                      <span>Book Title</span>
                      <input
                        type="text"
                        className={`${
                          this.state.error?.target === "title"
                            ? "border border-red-600"
                            : ""
                        } bg-gray-100 rounded-md px-3 py-2 w-full font-semibold`}
                        value={this.state.title}
                        onChange={(e) =>
                          this.setState({ title: e.target.value, error: null })
                        }
                      />
                      {this.state.error?.target === "title" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* ---------------------------------------------- */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col">
                      <span>Book price</span>
                      <input
                        type="string"
                        className={`${
                          this.state.error?.target === "price"
                            ? "border border-red-600"
                            : ""
                        } bg-gray-100 rounded-md px-3 py-2 w-full font-semibold`}
                        value={this.state.price}
                        onChange={(e) =>
                          this.setState({ price: e.target.value, error: null })
                        }
                      />
                      {this.state.error?.target === "price" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* ---------------------------------------------- */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col">
                      <span>Book ISBN</span>
                      <input
                        type="string"
                        className={`${
                          this.state.error?.target === "isbn"
                            ? "border border-red-600"
                            : ""
                        } bg-gray-100 rounded-md px-3 py-2 w-full font-semibold`}
                        value={this.state.isbn}
                        onChange={(e) =>
                          this.setState({ isbn: e.target.value, error: null })
                        }
                      />
                      {this.state.error?.target === "isbn" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* ---------------------------------------------- */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col">
                      <span>Book page numbers</span>
                      <input
                        type="string"
                        className={`${
                          this.state.error?.target === "num_pages"
                            ? "border border-red-600"
                            : ""
                        } bg-gray-100 rounded-md px-3 py-2 w-full font-semibold`}
                        value={this.state.num_pages}
                        onChange={(e) =>
                          this.setState({
                            num_pages: e.target.value,
                            error: null,
                          })
                        }
                      />
                      {this.state.error?.target === "num_pages" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* ---------------------------------------------- */}
                  <div className="col-span-12 lg:col-span-12">
                    <div className="flex flex-col">
                      <span>Book summary</span>
                      <textarea
                        className={`${
                          this.state.error?.target === "short_description"
                            ? "border border-red-600"
                            : ""
                        } bg-gray-100 rounded-md px-3 py-2 w-full font-semibold`}
                        value={this.state.short_description}
                        onChange={(e) =>
                          this.setState({
                            short_description: e.target.value,
                            error: null,
                          })
                        }
                      ></textarea>
                      {this.state.error?.target === "short_description" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* -------------------------------------- */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col relative">
                      <span>Choose book publisher</span>
                      <div
                        onClick={() =>
                          this.setState({
                            openSelectPublisher: true,
                            error: null,
                          })
                        }
                        className={`${
                          this.state.error?.target === "publisher_id"
                            ? "border border-red-600 bg-white"
                            : "bg-gray-100"
                        } rounded-md pl-3 font-semibold w-full cursor-pointer h-10 flex flex-row items-center justify-between gap-2`}
                      >
                        <span>
                          {this.state.publisher_id !== "" &&
                          GetBookPublisherById(
                            this.state.publisher_id,
                            this.props.systemBasicInfo.basic_info
                          ) !== null
                            ? GetBookPublisherById(
                                this.state.publisher_id,
                                this.props.systemBasicInfo.basic_info
                              )?.publisher_name
                            : ""}
                        </span>
                        <div className="mr-2">
                          <MdKeyboardArrowDown className="text-2xl" />
                        </div>
                      </div>
                      {this.state.openSelectPublisher === true && (
                        <div className="absolute top-6 right-0 left-0 animate__animated animate__zoomIn animate__faster">
                          <SelectCustom
                            loading={this.state.loading_form}
                            id={"publisher_id"}
                            title={"publisher_name"}
                            close={() =>
                              this.setState({ openSelectPublisher: false })
                            }
                            data={
                              this.props.systemBasicInfo.basic_info.publishers
                            }
                            click={(data: BookPublishers) => {
                              this.setState({
                                publisher_id: data.publisher_id,
                                openSelectPublisher: false,
                              });
                            }}
                          />
                        </div>
                      )}
                      {this.state.error?.target === "publisher_id" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ---------------------------------------------- */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col">
                      <span>Publication date</span>
                      <input
                        type="date"
                        className={`${
                          this.state.error?.target === "publication_date"
                            ? "border border-red-600"
                            : ""
                        } bg-gray-100 rounded-md px-3 py-2 w-full font-semibold`}
                        value={this.state.publication_date}
                        onChange={(e) =>
                          this.setState({
                            publication_date: e.target.value,
                            error: null,
                          })
                        }
                      />
                      {this.state.error?.target === "publication_date" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* ---------------------------------------------- */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col">
                      <span>Book availability</span>
                      <select
                        className={`${
                          this.state.error?.target === "availability"
                            ? "border border-red-600"
                            : ""
                        } bg-gray-100 rounded-md px-3 py-3 w-full font-semibold`}
                        value={
                          this.state.availability === null
                            ? ""
                            : this.state.availability
                        }
                        onChange={(e) =>
                          this.setState({
                            availability:
                              e.target.value !== ""
                                ? (e.target.value as BookAvailability)
                                : null,
                            error: null,
                          })
                        }
                      >
                        <option value=""></option>
                        <option value="IN_STOCK">In stock</option>
                        <option value="OUT_STOCK">Out of stock</option>
                      </select>
                      {this.state.error?.target === "availability" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* ---------------------------------------------- */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col">
                      <span>Book cover page photo</span>
                      <input
                        type="file"
                        className={`${
                          this.state.error?.target === "book_cover"
                            ? "border border-red-600"
                            : ""
                        } bg-gray-100 rounded-md px-3 py-1 w-full mt-1`}
                        onChange={(e) =>
                          this.setState({
                            book_cover:
                              e.target.files === null ||
                              e.target.files.length === 0
                                ? null
                                : e.target.files[0],
                            error: null,
                          })
                        }
                      />
                      {this.state.error?.target === "book_cover" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex flex-col">
                      <span>Book authors</span>
                      <div
                        className={`${
                          this.state.error?.target === "author_id"
                            ? "border border-red-600 bg-white"
                            : "bg-gray-100"
                        } rounded-md px-3 font-semibold w-full cursor-pointer h-10 flex flex-row items-center justify-between gap-2`}
                      >
                        {this.state.author_id.length > 0 && (
                          <span>Authors: {this.state.author_id.length}</span>
                        )}
                        {this.state.author_id.length > 0 && (
                          <div className="bg-white text-green-700 px-2 rounded-md text-sm">
                            View
                          </div>
                        )}
                      </div>
                      {this.state.error?.target === "book_cover" && (
                        <div className="mt-2">
                          <Alert
                            title="Invalid input"
                            description={this.state.error.msg}
                            type={"danger"}
                            onClose={() => this.setState({ error: null })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6 flex flex-row items-center justify-end">
                    <div className="mt-6">
                      <Button
                        title="Register book"
                        theme="success"
                        type="submit"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="bg-white rounded-md p-3 h-full">
              <div className="flex flex-row items-center gap-2">
                <div>
                  <BsImage className="text-2xl text-green-600" />
                </div>
                <div className="font-normal">Book cover preview</div>
              </div>
              {this.state.book_cover === null ? (
                <div
                  className="bg-gray-100 rounded-md mt-4"
                  style={{ minHeight: "300px" }}
                ></div>
              ) : (
                <div
                  className="animate__animated animate__zoomIn rounded-md mt-4 overflow-hidden"
                  style={{ minHeight: "300px" }}
                >
                  <FilePreview
                    isComponent={true}
                    selectedFile={this.state.book_cover}
                    onClose={() => {}}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  auth,
  systemBasicInfo,
}: StoreState): { auth: Auth; systemBasicInfo: SystemBasicInfoData } => {
  return { auth, systemBasicInfo };
};

export const RegisterBookForm = connect(mapStateToProps, {})(_RegisterBookForm);

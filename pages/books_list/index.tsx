import React, { Component } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { ProtectedPage } from "../../components/ProtectedPage/ProtectedPage";

interface BooksListProps {}
interface BooksListState {}

class BooksList extends Component<BooksListProps, BooksListState> {
  render() {
    return (
      <ProtectedPage>
        <div className="bg-white rounded-md p-2 md:p-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-center gap-3">
              <div>
                <MdLibraryBooks className="text-5xl text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">Books store catalogue</div>
                <div className="text-sm">
                  List of books and their description. Verify and publish them
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md border border-green-600 hover:bg-green-600 hover:text-white w-max px-3 py-2 font-semibold  cursor-pointer flex flex-row items-center justify-center gap-2">
              <div>
                <AiOutlineAppstoreAdd className="text-2xl" />
              </div>
              <span>Register new book</span>
            </div>
          </div>
          {/* Contents here */}
          <div>
            <div className="w-full overflow-x-auto mt-5">
              <div className="mb-4">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md bg-gray-100 w-full border border-gray-100"
                  placeholder="Search book by name..."
                />
              </div>
              <table className="text-sm text-left min-w-full">
                <thead>
                  <tr>
                    <th className="border px-3 py-2">#</th>
                    <th className="border px-3 py-2">Photo</th>
                    <th className="border px-3 py-2 truncate">Book title</th>
                    <th className="border px-3 py-2 truncate">Book author</th>
                    <th className="border px-3 py-2 truncate">Date</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </ProtectedPage>
    );
  }
}

export default BooksList;

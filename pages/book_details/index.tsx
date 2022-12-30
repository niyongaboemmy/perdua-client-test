import React from "react";
import { BookDetails } from "../../components/BookDetails/BookDetails";
import { useRouter } from "next/router";
import Container from "../../components/Container/Container";
import { RiErrorWarningFill } from "react-icons/ri";
import Link from "next/link";
import PageContainer from "../../components/PageContainer/PageContainer";
import { books_list_temp } from "../store";

const GetBookDetailsById = (book_id: string) => {
  const data = books_list_temp.find((itm) => itm.book_id === book_id);
  if (data !== undefined) {
    return data;
  }
  return null;
};

const BookDetailsPage = () => {
  const router = useRouter();
  const { book, product_title, product_image } = router.query;
  if (
    book === undefined ||
    product_title === undefined ||
    product_image === undefined
  ) {
    return (
      <div className="mt-20 pt-6">
        <Container>
          <div className="flex flex-col items-center justify-center gap-2 p-6 bg-white rounded-md animate__animated animate__shakeX">
            <div>
              <div>
                <RiErrorWarningFill className="text-7xl text-yellow-700 animate__animated animate__zoomIn" />
              </div>
            </div>
            <div className="text-3xl font-bold">Page Not Found!</div>
            <div className="text-gray-600">
              The page that you are trying to visit is not valid, Please make
              sure you visit the right page
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <Link
                href={"/"}
                className="bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 w-max font-bold"
              >
                Homepage
              </Link>
              <Link
                href={"/store"}
                className="bg-green-100 rounded-md px-4 py-2 w-max font-bold text-green-800 hover:bg-green-700 hover:text-white"
              >
                Visit book store
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <PageContainer
      page_title={`${product_title} | Perdua Publishers`}
      logo={product_image}
    >
      <div className="pt-20">
        {GetBookDetailsById(book as string) !== null && (
          <BookDetails book_details={GetBookDetailsById(book as string)!} />
        )}
      </div>
    </PageContainer>
  );
};

export default BookDetailsPage;

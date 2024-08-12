import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Container,
  Button,
  Pagination,
} from "react-bootstrap";
import articles from "../assets/data/articles.json"; // Pastikan path ini sesuai dengan lokasi file JSON Anda
import Card from "./card"; // Import komponen Card

const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    // Ambil dari localStorage jika ada
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage) : 1;
  });

  const [sortOrder, setSortOrder] = useState(() => {
    const savedSortOrder = localStorage.getItem("sortOrder");
    return savedSortOrder ? savedSortOrder : "latest";
  });

  const [itemsPerPage, setItemsPerPage] = useState(() => {
    const savedItemsPerPage = localStorage.getItem("itemsPerPage");
    return savedItemsPerPage ? parseInt(savedItemsPerPage) : 10;
  });

  // Gunakan useEffect untuk menyimpan state ke localStorage setiap kali state berubah
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem("sortOrder", sortOrder);
  }, [sortOrder]);

  useEffect(() => {
    localStorage.setItem("itemsPerPage", itemsPerPage);
  }, [itemsPerPage]);

  // Fungsi untuk sorting artikel
  const sortArticles = (articles) => {
    return articles.sort((a, b) => {
      if (sortOrder === "latest") {
        return new Date(b.date) - new Date(a.date); // Terbaru
      } else {
        return new Date(a.date) - new Date(b.date); // Terlama
      }
    });
  };

  // Artikel yang sudah di-sort
  const sortedArticles = sortArticles([...articles]);

  // Hitung total halaman
  const totalPages = Math.ceil(sortedArticles.length / itemsPerPage);

  // Tentukan artikel yang akan ditampilkan pada halaman saat ini
  const indexOfLastArticle = currentPage * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
  const currentArticles = sortedArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fungsi untuk mengubah urutan sort
  const handleSortChange = (order) => {
    setSortOrder(order);
    setCurrentPage(1); // Reset ke halaman pertama saat urutan berubah
  };

  // Fungsi untuk mengubah jumlah item per halaman
  const handleItemsPerPageChange = (items) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset ke halaman pertama saat jumlah item per halaman berubah
  };

  return (
    <>
      <Row className="mx-2">
        <Col>Showing 1-{itemsPerPage} of 50</Col>
        <Col md={3} className="d-flex align-items-center">
          <p className="mx-2 "> Sort by:</p>
          <DropdownButton
            id="dropdown-sort"
            title={`${sortOrder === "latest" ? "Latest" : "Oldest"}`}
            onSelect={handleSortChange}
            className="mb-3 rounded-5"
            rounded
          >
            <Dropdown.Item eventKey="latest">Latest</Dropdown.Item>
            <Dropdown.Item eventKey="oldest">Oldest</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col md={3} className="d-flex align-items-center">
          <p className="mx-2 ">Show per page:</p>
          <DropdownButton
            id="dropdown-items-per-page"
            title={` ${itemsPerPage}`}
            onSelect={handleItemsPerPageChange}
            className="mb-3"
          >
            <Dropdown.Item eventKey="10">10</Dropdown.Item>
            <Dropdown.Item eventKey="20">20</Dropdown.Item>
            <Dropdown.Item eventKey="50">50</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Container
        className="scroll-color flex-col overflow-auto"
        style={{ height: "650px" }}
      >
        <Row className="d-flex justify-content-center  ">
          {currentArticles.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </Row>
      </Container>
      <CustomPagination
        className="custom-page-item"
        totalPages={totalPages}
        paginate={paginate}
      />
    </>
  );
};

const CustomPagination = ({ totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="d-flex justify-content-center">
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          onClick={() => paginate(number)}
          className="custom-page-item m-2"
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};
export default ArticleList;

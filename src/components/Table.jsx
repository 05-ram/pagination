import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import data from '../data/Data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const TableComp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);


  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const nxtPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  const changePage = (n) => {
    setCurrentPage(n);
  }
  return (
    <Container>
      <Row>
        <Col>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                records.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          <div className="d-flex justify-content-end">
            <ul className='pagination'>
              <li className='page-item'>
                <a href="#" onClick={prePage} className='page-link'>
                  Prev
                </a>
              </li>

              {
                numbers.map((n, i) => (
                  < li className={`page-item  ${currentPage === n ? 'active' : ''}`} key={i}>
                    <a href="#" className='page-link' onClick={() => changePage(n)}>
                      {n}
                    </a>
                  </li>
                ))

              }


              <li className='page-item'>
                <a href="#" onClick={nxtPage} className='page-link'>
                  Next
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container >
  )
}

export default TableComp;


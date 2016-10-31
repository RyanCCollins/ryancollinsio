import React, { PropTypes } from 'react';
import Footer from 'grommet-udacity/components/Footer';
import { Pagination } from 'antd';

const PaginatorFooter = ({
  currentPage,
  total,
  onChange,
  pageSize,
}) => (
    <Footer align="center" justify="center" pad="large">
      <Pagination
        onChange={(newPage) => onChange(newPage)}
        defaultCurrent={1}
        pageSize={pageSize}
        current={currentPage}
        total={total}
      />
    </Footer>
);

PaginatorFooter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

PaginatorFooter.defaultProps = {
  pageSize: 6,
};

export default PaginatorFooter;

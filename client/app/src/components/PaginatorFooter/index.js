import React, { PropTypes } from 'react';
import { Pagination } from 'antd';
import StyledFooter from './styles';

const PaginatorFooter = ({
  currentPage,
  total,
  onChange,
  pageSize,
}) => (
  <StyledFooter align="center" justify="center" pad="large">
    <Pagination
      onChange={newPage => onChange(newPage)}
      defaultCurrent={1}
      pageSize={pageSize}
      current={currentPage}
      total={total}
    />
  </StyledFooter>
);

PaginatorFooter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
};

PaginatorFooter.defaultProps = {
  pageSize: 6,
};

export default PaginatorFooter;

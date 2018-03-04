import React from 'react';
import { connect } from 'dva';
import CountApp from '../components/CountApp';

function mapStateToProps(state) {
  return {count : state.count}
}

// export default Products;
export default connect(mapStateToProps)(CountApp);

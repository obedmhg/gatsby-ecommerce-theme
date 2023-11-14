import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      <img src='https://rovin.shop/cdn/shop/files/logo.png'/>
    </div>
  );
};

export default Brand;

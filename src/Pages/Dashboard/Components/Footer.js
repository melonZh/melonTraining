import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { 
  Layout
} from 'antd'


const {
  Footer
} = Layout

const FooterWrapper = props => {
 return (
  <Footer style={{textAlign: 'center'}}>
    Created by Melon
  </Footer>
 )
}





export default FooterWrapper
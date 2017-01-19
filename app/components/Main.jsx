import React, { PropTypes } from 'react';

const Main = props =>
   (
     <div>
       {props.children}
     </div>
  );

export default Main;

Main.propTypes = {
  children: PropTypes.node,
};

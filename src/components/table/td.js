import React from 'react';

const TD = (props) => {
  const editFun = (indexArray) => {
    // alert('Edit Text');
    console.log('index', indexArray);
    props.formShow(indexArray);
  };

  const conditionRender = () => { 
    if (props.text == 'Edit ✎') {
      return <td onClick={() => editFun(props.indexArray)}>{props.text}</td>;
    } else {
      return <td>{props.text}</td>;
      
    }
  };

  return conditionRender();
};

export default TD;

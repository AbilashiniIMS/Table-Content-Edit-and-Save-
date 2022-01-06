import React, { useState } from 'react';
import './table.css';
import TD from './td';
import From from './form';

const Table = (props) => {
  // console.log(props);

  //using state to show and hide from
  const [showFrom, setShowFrom] = useState(false);

  //stroe index
  const [indexStore, setIndexStore] = useState();

  //create new state for update props
  const [updateProps, setUpdateProps] = useState(props.data);

  //creating function for show from
  const showfrom_fun = (showIndex) => {
    // console.log(props.data[showIndex]);
    setShowFrom(true);
    setIndexStore(showIndex);
    setFormData(updateProps[showIndex]);
  };

  //creating function for hide from
  const hidefrom_fun = () => {
    setShowFrom(false);
  };

  //saveform creations
  const inputSaveform = (saveObj) => {
    // console.log(updateTable);
    //update table tr using updated props
    const updateTable = updateProps.map((newData, index) => {
      if (index === indexStore) {
        return (newData[index] = saveObj);
      }
      return newData;
    });
    setUpdateProps(updateTable);
    hidefrom_fun();
  };

  //using state for include index data in forms
  const [formdata, setFormData] = useState();

  return (
    <>
      {showFrom ? (
        <From
          saveformprops={(saveObj) => inputSaveform(saveObj)}
          showFromdatas={formdata}
          formHide={() => hidefrom_fun()}
        />
      ) : (
        ''
      )}
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
        {updateProps.map((obj, index) => {
          return (
            <tr>
              <TD text={obj.Company} />
              <TD text={obj.Contact} />
              <TD text={obj.Country} />
              <TD
                text="Edit ✎"
                indexArray={index}
                formShow={(showIndex) => showfrom_fun(showIndex)}
              />
            </tr>
          );
        })}
        {/* <tr>
        <TD text="Centro comercial Moctezuma" />
        <TD text="Francisco Chang" />
        <TD text="Mexico" />
      </tr> */}
      </table>
    </>
  );
};

export default Table;

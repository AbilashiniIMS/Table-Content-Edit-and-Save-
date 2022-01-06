import React, { useState } from 'react';

const From = (props) => {
  // console.log('props', props);
  const closeForm = () => {
    props.formHide(props);
  };

  // create state for edit input text all
  const [company, setCompany] = useState(props?.showFromdatas?.Company);
  const [contact, setContact] = useState(props?.showFromdatas?.Contact);
  const [country, setCountry] = useState(props?.showFromdatas?.Country);

  //submitForm
  const submitForm = () => {
    // console.log(company, contact, country);
    const saveObj = {
      Company: company,
      Contact: contact,
      Country: country,
    };
    props.saveformprops(saveObj);
  };
  return (
    <form>
      <label htmlFor="fname">Company:</label>
      <br />
      <input
        type="text"
        name="fname"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
      <br /> <br />
      <label htmlFor="contact">Contact:</label>
      <br />
      <input
        type="number"
        name="lname"
        onChange={(e) => setContact(e.target.value)}
        value={contact}
      />
      <br /> <br />
      <label htmlFor="country">Country:</label>
      <br />
      <input
        type="text"
        name="lname"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
      <br /> <br />
      <input type="button" value="Submit" onClick={submitForm} />
      <input type="button" value="close" onClick={closeForm} />
      <br /> <br />
    </form>
  );
};

export default From;

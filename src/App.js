import React from 'react';
import './style.css';
import Table from ' ./components/table/table';

const tableData = [
  {
    Company: 'Techdew',
    Contact: '12345678',
    Country: 'India',
  },
  {
    Company: 'TCS',
    Contact: '657788789',
    Country: 'UK',
  },
  {
    Company: 'CTS',
    Contact: '890934344',
    Country: 'Canada',
  },
];

function App() {
  return (
    <div style={{ width: '60%', margin: '30px auto' }}>
      <Table data={tableData} />
    </div>
  );
}
export default App;

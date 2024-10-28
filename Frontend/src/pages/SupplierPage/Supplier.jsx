import React from 'react';
import AddSupplierModal from './AddSupplier';

const Supplier = () => {
  return (
    <div className="h-screen p-4 relative">
      <AddSupplierModal />
      <div className="mt-16"> {/* Added margin-top to create space below the button */}
        <div className="flex w-full overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Where</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Supplier;

import React from 'react';
import Rows from './rows';

function MyTable() {
    const tableData = [
        { date: '2024-04-26', 
        description: 'Payment from Greenfield Foundation',
        category: 'Medicine', 
        amount: '80000'
      },
      { date: '2024-04-25', 
        description: 'Scholarship from the Luminary Institute', 
        category: 'Education', 
        amount: '50000' 
      },
      { date: '2024-04-24',
        description: 'Grant from the Wildlife Preservation Society',
        category: 'Environment', 
        amount: '60000'
      },
      { date: '2012-05-29', 
        description: 'New Shoes, Adidas', 
        category: 'Fashion', 
        amount: '2000'
      },
      { date: '2024-04-28', 
        description: 'Investment return from Solar Ventures', 
        category: 'Finance', 
        amount: '120000' 
      },
      { date: '2024-04-30', 
        description: 'Consultancy fee from Stark Industries', 
        category: 'Technology', 
        amount: '90000' 
      },
      { date: '2024-05-01', 
        description: 'Donation from the Music Foundation', 
        category: 'Arts', 
        amount: '70000' 
      },
      { date: '2024-05-02', 
        description: 'Sponsorship from the Sports Council', 
        category: 'Sports', 
        amount: '80000' 
      },
      { date: '2024-05-03', 
        description: 'Royalties from Book Sales', 
        category: 'Literature', 
        amount: '60000' 
      },
      { date: '2024-05-04', 
        description: 'Product sales revenue', 
        category: 'Business', 
        amount: '95000' 
      },
      { date: '2024-05-05', 
        description: 'Travel reimbursement', 
        category: 'Travel', 
        amount: '40000' 
      },
      { date: '2024-05-06', 
        description: 'Donation from the Charity Fund', 
        category: 'Charity', 
        amount: '55000' 
      },
      { date: '2024-05-07', 
        description: 'Salary payment from the Corporation', 
        category: 'Work', 
        amount: '100000' 
      },
      { date: '2024-05-08', 
        description: 'Advertisement revenue', 
        category: 'Marketing', 
        amount: '75000' 
      },
      { date: '2024-05-09', 
        description: 'Gift from a friend', 
        category: 'Personal', 
        amount: '3000' 
      },
      { date: '2024-05-10', 
        description: 'Consultation fee from a client', 
        category: 'Consulting', 
        amount: '45000' 
      },
      { date: '2024-05-11', 
        description: 'Insurance claim settlement', 
        category: 'Insurance', 
        amount: '85000' 
      },
      { date: '2024-05-12', 
        description: 'Donation from the Humanitarian Foundation', 
        category: 'Humanitarian', 
        amount: '60000' 
      },
      { date: '2024-05-13', 
        description: 'Dividend from Investment Portfolio', 
        category: 'Investment', 
        amount: '70000' 
      },
      { date: '2024-05-14', 
        description: 'Rent payment from Tenant', 
        category: 'Real Estate', 
        amount: '40000' 
      },
      { date: '2024-05-15', 
        description: 'Bonus from the Employer', 
        category: 'Employment', 
        amount: '120000' 
      },
      { date: '2024-05-16', 
        description: 'Donation from the Philanthropic Trust', 
        category: 'Philanthropy', 
        amount: '90000' 
      },
      { date: '2024-05-17', 
        description: 'Sales commission', 
        category: 'Sales', 
        amount: '60000' 
      },
      { date: '2024-05-18', 
        description: 'Fee for professional services rendered', 
        category: 'Professional Services', 
        amount: '55000' 
      },
      { date: '2024-05-19', 
        description: 'Subscription revenue', 
        category: 'Subscription', 
        amount: '35000' 
      },
      { date: '2024-05-20', 
        description: 'Reimbursement for travel expenses', 
        category: 'Expenses', 
        amount: '25000' 
      },
      { date: '2024-05-21', 
        description: 'Donation from the Community Foundation', 
        category: 'Community', 
        amount: '50000' 
      },
      { date: '2024-05-22', 
        description: 'Consulting fee from a client', 
        category: 'Consulting', 
        amount: '40000' 
      },
      { date: '2024-05-23', 
        description: 'Royalties from Intellectual Property', 
        category: 'Intellectual Property', 
        amount: '60000' 
      },
      { date: '2024-05-24', 
        description: 'Payment for freelance work', 
        category: 'Freelance', 
        amount: '35000' 
      },
      { date: '2024-05-25', 
        description: 'Donation from the Environmental Fund', 
        category: 'Environment', 
        amount: '45000' 
      }
    ];
 
    return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr class= "tabletitle">
          <th style={{ width: '20%' }} >Date</th>
          <th style={{ width: '40%' }} >Description</th>
          <th style={{ width: '20%' }} >Category</th>
          <th style={{ width: '20%' }}>Amount</th>
        </tr>
      </thead>
      <tbody class="table1">
     
       <Rows class="rows" data={tableData} ></Rows>
         </tbody>
    </table>
  );
}

export default MyTable;

const headings=['CreatedAt','Deleted','Text','Type','UpdatedAt','Used','User']
const datas = [{
    
    createdAt: "2018-01-15T21:20:00.003Z",
    deleted: false,
    text: "Cats make about 100 different sounds. Dogs make only about 10.",
    type: "cat",
    updatedAt: "2020-09-03T16:39:39.578Z",
    used: true,
    user: "5a9ac18c7478810ea6c06381"
  }, {
    
    createdAt: "2018-01-14T21:20:02.750Z",
    deleted: false,
    text: "Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.",
    type: "cat",
    updatedAt: "2020-08-26T20:20:02.359Z",
    used: true,
    user: "588e6e8806ac2b00110e59c3"
  }, {
    
    createdAt: "2018-02-25T21:20:03.060Z",
    deleted: false,
    text: "I don't know anything about cats.",
    type: "cat",
    updatedAt: "2020-08-23T20:20:01.611Z",
    used: false,
    user: "5887e9f65c873e001103688d"
  }, {
    
    createdAt: "2018-02-27T21:20:02.854Z",
    deleted: false,
    text: "The technical term for a cat’s hairball is a bezoar.",
    type: "cat",
    updatedAt: "2020-11-25T21:20:03.895Z",
    used: true,
    user: "5a9ac18c7478810ea6c06381"
  }, {
    createdAt: " ",
    deleted: false,
    text: "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    type: "cat",
    updatedAt: "2020-08-23T20:20:01.611Z",
    used: false,
    user: "58e007480aac31001185ecef"
  }]

const table = document.createElement('table');
const tablehead = document.createElement('thead');
const tablebody = document.createElement('tbody');
tablehead.setAttribute("id","thead")
tablehead.style="font-weight:bolder;text-align:center; background-color:darkgrey;";

table.appendChild(tablehead)
tablehead.append(...headingTag(headings))
tablebody.append(...renderRows(datas))
table.appendChild(tablebody);
document.body.appendChild(table)


function headingTag(data=[]){
    const newArr=[]
    for(i=0;i<data.length;i++){
    const tCell = document.createElement('td')
    tCell.innerText = headings[i]
    newArr.push(tCell)
    }
    return newArr
    }
 function renderRow(data = {}) {
        const tableRow = document.createElement('tr');
        const values = Object.values(data);
        for(let i = 0; i < values.length; i++) {
           const tableCell = document.createElement('td');
           tableCell.innerText = values[i];
           tableRow.append(tableCell);
        }
        return tableRow;
     }
     
function renderRows(data = []) {
        let rows = [];
        if(data.length > 0) {
          for(let i = 0; i < data.length; i++) {
             const item = renderRow(data[i]);
             rows.push(item);
          }
        }
        return rows;
    }

    fetch("https://cat-fact.herokuapp.com/facts")
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))

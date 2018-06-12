import React, { PureComponent } from "react";
import { Table } from "bloomer";

class ExampleTable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          name: "ID",
          attribute: "id"
        },
        {
          name: "First Name",
          attribute: "first_name"
        },
        {
          name: "Last Name",
          attribute: "last_name"
        },
        {
          name: "Full Name",
          attribute: "full_name"
        },
        {
          name: "Avatar",
          attribute: "avatar",
          render: row => <img src={row.avatar} alt={row.full_name} />
        }
      ],
      rows: []
    };

    // this.transformRows(props.rows);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   const { rows } = nextProps;
  //   console.log("transformRows", rows);
  //   const newRows = rows.map(({ id, first_name, last_name, avatar }) => ({
  //     id,
  //     first_name,
  //     last_name,
  //     avatar,
  //     full_name: `${last_name} ${first_name}`
  //   }));

  //   return { rows: newRows };
  // }

  componentWillMount() {
    this.setState(this.transformRows(this.props.rows));
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.transformRows(nextProps.rows));
  }

  transformRows(rows) {
    console.log("transformRows", rows);
    const newRows = rows.map(({ id, first_name, last_name, avatar }) => ({
      id,
      first_name,
      last_name,
      avatar,
      full_name: `${last_name} ${first_name}`
    }));

    return { rows: newRows };
  }

  render() {
    const { rows, columns } = this.state;

    if (rows.length === 0) {
      return <div>No Data or loading</div>;
    }

    return (
      <Table isBordered isStriped>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.attribute}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              {columns.map(column => (
                <td key={`${column.attribute}-${index}`}>
                  {column.render ? column.render(row) : row[column.attribute]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ExampleTable;

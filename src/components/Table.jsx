import React from 'react'

const Table = (props) => {
  return (
    <table>
      <thead>
        {props.columns.map((column) => (
          <th>{column}</th>
        ))}
      </thead>
      <tbody>
        {props.data.map((item) => {
          return (
            <tr>
              <td>{item.login}</td>
              <td>
                <img src={item.avatar_url} alt='avatar' width='100px' />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table

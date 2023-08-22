import React, {ReactNode} from 'react'
import {Text} from './Text'

type Header = {
  key: string
  value?: ReactNode
}

type Row = {
  key: string
  columns: Record<string, ReactNode>
}

type Props = {
  headers: Header[]
  rows: Row[]
}

export const Table = ({headers, rows}: Props) => {
  return (
    <div className="relative overflow-x-auto">
      {rows.length > 0 && (
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th key={header.key} scope="col" className="px-6 py-3">
                  {header.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              return (
                <tr key={row.key} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {row.columns[headers[0].key]}
                  </th>
                  {headers.slice(1).map((header) => (
                    <td key={header.key} className="px-6 py-4">
                      {row.columns[header.key]}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
      {rows.length === 0 && <Text>No items</Text>}
    </div>
  )
}

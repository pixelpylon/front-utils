import { ReactNode } from 'react'
import { Text } from './Text'
import cx from 'classnames'

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
  showHeader?: boolean
  className?: string
  tableClassName?: string
  headerTrClassName?: string
  headerThClassName?: string
  bodyTrClassName?: string
  bodyTdClassName?: string
  bodyThClassName?: string
}

export const Table = ({ 
  headers, 
  rows, 
  showHeader = true, 
  className, 
  tableClassName,
  headerTrClassName, 
  headerThClassName, 
  bodyTrClassName, 
  bodyTdClassName, 
  bodyThClassName 
}: Props) => {
  return (
    <div className={cx("relative overflow-x-auto", className)}>
      <table className={cx("w-full text-sm text-left text-gray-500", tableClassName)}>
        {showHeader && (
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className={cx(headerTrClassName)}>
              {headers.map((header) => (
                <th key={header.key} scope="col" className={cx("px-6 py-3", headerThClassName)}>
                  {header.value}
                </th>
              ))}
            </tr>
          </thead>
        )}
        {rows.length > 0 && (
          <tbody>
            {rows.map((row) => {
              return (
                <tr key={row.key} className={cx("bg-white border-b", bodyTrClassName)}>
                  <th scope="row" className={cx("px-6 py-4 font-medium text-gray-900 whitespace-nowrap", bodyThClassName)}>
                    {row.columns[headers[0].key]}
                  </th>
                  {headers.slice(1).map((header) => (
                    <td key={header.key} className={cx("px-6 py-4", bodyTdClassName)}>
                      {row.columns[header.key]}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        )}
      </table>
      {rows.length === 0 && <Text className='text-xs text-center italic text-gray-500 w-full py-2'>No items</Text>}
    </div>
  )
}

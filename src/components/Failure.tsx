import {get} from 'lodash-es'
import cx from 'classnames'

type Props = {
  error: any
  className?: string
}

export const Failure = ({error, className}: Props) => {
  const errorMessage = typeof error === 'string' ? error : (get(error, 'response.data.error.message') || get(error, 'message') || 'Unknown error')
  return (
    <div className={cx("text-sm text-red-600", className)}>
      {errorMessage}
    </div>
  )
}

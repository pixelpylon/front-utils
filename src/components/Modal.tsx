import { XMarkIcon } from '@heroicons/react/24/outline'
import cx from 'classnames'
import { ReactNode, useEffect } from 'react'
import { Backdrop } from './Backdrop'

type Props = {
  className?: string
  modalClassName?: string
  bodyClassName?: string
  onClose?: () => void
  title?: string
  subtitle?: string
  children: ReactNode
}

export const Modal = ({
  className,
  modalClassName,
  bodyClassName,
  onClose,
  title,
  subtitle,
  children,
}: Props) => {
  useEffect(() => {
    const tags = document.getElementsByTagName('body')
    if (tags.length === 0) {
      return
    }
    const body = tags[0]
    body.classList.add('overflow-hidden')

    return () => {
      const tags = document.getElementsByTagName('body')
      if (tags.length === 0) {
        return
      }
      const body = tags[0]
      body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <Backdrop className={cx('z-10', className)} onClick={onClose}>
      <div className={cx('flex-flex-col bg-white rounded-lg', modalClassName)} onClick={(event) => event.stopPropagation()}>
        {title && (
          <div className="flex justify-between items-center p-4  border-b">
            <div className='flex flex-col gap-1'>
              <div className="text-sm font-semibold">{title}</div>
              {subtitle && <div className="text-xs font-semibold">{subtitle}</div>}
            </div>
            <XMarkIcon className="w-6 h-6 cursor-pointer" onClick={onClose} />
          </div>
        )}
        <div className={cx('p-4', bodyClassName)}>{children}</div>
      </div>
    </Backdrop>
  )
}

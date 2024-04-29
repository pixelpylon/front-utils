import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'
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
  fullscreen?: boolean
}

export const Modal = ({
  className,
  modalClassName,
  bodyClassName,
  onClose,
  title,
  subtitle,
  children,
  fullscreen,
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
      <div
        className={cx('flex-flex-col bg-white', fullscreen ? "w-screen h-screen" : "rounded-lg", modalClassName)}
        onClick={(event) => event.stopPropagation()}
      >
        {title && (
          <div className="flex justify-between items-center p-4 border-b">
            <div className='flex flex-col gap-1'>
              <div className="text-sm font-semibold">{title}</div>
              {subtitle && <div className="text-xs font-semibold">{subtitle}</div>}
            </div>
            <div onClick={onClose}>
              <Icon path={mdiClose} className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        )}
        <div className={cx('p-4', bodyClassName)}>{children}</div>
      </div>
    </Backdrop>
  )
}

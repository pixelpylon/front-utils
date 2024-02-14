import cx from 'classnames'
import { ReactNode } from 'react'

type Props = {
    className?: string
    children: ReactNode
    onClick?: () => void
}

export const Backdrop = ({ className, children, onClick }: Props) => {
    return (
        <div
            className={cx("z-5 fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#00294e] bg-opacity-50", className)}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

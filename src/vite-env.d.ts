/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'react-scroll' {
  import { ComponentType, ReactNode } from 'react'
  
  export interface LinkProps {
    to: string
    smooth?: boolean | string
    duration?: number
    offset?: number
    spy?: boolean
    hashSpy?: boolean
    activeClass?: string
    containerId?: string
    className?: string
    style?: React.CSSProperties
    children?: ReactNode
    onClick?: () => void
    onSetActive?: (to: string) => void
    onSetInactive?: () => void
    ignoreCancelEvents?: boolean
    spyThrottle?: number
    delay?: number
    isDynamic?: boolean
    saveHashHistory?: boolean
    [key: string]: any
  }
  
  export const Link: ComponentType<LinkProps>
  export const Element: ComponentType<{ name: string; children?: ReactNode; [key: string]: any }>
  export const Events: {
    scrollEvent: {
      register: (name: string, callback: () => void) => void
      remove: (name: string) => void
    }
  }
  export const scrollSpy: {
    update: () => void
  }
  export const animateScroll: {
    scrollToTop: (options?: { duration?: number; delay?: number; smooth?: boolean | string }) => void
    scrollTo: (y: number, options?: { duration?: number; delay?: number; smooth?: boolean | string }) => void
    scrollToBottom: (options?: { duration?: number; delay?: number; smooth?: boolean | string }) => void
    scrollMore: (y: number, options?: { duration?: number; delay?: number; smooth?: boolean | string }) => void
  }
}


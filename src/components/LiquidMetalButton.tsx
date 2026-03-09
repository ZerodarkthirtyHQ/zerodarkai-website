'use client'

import React from 'react'

interface LiquidMetalButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base',
}

export default function LiquidMetalButton({
  children,
  href,
  onClick,
  className = '',
  size = 'md',
}: LiquidMetalButtonProps) {
  const baseStyle: React.CSSProperties = {
    background: 'radial-gradient(circle at 30% 30%, #e8e8e8 0%, #b0b0b0 40%, #606060 100%)',
    boxShadow: [
      '0 8px 24px rgba(0,0,0,0.4)',
      'inset 0 1px 0 rgba(255,255,255,0.7)',
      'inset 0 -1px 0 rgba(0,0,0,0.3)',
    ].join(', '),
    filter: [
      'drop-shadow(0 0 1px rgba(0,100,255,0.3))',
      'drop-shadow(0 0 1px rgba(255,50,50,0.2))',
    ].join(' '),
    border: 'none',
    outline: '1px solid transparent',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    color: '#1a1a1a',
    borderRadius: '8px',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    el.style.background =
      'radial-gradient(circle at 35% 25%, #f0f0f0 0%, #c0c0c0 40%, #707070 100%)'
    el.style.transform = 'translateY(-1px)'
    el.style.boxShadow = [
      '0 12px 32px rgba(0,0,0,0.5)',
      'inset 0 1px 0 rgba(255,255,255,0.8)',
      'inset 0 -1px 0 rgba(0,0,0,0.3)',
    ].join(', ')
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    el.style.background =
      'radial-gradient(circle at 30% 30%, #e8e8e8 0%, #b0b0b0 40%, #606060 100%)'
    el.style.transform = 'translateY(0)'
    el.style.boxShadow = [
      '0 8px 24px rgba(0,0,0,0.4)',
      'inset 0 1px 0 rgba(255,255,255,0.7)',
      'inset 0 -1px 0 rgba(0,0,0,0.3)',
    ].join(', ')
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    el.style.transform = 'translateY(1px)'
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    el.style.transform = 'translateY(-1px)'
  }

  const combinedClassName = `${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        className={combinedClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {/* Specular highlight overlay */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: '35%',
            height: '30%',
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
      </a>
    )
  }

  return (
    <button
      style={baseStyle}
      className={combinedClassName}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Specular highlight overlay */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '35%',
          height: '30%',
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </button>
  )
}

/** Small chrome orb accent — used next to logo text */
export function ChromeOrb({ size = 10 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        background:
          'radial-gradient(circle at 30% 30%, #e8e8e8 0%, #b0b0b0 45%, #555 100%)',
        boxShadow: [
          '0 2px 6px rgba(0,0,0,0.5)',
          'inset 0 1px 0 rgba(255,255,255,0.7)',
          'inset 0 -1px 0 rgba(0,0,0,0.3)',
        ].join(', '),
        filter: [
          'drop-shadow(0 0 1px rgba(0,100,255,0.25))',
          'drop-shadow(0 0 1px rgba(255,50,50,0.15))',
        ].join(' '),
        flexShrink: 0,
      }}
    />
  )
}

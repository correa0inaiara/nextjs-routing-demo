'use client'

export default function ErrorBoundary({error}: {
    error: Error
}) {
    return <p style={{color: "red"}}>{error.message}</p>
}
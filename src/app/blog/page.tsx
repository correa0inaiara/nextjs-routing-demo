import { Metadata } from "next"
// import { Suspense } from "react"
// import Loading from "./loading"

export const metadata: Metadata = {
    title: "Blog",
}

export default async function Blog() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Intentional delay")
        }, 5000)
    })
    return <>
        {/* <Suspense fallback={<Loading />}> */}
            <h1>My blog</h1>
        {/* </Suspense> */}
    </>
}
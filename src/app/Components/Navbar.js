import Link from 'next/link';
export default function Navbar() {
    return (
        <>
            <div className='navBar'>
                <Link href="/about">ABOUT</Link><br />
                <Link href="/instructor">INSTRUCTOR</Link><br />
                <Link href="/reviews">REVIEWS</Link>
            </div>
        </>
    )
}
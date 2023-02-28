import Link from "next/link";


export default function HeaderLink({ children, ...props }) {
  return (
  <Link href={`#${props.id}`}>
    <a href={children}></a>
  </Link>
  )
}
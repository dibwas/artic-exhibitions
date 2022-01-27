import SingleItem from "@/components/SingleItem"
import { baseUrl } from "@/constants"


function Post({ data }) {
  if (data) {
    return (
      <SingleItem props={data.data} />
    )
  } else {
    return ``;
  }
}

// This also gets called at build time
// This gets called on every request
export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch(`${baseUrl}exhibitions/${params.id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
// what happend

export default Post
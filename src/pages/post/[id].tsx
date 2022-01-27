import SingleItem from "@/components/SingleItem"
import { baseUrl } from "@/constants"
import { useEffect } from "react";
import { useRouter } from "next/router";


function Post({ data }) {
  const router = useRouter();

  if (data.data) {
      return (
        <SingleItem props={data.data} />
      )
  } else {
    useEffect(() => {
      router.push(`/404`);
    });
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

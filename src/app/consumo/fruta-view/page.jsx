import { redirect } from "next/navigation";

export default async function FrutaView() {

    let frutas;

    try {
        const response = await fetch("http://localhost:3000/dados/produto-api");

        frutas = await response.json();

        console.log(frutas);

    } catch (error) {
        console.log(error);
        redirect("/error");        
    }

  return (
    <div>page</div>
  )
}

import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";


export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);
  const items = Array.isArray(movies) ? movies : [];

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          { items.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}
